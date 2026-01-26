import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import image2 from "../assets/ClientsP/download-removebg-preview (1).WebP";
import image4 from "../assets/ClientsP/download-removebg-preview.WebP";
import image7 from "../assets/ClientsP/download__10_-removebg-preview.WebP";
import image8 from "../assets/ClientsP/download__11_-removebg-preview.WebP";
import image9 from "../assets/ClientsP/download__1_-removebg-preview (1).WebP";
import image10 from "../assets/ClientsP/download__1_-removebg-preview.WebP";
import image11 from "../assets/ClientsP/download__2_-removebg-preview (1).WebP";
import image14 from "../assets/ClientsP/download__2_-removebg-preview.WebP";
import image16 from "../assets/ClientsP/download__3_-removebg-preview.WebP";
import image18 from "../assets/ClientsP/download__4_-removebg-preview.WebP";
import image20 from "../assets/ClientsP/download__5_-removebg-preview.WebP";
import image21 from "../assets/ClientsP/download__7_-removebg-preview.WebP";

const Clients = () => {
  const clients = [
    { id: 10, image: image10, name: "Client Logo 1" },
    { id: 11, image: image11, name: "Client Logo 2" },
    { id: 14, image: image14, name: "Client Logo 3" },
    { id: 16, image: image16, name: "Client Logo 4" },
    { id: 18, image: image18, name: "Client Logo 5" },
    { id: 20, image: image20, name: "Client Logo 6" },
    { id: 21, image: image21, name: "Client Logo 7" },
    { id: 2, image: image2, name: "Client Logo 8" },
    { id: 4, image: image4, name: "Client Logo 9" },
    { id: 7, image: image7, name: "Client Logo 10" },
    { id: 8, image: image8, name: "Client Logo 11" },
    { id: 9, image: image9, name: "Client Logo 12" },
  ];

  return (
    <section
      aria-labelledby="clients-title"
      className="container  py-20 dark:bg-black dark:text-white"
    >
      {/* Section Title */}
      <h2
        id="clients-title"
        className="text-3xl sm:text-4xl text-center pb-20 font-bold text-[#223760] dark:text-white"
        data-aos="fade-up"
      >
        Our Clients
      </h2>

      {/* Slider */}
      <div data-aos="fade-up" data-aos-delay="400" className="slider-container">
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={2000}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="z-10"
          dir="rtl"
        >
          {clients.map(({ id, image, name }) => (
            <SwiperSlide key={id}>
              <figure className="flex items-center justify-center">
                <img
                  src={image}
                  alt={`${name} company logo`}
                  loading="lazy"
                  className="object-contain h-28 w-28 rounded-2xl"
                />
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Clients;
