import { Link } from "react-router-dom";
//import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-center space-x-6">
        <Link
          to="/"
          className="text-lg font-medium text-gray-700 hover:text-indigo-500"
        >
          Inicio
        </Link>
        <Link
          to="/orders"
          className="text-lg font-medium text-gray-700 hover:text-indigo-500"
        >
          Ordenes
        </Link>
        <Link
          to="/charts"
          className="text-lg font-medium text-gray-700 hover:text-indigo-500"
        >
          Gráficas
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
