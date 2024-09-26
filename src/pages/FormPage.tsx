//import React from "react";
import NavBar from "../components/NavBar";
import WelcomeMessage from "../components/WelcomeMessage";
import OrderForm from "../components/OrderForm";

const FormPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <NavBar />

      {/* Contenido principal */}
      <div className="container mx-auto flex flex-col md:flex-row mt-10 space-y-8 md:space-y-0 md:space-x-8 justify-center items-center">
        {/* Lado izquierdo: Bienvenida e imagen */}
        <WelcomeMessage />

        {/* Lado derecho: Formulario */}
        <OrderForm />
      </div>
    </div>
  );
};

export default FormPage;
