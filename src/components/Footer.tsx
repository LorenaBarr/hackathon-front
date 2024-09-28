//import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo y Slogan */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-neon-green">Supply Chain App</h3>
            <p className="text-sm text-gray-400">
              Innovación y calidad en la cadena de suministro
            </p>
          </div>

          {/* Redes sociales */}
          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neon-pink transition"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neon-blue transition"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neon-green transition"
            >
              <FaTwitter size={24} />
            </a>
          </div>

          {/* Dirección y Correo */}
          <div className="text-center md:text-right text-gray-400">
            <p>Calle XXXX , Colombia</p>
            <p>SuppluyChainApp@SuppluyChainApp.com</p>
            <p>© 2024 Todos los derechos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
