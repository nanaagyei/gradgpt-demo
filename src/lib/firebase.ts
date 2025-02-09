import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Provide fallback values for development
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'demo-key',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'demo.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'demo-project',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'demo-bucket.appspot.com',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '123456789',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:123456789:web:abcdef'
};

let auth;
let db;

try {
  const app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
} catch (error) {
  console.warn('Firebase initialization error:', error);
  // Create mock implementations for development
  auth = {
    currentUser: null,
    onAuthStateChanged: (callback) => callback(null),
    signInWithEmailAndPassword: async () => ({ user: null }),
    signOut: async () => {},
  };
  db = {
    collection: () => ({
      add: async () => ({ id: 'mock-id' }),
      get: async () => ({ docs: [] }),
    }),
  };
}

export { auth, db };