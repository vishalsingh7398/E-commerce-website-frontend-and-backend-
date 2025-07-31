
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Shop() {
  const { gender } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products?gender=${gender}`)
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, [gender]);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map(product => (
        <div key={product._id} className="border rounded-xl p-4 shadow">
          <img src={product.imageUrl} alt={product.title} className="w-full h-64 object-cover rounded" />
          <h2 className="mt-2 font-bold text-lg">{product.title}</h2>
          <p>₹{product.priceInINR}</p>
          <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Shop;
