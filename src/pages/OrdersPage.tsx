import React, { useState, useEffect } from "react";
import axios from "axios"; // Importa Axios
import NavBar from "../components/NavBar";
import Footer from "../components/Footer"; // Importa Footer

const OrdersPage = () => {
  const [orderData, setOrderData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Función para obtener los datos de la orden
    const fetchOrderData = async () => {
      try {
        const response = await axios.get(
          "https://api.tuservicio.com/orders/12345"
        ); // Reemplaza con tu API real
        setOrderData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener los datos de la orden:", error);
        setLoading(false);
      }
    };

    fetchOrderData(); // Llama a la función para obtener los datos
  }, []);

  if (loading) {
    return <p>Cargando datos de la orden...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col justify-between">
      <NavBar />
      <div className="container mx-auto mt-10">
        {orderData ? (
          <div className="bg-gray-800 shadow-neon rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Orden #{orderData.id}</h2>
            <p>
              <strong>Producto:</strong> {orderData.product}
            </p>
            <p>
              <strong>Cantidad:</strong> {orderData.quantity}
            </p>
            <p>
              <strong>Estado:</strong> {orderData.status}
            </p>
            <p>
              <strong>Seguimiento:</strong> {orderData.tracking}
            </p>
          </div>
        ) : (
          <p>No se encontraron datos para esta orden.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default OrdersPage;
