/// <reference types="vite/client" />
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyCJ2B5mfOLEQWaeHlGWz8YI4D53LWV9Deo",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "quiteleverage-d25bf.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "quiteleverage-d25bf",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "quiteleverage-d25bf.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "828148654526",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:828148654526:web:2cfe3fc86597b32c9a59ef",
};

// Check if keys are properly configured
export const isFirebaseConfigured = 
  !!firebaseConfig.apiKey && 
  firebaseConfig.apiKey !== 'YOUR_API_KEY' && 
  firebaseConfig.apiKey !== '';

// Initialize Firebase App
let app;
let auth: any = null;

if (isFirebaseConfigured) {
  try {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    auth = getAuth(app);
  } catch (error) {
    console.error('Firebase initialization error:', error);
  }
}

export { auth };
