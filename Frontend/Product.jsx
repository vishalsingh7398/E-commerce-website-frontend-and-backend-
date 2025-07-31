
import React from "react";
import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();
  return (
    <div className="p-6 text-center">
      <h1 className="text-xl font-bold">Product Detail Page</h1>
      <p>Product ID: {id}</p>
    </div>
  );
}

export default Product;
