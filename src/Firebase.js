import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.FIREABASE_APY_KEY,
  authDomain: process.env.FIREABASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREABASE_DATA_BASE_URL,
  projectId: process.env.FIREABASE_PROJECT_ID,
  storageBucket: process.env.FIREABASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREABASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREABASE_APP_ID,
  measurementId: process.env.FIREABASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
