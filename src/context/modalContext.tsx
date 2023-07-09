"use client";
import React, { createContext, useState } from "react";

export const ModalContext = createContext({});

export const ModalProvider = ({ children }: any) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <ModalContext.Provider
      value={{
        toggleDrawer,
        isDrawerOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
