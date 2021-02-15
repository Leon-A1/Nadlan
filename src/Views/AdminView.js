import React, { useState, useEffect, useContext } from "react";
import "../Assets/css/views/admin-view.css";
import axios from "axios";
import Search from "../Components/Search/Search";
import ProductGrid from "../Components/AdminProductGrid/ProductGrid";
import Sidebar from "../Components/AdminSideBar/AdminSidebar";

import { GlobalContext } from "../context/GlobalState";

export default function AdminView() {
  const { API_URL } = useContext(GlobalContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`${API_URL}products${query}`);
      setItems(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, [query, API_URL]);

  return (
    <div className="admin-view-container">
      <Sidebar />
      <div className="App">
        <Search getQuery={(q) => setQuery(q)} />
        <ProductGrid isLoading={isLoading} items={items} />
      </div>
    </div>
  );
}
