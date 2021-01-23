import React from "react";
import Navbar from "../Components/NavBar";
import { useState, useEffect } from "react";
import axios from "axios";
import Search from "../Components/Search";
import ProductGrid from "../Components/ProductGrid";

export default function LandingPageView() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      setItems(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);
  return (
    <div className="App">
      <Navbar />
      <Search getQuery={(q) => setQuery(q)} />
      <ProductGrid isLoading={isLoading} items={items} />
    </div>
  );
}
