/**
 * NGOHUB - Dedicated Firebase Modular Authentication & Cloud Firestore Engine
 * Scope: Authentication, User Profiles, NGO Details, Session Management & Stealth Admin Shield
 * Security: Firestore Security Rules enforced with Sole Admin (youssefkhedr92@gmail.com)
 */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  sendPasswordResetEmail, 
  sendEmailVerification,
  signOut, 
  onAuthStateChanged,
  updateProfile,
  setPersistence,
  browserLocalPersistence
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  getDocs,
  collection,
  updateDoc,
  deleteDoc
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// --- 1. Project Configuration ---
const firebaseConfig = {
  apiKey: "AIzaSyDxm989pHv2Xu7yP9iqNhd1wEa1EVcHakw",
  authDomain: "ngohub-portal.firebaseapp.com",
  projectId: "ngohub-portal",
  storageBucket: "ngohub-portal.firebasestorage.app",
  messagingSenderId: "553720791526",
  appId: "1:553720791526:web:d00433ce89b2f11bb8d627",
  measurementId: "G-23DYNSE6SG"
};

// --- 2. Initialize App, Auth & Firestore Services ---
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Enable robust browser local persistence across sessions
setPersistence(auth, browserLocalPersistence).catch(e => console.warn("Persistence init:", e));

// Sole Platform Administrator
const ADMIN_EMAILS = [
  'youssefkhedr92@gmail.com'
];

// --- 3. Core Auth & Firestore Methods ---

/**
 * Checks if current authenticated user is the authorized Admin
 * Cost: 0 Network calls (in-memory token check)
 */
function isCurrentUserAdmin() {
  const current = auth.currentUser;
  if (!current || !current.email) return false;
  return ADMIN_EMAILS.includes(current.email.toLowerCase().trim());
}

/**
 * Sign In with Email & Password + Cloud Status Verification
 */
async function login(email, password) {
  const normalizedEmail = email.toLowerCase().trim();

  // First authenticate credentials with Firebase Auth
  const cred = await signInWithEmailAndPassword(auth, normalizedEmail, password);
  const user = cred.user;

  // Verify status in Firestore (enforce freeze / suspension if active)
  try {
    const userDocRef = doc(db, "users", user.uid);
    const snap = await getDoc(userDocRef);
    if (snap.exists()) {
      const data = snap.data();
      if (data.status === 'suspended') {
        await signOut(auth);
        const err = new Error("تم تجميد هذا الحساب مؤقتاً من قبل إدارة المنصة.");
        err.code = "auth/account-suspended";
        throw err;
      }
    }
  } catch (err) {
    if (err.code === "auth/account-suspended") throw err;
    console.warn("Could not check status in Firestore on login, continuing:", err);
  }

  // Verify email verification (exempt platform administrator)
  const isAdm = ADMIN_EMAILS.includes(normalizedEmail);
  if (!user.emailVerified && !isAdm) {
    await signOut(auth);
    const err = new Error("لم يتم تأكيد هذا الحساب عبر البريد الإلكتروني بعد.");
    err.code = "auth/unverified-email";
    err.email = normalizedEmail;
    throw err;
  }

  return user;
}

/**
 * Register new User / NGO via Firebase Auth & Persist Profile to Cloud Firestore
 */
async function register(email, password, displayName, role = 'individual', ngoData = null) {
  const normalizedEmail = email.toLowerCase().trim();
  const formattedName = displayName || (ngoData && ngoData.ngoName) || 'مستخدم جديد';

  // 1. Create Account in Firebase Auth
  const cred = await createUserWithEmailAndPassword(auth, normalizedEmail, password);
  const user = cred.user;

  // 2. Set displayName on Firebase Auth User Profile
  try {
    await updateProfile(user, { displayName: formattedName });
  } catch (e) {
    console.warn("Could not set displayName on Firebase Auth profile:", e);
  }

  // 3. Prepare Strict Document Data Model matching Firestore Rules
  const nowIso = new Date().toISOString();
  const userData = {
    uid: user.uid,
    id: user.uid,
    email: normalizedEmail,
    name: formattedName,
    displayName: formattedName,
    role: role === 'ngo' ? 'ngo' : 'individual',
    status: 'active',
    createdAt: nowIso,
    createdAtIso: nowIso,
    isNGO: role === 'ngo',
    ngoData: role === 'ngo' ? {
      ngoName: (ngoData?.ngoName || formattedName).slice(0, 150),
      ngoGov: (ngoData?.ngoGov || '').slice(0, 100),
      ngoRegNum: (ngoData?.ngoRegNum || '').slice(0, 50),
      ngoAddress: (ngoData?.ngoAddress || '').slice(0, 250),
      ngoContact: (ngoData?.ngoContact || '').slice(0, 100),
      ngoPhone: (ngoData?.ngoPhone || '').slice(0, 30)
    } : null,
    provider: 'password'
  };

  // 4. Save to Cloud Firestore (`/users/{uid}`)
  try {
    await setDoc(doc(db, "users", user.uid), userData);
    console.log("✅ User profile saved to Cloud Firestore:", user.uid);
  } catch (dbErr) {
    console.error("❌ Failed to save user to Cloud Firestore:", dbErr);
    // Proceed so user is not blocked, but log error
  }

  // 5. Send Verification Email Link
  try {
    await sendEmailVerification(user);
    console.log("✉️ Verification email sent to:", normalizedEmail);
  } catch (verifyErr) {
    console.warn("Could not send verification email automatically:", verifyErr);
  }

  // 6. Sign out user until they click the email verification link
  await signOut(auth);

  // 7. Persist locally in registered users cache
  const allUsers = JSON.parse(localStorage.getItem('ngohub_registered_users') || '[]');
  allUsers.unshift(userData);
  localStorage.setItem('ngohub_registered_users', JSON.stringify(allUsers));

  return { user, userData, emailVerified: false };
}

/**
 * Resend Email Verification link to registered user
 */
async function resendVerification(email, password) {
  const normalizedEmail = email.toLowerCase().trim();
  const cred = await signInWithEmailAndPassword(auth, normalizedEmail, password);
  await sendEmailVerification(cred.user);
  await signOut(auth);
  return true;
}

/**
 * Send Password Reset Email
 */
async function resetPassword(email) {
  return await sendPasswordResetEmail(auth, email.toLowerCase().trim());
}

/**
 * Sign Out
 */
async function logout() {
  return await signOut(auth);
}

/**
 * Admin: Get Users List from Cloud Firestore
 * Only executable by Administrator (enforced by Security Rules and client-side check)
 */
async function getUsersList() {
  if (!isCurrentUserAdmin()) {
    throw new Error("غير مصرح: هذا الإجراء مخصص للمشرف العام فقط.");
  }

  try {
    const snap = await getDocs(collection(db, "users"));
    const users = [];
    snap.forEach(d => {
      users.push(d.data());
    });

    // Sort newest first
    users.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));

    // Cache locally for offline resilience
    if (users.length > 0) {
      localStorage.setItem('ngohub_registered_users', JSON.stringify(users));
    }
    if (window.NGOHUB_FIREBASE) {
      window.NGOHUB_FIREBASE.cachedUsersList = users;
    }
    return users;
  } catch (err) {
    console.warn("Could not query Firestore /users collection, falling back to local cache:", err);
    return JSON.parse(localStorage.getItem('ngohub_registered_users') || '[]');
  }
}

/**
 * Admin: Update User Status (Freeze / Unfreeze) in Cloud Firestore
 */
async function updateUserStatus(uid, newStatus) {
  if (!isCurrentUserAdmin()) {
    throw new Error("غير مصرح: هذا الإجراء مخصص للمشرف العام فقط.");
  }

  const nowIso = new Date().toISOString();

  // 1. Update in Cloud Firestore
  try {
    await updateDoc(doc(db, "users", uid), {
      status: newStatus,
      statusUpdatedAt: nowIso
    });
    console.log(`✅ User status updated in Cloud Firestore to ${newStatus}:`, uid);
  } catch (err) {
    console.error("Failed to update status in Firestore:", err);
  }

  // 2. Update local cache
  const allUsers = JSON.parse(localStorage.getItem('ngohub_registered_users') || '[]');
  const idx = allUsers.findIndex(u => u.uid === uid || u.id === uid);
  if (idx !== -1) {
    allUsers[idx].status = newStatus;
    allUsers[idx].statusUpdatedAt = nowIso;
    localStorage.setItem('ngohub_registered_users', JSON.stringify(allUsers));
  }
  return true;
}

/**
 * Admin: Delete User Profile from Cloud Firestore
 */
async function deleteUserAccount(uid) {
  if (!isCurrentUserAdmin()) {
    throw new Error("غير مصرح: هذا الإجراء مخصص للمشرف العام فقط.");
  }

  // 1. Delete from Cloud Firestore
  try {
    await deleteDoc(doc(db, "users", uid));
    console.log("✅ User profile deleted from Cloud Firestore:", uid);
  } catch (err) {
    console.error("Failed to delete user from Firestore:", err);
  }

  // 2. Delete from local cache
  const allUsers = JSON.parse(localStorage.getItem('ngohub_registered_users') || '[]');
  const updated = allUsers.filter(u => u.uid !== uid && u.id !== uid);
  localStorage.setItem('ngohub_registered_users', JSON.stringify(updated));
  return true;
}

/**
 * Real-time Session Observer & Profile Synchronizer
 */
function onAuthChange(callback) {
  return onAuthStateChanged(auth, async (user) => {
    if (user) {
      const normalizedEmail = (user.email || '').toLowerCase().trim();
      const isAdm = ADMIN_EMAILS.includes(normalizedEmail);

      // CRITICAL: Block unverified users from gaining active session
      if (!user.emailVerified && !isAdm) {
        try {
          await signOut(auth);
        } catch (_) {}
        callback(null, null);
        return;
      }

      let profile = null;

      // Try fetching profile from Cloud Firestore
      try {
        const userDocRef = doc(db, "users", user.uid);
        const snap = await getDoc(userDocRef);
        if (snap.exists()) {
          profile = snap.data();
        }
      } catch (e) {
        console.warn("Could not fetch user profile from Firestore:", e);
      }

      // Fallback to local storage if offline or profile doc pending
      if (!profile) {
        const allUsers = JSON.parse(localStorage.getItem('ngohub_registered_users') || '[]');
        profile = allUsers.find(u => u.uid === user.uid || (u.email && u.email.toLowerCase() === user.email.toLowerCase()));
      }

      // Check if suspended
      if (profile && profile.status === 'suspended') {
        signOut(auth);
        if (window.showToast) window.showToast("تم تجميد هذا الحساب مؤقتاً من قبل الإدارة.", "error");
        callback(null, null);
        return;
      }

      callback(user, profile || null);
    } else {
      callback(null, null);
    }
  });
}

// --- 4. Expose Global Interface ---
window.NGOHUB_FIREBASE = {
  isConfigured: true,
  app,
  auth,
  db,
  ADMIN_EMAILS,
  isCurrentUserAdmin,
  login,
  register,
  resendVerification,
  sendEmailVerification,
  resetPassword,
  logout,
  getUsersList,
  updateUserStatus,
  deleteUserAccount,
  onAuthChange
};

// Dispatch Event for Vanilla JS modules
window.dispatchEvent(new CustomEvent('ngohub:firebase-ready', { detail: window.NGOHUB_FIREBASE }));
console.log("⚡ NGOHUB Dedicated Firebase Auth & Cloud Firestore Engine initialized successfully.");
