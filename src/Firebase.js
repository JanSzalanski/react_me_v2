// Import the functions you need from the SDKs you need
// import { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD18e9ITWjPHUdMS7kRLFBAw08W_3j_rDU',
  authDomain: 'react-dummy-base.firebaseapp.com',
  databaseURL: 'https://react-dummy-base-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'react-dummy-base',
  storageBucket: 'react-dummy-base.appspot.com',
  messagingSenderId: '929560590248',
  appId: '1:929560590248:web:bf9e07709a8db1530c0f9d',
  measurementId: 'G-RN2DLJRHLC',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// export const loginWithGoogle = () => {
//   signInWithPopup(auth, providerGoogle)
//     .then((result) => {
//       const name = result.user.displayName;
//       const email = result.user.email;
//       const profilePic = result.user.photoURL;
//       localStorage.setItem('name', name);
//       localStorage.setItem('email', email);
//       localStorage.setItem('profilePic', profilePic);
//     })
//     .catch((error) => {
//       // setErrorGoogle(true);
//       throw new Error('Błąd autoryzacji za pomocą konta google');
//     });
// };
