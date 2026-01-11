import image2 from "../assets/ClientsP/download-removebg-preview (1).png";
import image4 from "../assets/ClientsP/download-removebg-preview.png";
import image7 from "../assets/ClientsP/download__10_-removebg-preview.png";
import image8 from "../assets/ClientsP/download__11_-removebg-preview.png";
import image9 from "../assets/ClientsP/download__1_-removebg-preview (1).png";
import image10 from "../assets/ClientsP/download__1_-removebg-preview.png";
import image11 from "../assets/ClientsP/download__2_-removebg-preview (1).png";
import image14 from "../assets/ClientsP/download__2_-removebg-preview.png";
import image15 from "../assets/ClientsP/download__3_-removebg-preview (1).png";
import image16 from "../assets/ClientsP/download__3_-removebg-preview.png";
import image18 from "../assets/ClientsP/download__4_-removebg-preview.png";
import image20 from "../assets/ClientsP/download__5_-removebg-preview.png";
import image21 from "../assets/ClientsP/download__7_-removebg-preview.png";

import { Autoplay } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

const Clients = () => {
  const images = [
    { id: 10, image: image10 },
    { id: 11, image: image11 },
    { id: 14, image: image14 },
    { id: 15, image: image15 },
    { id: 16, image: image16 },
    { id: 18, image: image18 },
    { id: 20, image: image20 },
    { id: 21, image: image21 },
    { id: 2, image: image2 },
    { id: 4, image: image4 },
    { id: 7, image: image7 },
    { id: 8, image: image8 },
    { id: 9, image: image9 },
  ];

  return (
    <section className="dark:text-white dark:bg-black container px-10  duration-300  py-20 ">
      <h1
        className="text-3xl sm:text-4xl text-center  pb-20"
        data-aos="fade-up"
      >
        {" "}
        Our Clients
      </h1>

      <div data-aos="fade-up" data-aos-delay="400" className="slider-container">
        <Swiper
          slidesPerView={1}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          className="z-10"
        >
          {images.map(({ id, image }) => (
            <SwiperSlide>
              <div className="flex items-center justify-self-center">
                <img
                  key={id}
                  src={image}
                  alt="logo for our clients"
                  className="object-cover h-30 w-30 rounded-2xl "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Clients;
