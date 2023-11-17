"use client";
import { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../context/NavContext";

const NepalNavigation = [
  { title: "Trekking", path: "/" },
  { title: "Hiking", path: "/" },
  { title: "Climbing & Expedition", path: "/" },
  { title: "Tour", path: "/" },
  { title: "Day Activities", path: "/" },
];
const DestinationNavigation = [
  { title: "Bhutan", path: "/" },
  { title: "India", path: "/" },
];
const ActivitiesNavigation = [
  { title: "Trekking and Hiking", path: "/" },
  { title: "Bungee Jumping", path: "/" },
  { title: "Mount Climbing", path: "/" },
  { title: "Rafting", path: "/" },
  { title: "City Sightseeing", path: "/" },
];
const AboutNavigation = [
  { title: "Company Detail", path: "/" },
  { title: "Our Team", path: "/" },
  { title: "Our Documents", path: "/" },
  { title: "Company Milestones", path: "/" },
];

export function SubNav() {
  const [subNav, setSubNav] = useState([]);
  const elementRef = useRef(null);
  const { isSubmenuOpen, location, openSubmenu, closeSubmenu, navTitle } =
    useGlobalContext();
  useEffect(() => {
    if (navTitle) {
      if (navTitle.trim() === "Nepal") {
        setSubNav(NepalNavigation);
      } else if (navTitle.trim() === "Activities") {
        setSubNav(ActivitiesNavigation);
      } else if (navTitle.trim() === "Destination") {
        setSubNav(DestinationNavigation);
      } else if (navTitle.trim() === "About Us") {
        setSubNav(AboutNavigation);
      } else {
        setSubNav([]);
      }
    }
  }, [navTitle]);
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
      onMouseEnter={() => openSubmenu(null)}
      onMouseLeave={closeSubmenu}
    >
      <ul>
        {subNav.map((item, index) => {
          return <li key={index}>{item.title}</li>;
        })}
      </ul>
      <div>packages are here</div>
    </aside>
  );
}
