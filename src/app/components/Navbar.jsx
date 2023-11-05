"use client";

import Link from "next/link";
import "./styles/Navbar.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function Navbar() {
  const router = useRouter();
  const elementRef = useRef(null);

  const handleMouseEnterEvent = () => {
    const element = elementRef.current;
    const rect = element.getBoundingClientRect();
    console.log(rect);
  };

  return (
    <nav>
      <h1>Logo</h1>
      <ul className="navlist">
        <li ref={elementRef}>
          <Link href="/" onClick={handleMouseEnterEvent}>
            Home
          </Link>
        </li>
        <li ref={elementRef}>
          <p onClick={handleMouseEnterEvent}>
            Nepal <RiArrowDropDownLine size={25} color="#8A96B5" />
          </p>
        </li>
        <li ref={elementRef}>
          <p onClick={handleMouseEnterEvent}>
            Activities <RiArrowDropDownLine size={25} color="#8A96B5" />
          </p>
        </li>
        <li ref={elementRef}>
          <p onClick={handleMouseEnterEvent}>
            Destination <RiArrowDropDownLine size={25} color="#8A96B5" />
          </p>
        </li>
        <li ref={elementRef}>
          <Link href="/" onClick={handleMouseEnterEvent}>
            About Us
          </Link>
        </li>
      </ul>
      <button
        className="primary-btn"
        ref={elementRef}
        onClick={() => router.push("/contact")}
      >
        Contact Us
      </button>
      <div className="nav-hamburger">
        <RxHamburgerMenu size={28} />
      </div>
    </nav>
  );
}
