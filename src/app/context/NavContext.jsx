"use client";

import React, { createContext, useContext, useState } from "react";
const NavContext = createContext();

const NavProvider = ({ children }) => {
  const [location, setLocation] = useState({});
  const [loader, setLoader] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [navTitle, setNavTitle] = useState("");

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const alterLoader = () => {
    setLoader((prev) => !prev);
  };
  const openSubmenu = (text, coordinates) => {
    setIsSubmenuOpen(true);
    if (text) {
      setNavTitle(text);
    }
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
        loader,
        alterLoader,
        navTitle,
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
