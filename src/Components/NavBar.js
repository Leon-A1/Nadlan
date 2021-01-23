import React from "react";
import "../Assets/css/navbar.css";
import "../Assets/css/App.css";
import logo from "../Assets/img/logo.png";
import "../Assets/css/aos.css";

export default function navbar() {
  function openSlideMenu() {
    document.getElementById("side-menu").style.width = "250px";
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
    <div style={{ zIndex: 100, position: "fixed" }}>
      <nav className="navbar">
        <img id="navBarLogo" className="navBarLogo" src={logo} alt="logo" />

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
            <a to="/getintouch">צור קשר</a>
          </li>

          <li>
            <a to="/companyprofile">פרופיל חברה</a>
          </li>
          <li>
            <a to="/" exact>
              עמוד הבית
            </a>
          </li>
        </ul>
      </nav>
      <div id="side-menu" className="side-nav">
        <ul>
          <li id="home-small-nav-item">
            <a to="/" exact>
              עמוד הבית
            </a>
          </li>
          <li id="profile-small-nav-item">
            <a to="/companyprofile">פרופיל חברה</a>
          </li>
          <li id="contact-small-nav-item">
            <a to="/getintouch">צור קשר</a>
          </li>
        </ul>

        <button className="btn-close" onClick={closeSlideMenu}>
          &times;
        </button>
      </div>
    </div>
  );
}
