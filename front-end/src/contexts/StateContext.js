import React, { createContext, useState } from "react";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [openSide, setOpenSide] = useState(false);
  return (
    <StateContext.Provider value={{ openSide, setOpenSide }}>
      {children}
    </StateContext.Provider>
  );
};
