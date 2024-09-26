import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registra los componentes necesarios de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartsPage = () => {
  const data = {
    labels: ["Producto A", "Producto B", "Producto C"],
    datasets: [
      {
        label: "Costo",
        data: [300, 200, 150],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const, // Uso de 'as const' para forzar el tipo correcto
      },
      title: {
        display: true,
        text: "Costos por Producto",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Gráficas</h2>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default ChartsPage;
