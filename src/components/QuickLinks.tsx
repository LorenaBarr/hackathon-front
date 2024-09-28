//import React from "react";
import { Link } from "react-router-dom";

const QuickLinks = () => {
  const links = [
    { name: "Realiza tu Orden", path: "/clients/orders", icon: "📝" },
    { name: "Seguimiento de Orden", path: "/clients/track", icon: "📦" },
    { name: "Pagos", path: "/payments", icon: "💳" },
    { name: "Contáctanos", path: "/contact", icon: "☎️" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
      {links.map((link) => (
        <Link
          to={link.path}
          key={link.name}
          className="bg-gray-800 text-neon-green text-center py-6 px-4 rounded-lg shadow-lg border-2 border-neon-green hover:bg-gray-700 hover:border-neon-blue hover:text-neon-blue transition transform hover:scale-105 duration-300 ease-in-out"
        >
          <div className="text-3xl mb-2">{link.icon}</div>
          <div className="text-lg font-semibold">{link.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default QuickLinks;
