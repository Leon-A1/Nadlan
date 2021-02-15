import React, { useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { GlobalContext } from "../../context/GlobalState";
//ADMIN PRODUCT COMPONENT

const Product = ({ product }) => {
  const { API_URL, FILE_STORAGE_URL } = useContext(GlobalContext);

  console.log(product);

  const imageLink1 = FILE_STORAGE_URL + String(product.product_image1);

  const handleDeleteProduct = () => {
    const confirmDelete = document.querySelector("#confirm-delete");
    confirmDelete.style.display = "block";
  };
  const deleteCancel = () => {
    const cancelDelete = document.querySelector("#confirm-delete");
    cancelDelete.style.display = "none";
  };
  const confirmDelete = async () => {
    const productDeleteId = String(product._id);

    const res = await axios.get(`${API_URL}product/delete/${productDeleteId}`);
    console.log(res);
    window.location.href = "/admin";
  };

  return (
    <>
      <div className="delete-product-confirm" id="confirm-delete">
        הנכס הולך להמחק סופית, האם אתם בטוחים?
        <button onClick={confirmDelete}>אישור</button>
        <button onClick={deleteCancel}>ביטול</button>
      </div>
      <div className="card">
        <img src={imageLink1} alt="" />
        <h1>{product.product_name}</h1>

        <p className="description">{product.product_description}</p>

        <p className="go-to-details">...</p>
        <p className="go-to-details">מידע נוסף</p>
        <p className="price">&#8362;{product.product_price}</p>
        <Link
          className="edit-product-link"
          to={`/admin/product/update/${product._id}`}
        >
          <button className="edit-product-button">
            {" "}
            <i className="fas fa-edit"></i>
          </button>
        </Link>

        <button className="delete-product-button" onClick={handleDeleteProduct}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </>
  );
};

export default Product;
