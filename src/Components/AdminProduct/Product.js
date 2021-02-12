import React from "react";
import { Link } from "react-router-dom";

//ADMIN PRODUCT COMPONENT

const Product = ({ product }) => {
  console.log(product);

  const imageLink1 =
    "http://localhost:5000/file/" + String(product.product_image1);

  return (
    <>
      <div className="card">
        <img src={imageLink1} alt="" />
        <h1>{product.product_name}</h1>
        <p className="description">{product.product_description}</p>

        <p className="go-to-details">...</p>
        <p className="go-to-details">מידע נוסף</p>
        <p className="price">&#8362;{product.product_price}</p>
        <button>
          <Link to={`admin/product/${product._id}`}>Edit Product </Link>
        </button>
        <button>Delete Product </button>
      </div>
    </>
  );
};

export default Product;
