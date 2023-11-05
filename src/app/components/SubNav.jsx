"use client";
import { useContext, useEffect, useRef } from "react";
import { useGlobalContext } from "../context/NavContext";

export function SubNav() {
  const elementRef = useRef(null);
  const { isSubmenuOpen, location, openSubmenu, closeSubmenu } =
    useGlobalContext();

  useEffect(() => {
    const element = elementRef.current;
    const { center, bottom } = location;
    element.style.left = `${center}px`;
    element.style.top = `${bottom}px`;
  }, [location]);

  return (
    <aside
      ref={elementRef}
      className={isSubmenuOpen ? `show-sub-menu` : `hide-sub-menu`}
      onMouseEnter={openSubmenu}
      onMouseLeave={closeSubmenu}
    >
      <h1>sub menu</h1>
    </aside>
  );
}
