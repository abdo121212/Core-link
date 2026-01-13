import { Link } from "react-router-dom";
import bg from "../assets/Video/media.mp4";

const Hero = () => {
  return (
    <>
      <div className="py-12 sm:py-0 duration-300">
        <div className="container min-h-175 flex relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 place-items-center my-36">
            {/* hero text */}

            <div className="space-y-5 lg:pr-20 order-2 sm:order-1 ">
              <h1
                className="text-4xl font-semibold bg-linear-to-r  from-[#223760] to-[#223760] dark:from-white dark:to-white/85 bg-clip-text  text-transparent"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Delivering End-to-End Integrated Technology Solutions
                <p className="bg-linear-to-r  from-[#223760] to-[#223760] dark:from-white dark:to-white/85 bg-clip-text  text-transparent">
                  with Core Link
                </p>
              </h1>
              <p data-aos="fade-up" data-aos-delay="400">
                Core Link offers smart, reliable, and scalable integrated
                technology solutions tailored to meet modern business and
                enterprise requirements
              </p>

              <div className="flex gap-6">
                <Link
                  to={"/about"}
                  data-aos="fade-up"
                  data-aos-delay="600"
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                  className="bg-linear-to-r dark:border-white border-black border-2 py-2 px-6 duration-300 dark:text-white rounded-full  cursor-pointer "
                >
                  Get Started
                </Link>
              </div>
            </div>
            {/* hero imge */}

            <div data-aos="fade-up" className="order-1 sm:order-2 ">
              <video
                loop
                muted
                autoPlay
                className=" rounded-2xl top-0 right-0  w-full object-cover rounded-b-md"
              >
                <source src={bg} />
              </video>
            </div>
          </div>
          {/* background color  */}
        </div>
      </div>
    </>
  );
};

export default Hero;
