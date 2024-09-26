import React, { useState } from "react";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    origen: "",
    proveedor: "",
    destino: "",
    producto: "",
    cantidad: 0,
    detalle: "",
    tiempoEstimado: "",
    costo: 0,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);
  };

  return (
    <div className="md:w-1/2 bg-white p-8 shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Realiza tu Orden
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Origen */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Origen
          </label>
          <input
            name="origen"
            type="text"
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Origen"
          />
        </div>
        {/* Proveedor */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Proveedor
          </label>
          <input
            name="proveedor"
            type="text"
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Proveedor"
          />
        </div>
        {/* Destino */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Destino
          </label>
          <input
            name="destino"
            type="text"
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Destino"
          />
        </div>
        {/* Producto */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Producto
          </label>
          <input
            name="producto"
            type="text"
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Producto"
          />
        </div>
        {/* Cantidad */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Cantidad
          </label>
          <input
            name="cantidad"
            type="number"
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Cantidad"
          />
        </div>
        {/* Detalle */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Detalle
          </label>
          <textarea
            name="detalle"
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Detalles"
          ></textarea>
        </div>
        {/* Tiempo Estimado */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Tiempo Estimado
          </label>
          <input
            name="tiempoEstimado"
            type="text"
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Tiempo Estimado"
          />
        </div>
        {/* Costo */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Costo
          </label>
          <input
            name="costo"
            type="number"
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Costo"
          />
        </div>
        {/* Botón de Submit */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md shadow hover:bg-indigo-700 transition duration-300"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
