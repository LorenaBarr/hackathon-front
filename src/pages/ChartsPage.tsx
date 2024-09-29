import React, { useMemo } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line, Scatter } from "react-chartjs-2";
import { useDeliveryByUser } from "../hooks/useDeliveryByUser";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartsPage = () => {
  const { data: deliveries, isLoading, isError, error } = useDeliveryByUser();

  const processedData = useMemo(() => {
    if (!deliveries) return null;

    const routeData = deliveries.reduce((acc, delivery) => {
      const route = delivery.delivery_route.route;
      if (!acc[route]) {
        acc[route] = {
          deliveries: [],
          totalPrice: 0,
          totalWeight: 0,
          totalTime: 0,
        };
      }
      acc[route].deliveries.push(delivery);
      acc[route].totalPrice += parseFloat(delivery.total_price);
      acc[route].totalWeight += parseFloat(delivery.weight_kg);
      acc[route].totalTime += parseFloat(delivery.delivery_route.travel_time);
      return acc;
    }, {});

    return Object.entries(routeData).map(([route, data]) => ({
      route,
      deliveryCount: data.deliveries.length,
      avgPrice: data.totalPrice / data.deliveries.length,
      avgWeight: data.totalWeight / data.deliveries.length,
      avgTime: data.totalTime / data.deliveries.length,
    }));
  }, [deliveries]);

  if (isLoading) {
    return (
      <div className="text-center text-neon-green text-xl">Cargando...</div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-neon-pink text-xl">
        Error: {error.message}
      </div>
    );
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: { color: "#00FF00" },
      },
      title: {
        display: true,
        color: "#00FF00",
      },
    },
    scales: {
      x: {
        ticks: { color: "#00FF00" },
        grid: { color: "rgba(255, 255, 255, 0.1)" },
      },
      y: {
        ticks: { color: "#00FF00" },
        grid: { color: "rgba(255, 255, 255, 0.1)" },
      },
    },
  };

  // Original charts data
  const routeUsageData = {
    labels: processedData.map((d) => d.route),
    datasets: [
      {
        label: "Número de Entregas",
        data: processedData.map((d) => d.deliveryCount),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const routeRatesData = {
    labels: processedData.map((d) => d.route),
    datasets: [
      {
        label: "Tarifa Promedio",
        data: processedData.map((d) => d.avgPrice),
        backgroundColor: "rgba(255, 159, 64, 0.6)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1,
      },
    ],
  };

  const routeTravelTimeData = {
    labels: processedData.map((d) => d.route),
    datasets: [
      {
        label: "Tiempo de Viaje Promedio (horas)",
        data: processedData.map((d) => d.avgTime),
        backgroundColor: "rgba(153, 102, 255, 0.6)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  const usageTrendData = {
    labels: deliveries.map((d) =>
      new Date(d.scheduled_at).toLocaleDateString()
    ),
    datasets: [
      {
        label: "Número de Entregas",
        data: deliveries.map((_, index) => index + 1),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  // New charts data
  const multiMetricBarData = {
    labels: processedData.map((d) => d.route),
    datasets: [
      {
        label: "Número de Entregas",
        data: processedData.map((d) => d.deliveryCount),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Precio Promedio",
        data: processedData.map((d) => d.avgPrice),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Peso Promedio (kg)",
        data: processedData.map((d) => d.avgWeight),
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
    ],
  };

  const scatterData = {
    datasets: [
      {
        label: "Relación Peso-Precio",
        data: deliveries.map((d) => ({
          x: parseFloat(d.weight_kg),
          y: parseFloat(d.total_price),
        })),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const scatterOptions = {
    ...options,
    scales: {
      ...options.scales,
      x: {
        ...options.scales.x,
        title: {
          display: true,
          text: "Peso (kg)",
          color: "#00FF00",
        },
      },
      y: {
        ...options.scales.y,
        title: {
          display: true,
          text: "Precio Total",
          color: "#00FF00",
        },
      },
    },
  };

  const timeSeriesData = {
    labels: deliveries.map((d) =>
      new Date(d.scheduled_at).toLocaleDateString()
    ),
    datasets: [
      {
        label: "Precio por Entrega",
        data: deliveries.map((d) => parseFloat(d.total_price)),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Peso por Entrega",
        data: deliveries.map((d) => parseFloat(d.weight_kg)),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col justify-between">
      <NavBar />
      <div className="container mx-auto mt-10 flex flex-col space-y-8">
        <div className="bg-gray-800 shadow-neon rounded-lg p-6 text-center">
          <h2 className="text-3xl font-extrabold text-neon-green mb-6">
            Análisis Completo de Entregas
          </h2>
          <p className="text-lg text-gray-300">
            Visualizaciones detalladas para análisis de datos y machine
            learning.
          </p>
        </div>

        <div className="bg-gray-800 shadow-neon rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-neon-green mb-4 text-center">
            Uso por Ruta
          </h2>
          <Bar data={routeUsageData} options={options} />
        </div>

        <div className="bg-gray-800 shadow-neon rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-neon-green mb-4 text-center">
            Tarifas Promedio por Ruta
          </h2>
          <Bar data={routeRatesData} options={options} />
        </div>

        <div className="bg-gray-800 shadow-neon rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-neon-green mb-4 text-center">
            Tiempo de Viaje Promedio por Ruta
          </h2>
          <Bar data={routeTravelTimeData} options={options} />
        </div>

        <div className="bg-gray-800 shadow-neon rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-neon-green mb-4 text-center">
            Tendencia de Uso en el Tiempo
          </h2>
          <Line data={usageTrendData} options={options} />
        </div>

        <div className="bg-gray-800 shadow-neon rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-neon-green mb-4 text-center">
            Métricas Múltiples por Ruta
          </h2>
          <Bar data={multiMetricBarData} options={options} />
        </div>

        <div className="bg-gray-800 shadow-neon rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-neon-green mb-4 text-center">
            Relación Peso-Precio
          </h2>
          <Scatter data={scatterData} options={scatterOptions} />
        </div>

        <div className="bg-gray-800 shadow-neon rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-neon-green mb-4 text-center">
            Serie Temporal de Precios y Pesos
          </h2>
          <Line data={timeSeriesData} options={options} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChartsPage;
