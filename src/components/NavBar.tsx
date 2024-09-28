import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation(); // Para saber en qué página estás

  return (
    <nav className="bg-gray-900 text-neon-green py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="text-3xl font-bold">
          <Link to="/">
            <img
              src="/logo_12.png"
              alt="Logo Supply Chain App"
              className="object-contain"
            />
          </Link>
        </div>

        {/* Main Menu */}
        <div className="flex space-x-8">
          <Link
            to="/about"
            className={`hover:text-neon-pink transition duration-300 relative group ${
              location.pathname === "/about" ? "text-neon-pink" : ""
            }`}
          >
            Sobre Nosotros
            <span
              className={`block h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-fuchsia-500 absolute left-0 bottom-[-2px] ${
                location.pathname === "/about"
                  ? "w-full"
                  : "w-0 group-hover:w-full"
              } transition-all duration-300`}
            ></span>
          </Link>

          <Link
            to="/"
            className={`hover:text-neon-pink transition duration-300 relative group ${
              location.pathname === "/" ? "text-neon-pink" : ""
            }`}
          >
            Realiza tu Orden
            <span
              className={`block h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-fuchsia-500 absolute left-0 bottom-[-2px] ${
                location.pathname === "/" ? "w-full" : "w-0 group-hover:w-full"
              } transition-all duration-300`}
            ></span>
          </Link>

          <Link
            to="/orders-history"
            className={`hover:text-neon-pink transition duration-300 relative group ${
              location.pathname === "/orders-history" ? "text-neon-pink" : ""
            }`}
          >
            Seguimiento de Orden
            <span
              className={`block h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-fuchsia-500 absolute left-0 bottom-[-2px] ${
                location.pathname === "/orders-history"
                  ? "w-full"
                  : "w-0 group-hover:w-full"
              } transition-all duration-300`}
            ></span>
          </Link>

          <Link
            to="/charts"
            className={`hover:text-neon-pink transition duration-300 relative group ${
              location.pathname === "/charts" ? "text-neon-pink" : ""
            }`}
          >
            Gráficas
            <span
              className={`block h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-fuchsia-500 absolute left-0 bottom-[-2px] ${
                location.pathname === "/charts"
                  ? "w-full"
                  : "w-0 group-hover:w-full"
              } transition-all duration-300`}
            ></span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
