import { FiTwitter } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaMobileAlt } from "react-icons/fa";

const Footer = () => {
  const FooterLinks = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "About", link: "/about" },
    { id: 3, title: "Contact", link: "/contact" },
    { id: 4, title: "Services", link: "/services" },
  ];

  return (
    <footer
      role="contentinfo"
      className="relative bg-cover dark:bg-black duration-300"
    >
      <div
        data-aos="fade"
        className="container mx-auto px-10 text-black dark:text-white"
      >
        <div className="grid md:grid-cols-3 py-4">
          {/* Company Info */}
          <section aria-labelledby="footer-company" className="py-4 px-4">
            <Link to={"/"} className="flex  py-2 flex-col ">
              <h3
                data-aos="fade-right"
                className="text-3xl font-semibold dark:text-white text-[#223760]"
              >
                Core{" "}
                <span className=" text-[#636870] dark:text-white">
                  Li
                  <span className="text-[24px]">N</span>k
                </span>
              </h3>
              <h6
                data-aos="fade-left"
                className="text-[#223760] dark:text-white tracking-[0.5em] text-[12px]"
              >
                ARABIA
              </h6>
            </Link>

            <p className="text-sm my-2 w-3/4">
              Delivering End-to-End Technology Solutions with Core Link Arabia
            </p>

            <p className="font-medium">Smart vision, Secure future</p>

            {/* Social Links */}
            <nav
              aria-label="Social media"
              className="flex items-center gap-3 mt-6"
            >
              <a
                href="https://x.com/Corelinkarabia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Core Link on X (Twitter)"
              >
                <FiTwitter className="text-3xl hover:text-primary/40 duration-300" />
              </a>

              <a
                href="https://www.instagram.com/corelinkarabia/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Core Link on Instagram"
              >
                <FaInstagram className="text-3xl hover:text-primary/40 duration-300" />
              </a>

              <a
                href="https://www.linkedin.com/company/corelinkarabia/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Core Link on LinkedIn"
              >
                <FaLinkedin className="text-3xl hover:text-primary/40 duration-300" />
              </a>
            </nav>
          </section>

          {/* Links & Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 col-span-2 md:pl-10">
            {/* Quick Links */}
            <section aria-labelledby="footer-links" className="py-8 px-4">
              <h3 id="footer-links" className="text-xl font-bold mb-3">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {FooterLinks.map((link) => (
                  <li
                    key={link.id}
                    className="hover:translate-x-1 duration-300"
                  >
                    <Link
                      to={link.link}
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                      className="cursor-pointer"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* Services */}
            <section aria-labelledby="footer-services" className="py-8 px-4">
              <h3 id="footer-services" className="text-xl font-bold mb-3">
                Services
              </h3>
              <ul className="space-y-4">
                <Link to={"services#dataCenter"}>
                  <li className="hover:font-medium duration-300 hover:ml-3 cursor-pointer">
                    Data Center
                  </li>
                </Link>
                <Link to={"services#physicalSecurity"}>
                  <li className="hover:font-medium duration-300 hover:ml-3 cursor-pointer pt-2">
                    Physical Security
                  </li>
                </Link>
                <Link to={"services#lowCurrent"}>
                  <li className="hover:font-medium duration-300 hover:ml-3 cursor-pointer pt-2">
                    Smart Building
                  </li>
                </Link>
                <Link to={"services#audioVisual"}>
                  <li className="hover:font-medium duration-300 hover:ml-3 cursor-pointer pt-2">
                    AV & Conference
                  </li>
                </Link>
                <Link to={"services#cybersecurity"}>
                  <li className="hover:font-medium duration-300 hover:ml-3 cursor-pointer pt-2">
                    Cybersecurity
                  </li>
                </Link>
                <Link to={"services#maintenance"}>
                  <li className="hover:font-medium duration-300 hover:ml-3 cursor-pointer pt-2">
                    Maintenance & SLA
                  </li>
                </Link>
              </ul>
            </section>

            {/* Contact */}
            <section aria-labelledby="footer-contact" className="py-8 px-4">
              <h3 id="footer-contact" className="text-xl font-bold mb-3">
                Contact
              </h3>

              <address className="not-italic space-y-4">
                <div className="flex items-start gap-3 text-sm leading-relaxed max-w-sm">
                  <HiOutlineLocationMarker
                    size={30}
                    className="mt-0.5"
                  />
                  <span>
                    King Abdul Aziz Rd, Al Arid District, Riyadh 13342, Saudi
                    Arabia
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <FaMobileAlt size={20} />
                  <a href="tel:+966597080934">+966 59 708 0934</a>
                </div>

                <div className="flex items-center gap-3">
                  <MdOutlineEmail size={20} />
                  <a href="mailto:info@corelinkarabia.com">
                    info@corelinkarabia.com
                  </a>
                </div>
              </address>
            </section>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center py-3 text-sm text-white bg-black/90">
        © 2026 Core Link Arabia. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
