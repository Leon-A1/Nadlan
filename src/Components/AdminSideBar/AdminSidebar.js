import React, { useState } from "react";
import "./index.css";
// import logo from "../Assets/img/logo.png";
import logo from "./logo.png";
import { FaTimes, FaBars } from "react-icons/fa";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div>
      <button onClick={openSidebar} className="sidebar-toggle">
        <FaBars />
      </button>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className="sidebar-header">
          <img src={logo} className="logo" alt="coding addict" />
          <button className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          <li>
            <a href="/admin/create-product">הוספת נכס חדש</a>
          </li>
          <li>
            <a href="/admin">נכסים קיימים</a>
          </li>
          {/* <li>
            <a href="/#">link 3</a>
          </li> */}
        </ul>
        {/* <ul className="social-icons">
          <li>
            <a href="/#">social 1</a>
          </li>
          <li>
            <a href="/#">social 2</a>
          </li>
          <li>
            <a href="/#">social 3</a>
          </li>
        </ul> */}
      </aside>
    </div>
  );
};

export default Sidebar;
