import React, { useState, useEffect } from "react";
import "../Assets/css/views/admin-view.css";
import axios from "axios";
import Search from "../Components/Search/Search";
import ProductGrid from "../Components/ProductGrid/ProductGrid";
import Sidebar from "../Components/AdminSideBar/AdminSidebar";

export default function AdminView() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        // `https://www.breakingbadapi.com/api/characters?name=${query}`
        `http://localhost:5000/api/products${query}`
      );
      console.log(result);
      setItems(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);

  return (
    <div>
      <Sidebar />
      <div className="App">
        <Search getQuery={(q) => setQuery(q)} />
        <ProductGrid isLoading={isLoading} items={items} />
      </div>
    </div>
  );
}
