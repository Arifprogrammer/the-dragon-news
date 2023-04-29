// eslint-disable-next-line no-unused-vars
import React, { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../../Firebase/firebase.config";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const authInfo = { user: "Arif" };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
