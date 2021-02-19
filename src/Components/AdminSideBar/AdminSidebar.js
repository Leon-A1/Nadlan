import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
// import logo from "../Assets/img/logo.png";
import logo from "./logo.png";
import { FaTimes, FaBars } from "react-icons/fa";

// import { GlobalContext } from "../../context/GlobalState";

const Sidebar = () => {
  // const { SECRET_ADMIN_KEY, LOGGED_IN } = useContext(GlobalContext);

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
            <Link to="/admin/create-product">הוספת נכס חדש</Link>
          </li>
          <li>
            <Link to="/admin">נכסים קיימים</Link>
          </li>
          <li>
            <Link to="/admin/potential_clients">לקוחות פוטנציאלים</Link>
          </li>
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
