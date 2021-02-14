import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../Assets/css/views/product-details.css";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";

export default function ProductDetails() {
  let { productid } = useParams();

  const imageHostingUrl = "http://localhost:5000/file/";

  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productMainImageLink, setProductMainImageLink] = useState("");
  const [productImageLink2, setProductImageLink2] = useState("");
  const [productImageLink3, setProductImageLink3] = useState("");

  useEffect(() => {
    const fetchItem = async () => {
      const result = await axios(
        `http://localhost:5000/api/get_product/${productid}`
      );
      console.log(result.data);
      setProductName(result.data.product_name);
      setProductDescription(result.data.product_description);
      setProductPrice(result.data.product_price);
      setProductMainImageLink(imageHostingUrl + result.data.product_image1);
      setProductImageLink2(imageHostingUrl + result.data.product_image2);
      setProductImageLink3(imageHostingUrl + result.data.product_image3);
    };

    fetchItem();
  });

  return (
    <div>
      <NavBar />

      <div className="product-details-container">
        <h1>{productName}</h1>
        <p>{productDescription}</p>
        <p>&#8362;{productPrice}</p>
        <div className="product-gallery">
          <img src={productMainImageLink} alt=""></img>
          <img src={productImageLink2} alt=""></img>
          <img src={productImageLink3} alt=""></img>
        </div>
      </div>
      <Footer />
    </div>
  );
}
