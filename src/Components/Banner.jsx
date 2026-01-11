import banner from "../assets/website/cybersecurity-data-protection-concept.jpg";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="py-12 sm:py-10 relative">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
          <img
            src={banner}
            alt="banner"
            data-aos="fade-up"
            className="rounded-3xl duration-300 hover:blur-sm w-3/4"
          />

          {/* text setion  */}
          <div className="space-y-5 lg:pr-20 order-2 sm:order-1 ">
            <h1 className="text-4xl font-semibold" data-aos="fade-up">
              We provide
              <span className="bg-linear-to-r  from-primary to-secondary bg-clip-text  text-transparent">
                Integrated ICT, smart, networking, and security solutions under
                one roof.
              </span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
              End-to-end ICT, networking, smart, and security solutions for a
              safer, smarter, and connected future
            </p>

            <div className="flex gap-6">
              <Link
                to={"/about"}
                className="primary-but cursor-pointer"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
