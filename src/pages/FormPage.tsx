import NavBar from "../components/NavBar";
import OrderForm from "../components/OrderForm";
import Footer from "../components/Footer"; // Asegúrate de importar el Footer

const FormPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col justify-between">
      {/* Navbar siempre presente */}
      <NavBar />

      {/* Contenido principal con dos cards horizontales */}
      <div className="container mx-auto mt-10 flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0 md:space-x-6">
        {/* Card 1: Título e imagen */}
        <div className="bg-gray-800 shadow-neon rounded-lg p-6 w-full md:w-1/2 flex flex-col justify-between transform transition duration-300 hover:scale-105 hover:shadow-lg">
          <h2 className="text-3xl font-bold text-neon-green mb-4 text-center">
            Bienvenido Supply Chain App
          </h2>
          <img
            src="/public/sumi_9.jpg"
            alt="Imagen descriptiva"
            className="rounded-lg w-full h-[400px] object-cover"
          />
        </div>

        {/* Card 2: Formulario */}
        <div className="bg-gray-800 shadow-neon rounded-lg p-6 w-full md:w-1/2 flex items-center justify-center transform transition duration-300 hover:scale-105 hover:shadow-lg">
          <OrderForm />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FormPage;
