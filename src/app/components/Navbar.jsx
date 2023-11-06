"use client";

import Link from "next/link";
import "./styles/Navbar.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "../context/NavContext";
import { useState } from "react";

export default function Navbar() {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const router = useRouter();
  const [navArrow, setNavArrow] = useState({
    Nepal: false,
    Activities: false,
    Destination: false,
    About: false,
  });

  const handleNavClick = (e) => {
    // const navDropIcon = e.target.querySelector(".nav-drop-icon");
    // if (navDropIcon) {
    //   navDropIcon.style.transform = "rotate(-180deg)";
    // }

    const navtitle = e.target.textContent;
    const cordinate = e.target.getBoundingClientRect();
    const center = (cordinate.left + cordinate.right) / 2;
    // const center = cordinate.left;
    // console.log(navtitle);
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

  return (
    <nav>
      <img src="/materials/logo.png" alt="Great Vision Trek and Expedition" />
      <ul className="navlist" onMouseLeave={closeSubmenu}>
        <li onMouseEnter={closeSubmenu}>
          <Link href="/">Home</Link>
        </li>
        <li>
          <p onMouseEnter={handleNavClick} onMouseLeave={hideArrow}>
            Nepal{" "}
            <RiArrowDropDownLine
              size={25}
              color="#8A96B5"
              style={{
                transform: navArrow.Nepal ? "rotate(-180deg)" : "rotate(0deg)",
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
                transform: navArrow.Activities
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
                transform: navArrow.Destination
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
                transform: navArrow.About ? "rotate(-180deg)" : "rotate(0deg)",
                transition: "all 0.3s ease",
              }}
            />
          </p>
        </li>
      </ul>
      <button className="primary-btn" onClick={() => router.push("/contact")}>
        Contact Us
      </button>
      <div className="nav-hamburger">
        <RxHamburgerMenu size={28} />
      </div>
    </nav>
  );
}
