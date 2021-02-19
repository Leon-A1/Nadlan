import React, { useContext } from "react";
import Navbar from "../Components/NavBar/NavBar";
// import Navbar from "../Components/AdminSideBar/AdminSidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import Search from "../Components/Search/Search";
import ProductGrid from "../Components/ProductGrid/ProductGrid";
import PageHeader from "../Components/PageHeader/PageHeader";
import PageFooter from "../Components/Footer/Footer";
import Spinner from "../Components/MainLandingSpinner/Spinner";

import { GlobalContext } from "../context/GlobalState";

export default function LandingPageView() {
  const { API_URL } = useContext(GlobalContext);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(`${API_URL}products${query}`);
      setItems(result.data);
      setIsLoading(false);
      console.log(result.data);
    };

    fetchItems();
  }, [query, API_URL]);
  return (
    <div className="App">
      <Navbar />
      <PageHeader />
      <Search getQuery={(q) => setQuery(q)} />
      <ProductGrid isLoading={isLoading} items={items} />
      <Spinner />
      <PageFooter />
    </div>
  );
}
