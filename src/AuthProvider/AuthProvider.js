import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
export const authContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [loader, setLodaer] = useState(true);
  const [user, setUser] = useState(null);
  const Gprovider = new GoogleAuthProvider();
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginwithgoogle = () => {
    setLodaer(true);
    return signInWithPopup(auth, Gprovider);
  };
  const loginwithEmail = (email, password) => {
    setLodaer(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLodaer(false);
    });
    return () => {
      return unsubscribed();
    };
  }, []);

  const authinfo = {
    loader,
    setLodaer,
    user,
    createUser,
    loginwithgoogle,
    loginwithEmail,
  };
  return (
    <div>
      <authContext.Provider value={authinfo}>{children}</authContext.Provider>
    </div>
  );
};

export default AuthProvider;
