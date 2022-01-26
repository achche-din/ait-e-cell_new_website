import React, { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";
import "./index.css";

export const Navbar = () => {
  const [isActive, setisActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggle = (e) => {
    // setisActive(!isActive);
    // const dom = e.target.innerT;
    // dom.style.classList.add("active");
    // console.log(dom);
  };
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
          color="white"
          width="30"
          height="30"
          className="menu_icon"
          onClick={sidebarOpenHandler}
        />
        <nav className="nav-menu d-none d-lg-block">
          <ul>
            <li className={isActive && "active"} onClick={toggle}>
              <a href="/#home">Home</a>
            </li>
            <li className={isActive && "active"} onClick={toggle}>
              <a href="/#Event">Events</a>
            </li>
            <li className={isActive && "active"} onClick={toggle}>
              <a href="/#Visit">Visits</a>
            </li>
            <li className={isActive && "active"} onClick={toggle}>
              <a href="/#start-ups">Startup Initiatives</a>
            </li>
            <li className={isActive && "active"} onClick={toggle}>
              <a href="/team">Our Team</a>
            </li>
            <li className={isActive && "active"} onClick={toggle}>
              <a href="/internship">Internships</a>
            </li>
            <li className={isActive && "active"} onClick={toggle}>
              <a href="/#contact">Contact</a>
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
              <a href="#hero">Home</a>
            </li>
            <li className="primary">
              <a href="#">Events</a>
            </li>
            <li className="primary">
              <a href="#">Mentor Connects</a>
            </li>
            <li className="primary">
              <a href="#start-ups">Startup Initiatives</a>
            </li>
            <li className="primary">
              <a href="#">Our Team</a>
            </li>
            <li className="primary">
              <a href="#">Internships</a>
            </li>
            <li className="primary">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
