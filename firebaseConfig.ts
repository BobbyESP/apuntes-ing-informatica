import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

interface FirebaseConfig {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
}

const firebaseConfig: FirebaseConfig = {
    apiKey: import.meta.env.FIREBASE_API_KEY!!,
    authDomain: import.meta.env.FIREBASE_AUTH_DOMAIN!!,
    projectId: import.meta.env.FIREBASE_PROJECT_ID!!,
    storageBucket: import.meta.env.FIREBASE_STORAGE_BUCKET!!,
    messagingSenderId: import.meta.env.FIREBASE_MESSAGING_SENDER_ID!!,
    appId: import.meta.env.FIREBASE_APP_ID!!,
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };