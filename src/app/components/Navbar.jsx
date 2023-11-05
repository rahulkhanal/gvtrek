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
    if (navtitle === "Nepal") {
      setNavArrow({ ...prev, Nepal: true });
    }
    const bottom = cordinate.bottom + 16;
    openSubmenu(navtitle, { center, bottom });
  };

  return (
    <nav>
      <img src="/materials/logo.png" alt="Great Vision Trek and Expedition" />
      <ul className="navlist" onMouseLeave={closeSubmenu}>
        <li onMouseEnter={closeSubmenu}>
          <Link href="/">Home</Link>
        </li>
        <li>
          <p onMouseEnter={handleNavClick}>
            Nepal{" "}
            <RiArrowDropDownLine
              size={25}
              color="#8A96B5"
              className="nav-drop-icon"
              style={{ transform: navArrow ? "rotate(-180deg)" : "" }}
            />
          </p>
        </li>
        <li>
          <p onMouseEnter={handleNavClick}>
            Activities <RiArrowDropDownLine size={25} color="#8A96B5" />
          </p>
        </li>
        <li>
          <p onMouseEnter={handleNavClick}>
            Destination
            <RiArrowDropDownLine size={25} color="#8A96B5" />
          </p>
        </li>
        <li>
          <p onMouseEnter={handleNavClick}>
            About Us <RiArrowDropDownLine size={25} color="#8A96B5" />
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
