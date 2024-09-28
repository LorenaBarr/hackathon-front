import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Chart, registerables } from "chart.js";
//import { useEffect } from "react";
import { Bar } from "react-chartjs-2";

// Registrar todos los componentes de Chart.js
Chart.register(...registerables);

const ChartsPage = () => {
  // Datos ficticios para la gráfica por el momento
  const data = {
    labels: ["Proceso A", "Proceso B", "Proceso C", "Proceso D"],
    datasets: [
      {
        label: "Cotización",
        data: [15, 25, 35, 45], // Datos de ejemplo
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  const options = {
    indexAxis: "y" as const, // Gráfica horizontal con el tipo exacto
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const, // Asegurar que TypeScript entienda que es un valor válido
        labels: {
          color: "#00FF00", // Verde neón para el texto de las etiquetas
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#00FF00", // Verde neón en el eje X
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)", // Líneas del grid suaves
        },
      },
      y: {
        ticks: {
          color: "#00FF00", // Verde neón en el eje Y
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)", // Líneas del grid suaves
        },
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col justify-between">
      <NavBar />
      <div className="container mx-auto mt-10 flex flex-col space-y-8">
        {/* Card 1: Título de la cotización */}
        <div className="bg-gray-800 shadow-neon rounded-lg p-6 text-center">
          <h2 className="text-3xl font-extrabold text-neon-green mb-6">
            Cotización de Procesos
          </h2>
          <p className="text-lg text-gray-300">
            Visualiza los datos de los procesos a continuación.
          </p>
        </div>

        {/* Card 2: Gráfica de procesos (con datos ficticios) */}
        <div className="bg-gray-800 shadow-neon rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-neon-green mb-4 text-center">
            Gráfica de Procesos
          </h2>
          <Bar data={data} options={options} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChartsPage;
