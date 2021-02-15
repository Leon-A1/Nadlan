import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../Assets/css/views/product-details.css";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";
import GetInTouch from "../Components/GetInTouchForm/GetInTouchForm";
import Spinner from "../Components/MainLandingSpinner/Spinner";

import { GlobalContext } from "../context/GlobalState";

export default function ProductDetails() {
  const [isLoading, setIsLoading] = useState(false);
  const { API_URL, FILE_STORAGE_URL } = useContext(GlobalContext);

  let { productid } = useParams();

  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productMainImageLink, setProductMainImageLink] = useState("");
  const [productImageLink2, setProductImageLink2] = useState("");
  const [productImageLink3, setProductImageLink3] = useState("");

  useEffect(() => {
    const fetchItem = async () => {
      setIsLoading(true);

      const result = await axios(`${API_URL}get_product/${productid}`);
      console.log(result.data);
      setProductName(result.data.product_name);
      setProductDescription(result.data.product_description);
      setProductPrice(result.data.product_price);
      setProductMainImageLink(FILE_STORAGE_URL + result.data.product_image1);
      setProductImageLink2(FILE_STORAGE_URL + result.data.product_image2);
      setProductImageLink3(FILE_STORAGE_URL + result.data.product_image3);
      setIsLoading(false);
    };

    fetchItem();
  }, [API_URL, FILE_STORAGE_URL, productid]);

  return isLoading ? (
    <Spinner />
  ) : (
    <div>
      <NavBar />

      <div className="product-details-container">
        <h1>{productName}</h1>

        <p>{productDescription}</p>
        <p>&#8362;{productPrice}</p>
        <a className="product-details-call-now" href="tel:+972536261201">
          לקבלת ייעוץ חינם <i className="fas fa-phone-square-alt"></i>
        </a>
        <div className="product-gallery">
          <img src={productMainImageLink} alt=""></img>
          <img src={productImageLink2} alt=""></img>
          <img src={productImageLink3} alt=""></img>
        </div>
      </div>
      <GetInTouch />
      <Footer />
    </div>
  );
}
