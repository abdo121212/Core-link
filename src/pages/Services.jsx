import { GrVmMaintenance } from "react-icons/gr";
import { RiSecurePaymentFill } from "react-icons/ri";
import { AiOutlineSound } from "react-icons/ai";
import { MdSecurity } from "react-icons/md";
import { BsFillDatabaseFill } from "react-icons/bs";
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet";
import bg from "../assets/website/cybersecurity-professional-work.jpg";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import WhatWe from "../Components/WhatWe";
import { FaCheck, FaLightbulb } from "react-icons/fa";

import dataCenterImg from "../assets/website/IMG_8005.JPG.jpeg";
import lowCurrentImg from "../assets/website/IMG_8006.JPG.jpeg";
import audioVisualImg from "../assets/website/IMG_8007.JPG.jpeg";
import physicalSecurityImg from "../assets/website/IMG_8008.JPG.jpeg";
import cybersecurityImg from "../assets/website/IMG_8009.JPG.jpeg";
import maintenanceImg from "../assets/website/IMG_8010.JPG.jpeg";

function Services() {
  const { hash } = useLocation();

  console.log(hash);

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
  return (
    <main>
      <Helmet>
        <title>Services - Core Link</title>
        <meta
          name="description"
          content="خدمات Core Link في تركيب الشبكات، الأمن، الأنظمة الذكية، والصوت والصورة."
        />
      </Helmet>
      <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
        <div>
          {/* Hero */}
          <section className="relative py-52 px-6 overflow-hidden h-screen">
            {/* Background Image */}
            <div
              style={{ backgroundImage: `url(${bg})` }}
              className="absolute inset-0 bg-fixed bg-cover  bg-center z-0"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 z-10"></div>

            {/* Content */}
            <div className="relative z-20 max-w-7xl mx-auto text-center">
              <h1
                data-aos-delay="300"
                data-aos="fade-up"
                className="text-5xl md:text-6xl font-extrabold mb-6 my-20 text-white"
              >
                Our <span className="text-white">Services</span>
              </h1>
              <p
                data-aos-delay="400"
                data-aos="fade-up"
                className="max-w-3xl text-gray-100 text-lg mx-auto"
              >
                Professional IT services tailored to design, deploy, and
                maintain secure and scalable technology environments.
              </p>
            </div>
          </section>
          <WhatWe />

          {/* --- 1. Data Center Solutions --- */}
          <section
            id="dataCenter"
            className="relative w-full dark:bg-dark bg-white text-black dark:text-white flex items-center"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full items-stretch">
              {/* Image Section */}
              <div className="order-first md:order-0 relative h-100 md:h-auto w-full overflow-hidden">
                <img
                  src={dataCenterImg}
                  alt="Data Center"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/5 dark:bg-black/20 pointer-events-none transition-colors duration-300"></div>
              </div>

              {/* Content Section */}
              <div className="flex flex-col justify-center px-8 lg:px-20 py-12 space-y-4">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 bg-[#223760] shadow-lg shadow-[#223760]/20">
                    <BsFillDatabaseFill className="text-white text-2xl" />
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold">
                    Data Center Solutions
                  </h2>
                </div>

                <p className="dark:text-gray-300 leading-relaxed">
                  Design, deployment, and operation of reliable IT and data
                  center environments supporting mission-critical business
                  systems.
                </p>

                <ul className="space-y-4">
                  {[
                    "Data Center Design & Build",
                    "Structured Cabling Systems",
                    "Power & Cooling Systems",
                    "Server & Storage Solutions",
                    "Core Network Infrastructure",
                    "Environmental Monitoring",
                    "Centralized Operations Dashboards",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-4 group">
                      <FaCheck className="text-[#223760] dark:text-white mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="dark:text-gray-200">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <Link
                    to={"/contact"}
                    onClick={() =>
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      })
                    }
                    className="bg-[#223760] text-white font-medium py-3 px-8 rounded-md transition-all duration-300 inline-block shadow-md hover:shadow-[#223760]/40"
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* --- 2. Physical Security Solutions --- */}
          <section
            id="physicalSecurity"
            className="relative w-full dark:bg-[#0f0f0f] bg-white text-black dark:text-white flex items-center"
          >
            {/* التعديل: استخدام flex-col-reverse للموبايل فقط لرفع الصورة */}
            <div className="flex flex-col-reverse md:grid md:grid-cols-2 w-full h-full items-stretch">
              <div className="flex flex-col justify-center px-8 lg:px-20 py-12 space-y-8 bg-gray-300 dark:bg-black">
                <div className="space-y-4">
                  <div className="bg-[#223760]  w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-[#223760]/20">
                    <MdSecurity className="text-white text-2xl" />
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
                    Physical Security Solutions
                  </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl text-lg">
                  Integrated physical and digital security services ensuring
                  protection, visibility, and operational control.
                </p>
                <ul className="space-y-4">
                  {[
                    "CCTV & Video Surveillance",
                    "Smart Access Controls",
                    "Perimeter Security Systems",
                    "Intrusion Detection Systems.",
                    "Fire Safety Systems",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-4 group">
                      <FaCheck className="text-[#223760]  dark:text-white mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-700 dark:text-gray-200 font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <Link
                    to={"/contact"}
                    onClick={() =>
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      })
                    }
                    className="bg-[#223760] text-white font-medium py-4 px-10 rounded-md transition-all duration-300 inline-block shadow-md hover:shadow-[#223760]/40"
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>
              <div className="relative h-100 md:h-auto w-full overflow-hidden">
                <img
                  src={physicalSecurityImg}
                  alt="Physical Security"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/5 dark:bg-black/20 pointer-events-none transition-colors duration-300"></div>
              </div>
            </div>
          </section>

          {/* --- 3. Low Current Systems --- */}
          <section
            id="lowCurrent"
            className="relative w-full dark:bg-dark bg-white text-black dark:text-white flex items-center"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full items-stretch">
              {/* Image Section */}
              <div className="order-first md:order-0 relative h-100 md:h-auto w-full overflow-hidden">
                <img
                  src={lowCurrentImg}
                  alt="Low Current Systems"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/5 dark:bg-black/20 pointer-events-none transition-colors duration-300"></div>
              </div>

              {/* Content Section */}
              <div className="flex flex-col justify-center px-8 lg:px-20 py-12 space-y-8">
                <div className="space-y-4">
                  <div className="bg-[#223760] w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-[#223760]/20">
                    <FaLightbulb className="text-white text-2xl" />
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold">
                    Low Current / Smart Building Systems
                  </h2>
                </div>

                <p className="dark:text-gray-300 leading-relaxed max-w-xl">
                  Intelligent building and low-current systems delivering
                  automation, efficiency, and centralized management.
                </p>

                <ul className="space-y-2">
                  {[
                    "Building Management Systems (BMS)",
                    "Guest Room & Hospitality Systems",
                    "Energy & Environment Monitoring",
                    "Parking & Access Systems",
                    "Public Address & Intercom Systems",
                    "Central Monitoring Platforms",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-4 group">
                      <FaCheck className="text-[#223760] dark:text-white mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="dark:text-gray-200">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <Link
                    to={"/contact"}
                    onClick={() =>
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      })
                    }
                    className="bg-[#223760] text-white font-medium py-3 px-8 rounded-md transition-all duration-300 inline-block shadow-md hover:shadow-[#223760]/40"
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* --- 4. Audio Visual (AV) --- */}
          <section
            id="audioVisual"
            className="relative w-full dark:bg-dark bg-white text-black dark:text-white flex items-center"
          >
            <div className="flex flex-col-reverse md:grid md:grid-cols-2 w-full h-full items-stretch">
              {/* Content */}
              <div className="flex flex-col justify-center px-8 lg:px-20 py-12 space-y-8 bg-gray-300 dark:bg-black">
                <div className="space-y-4">
                  <div className="bg-[#223760] w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-[#223760]/20">
                    <AiOutlineSound className="text-white text-2xl" />
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold">
                    Audio Visual (AV) and Smart Conference Systems
                  </h2>
                </div>

                <p className="dark:text-gray-300 text-lg leading-relaxed max-w-xl">
                  Integrated audio-visual and smart meeting room solutions for
                  effective communication and collaboration.
                </p>

                <ul className="space-y-6">
                  {[
                    "Smart Conference & Meeting Room Systems",
                    "Digital Signage Solutions",
                    "System Integration & Commissioning",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-4 group">
                      <FaCheck className="text-[#223760] dark:text-white mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="dark:text-gray-200">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <Link
                    to={"/contact"}
                    onClick={() =>
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      })
                    }
                    className="bg-[#223760] text-white font-medium py-3 px-8 rounded-md transition-all duration-300 inline-block shadow-md hover:shadow-[#223760]/40"
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>

              {/* Image */}
              <div className="relative h-100 md:h-auto w-full overflow-hidden">
                <img
                  src={audioVisualImg}
                  alt="Audio Visual Systems"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/5 dark:bg-black/20 pointer-events-none transition-colors duration-300"></div>
              </div>
            </div>
          </section>

          {/* --- 5. Cybersecurity --- */}
          <section
            id="cybersecurity"
            className="relative w-full dark:bg-dark bg-white text-black dark:text-white flex items-center"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full items-stretch">
              {/* Image */}
              <div className="order-first md:order-0 relative h-100 md:h-auto w-full overflow-hidden">
                <img
                  src={cybersecurityImg}
                  alt="Cybersecurity Services"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/5 dark:bg-black/20 pointer-events-none transition-colors duration-300"></div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center px-8 lg:px-20 py-12 space-y-8">
                <div className="space-y-4">
                  <div className="bg-[#223760] w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-[#223760]/20">
                    <RiSecurePaymentFill className="text-white text-2xl" />
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold">
                    Cybersecurity Services
                  </h2>
                </div>

                <p className="dark:text-gray-300 text-lg leading-relaxed max-w-xl">
                  Protect your digital environment and ensure secure operation.
                </p>

                <ul className="space-y-3">
                  {[
                    "Risk & Compliance Services",
                    "Threat Protection & Response",
                    "Secure Network Design",
                    "Security Operations Center (SOC)",
                    "Vulnerability Assessment & Penetration Testing",
                    "Identity & Access Management (IAM)",
                    "Cloud Security & Data Protection",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-4 group">
                      <FaCheck className="text-[#223760] dark:text-white mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="dark:text-gray-200">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <Link
                    to={"/contact"}
                    onClick={() =>
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      })
                    }
                    className="bg-[#223760] text-white font-medium py-3 px-8 rounded-md transition-all duration-300 inline-block shadow-md hover:shadow-[#223760]/40"
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* --- 6. Maintenance & SLA --- */}
          <section
            id="maintenance"
            className="relative w-full dark:bg-dark bg-white text-black dark:text-white flex items-center"
          >
            <div className="flex flex-col-reverse md:grid md:grid-cols-2 w-full h-full items-stretch">
              {/* Content */}
              <div className="flex flex-col justify-center px-8 lg:px-20 py-12 space-y-8 bg-gray-300 dark:bg-black">
                <div className="space-y-4">
                  <div className="bg-[#223760] w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-[#223760]/20">
                    <GrVmMaintenance className="text-white text-2xl" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold">
                    Operations, Maintenance & SLA Services
                  </h2>
                </div>

                <p className="dark:text-gray-300 text-lg leading-relaxed max-w-xl">
                  Operational services ensuring long-term system performance,
                  reliability, and compliance.
                </p>

                <ul className="space-y-4">
                  {[
                    "Service Level Agreements (SLA)",
                    "Operations & Maintenance (O&M)",
                    "Preventive Maintenance Programs",
                    "System Health Monitoring",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-4 group">
                      <FaCheck className="text-[#223760] dark:text-white mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="dark:text-gray-200">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <Link
                    to={"/contact"}
                    onClick={() =>
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      })
                    }
                    className="bg-[#223760] text-white font-medium py-3 px-8 rounded-md transition-all duration-300 inline-block shadow-md hover:shadow-[#223760]/40"
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>

              {/* Image */}
              <div className="relative h-100 md:h-auto w-full overflow-hidden">
                <img
                  src={maintenanceImg}
                  alt="Operations & Maintenance"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/5 dark:bg-black/20 pointer-events-none transition-colors duration-300"></div>
              </div>
            </div>
          </section>
        </div>

        {/* CTA */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto rounded-3xl  p-16 text-center">
            <h2
              data-aos-delay="300"
              data-aos="fade-up"
              className="text-4xl font-bold mb-6"
            >
              Need Professional IT Services?
            </h2>
            <p
              data-aos-delay="500"
              data-aos="fade-up"
              className="text-gray-700 dark:text-gray-300 mb-8"
            >
              Our certified engineers are ready to support your business at
              every stage.
            </p>
            <Link
              to={"/contact"}
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              data-aos-delay="400"
              data-aos="fade-up"
              className="inline-flex items-center gap-2 bg-gray-700/50 text-white dark:text-slate-100 px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition"
            >
              Request a Service <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Services;
