import React, { createContext, useState } from "react";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [openSide, setOpenSide] = useState(false);
  const [deleteProduct, setDeleteProduct] = useState(false);
  return (
    <StateContext.Provider
      value={{ openSide, setOpenSide, deleteProduct, setDeleteProduct }}
    >
      {children}
    </StateContext.Provider>
  );
};
