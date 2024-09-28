//import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-900 py-16 text-center text-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-neon-green">
          ¿Quiénes Somos?
        </h2>
        <p className="text-lg mb-6 text-gray-400">
          En Supply Chain App, nuestro objetivo es ofrecer una solución
          tecnológica innovadora que optimice y facilite la gestión de la cadena
          de suministro. A través de nuestra plataforma, brindamos a las
          empresas la capacidad de monitorear, gestionar y rastrear sus
          productos de manera eficiente, asegurando la transparencia y
          trazabilidad en cada etapa del proceso. Nos enfocamos en proporcionar
          herramientas ágiles y dinámicas que mejoren la productividad, permitan
          una toma de decisiones más informada y fortalezcan la relación entre
          proveedores, distribuidores y clientes. En Supply Chain App, creemos
          en la transformación digital como clave para el futuro de las
          operaciones logísticas.
        </p>
        <img
          src="/images/agro-team.jpg"
          alt="Nuestro equipo"
          className="w-full max-w-lg mx-auto rounded-lg border-4 border-neon-pink shadow-neon"
        />
      </div>
    </div>
  );
};

export default AboutUs;
