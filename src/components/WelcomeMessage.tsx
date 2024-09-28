//import React from "react";

const WelcomeMessage = () => {
  return (
    <div className="md:w-1/2 flex flex-col items-center justify-center text-center space-y-6">
      <h1 className="text-6xl font-extrabold text-neon-green animate-pulse">
        Bienvenido a Supply Chain App
      </h1>
      <p className="text-xl font-light text-neon-blue">
        Gestión moderna, eficiente y sostenible de la cadena de suministro
      </p>
    </div>
  );
};

export default WelcomeMessage;
