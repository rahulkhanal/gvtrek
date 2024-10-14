"use client";

import Link from "next/link";
import "./styles/Navbar.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiMenu5Fill } from "react-icons/ri";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { GrFormNext } from "react-icons/gr";
import { RxCrossCircled } from "react-icons/rx";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "../_context/NavContext";
import { useState } from "react";
import Image from "next/image";

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

export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const { openSidebar, openSubmenu, closeSubmenu, navTitle } =
    useGlobalContext();
  const [dropSideBar, setDropSideBar] = useState({
    Nepal: false,
    Activities: false,
    Destination: false,
    About: false,
  });
  const router = useRouter();
  const [navArrow, setNavArrow] = useState({
    Nepal: false,
    Activities: false,
    Destination: false,
    About: false,
  });

  const handleNavClick = (e) => {
    const navtitle = e.target.textContent;
    const cordinate = e.target.getBoundingClientRect();
    const center = (cordinate.left + cordinate.right) / 2;
    if (navtitle.includes("Nepal")) {
      setNavArrow((prev) => ({ ...prev, Nepal: true }));
    } else if (navtitle.includes("Activities")) {
      setNavArrow((prev) => ({ ...prev, Activities: true }));
    } else if (navtitle.includes("Destination")) {
      setNavArrow((prev) => ({ ...prev, Destination: true }));
    } else if (navtitle.includes("About")) {
      setNavArrow((prev) => ({ ...prev, About: true }));
    } else {
      setNavArrow({});
    }
    const bottom = cordinate.bottom + 16;
    openSubmenu(navtitle, { center, bottom });
  };
  const hideArrow = () => {
    setNavArrow({});
  };
  function handleMobileSideBarDrop(arg) {
    setDropSideBar((prev) => ({ ...prev, [arg]: !prev[arg] }));
  }
  return (
    <>
      <nav className="bigNav">
        <Image
          width={'400'}
          height={'60'}
          src="/materials/logo.png"
          alt="Great Vision Trek and Expedition"
          onClick={() => router.push("/")}
        />
        <ul className="navlist" onMouseLeave={closeSubmenu}>
          <li onMouseEnter={closeSubmenu} onClick={() => router.push("/")}>
            <Link href="/">Home</Link>
          </li>
          <li>
            <p onMouseEnter={handleNavClick} onMouseLeave={hideArrow}>
              Nepal
              <RiArrowDropDownLine
                size={25}
                color="#8A96B5"
                style={{
                  transform:
                    navTitle.trim() == "Nepal"
                      ? "rotate(-180deg)"
                      : "rotate(0deg)",
                  transition: "all 0.3s ease",
                }}
              />
            </p>
          </li>
          <li>
            <p onMouseEnter={handleNavClick} onMouseLeave={hideArrow}>
              Activities{" "}
              <RiArrowDropDownLine
                size={25}
                color="#8A96B5"
                style={{
                  transform:
                    navTitle.trim() == "Activities"
                      ? "rotate(-180deg)"
                      : "rotate(0deg)",
                  transition: "all 0.3s ease",
                }}
              />
            </p>
          </li>
          <li>
            <p onMouseEnter={handleNavClick} onMouseLeave={hideArrow}>
              Destination
              <RiArrowDropDownLine
                size={25}
                color="#8A96B5"
                style={{
                  transform:
                    navTitle.trim() == "Destination"
                      ? "rotate(-180deg)"
                      : "rotate(0deg)",
                  transition: "all 0.3s ease",
                }}
              />
            </p>
          </li>
          <li>
            <p onMouseEnter={handleNavClick} onMouseLeave={hideArrow}>
              About Us{" "}
              <RiArrowDropDownLine
                size={25}
                color="#8A96B5"
                style={{
                  transform:
                    navTitle.trim() == "About Us"
                      ? "rotate(-180deg)"
                      : "rotate(0deg)",
                  transition: "all 0.3s ease",
                }}
              />
            </p>
          </li>
        </ul>
        <button
          className="primary-btn contact-btn"
          onClick={() => router.push("/contact")}
        >
          Contact Us
        </button>
        <div
          className="nav-hamburger"
          onClick={() => setShowSidebar((prev) => !prev)}
        >
          {showSidebar ? (
            <RxCrossCircled size={30} color="red" />
          ) : (
            // <RxHamburgerMenu size={28} color="#243363" />
            <RiMenu5Fill size={28} color="#243363" />
          )}
        </div>
      </nav>
      {showSidebar && (
        <div
          className="nav-overlay"
          onClick={() => setShowSidebar(false)}
        ></div>
      )}

      <nav className={`sidebar ${showSidebar ? "show-sidebar" : ""}`}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li onClick={() => handleMobileSideBarDrop("Nepal")}>
            Nepal
            <GrFormNext
              style={{
                transform: dropSideBar.Nepal ? "rotate(90deg)" : "rotate(0deg)",
                transition: "all 0.3s ease",
              }}
            />
          </li>
          {dropSideBar.Nepal && (
            <ol>
              {NepalNavigation.map((item, index) => {
                return <li key={index}>{item.title}</li>;
              })}
            </ol>
          )}
          <li onClick={() => handleMobileSideBarDrop("Activities")}>
            Activities{" "}
            <GrFormNext
              style={{
                transform: dropSideBar.Activities
                  ? "rotate(90deg)"
                  : "rotate(0deg)",
                transition: "all 0.3s ease",
              }}
            />
          </li>
          {dropSideBar.Activities && (
            <ol>
              {ActivitiesNavigation.map((item, index) => {
                return <li key={index}>{item.title}</li>;
              })}
            </ol>
          )}
          <li onClick={() => handleMobileSideBarDrop("Destination")}>
            Destination{" "}
            <GrFormNext
              style={{
                transform: dropSideBar.Destination
                  ? "rotate(90deg)"
                  : "rotate(0deg)",
                transition: "all 0.3s ease",
              }}
            />
          </li>
          {dropSideBar.Destination && (
            <ol>
              {DestinationNavigation.map((item, index) => {
                return <li key={index}>{item.title}</li>;
              })}
            </ol>
          )}
          <li>
            About Us <GrFormNext />
          </li>
        </ul>
      </nav>
    </>
  );
}
