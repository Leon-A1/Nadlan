import React from "react";
import Navbar from "../Components/NavBar/NavBar";
import { useState, useEffect } from "react";
import axios from "axios";
import Search from "../Components/Search/Search";
import ProductGrid from "../Components/ProductGrid/ProductGrid";
import PageHeader from "../Components/PageHeader/PageHeader";

export default function LandingPageView() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  // const createProductIdAction = () => {
  //   var selectedProductIdholder =
  //     // "http://localhost:3000/product/" + selectedProductId;
  //     "http://localhost:3000/product/" + selectedProductId;
  //   setSelectedProductId(selectedProductIdholder);
  // };

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`http://localhost:5000/api/products${query}`);
      setItems(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);
  return (
    <div className="App">
      <Navbar />
      <PageHeader />
      <Search getQuery={(q) => setQuery("/" + q)} />

      <ProductGrid
        isLoading={isLoading}
        items={items}
        // openProductDetailsPage={openProductDetailsPage}
      />
    </div>
  );
}
