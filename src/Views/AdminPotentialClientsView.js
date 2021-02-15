import React, { useState, useEffect, useContext } from "react";
import "../Assets/css/views/potential-clients-view.css";
import axios from "axios";
import Sidebar from "../Components/AdminSideBar/AdminSidebar";
import Spinner from "../Components/Spinner/Spinner";

import { GlobalContext } from "../context/GlobalState";

export default function AdminView() {
  const { API_URL } = useContext(GlobalContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //   const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`${API_URL}potential_clients`);
      setItems(result.data);
      setIsLoading(false);
      //   console.log(result);
    };

    fetchItems();
  }, [API_URL]);

  const handleDeleteProduct = () => {
    const confirmDelete = document.querySelector("#confirm-delete");
    confirmDelete.style.display = "block";
  };

  const deleteCancel = () => {
    const cancelDelete = document.querySelector("#confirm-delete");
    cancelDelete.style.display = "none";
  };
  const deletePotentialCLient = async (id) => {
    console.log(id);

    const res = await axios.get(`${API_URL}potential_client/delete/${id}`);
    console.log(res);
    window.location.href = "http://127.0.0.1:3000/admin/potential_clients";
  };

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="admin-view-container">
      <Sidebar />

      <div className="potential-clients-list">
        <h1>לקוחות פוטנציאלים</h1>

        {items.map((potential_client) => (
          <div>
            <div className="delete-product-confirm" id="confirm-delete">
              הלקוח הולך להמחק סופית, האם אתם בטוחים?
              <button
                onClick={(e) => {
                  deletePotentialCLient(potential_client._id);
                }}
              >
                אישור
              </button>
              <button onClick={deleteCancel}>ביטול</button>
            </div>
            <div className="card" key={potential_client._id}>
              <button
                className="delete-product-button"
                style={{ left: 20, fontSize: "1.5rem" }}
                onClick={handleDeleteProduct}
              >
                <i className="fas fa-trash"></i>
              </button>
              <p className="client_name">{potential_client.client_name}</p>
              <p className="client_email">
                <a href={`mailto:${potential_client.client_email}`}>
                  {potential_client.client_email}
                  <i className="far fa-envelope"></i>
                </a>
              </p>
              <p className="client_number">
                {" "}
                <a href={`tel:+${potential_client.client_number}`}>
                  {potential_client.client_number}{" "}
                  <i className="fas fa-phone-square-alt"></i>
                </a>
              </p>
            </div>
          </div>
        ))}
        <ul>
          <li>
            <p>{}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
