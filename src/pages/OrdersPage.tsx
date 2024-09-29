/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { useDeliveryByUser } from "../hooks/useDeliveryByUser";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const OrdersPage = () => {
  const { data: deliveries, isLoading, isError, error } = useDeliveryByUser();

  // Estados para controlar la visibilidad de cada categoría de servicios
  const [activeSection, setActiveSection] = useState({
    active: true,
    finished: false,
    cancelled: false,
  });

  const toggleSection = (section: string) => {
    setActiveSection((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const confirmService = (id: any) => {
    console.log(`Confirmando servicio con ID: ${id}`);
    // Implementar lógica de confirmación aquí
  };

  const cancelService = (id: any) => {
    console.log(`Cancelando servicio con ID: ${id}`);
    // Implementar lógica de cancelación aquí
  };

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

  const activeServices = deliveries?.filter(
    (d) => d.status.id !== 5 && !d.is_cancelled
  );
  const finishedServices = deliveries?.filter((d) => d.status.id === 5);
  const cancelledServices = deliveries?.filter((d) => d.is_cancelled);

  const renderService = (service: {
    id: React.Key | null | undefined;
    is_auto_generated: any;
    product_name:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | Iterable<React.ReactNode>
      | React.ReactPortal
      | null
      | undefined;
    transport_type: {
      name:
        | string
        | number
        | boolean
        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
        | Iterable<React.ReactNode>
        | React.ReactPortal
        | null
        | undefined;
    };
    delivery_route: {
      route:
        | string
        | number
        | boolean
        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
        | Iterable<React.ReactNode>
        | React.ReactPortal
        | null
        | undefined;
    };
    weight_kg:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | Iterable<React.ReactNode>
      | React.ReactPortal
      | null
      | undefined;
    total_price:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | Iterable<React.ReactNode>
      | React.ReactPortal
      | null
      | undefined;
    scheduled_at: string | number | Date;
    recipient:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | Iterable<React.ReactNode>
      | React.ReactPortal
      | null
      | undefined;
    recipient_address:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | Iterable<React.ReactNode>
      | React.ReactPortal
      | null
      | undefined;
    completed_at: string | number | Date;
    total_hours:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | Iterable<React.ReactNode>
      | React.ReactPortal
      | null
      | undefined;
    is_confirmed: any;
    status: { id: number };
    is_cancelled: any;
  }) => (
    <div
      key={service.id}
      className="bg-gray-800 shadow-neon rounded-lg p-6 mb-4 relative"
    >
      {service.is_auto_generated && (
        <span className="absolute top-2 right-2 bg-yellow-500 text-black px-2 py-1 rounded text-sm font-bold">
          Auto Generado
        </span>
      )}
      <h3 className="text-2xl font-bold mb-4 text-neon-green">
        Servicio de {service.product_name}
      </h3>
      <p className="text-lg mb-2">
        <strong className="text-neon-green">Transporte:</strong>{" "}
        {service.transport_type.name}
      </p>
      <p className="text-lg mb-2">
        <strong className="text-neon-green">Ruta:</strong>{" "}
        {service.delivery_route.route}
      </p>
      <p className="text-lg mb-2">
        <strong className="text-neon-green">Peso:</strong> {service.weight_kg}{" "}
        kg
      </p>
      <p className="text-lg mb-2">
        <strong className="text-neon-green">Precio Total:</strong> $
        {service.total_price}
      </p>
      <p className="text-lg mb-2">
        <strong className="text-neon-green">Fecha Programada:</strong>{" "}
        {new Date(service.scheduled_at).toLocaleString()}
      </p>
      <p className="text-lg mb-2">
        <strong className="text-neon-green">Destinatario:</strong>{" "}
        {service.recipient}
      </p>
      <p className="text-lg mb-2">
        <strong className="text-neon-green">Dirección:</strong>{" "}
        {service.recipient_address}
      </p>
      {service.completed_at && (
        <p className="text-lg mb-2">
          <strong className="text-neon-green">Fecha de Entrega:</strong>{" "}
          {new Date(service.completed_at).toLocaleString()}
        </p>
      )}
      {service.total_hours && (
        <p className="text-lg mb-2">
          <strong className="text-neon-green">Tiempo Total:</strong>{" "}
          {service.total_hours} horas
        </p>
      )}
      {!service.is_confirmed && (
        <button
          className="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
          onClick={() => confirmService(service.id)}
        >
          Confirmar Servicio
        </button>
      )}
      {service.is_confirmed &&
        service.status.id !== 5 &&
        !service.is_cancelled && (
          <button
            className="mt-4 bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded"
            onClick={() => cancelService(service.id)}
          >
            Cancelar Servicio
          </button>
        )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col justify-between">
      <NavBar />
      <div className="container mx-auto mt-10 space-y-12">
        {/* Servicios Activos */}
        <section>
          <h2
            className="text-3xl font-bold text-neon-green mb-6 text-center cursor-pointer"
            onClick={() => toggleSection("active")}
          >
            Servicios Activos {activeSection.active ? "-" : "+"}
          </h2>
          {activeSection.active &&
            (activeServices?.length > 0 ? (
              activeServices?.map(renderService)
            ) : (
              <p className="text-center text-neon-pink text-xl">
                No hay servicios activos.
              </p>
            ))}
        </section>

        {/* Servicios Finalizados */}
        <section>
          <h2
            className="text-3xl font-bold text-neon-green mb-6 text-center cursor-pointer"
            onClick={() => toggleSection("finished")}
          >
            Servicios Finalizados {activeSection.finished ? "-" : "+"}
          </h2>
          {activeSection.finished &&
            (finishedServices?.length > 0 ? (
              finishedServices?.map(renderService)
            ) : (
              <p className="text-center text-neon-pink text-xl">
                No hay servicios finalizados.
              </p>
            ))}
        </section>

        {/* Servicios Cancelados */}
        <section>
          <h2
            className="text-3xl font-bold text-neon-green mb-6 text-center cursor-pointer"
            onClick={() => toggleSection("cancelled")}
          >
            Servicios Cancelados {activeSection.cancelled ? "-" : "+"}
          </h2>
          {activeSection.cancelled &&
            (cancelledServices?.length > 0 ? (
              cancelledServices?.map(renderService)
            ) : (
              <p className="text-center text-neon-pink text-xl">
                No hay servicios cancelados.
              </p>
            ))}
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default OrdersPage;
