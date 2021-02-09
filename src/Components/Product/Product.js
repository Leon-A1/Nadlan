import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const imageLink1 =
    "http://localhost:5000/file/" + String(product.product_image_1);

  // const productSelection = (e) => {
  //   console.log("event:", e);
  //   console.log(e.target);
  //   console.log(e.target.data);
  // };

  return (
    <Link to={`/product/${product._id}`}>
      <div className="card">
        <img src={imageLink1} alt="" />
        <h1>{product.product_name}</h1>
        {/* <Link to={`/product/${product._id}`}>{product._id}</Link> */}

        <p className="description">{product.product_description}</p>

        <p className="go-to-details">...</p>
        <p className="go-to-details">מידע נוסף</p>
        <p className="price">&#8362;{product.product_price}</p>
        {/* <button>Read more</button> */}
      </div>
    </Link>
  );
};

export default Product;
