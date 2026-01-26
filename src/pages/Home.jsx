import Hero from "../Components/Hero";
import Partners from "../Components/Partners";
import AboutUs from "../pages/AboutUs";
import Clients from "../Components/Clients";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import ScrollUp from "../Components/ScrollUp";

import {
  Server,
  Network,
  Shield,
  Eye,
  Cpu,
  Wrench,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
const Home = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <main>
      <Helmet>
        <title>Home - Core Link</title>
        <meta
          name="description"
          content="الصفحة الرئيسية لشركة Core Link لحلول تكنولوجيا المعلومات"
        />
      </Helmet>
      <main className=" dark:text-white dark:bg-black  duration-300">
        <ScrollUp showButton={showButton} scrollToTop={scrollToTop} />
        <Hero />
        <AboutUs />
        <div className="container px-14 mx-auto">
          {/* Split Layout Services */}

          <section
            data-aos="fade-up"
            data-aos-delay="300"
            className="max-w-7xl mx-auto px-6 py-24"
          >
            {/* Title */}
            <div className="text-center mb-16">
              <Link
                to="services"
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }
              >
                <h1 className="text-4xl md:text-5xl font-bold text-[#223760] dark:text-white cursor-pointer">
                  Our Services
                </h1>
              </Link>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <ServiceRow
                LinkId="dataCenter"
                icon={<Server />}
                title="Data Center Solutions"
                text="Design, implementation, and maintenance of enterprise-grade data centers with high availability."
              />

              <ServiceRow
                LinkId="physicalSecurity"
                icon={<Eye />}
                title="Physical Security Solutions"
                text="Installation and support of CCTV, access control, and audio-visual systems."
              />

              <ServiceRow
                LinkId="lowCurrent"
                icon={<Cpu />}
                title="Low Current / Smart Building Systems"
                text="Intelligent building and low-current systems delivering automation, efficiency, and centralized management."
              />

              <ServiceRow
                LinkId="audioVisual"
                icon={<Wrench />}
                title="Audio Visual and Smart Conference Systems"
                text="Integrated audio-visual and smart meeting room solutions for effective communication and collaboration."
              />

              <ServiceRow
                LinkId="cybersecurity"
                icon={<Shield />}
                title="Cyber Security Services"
                text="Security assessment, firewall deployment, monitoring, and incident response services."
              />

              <ServiceRow
                LinkId="maintenance"
                icon={<Network />}
                title="Operations, Maintenance & SLA Services"
                text="Operational services ensuring long-term system performance, reliability, and compliance."
              />
            </div>
          </section>

          <Partners />
          <Clients />
          {/* <SocialLinks /> */}

          {/* CTA */}
          <section className=" py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2
                data-aos-delay="300"
                data-aos="fade-up"
                className="text-3xl font-bold mb-4"
              >
                Ready to empower your business with Core Link Arabia?
              </h2>
              <p data-aos-delay="500" data-aos="fade-up" className="mb-6">
                From system design and integration to ongoing operations and
                SLA-based support, Core Link Arabia is your trusted technology
                partner.
              </p>
              <Link
                to={"/contact"}
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }
                data-aos-delay="600"
                data-aos="fade-up"
                className="inline-flex items-center gap-2  bg-black text-white px-6 py-3 rounded-xl hover:scale-105 transition"
              >
                Contact Us <ArrowRight size={18} />
              </Link>
            </div>
          </section>
        </div>
      </main>
    </main>
  );
};

export default Home;

function ServiceRow({ icon, title, text, LinkId }) {
  return (
    <Link
      to={`services#${LinkId}`}
      className="
        group relative
        flex gap-6 items-start
        border-b border-[#223760] dark:border-slate-800 cursor-pointer
        pb-8
      "
    >
      {/* Arrow (Visible always) */}
      <span
        className="
          absolute top-2 -right-7
          text-[#223760] dark:text-white
          transition-transform duration-300
          group-hover:translate-x-2
        "
      >
        <ArrowRight size={22} />
      </span>

      {/* Icon */}
      <div className="text-[#223760] dark:text-white mt-1">{icon}</div>

      {/* Content */}
      <div>
        <h3 className="text-2xl   sm:font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
          {text}
        </p>
      </div>
    </Link>
  );
}
