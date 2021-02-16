import React, { useContext } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "../Assets/css/views/admin-view.css";
import Sidebar from "../Components/AdminSideBar/AdminSidebar";

import { GlobalContext } from "../context/GlobalState";

// TIMER Function
// setTimeout(() => console.log("file2:", file2), 2000);

export default function AdminEditView() {
  const { API_URL } = useContext(GlobalContext);
  let { productid } = useParams();
  const deleteProduct = async (e) => {
    e.preventDefault();
    const res = await axios.get(`${API_URL}product/delete/${productid}`);
    window.location.href = "/admin";
  };

  return (
    <div className="admin-view-container">
      <Sidebar />
      <div
        className="delete-product-confirm"
        id="confirm-delete"
        style={{ display: "block" }}
      >
        הנכס הולך להמחק סופית, האם אתם בטוחים?
        <button
          onClick={(e) => {
            deleteProduct(e);
          }}
        >
          אישור
        </button>
        <Link to="../../">
          <button>ביטול</button>
        </Link>
      </div>
    </div>
  );
}
