import React, { createContext, useState } from "react";
import app from "../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
export const authContext = createContext();
const auth = getAuth(app);
const Gprovider = new GoogleAuthProvider();
const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
const loginwithgoogle = () => {
  return signInWithPopup(auth, Gprovider);
};
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLodaer] = useState(true);
  const authinfo = {
    loader,
    setLodaer,
    user,
    createUser,
    loginwithgoogle,
  };
  return (
    <div>
      <authContext.Provider value={authinfo}>{children}</authContext.Provider>
    </div>
  );
};

export default AuthProvider;
