import React from "react";

const Product = ({ product }) => {
  const imageLink1 =
    "http://localhost:5000/file/" + String(product.product_image_1);

  return (
    <div className="card">
      <img src={imageLink1} alt="" />
      <h1>{product.product_name}</h1>

      <p className="description">{product.product_description}</p>
      <p className="price">{product.product_price}</p>
    </div>
  );
};

export default Product;
