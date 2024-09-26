//import React from "react";

const WelcomeMessage = () => {
  return (
    <div className="md:w-1/2 flex flex-col items-center justify-center text-center space-y-6">
      <h1 className="text-4xl font-bold text-red-800">
        Bienvenido a Supply Chain App
      </h1>
      <img
        src="https://supplychainmanagement.utk.edu/wp-content/uploads/sites/2/2020/03/blog-ut-haslam-end-to-end-supply-chain-management-2.f9169736.jpg"
        alt="Imagen descriptiva"
        className="w-72 h-72 object-cover rounded-lg shadow-lg"
      />
    </div>
  );
};

export default WelcomeMessage;
