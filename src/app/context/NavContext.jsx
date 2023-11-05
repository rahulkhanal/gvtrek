"use client";

import React, { createContext, useContext, useState } from "react";
const NavContext = createContext();

const NavProvider = ({ children }) => {
  const [location, setLocation] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(true);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openSubmenu = (text, coordinates) => {
    setIsSubmenuOpen(true);
    if (coordinates) {
      setLocation(coordinates);
    }
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <NavContext.Provider
      value={{
        isSidebarOpen,
        isSubmenuOpen,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
        location,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(NavContext);
};

export { NavContext, NavProvider };
