
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between">
      <Link to="/" className="text-xl font-bold text-black">Style Heaven</Link>
      <div className="flex gap-4">
        <Link to="/cart" className="text-black">Cart</Link>
      </div>
    </nav>
  );
}

export default Navbar;
