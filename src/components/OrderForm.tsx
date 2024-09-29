import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRotesDelivery } from "../hooks/useRoutesDelivery";

interface ShippingType {
  id: number;
  name: string;
}

interface Rate {
  id: number;
  rate: number;
  shipping_type: ShippingType;
}

interface Route {
  id: number;
  route: string;
  km_distance: number;
  travel_time: string;
  rates: Rate[];
}

const OrderForm = () => {
  const {
    data: routesData,
    error: routesError,
    isLoading: routesLoading,
  } = useRotesDelivery();

  const [formData, setFormData] = useState({
    route: "",
    product: "",
    shippingType: "",
    quantity: 0,
    recipient: "",
    address: "",
  });

  const [rateInfo, setRateInfo] = useState<number>(0); // Para almacenar la tarifa seleccionada
  const [totalPrice, setTotalPrice] = useState<number>(0); // Para mostrar el total de la orden
  const navigate = useNavigate(); // Para redirigir a la página de seguimiento

  useEffect(() => {
    // Actualiza el total cada vez que cambian la tarifa o la cantidad
    setTotalPrice(formData.quantity * rateInfo);
  }, [formData.quantity, rateInfo]);

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

    // Obtener la ruta seleccionada
    const selectedRoute = routesData?.find(
      (route: Route) => route.id === parseInt(formData.route)
    );

    if (selectedRoute) {
      // Buscar la tarifa correspondiente al tipo de transporte seleccionado en esa ruta
      const selectedRate = selectedRoute.rates.find(
        (rate: Rate) => rate.shipping_type.name === selectedShippingType
      );

      if (selectedRate) {
        setRateInfo(selectedRate.rate); // Almacenar la tarifa seleccionada
      } else {
        setRateInfo(0); // Si no hay tarifa, limpiar la tarifa
      }
    }
  };

  const handleQuantityChange = (change: number) => {
    setFormData((prevData) => ({
      ...prevData,
      quantity: Math.max(0, prevData.quantity + change),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const selectedRoute = routesData?.find(
      (route: Route) => route.id === parseInt(formData.route)
    ); // Obtener la ruta seleccionada

    if (!selectedRoute) return; // Si no se selecciona una ruta, no se envía el formulario

    const orderData = {
      product_name: formData.product,
      weight_kg: formData.quantity,
      total_price: totalPrice, // Total calculado basado en la tarifa
      scheduled_at: new Date().toISOString(),
      transport_type: formData.shippingType, // Tipo de transporte seleccionado
      user: 1, // Usuario mockeado
      delivery_route: selectedRoute.id, // Ruta seleccionada
      recipient: formData.recipient,
      recipient_address: formData.address,
    };

    try {
      // Mostrar los datos enviados en la consola
      console.log("Datos enviados:", orderData);

      // Simulación de un POST exitoso
      // Redirigir a /orders-history y pasar los datos de la orden
      navigate("/orders-history", { state: orderData });
    } catch (error) {
      console.error("Error al enviar la orden:", error);
    }
  };

  if (routesLoading) return <p>Cargando rutas...</p>;
  if (routesError) return <p>Error al cargar rutas</p>;

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
            value={formData.route}
          >
            <option value="">Selecciona una ruta</option>
            {routesData?.map((route: Route) => (
              <option key={route.id} value={route.id}>
                {route.route} ({route.km_distance} km)
              </option>
            ))}
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
            value={formData.shippingType}
          >
            <option value="">Selecciona el tipo de transporte</option>
            <option value="Tracto Camión">Tracto Camión</option>
            <option value="Camion">Camión</option>
            <option value="Furgoneta">Furgoneta</option>
          </select>
          {rateInfo > 0 && (
            <p className="mt-2 text-sm text-green-400">
              Tarifa: ${rateInfo} por kilogramo
            </p>
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

        {/* Total de la orden */}
        <div>
          <label className="block text-sm font-medium text-gray-300">
            Total de la Orden
          </label>
          <p className="text-lg text-green-400">${totalPrice.toFixed(2)}</p>
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
