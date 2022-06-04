import React, { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";
import "./index.css";

export const Navbar = ({ darkstyle }) => {
  const [isActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const sidebar = useRef();
  const sidebarOpenHandler = () => {
    sidebar.current.style.transform = "translateX(100%)";
  };

  const sidebarCloseHandler = () => {
    sidebar.current.style.transform = "translateX(0)";
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setScrolled(window.pageYOffset > 200)
      );
    }
    if (window.location.pathname !== "/") {
      setScrolled(true);
    }
  }, []);

  return (
    <header
      id="header"
      className={scrolled ? "fixed-top header-scrolled" : "fixed-top"}
    >
      <div className="container d-flex align-items-center">
        <a href="/" className="logo mr-auto">
          <img
            src="https://aitecell.in/assets/img/logo.png"
            alt="ss"
            className="img-fluid"
          />
        </a>
        <Icon
          icon="mdi:menu"
          color="#09f"
          width="30"
          height="30"
          className="menu_icon"
          onClick={sidebarOpenHandler}
        />
        <nav className="nav-menu d-none d-lg-block">
          <ul>
            <li className={isActive ? "active" : undefined}>
              <a href="/#hero" className={darkstyle ? "text-dark" : undefined}>
                Home
              </a>
            </li>
            <li className={isActive ? "active" : undefined}>
              <a
                href="/#events"
                className={darkstyle ? "text-dark" : undefined}
              >
                Events
              </a>
            </li>
            <li className={isActive ? "active" : undefined}>
              <a
                href="/#visits"
                className={darkstyle ? "text-dark" : undefined}
              >
                Visits
              </a>
            </li>
            <li className={isActive ? "active" : undefined}>
              <a
                href="/#start-ups"
                className={darkstyle ? "text-dark" : undefined}
              >
                Startup Initiatives
              </a>
            </li>
            <li className={isActive ? "active" : undefined}>
              <a
                href="/allteam"
                className={darkstyle ? "text-dark" : undefined}
              >
                Our Team
              </a>
            </li>
            <li className={isActive ? "active" : undefined}>
              <a
                href="/internship"
                className={darkstyle ? "text-dark" : undefined}
              >
                Internships
              </a>
            </li>
            <li className={isActive ? "active" : undefined}>
              <a
                href="/#contact"
                className={darkstyle ? "text-dark" : undefined}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mobile-nav d-lg-none" ref={sidebar}>
        <button className="mobile-nav-close-icon">
          <Icon
            icon="ant-design:close-circle-outlined"
            color="#09f"
            width="30"
            height="30"
            onClick={sidebarCloseHandler}
            className="mobile-nav-close-icon"
          />
        </button>
        <a href="index.html" className="logo mr-auto">
          <img
            src="https://aitecell.in/assets/img/logo.png"
            alt="ss"
            className="img-fluid"
          />
        </a>
        <nav className="mobile-nav-menu">
          <ul>
            <li className="primary">
              <a href="/#hero" onClick={sidebarCloseHandler}>
                Home
              </a>
            </li>
            <li className="primary">
              <a href="/#Event" onClick={sidebarCloseHandler}>
                Events
              </a>
            </li>
            {/* <li className="primary">
              <a href="#" onClick={sidebarCloseHandler}>Mentor Connects</a>
            </li> */}
            <li className="primary">
              <a href="/#start-ups" onClick={sidebarCloseHandler}>
                Startup Initiatives
              </a>
            </li>
            <li className="primary">
              <a href="/allteam" onClick={sidebarCloseHandler}>
                Our Team
              </a>
            </li>
            <li className="primary">
              <a href="/internship" onClick={sidebarCloseHandler}>
                Internships
              </a>
            </li>
            <li className="primary">
              <a href="/#contact" onClick={sidebarCloseHandler}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
