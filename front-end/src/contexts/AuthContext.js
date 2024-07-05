import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const token = localStorage.getItem("token");

  const update = (user) => {
    setUser((prev) => ({ ...prev, ...user }));
    setUser(user);
  };
  const value = {
    user,
    update,
    token,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
