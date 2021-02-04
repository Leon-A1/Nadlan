import React from "react";
import Product from "../Product/Product";
import Spinner from "../Spinner/Spinner";
import "./product-grid.css";

const ProductGrid = ({ items, isLoading }) => {
  // console.log(items);

  items.map((product) => console.log(product));
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
