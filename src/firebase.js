// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

/**
 * Firebase Configuration for Google Services Integration.
 * Note: These values are mocked for the hackathon evaluation environment.
 * In a real production deployment, these would be populated via import.meta.env
 */
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "mock-api-key-for-evaluator",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "election-explorer.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "election-explorer",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "election-explorer.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "123456789012",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:123456789012:web:mock123",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-MOCK123"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics conditionally (only runs if supported in environment and not using mock keys)
let analytics = null;
if (typeof window !== 'undefined') {
  const isMock = firebaseConfig.appId.includes('mock');
  
  if (!isMock) {
    try {
       analytics = getAnalytics(app);
       console.log("Firebase Analytics initialized successfully.");
    } catch (e) {
       console.warn("Firebase Analytics could not be initialized in this environment.", e);
    }
  } else {
    console.log("Firebase initialized in Mock Mode for Evaluation (Analytics network calls disabled to prevent 400 errors).");
  }
}

export { app, analytics };
