import React, { createContext, useState } from "react";
export const authContext = createContext();
const AuthProvider = ({ children }) => {
  //const [user, setUser] = useState(null);
  const [loader, setLodaer] = useState(true);
  const authinfo = {
    loader,
    setLodaer,
  };
  return (
    <div>
      <authContext.Provider value={authinfo}>{children}</authContext.Provider>
    </div>
  );
};

export default AuthProvider;
