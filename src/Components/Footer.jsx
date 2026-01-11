import { MdOutlineEmail } from "react-icons/md";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMobileAlt,
} from "react-icons/fa";
const Footer = () => {
  const FooterLinks = [
    { id: 1, title: "Home", link: "/" },
    {
      id: 2,
      title: "About",
      link: "/about",
    },
    {
      id: 3,
      title: "Contact",
      link: "/contact",
    },
    {
      id: 4,
      title: "Services",
      link: "/services",
    },
  ];
  return (
    <>
      <footer className="bg-gray-100 dark:bg-dark duration-300">
        <div data-aos="fade" className="container mx-auto px-10 ">
          <div className="grid md:grid-cols-3 py-4">
            {/* company Details */}
            <div className="py-8 px-4">
              <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                Core Link
              </h1>
              <p className="text-sm my-2">
                It is not just a technology company, but a success partner
                building the future with confidence.
              </p>

              <p>Smart vision Secure future</p>
              <br />

              {/* social handle */}
              <div className="flex items-center gap-3 mt-6">
                <a href="/">
                  <FaFacebook className="text-3xl hover:text-primary duration-300" />
                </a>
                <a href="/">
                  <FaInstagram className="text-3xl hover:text-primary duration-300" />
                </a>
                <a href="/">
                  <FaLinkedin className="text-3xl hover:text-primary duration-300" />
                </a>
              </div>
            </div>

            {/* Footer Links section */}
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold mb-3 ">Quick Links</h1>
                  <ul className="space-y-3">
                    {FooterLinks.map((link) => (
                      <li
                        onClick={() =>
                          window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                          })
                        }
                        key={link.id}
                        className="hover:translate-x-1 duration-300 "
                      >
                        <Link
                          to={link.link}
                          className="cursor-pointer hover:text-primary"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold mb-3 ">Services</h1>
                  <ul className="space-y-4">
                    <li>Smart Solutions</li>
                    <li>Safety & Control Solutions</li>
                    <li>Cyber Security Solutions</li>
                    <li>ICT Data Center Solutions</li>
                    <li>System & Networking Solutions</li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold mb-3 ">Contact</h1>

                  {/* contact section */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <HiOutlineLocationMarker size={20} />
                      <p>Riyadh, Kingdom of Saudi Arabia</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <FaMobileAlt size={20} />
                      <p>+966 565 371 907</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <MdOutlineEmail size={20} />
                      <p>Abdallah@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center py-2 font-medium text-2xl">
          @ All Copyright 2026 by Core link{" "}
        </div>
      </footer>
    </>
  );
};

export default Footer;
