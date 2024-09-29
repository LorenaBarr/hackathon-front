import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer"; // Importa Footer

const OrdersPage = () => {
  const location = useLocation(); // Utilizamos location para obtener los datos que fueron enviados al navegar

  // Revisar si hay datos de la orden en el estado enviado desde el formulario
  const orderData = location.state;

  // Ejemplo de órdenes históricas y canceladas (mock mientras conectas la API)
  const orderHistory = [
    { id: 1, product_name: "Verduras", weight_kg: 150, total_price: 20000 },
    {
      id: 2,
      product_name: "Electrodomésticos",
      weight_kg: 100,
      total_price: 50000,
    },
  ];

  const cancelledOrders = [
    { id: 3, product_name: "Frutas", weight_kg: 120, total_price: 30000 },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col justify-between">
      <NavBar />

      <div className="container mx-auto mt-10 space-y-12">
        {/* Seguimiento de servicio */}
        <section>
          <h2 className="text-3xl font-bold text-neon-green mb-6 text-center">
            Seguimiento de Servicio
          </h2>
          {orderData ? (
            <div className="bg-gray-800 shadow-neon rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">
                Detalle de la Orden #{orderData.id || "N/A"}
              </h3>
              <p className="text-lg mb-4">
                <strong className="text-neon-green">Producto:</strong>{" "}
                {orderData.product_name}
              </p>
              <p className="text-lg mb-4">
                <strong className="text-neon-green">Cantidad (kg):</strong>{" "}
                {orderData.weight_kg}
              </p>
              <p className="text-lg mb-4">
                <strong className="text-neon-green">Precio Total:</strong> $
                {orderData.total_price}
              </p>
              <p className="text-lg mb-4">
                <strong className="text-neon-green">Fecha Programada:</strong>{" "}
                {new Date(orderData.scheduled_at).toLocaleDateString()}
              </p>
              <p className="text-lg mb-4">
                <strong className="text-neon-green">Transporte:</strong>{" "}
                {orderData.transport_type}
              </p>
              <p className="text-lg mb-4">
                <strong className="text-neon-green">Ruta:</strong>{" "}
                {orderData.delivery_route}
              </p>
              <p className="text-lg mb-4">
                <strong className="text-neon-green">Destinatario:</strong>{" "}
                {orderData.recipient}
              </p>
              <p className="text-lg mb-4">
                <strong className="text-neon-green">
                  Dirección del Destinatario:
                </strong>{" "}
                {orderData.recipient_address}
              </p>
              {/* Botón de Cancelar */}
              <button
                className="mt-4 bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded"
                onClick={() => alert("Cancelado")}
              >
                Cancelar Orden
              </button>
            </div>
          ) : (
            <p className="text-center text-neon-pink text-xl">
              No se encontraron datos para esta orden.
            </p>
          )}
        </section>

        {/* Historial de servicios */}
        <section>
          <h2 className="text-3xl font-bold text-neon-green mb-6 text-center">
            Historial de Servicios
          </h2>
          <div className="space-y-4">
            {orderHistory.length > 0 ? (
              orderHistory.map((order) => (
                <div
                  key={order.id}
                  className="bg-gray-800 shadow-neon rounded-lg p-6"
                >
                  <h3 className="text-2xl font-bold mb-4 text-neon-green">
                    Orden #{order.id}
                  </h3>
                  <p className="text-lg mb-4">
                    <strong className="text-neon-green">Producto:</strong>{" "}
                    {order.product_name}
                  </p>
                  <p className="text-lg mb-4">
                    <strong className="text-neon-green">Cantidad (kg):</strong>{" "}
                    {order.weight_kg}
                  </p>
                  <p className="text-lg mb-4">
                    <strong className="text-neon-green">Precio Total:</strong> $
                    {order.total_price}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-center text-neon-pink text-xl">
                No tienes órdenes en el historial.
              </p>
            )}
          </div>
        </section>

        {/* Servicios cancelados */}
        <section>
          <h2 className="text-3xl font-bold text-neon-green mb-6 text-center">
            Servicios Cancelados
          </h2>
          <div className="space-y-4">
            {cancelledOrders.length > 0 ? (
              cancelledOrders.map((order) => (
                <div
                  key={order.id}
                  className="bg-gray-800 shadow-neon rounded-lg p-6"
                >
                  <h3 className="text-2xl font-bold mb-4 text-neon-green">
                    Orden Cancelada #{order.id}
                  </h3>
                  <p className="text-lg mb-4">
                    <strong className="text-neon-green">Producto:</strong>{" "}
                    {order.product_name}
                  </p>
                  <p className="text-lg mb-4">
                    <strong className="text-neon-green">Cantidad (kg):</strong>{" "}
                    {order.weight_kg}
                  </p>
                  <p className="text-lg mb-4">
                    <strong className="text-neon-green">Precio Total:</strong> $
                    {order.total_price}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-center text-neon-pink text-xl">
                No tienes servicios cancelados.
              </p>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default OrdersPage;
