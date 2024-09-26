import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormPage from "./pages/FormPage";
import OrdersPage from "./pages/OrdersPage";
import ChartsPage from "./pages/ChartsPage";
import "./App.css";
import QueryClientProviderWrapper from "./services/QueryClientProvider";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Router envuelto en un contenedor general */}
      <QueryClientProviderWrapper>
        <Router>
          <Routes>
            <Route path="/" element={<FormPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/charts" element={<ChartsPage />} />
          </Routes>
        </Router>
      </QueryClientProviderWrapper>
    </div>
  );
}

export default App;
