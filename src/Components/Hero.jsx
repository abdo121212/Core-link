import { Link } from "react-router-dom";
import bg from "../assets/Video/2792370-hd_1920_1080_30fps.mp4";

const Hero = () => {
  return (
    <header
      className="relative h-screen overflow-hidden bg-black select-none"
      aria-label="Hero section"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover translate-y-52 pl-10"
        aria-hidden="true"
      >
        <source src={bg} type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-10 container mx-auto h-full flex items-center  justify-center px-6">
        <div className="text-center max-w-3xl space-y-6 text-white pt-28">
          <h1
            className="text-4xl sm:text-5xl font-semibold"
            data-aos="fade-up"
          >
            Delivering End-to-End Technology Solutions with
            <span className="block  text-[40px] mt-2">
              Core Link Arabia
            </span>
          </h1>

          <p
            className="text-white/90 text-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Core Link Arabia delivers integrated ICT, security, and smart
            building solutions that keep your business connected, safe, and
            efficient.
          </p>

          <div
            className="flex justify-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Link
              onClick={() => {
                const aboutSection = document.getElementById("about");
                aboutSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="border-2 border-white text-white px-8 py-3 rounded-full 
              hover:scale-105 duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
