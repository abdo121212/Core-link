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
          <section aria-labelledby="footer-company" className="py-8 px-4">
            <h2
              id="footer-company"
              className="sm:text-3xl text-xl font-bold mb-3"
            >
              Core Link
            </h2>

            <p className="text-sm my-2">
              It is not just a technology company, but a success partner
              building the future with confidence.
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
                <li>Smart Solutions</li>
                <li>Safety & Control Solutions</li>
                <li>Cyber Security Solutions</li>
                <li>ICT Data Center Solutions</li>
                <li>System & Networking Solutions</li>
              </ul>
            </section>

            {/* Contact */}
            <section aria-labelledby="footer-contact" className="py-8 px-4">
              <h3 id="footer-contact" className="text-xl font-bold mb-3">
                Contact
              </h3>

              <address className="not-italic space-y-4">
                <div className="flex items-center gap-3">
                  <HiOutlineLocationMarker size={20} />
                  <span>Riyadh, Kingdom of Saudi Arabia</span>
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
