/* eslint-disable react/prop-types */
import  { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const UseAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  const login = (userData) => {
    setUserData(userData);
  };

  const logout = () => {
    setUserData(null);
  };

  return (
    <AuthContext.Provider value={{ userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

