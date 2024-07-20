import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const token = localStorage.getItem("token");
  const [isLogin, setIsLogin] = useState(false);

  const update = (user) => {
    setUser((prev) => ({ ...prev, ...user }));
    setUser(user);
  };
  const value = {
    user,
    update,
    token,
    setIsLogin,
    isLogin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
