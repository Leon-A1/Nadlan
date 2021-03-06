import React from "react";
import "./navbar.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";

import "../../Assets/css/aos.css";

export default function navbar() {
  function openSlideMenu() {
    document.getElementById("side-menu").style.width = "300px";
    document.getElementById("home-small-nav-item").style.opacity = "1";
    document.getElementById("profile-small-nav-item").style.opacity = "1";
    document.getElementById("contact-small-nav-item").style.opacity = "1";
    document.getElementById("home-small-nav-item").style.transition =
      "300ms ease-in 300ms";
    document.getElementById("profile-small-nav-item").style.transition =
      "300ms ease-in 500ms";
    document.getElementById("contact-small-nav-item").style.transition =
      "300ms ease-in 700ms";
  }

  function closeSlideMenu() {
    document.getElementById("home-small-nav-item").style.opacity = "0";
    document.getElementById("profile-small-nav-item").style.opacity = "0";
    document.getElementById("contact-small-nav-item").style.opacity = "0";
    document.getElementById("side-menu").style.width = "0";
    document.getElementById("home-small-nav-item").style.transition = "200ms";
    document.getElementById("profile-small-nav-item").style.transition =
      "150ms";
    document.getElementById("contact-small-nav-item").style.transition =
      "100ms";
  }

  return (
    <div
      style={{
        zIndex: 100,
        position: "fixed",
      }}
    >
      <nav className="navbar">
        <Link to="/">
          <img id="navBarLogo" className="navBarLogo" src={logo} alt="logo" />
        </Link>

        <span id="hamburger-button-id">
          <button className="open-slide" onClick={openSlideMenu}>
            <svg width="30" height="30">
              <path d="M0,5 30,5" stroke="var(--Red)" strokeWidth="5" />
              <path d="M0,14 30,14" stroke="var(--Red)" strokeWidth="5" />
              <path d="M0,23 30,23" stroke="var(--Red)" strokeWidth="5" />
            </svg>
          </button>
        </span>
        <ul id="top-menu">
          <li>
            <Link to="/contact">צור קשר</Link>
          </li>

          <Link to="/about">פרופיל חברה</Link>
          <li>
            <Link to="/">עמוד הבית</Link>
          </li>
        </ul>
      </nav>
      <div id="side-menu" className="side-nav">
        <ul>
          <li id="home-small-nav-item">
            <Link to="/">עמוד הבית</Link>
          </li>
          <li id="profile-small-nav-item">
            <Link to="/about">פרופיל חברה</Link>
          </li>
          <li id="contact-small-nav-item">
            <Link to="/contact">צור קשר</Link>
          </li>
        </ul>

        <button className="btn-close" onClick={closeSlideMenu}>
          &times;
        </button>
      </div>
    </div>
  );
}
