
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center p-10 bg-white text-black">
      <h1 className="text-4xl font-bold mb-6">Welcome to Style Heaven</h1>
      <p className="mb-10">Choose your fashion category</p>
      <div className="flex gap-6">
        <Link to="/shop/men" className="bg-gray-800 text-white px-6 py-3 rounded-xl">Men</Link>
        <Link to="/shop/women" className="bg-gray-800 text-white px-6 py-3 rounded-xl">Women</Link>
      </div>
    </div>
  );
}

export default Home;
