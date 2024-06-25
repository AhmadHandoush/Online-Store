import React, { createContext, useState } from "react";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [openSide, setOpenSide] = useState(false);
  const [deleteProduct, setDeleteProduct] = useState(false);
  const [viewProduct, setViewProduct] = useState(false);
  const [overlaying, setOverlay] = useState(false);
  return (
    <StateContext.Provider
      value={{
        openSide,
        setOpenSide,
        deleteProduct,
        setDeleteProduct,
        viewProduct,
        setViewProduct,
        overlaying,
        setOverlay,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
