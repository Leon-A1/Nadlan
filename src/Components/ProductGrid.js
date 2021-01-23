import React from "react";
import Product from "./Product";
// import Spinner from '../ui/Spinner'
import Spinner from "./Spinner";

const ProductGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <Product key={item.char_id} item={item}></Product>
      ))}
    </section>
  );
};

export default ProductGrid;
