"use client";
import { useEffect, useRef } from "react";
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
      className={
        isSubmenuOpen ? `show-sub-menu subnav` : `hide-sub-menu subnav`
      }
      onMouseEnter={openSubmenu}
      onMouseLeave={closeSubmenu}
    >
      <ul>
        <li>Trekking</li>
        <li>Hiking</li>
        <li>Climbing & Expedition</li>
        <li>Tour</li>
        <li>Day Activities</li>
      </ul>
      <div>packages are here</div>
    </aside>
  );
}
