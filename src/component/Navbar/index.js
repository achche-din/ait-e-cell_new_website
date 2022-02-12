import React, { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";
import "./index.css";

export const Navbar = ({ style }) => {
  const [isActive, setisActive] = useState(false);
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
    if (window.location.pathname != "/") {
      setScrolled(true);
    }
  }, []);

  return (
    <header
      id="header"
      className={scrolled ? "fixed-top header-scrolled" : "fixed-top"}
    >
      <div className="container d-flex align-items-center">
        <a href="index.html" className="logo mr-auto">
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
            <li className={isActive && "active"}>
              <a href="/#home" className={style && "text-dark"}>
                Home
              </a>
            </li>
            <li className={isActive && "active"}>
              <a href="/#Event" className={style && "text-dark"}>
                Events
              </a>
            </li>
            <li className={isActive && "active"}>
              <a href="/#Visit" className={style && "text-dark"}>
                Visits
              </a>
            </li>
            <li className={isActive && "active"}>
              <a href="/#start-ups" className={style && "text-dark"}>
                Startup Initiatives
              </a>
            </li>
            <li className={isActive && "active"}>
              <a href="/team" className={style && "text-dark"}>
                Our Team
              </a>
            </li>
            <li className={isActive && "active"}>
              <a href="/internship" className={style && "text-dark"}>
                Internships
              </a>
            </li>
            <li className={isActive && "active"}>
              <a href="/#contact" className={style && "text-dark"}>
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
              <a href="/team" onClick={sidebarCloseHandler}>
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
