import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREABASE_APY_KEY,
  authDomain: process.env.REACT_APP_FIREABASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREABASE_DATA_BASE_URL,
  projectId: process.env.REACT_APP_FIREABASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREABASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREABASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREABASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREABASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
