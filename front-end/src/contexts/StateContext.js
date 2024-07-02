import React, { createContext, useState } from "react";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [openSide, setOpenSide] = useState(false);
  const [deleteProduct, setDeleteProduct] = useState(false);
  const [viewProduct, setViewProduct] = useState(false);
  const [overlaying, setOverlay] = useState(false);
  const [message, setMessage] = useState("");

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
        message,
        setMessage,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
