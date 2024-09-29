import NavBar from "../components/NavBar";
import WelcomeMessage from "../components/WelcomeMessage";
import Carousel from "../components/Carousel";
import QuickLinks from "../components/QuickLinks";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import { useFoo } from "../hooks/useFoo";
import { useRotesDelivery } from "../hooks/useRoutesDelivery";
import { useDeliveryByUser } from "../hooks/useDeliveryByUser";

const HomePage = () => {
  const fooData = useFoo();
  const routesData = useRotesDelivery();
  const deliveriesByUser = useDeliveryByUser();

  console.log(fooData.data);
  console.log(routesData.data);
  console.log(deliveriesByUser.data);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col justify-between">
      {/* Navbar */}
      <NavBar />

      {/* Contenido principal */}
      <div className="container mx-auto flex flex-col items-center mt-10 space-y-8">
        {/* Bienvenida */}
        <WelcomeMessage />

        {/* Carrusel */}
        <Carousel />

        {/* Enlaces rápidos */}
        <QuickLinks />

        {/* Quiénes Somos */}
        <AboutUs />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
