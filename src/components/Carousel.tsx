import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Estilos principales de Swiper
import "swiper/css/pagination"; // Estilos de paginación
import "swiper/css/navigation"; // Estilos de navegación
import { Pagination, Autoplay, Navigation } from "swiper/modules"; // Importar los módulos necesarios

const Carousel = () => {
  return (
    <div className="w-full relative bg-gray-900 py-8">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true} // Habilitar los botones de navegación
        autoplay={{
          delay: 3000, // 3 segundos entre cada slide
          disableOnInteraction: false, // Mantener el autoplay aunque el usuario interactúe
        }}
        modules={[Pagination, Autoplay, Navigation]} // Módulos habilitados
        className="swiper-container"
      >
        {/* Slide 1: Imagen agro1 */}
        <SwiperSlide>
          <div className="h-96 flex justify-center items-center">
            <img
              src="/sumi_1.jpg"
              alt="Imagen Agro 1"
              className="rounded-2xl object-cover h-full w-full"
            />
          </div>
        </SwiperSlide>

        {/* Slide 2: Imagen agro2 */}
        <SwiperSlide>
          <div className="h-96 flex justify-center items-center">
            <img
              src="/sumi_3.jpg"
              alt="Imagen Agro 2"
              className="rounded-2xl object-cover h-full w-full"
            />
          </div>
        </SwiperSlide>

        {/* Slide 3: Imagen agro3 */}
        <SwiperSlide>
          <div className="h-96 flex justify-center items-center">
            <img
              src="/sumi_4.jpg"
              alt="Imagen Agro 3"
              className="rounded-2xl object-cover h-full w-full"
            />
          </div>
        </SwiperSlide>

        {/* Slide 4: Imagen agro4 */}
        <SwiperSlide>
          <div className="h-96 flex justify-center items-center">
            <img
              src="/sumi_5.jpg"
              alt="Imagen Agro 4"
              className="rounded-2xl object-cover h-full w-full"
            />
          </div>
        </SwiperSlide>

        {/* Slide 5: Imagen agro5 */}
        <SwiperSlide>
          <div className="h-96 flex justify-center items-center">
            <img
              src="/sumi_6.jpg"
              alt="Imagen Agro 5"
              className="rounded-2xl object-cover h-full w-full"
            />
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Paginación personalizada */}
      <div className="swiper-pagination !bottom-4 !top-auto !w-40 mx-auto bg-gray-700 rounded-full"></div>
    </div>
  );
};

export default Carousel;
