import React from "react";
import Product from "../Product/Product";
import Spinner from "../Spinner/Spinner";
import "./product-grid.css";

const ProductGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((product) => (
        <Product key={product._id} product={product}></Product>
      ))}
    </section>
  );
};

export default ProductGrid;
