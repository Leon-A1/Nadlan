import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../Assets/css/views/product-details.css";

export default function ProductDetails() {
  let { productid } = useParams();

  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImage] = useState("");

  useEffect((productid) => {
    axios
      .post("http://localhost:5000/api/get_product/", { productId: productid })
      .then((response) => {
        console.log(response.data);
        setProductImage(response.data);
        setProductName(response.data.name);
        setProductDescription(response.data.description);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div className="product-details-container">
      <h1>product details</h1>

      <h3>Product ID: {productid}</h3>
      <h3>Product Name: {productName}</h3>
      <h3>Product Description: {productDescription}</h3>
      <img src={productImage} alt=""></img>
    </div>
  );
}
