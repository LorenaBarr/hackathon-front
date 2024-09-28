import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormPage from "./pages/FormPage"; // Página de inicio (formulario de orden)
import OrdersPage from "./pages/OrdersPage"; // Página para seguimiento de órdenes
import ChartsPage from "./pages/ChartsPage"; // Página para gráficas
import HomePage from "./pages/HomePage"; // Página para "Sobre Nosotros"
import "./App.css";
import QueryClientProviderWrapper from "./services/QueryClientProvider";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Router envuelto en un contenedor general */}
      <QueryClientProviderWrapper>
        <Router>
          <Routes>
            {/* Página de inicio: Formulario */}
            <Route path="/" element={<FormPage />} />

            {/* Ruta para "Sobre Nosotros" */}
            <Route path="/about" element={<HomePage />} />

            {/* Ruta para seguimiento de la orden (OrdersPage) */}
            <Route path="/orders-history" element={<OrdersPage />} />

            {/* Ruta para gráficas (ChartsPage) */}
            <Route path="/charts" element={<ChartsPage />} />
          </Routes>
        </Router>
      </QueryClientProviderWrapper>
    </div>
  );
}

export default App;
