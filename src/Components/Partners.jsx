import image2 from "../assets/Partners/download__10_-removebg-preview.png";
import image4 from "../assets/Partners/download__12_-removebg-preview.png";
import image7 from "../assets/Partners/download__16_-removebg-preview.png";
import image8 from "../assets/Partners/download__17_-removebg-preview.png";
import image9 from "../assets/Partners/download__19_-removebg-preview.png";
import image10 from "../assets/Partners/download__20_-removebg-preview.png";
import image11 from "../assets/Partners/pelco-logo-png_seeklogo-107217-removebg-preview.png";
import image14 from "../assets/Partners/download__3_-removebg-preview.png";
import image15 from "../assets/Partners/download__4_-removebg-preview.png";
import image16 from "../assets/Partners/download__5_-removebg-preview.png";
import image18 from "../assets/Partners/download__7_-removebg-preview.png";
import image20 from "../assets/Partners/download__9_-removebg-preview.png";
import image21 from "../assets/Partners/download__21_-removebg-preview.png";

import { Autoplay } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
const Partners = () => {
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
    <section className="dark:text-white dark:bg-black container px-10  duration-300 my-20 ">
      <h1
        className="text-3xl sm:text-4xl text-center mb-12 pb-10"
        data-aos="fade-up"
      >
        {" "}
        Our Partners
      </h1>

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
          speed={1000} 
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="z-10"
          dir="ltr" // أو "rtl" لو عايز يمشي من اليمين للشمال
        >
          {images.map(({ id, image }) => (
            <SwiperSlide>
              <div className="flex items-center justify-center">
                <img
                  key={id}
                  src={image}
                  alt="partners"
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

export default Partners;
