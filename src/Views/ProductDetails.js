import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../Assets/css/views/product-details.css";
import NavBar from "../Components/NavBar/NavBar";

export default function ProductDetails() {
  let { productid } = useParams();

  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImage] = useState("");
  console.log("BEFORE USE EFFECT:", productid);

  const fetchItems = async () => {
    const result = await axios(
      // `https://www.breakingbadapi.com/api/characters?name=${query}`
      `http://localhost:5000/api/get_product${productid}`
    );
    console.log(result.data);
  };

  // useEffect(() => {
  //   var product_data = axios(
  //     `http://localhost:5000/api/get_product/${productid}`
  //   );
  //   console.log(product_data);

  //   return () => {
  //     console.log(product_data);
  //     setProductName(product_data.data["product_name"]);
  //   };
  // }, []);
  // console.log(product_data);

  return (
    <div>
      <NavBar />

      <div className="product-details-container">
        <h1>product details</h1>

        <h3>Product ID: {productid}</h3>
        <h3>Product Name: {productName}</h3>
        <h3>Product Description: {productDescription}</h3>
        <img src={productImage} alt=""></img>
        {/* {productImage} */}
      </div>
    </div>
  );
}
