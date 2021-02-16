import React, { useContext } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "../Assets/css/views/admin-view.css";
import Sidebar from "../Components/AdminSideBar/AdminSidebar";

import { GlobalContext } from "../context/GlobalState";

export default function AdminEditView() {
  const { API_URL } = useContext(GlobalContext);
  let { productid } = useParams();
  const deleteProduct = async (e) => {
    e.preventDefault();
    const res = await axios.get(
      `${API_URL}potential_client/delete/${productid}`
    );
    console.log(res);
    window.location.href = "/admin/potential_clients";
  };

  return (
    <div className="admin-view-container">
      <Sidebar />
      <div
        className="delete-product-confirm"
        id="confirm-delete"
        style={{ display: "block" }}
      >
        הלקוח הולך להמחק סופית, האם אתם בטוחים?
        <button
          onClick={(e) => {
            deleteProduct(e);
          }}
        >
          אישור
        </button>
        <Link to="../">
          <button>ביטול</button>
        </Link>
      </div>
    </div>
  );
}
