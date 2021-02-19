import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";

//ADMIN PRODUCT COMPONENT
const Product = ({ product }) => {
  const { FILE_STORAGE_URL } = useContext(GlobalContext);

  console.log(product);

  const imageLink1 = FILE_STORAGE_URL + String(product.product_image1);

  return (
    <>
      <Link
        className="edit-product-link"
        to={`/admin/product/update/${product._id}`}
      >
        <div className="card">
          <img src={imageLink1} alt="" />
          <h1>{product.product_name}</h1>

          <p className="description">{product.product_description}</p>

          <p className="go-to-details">...</p>
          <p className="go-to-details">מידע נוסף</p>
          <p className="price">&#8362;{product.product_price}</p>

          <button className="edit-product-button">
            {" "}
            <i className="fas fa-edit"></i>
          </button>
        </div>
      </Link>
    </>
  );
};

export default Product;
