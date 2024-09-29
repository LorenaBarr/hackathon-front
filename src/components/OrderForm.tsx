import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Definir tipos de transporte con sus tarifas por kilogramo
const shippingTypes = {
  "Tracto Camión": 20000, // 20,000 por kilogramo
  Camion: 17000, // 17,000 por kilogramo
  Furgoneta: 22000, // 22,000 por kilogramo
};

const OrderForm = () => {
  const [formData, setFormData] = useState({
    route: "",
    product: "",
    shippingType: "",
    quantity: 0,
    recipient: "",
    address: "",
  });

  const [rateInfo, setRateInfo] = useState(""); // Para mostrar la tarifa
  const navigate = useNavigate(); // Para redirigir a la página de seguimiento

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleShippingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedShippingType = e.target.value;
    setFormData({
      ...formData,
      shippingType: selectedShippingType,
    });
    // Mostrar el mensaje con la tarifa seleccionada
    setRateInfo(
      `Tarifa: $${shippingTypes[selectedShippingType]} por kilogramo`
    );
  };

  const handleQuantityChange = (change: number) => {
    setFormData((prevData) => ({
      ...prevData,
      quantity: Math.max(0, prevData.quantity + change),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const orderData = {
      product_name: formData.product,
      weight_kg: formData.quantity,
      total_price: formData.quantity * shippingTypes[formData.shippingType], // Total calculado
      scheduled_at: new Date().toISOString(),
      transport_type: 1, // Ejemplo de ID para transporte
      user: 1, // Usuario mockeado
      delivery_route: formData.route, // Ruta seleccionada
      recipient: formData.recipient,
      recipient_address: formData.address,
    };

    try {
      // Simulación de un POST exitoso
      console.log("Datos enviados:", orderData);

      // Redirigir a /orders-history y pasar los datos de la orden
      navigate("/orders-history", { state: orderData });
    } catch (error) {
      console.error("Error al enviar la orden:", error);
    }
  };

  return (
    <div className="md:w-1/2 bg-gray-800 p-8 shadow-lg rounded-lg text-gray-200">
      <h2 className="text-3xl font-semibold text-neon-green mb-6 text-center">
        Realiza tu Orden
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Ruta */}
        <div>
          <label className="block text-sm font-medium text-gray-300">
            Ruta
          </label>
          <select
            name="route"
            onChange={handleChange}
            className="mt-1 block w-full border-gray-600 bg-gray-700 rounded-md shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
          >
            <option value="">Selecciona una ruta</option>
            <option value="1">Bogotá - Medellín (413 km)</option>
            <option value="2">Barranquilla - Bogotá (1000 km)</option>
            <option value="3">Cali - Cartagena (1220 km)</option>
            <option value="4">Medellín - Bucaramanga (500 km)</option>
            <option value="5">Bogotá - Cali (475 km)</option>
          </select>
        </div>

        {/* Producto */}
        <div>
          <label className="block text-sm font-medium text-gray-300">
            Producto
          </label>
          <input
            name="product"
            type="text"
            onChange={handleChange}
            className="mt-1 block w-full border-gray-600 bg-gray-700 rounded-md shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
            placeholder="Producto"
          />
        </div>

        {/* Transporte */}
        <div>
          <label className="block text-sm font-medium text-gray-300">
            Transporte
          </label>
          <select
            name="shippingType"
            onChange={handleShippingChange}
            className="mt-1 block w-full border-gray-600 bg-gray-700 rounded-md shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
          >
            <option value="">Selecciona el tipo de transporte</option>
            <option value="Tracto Camión">Tracto Camión</option>
            <option value="Camion">Camión</option>
            <option value="Furgoneta">Furgoneta</option>
          </select>
          {rateInfo && (
            <p className="mt-2 text-sm text-green-400">{rateInfo}</p>
          )}
        </div>

        {/* Cantidad */}
        <div>
          <label className="block text-sm font-medium text-gray-300">
            Cantidad (kg)
          </label>
          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={() => handleQuantityChange(-1)}
              className="px-3 py-1 bg-pink-600 text-white rounded hover:bg-pink-700 transition"
            >
              -
            </button>
            <input
              name="quantity"
              type="number"
              value={formData.quantity}
              readOnly
              className="mt-1 block w-16 text-center border-gray-600 bg-gray-700 rounded-md shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
            />
            <button
              type="button"
              onClick={() => handleQuantityChange(1)}
              className="px-3 py-1 bg-pink-600 text-white rounded hover:bg-pink-700 transition"
            >
              +
            </button>
          </div>
        </div>

        {/* Destinatario */}
        <div>
          <label className="block text-sm font-medium text-gray-300">
            Destinatario
          </label>
          <input
            name="recipient"
            type="text"
            onChange={handleChange}
            className="mt-1 block w-full border-gray-600 bg-gray-700 rounded-md shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
            placeholder="Nombre del destinatario"
          />
        </div>

        {/* Dirección del destinatario */}
        <div>
          <label className="block text-sm font-medium text-gray-300">
            Dirección del destinatario
          </label>
          <input
            name="address"
            type="text"
            onChange={handleChange}
            className="mt-1 block w-full border-gray-600 bg-gray-700 rounded-md shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
            placeholder="Dirección"
          />
        </div>

        {/* Botón de Submit */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-600 to-blue-600 text-white py-2 rounded-md shadow hover:from-pink-700 hover:to-blue-700 transition duration-300"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
