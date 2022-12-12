import React, { useState, useContext, useEffect, useCallback } from 'react';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'; //signOut, onAuthStateChanged
import { auth } from '../Firebase';

let logoutTimer;

const AuthContext = React.createContext({
  googleLogged: () => {},
  googleLogout: () => {},
  loged: false,
  user: {},
});

const calcRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  console.log('currentTime ' + currentTime);
  const adjExpirationTime = new Date(expirationTime).getTime();
  console.log('adjExpirationTime ' + adjExpirationTime);
  const remainingDuration = adjExpirationTime - currentTime;
  console.log('remainingDuration ' + remainingDuration);
  return remainingDuration;
};

const helper = () => {
  const storedExpirationTime = localStorage.getItem('expirationTime');
  const remainingTime = calcRemainingTime(storedExpirationTime);
  if (remainingTime <= 60000) {
    localStorage.removeItem('expirationTime');
    return null;
  }
  return { duration: remainingTime };
};

export const AuthContextProvider = (props) => {
  const timeData = helper();
  const [isloged, setIsLogged] = useState(localStorage.getItem('loged') ? true : false);
  const [user, setUser] = useState({});

  // const handleGoogleSignIn = async () => {
  //   try {
  //     googleSingIn();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // console.log('User', currentUser);
    });
    return () => {
      // console.log('unsuscribe logout?');
      setUser(null);
      setIsLogged(false);
      // console.log('Unsubscribe metod a user to ' + user);
      unsubscribe(); // to jest z video od pakero na YT ale przecież to dość dziwny manewr...
    };
  }, []);

  const logoutHandler = useCallback(() => {
    signOut(auth);
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('profilePic');
    localStorage.removeItem('loged');
    localStorage.removeItem('expirationTime');
    // console.log('loged false in logout function');
    setIsLogged(false);
    setUser(null);
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const handleGoogleSignIn = (expirationTime) => {
    const provider = new GoogleAuthProvider();
    console.log('expirationTime ' + expirationTime);
    const remainingTime = calcRemainingTime(expirationTime);
    localStorage.setItem('expirationTime', expirationTime);
    signInWithPopup(auth, provider)
      .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('profilePic', profilePic);
        localStorage.setItem('loged', true);
        setUser(result.user);
        setIsLogged(true);
        logoutTimer = setTimeout(logoutHandler, remainingTime);
        console.log('Zalogowano się w Google');
      })
      .catch((error) => {
        // setErrorGoogle(true);
        throw new Error('Błąd autoryzacji za pomocą konta google');
      });
  };

  useEffect(() => {
    if (timeData) {
      console.log(timeData.duration);
      logoutTimer = setTimeout(logoutHandler, timeData.duration);
    }
  }, [timeData, logoutHandler]);

  return (
    <AuthContext.Provider
      value={{
        googleLogged: handleGoogleSignIn,
        googleLogout: logoutHandler,
        loged: isloged,
        user: user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};

// export default AuthContext;
