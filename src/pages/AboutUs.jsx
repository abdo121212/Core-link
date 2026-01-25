import { ShieldCheck, Network, Layers, Activity } from "lucide-react";

import { Helmet } from "react-helmet";
import bgV from "../assets/Video/gradient-technology-background.jpg";
function AboutUs() {
  const steps = [
    {
      icon: Network,
      title: "One-Stop ICT Solutions",
      desc: "Core Link Arabia offers comprehensive ICT, networking, and security services under one roof.",
    },
    {
      icon: Layers,
      title: "Integrated Project Delivery",
      desc: "Our integrated approach ensures every project — from planning and design to implementation and long-term operations — meets modern business needs and operational goals.",
    },
    {
      icon: ShieldCheck,
      title: "Operational Excellence & SLA",
      desc: "Beyond design, Core Link Arabia guarantees operational excellence through structured Service Level Agreements (SLA), proactive maintenance, and technical support.",
    },
    {
      icon: Activity,
      title: "Lifecycle Management & Compliance",
      desc: "Our team manages the full lifecycle of mission-critical ICT and security systems, ensuring high availability, minimal downtime, and regulatory compliance.",
    },
  ];
  return (
    <>
      <Helmet>
        <title>About Us - Core Link</title>
        <meta
          name="description"
          content="تعرف على شركة Core Link وفريق العمل والخدمات التي نقدمها."
        />
      </Helmet>

      <div className="w-full  select-none    overflow-hidden ">
        <section>
          <div className="absolute inset-0 bg-black/40 dark:bg-black/70" />

          <div className="relative z-10 max-w-6xl mx-auto px-4">
            <h2 className="text-center text-4xl font-bold mb-16 text-white">
              About Core Link Arabia
            </h2>

            {/* هنا تحط الـ Capabilities */}

            {/* Capabilities */}
            <div className="grid md:grid-cols-2 gap-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="
          group relative overflow-hidden
          rounded-3xl p-8
          backdrop-blur-xl
          
          border border-white/30 
          shadow-xl
          hover:scale-[1.02]
          transition-all duration-300
        "
                >
                  {/* Glow */}
                  <div
                    className="
          absolute inset-0
          bg-linear-to-br from-[#223670]/10 to-transparent
          opacity-0 group-hover:opacity-100
          transition
        "
                  />

                  {/* Icon */}
                  <div
                    className="
          relative z-10
          mb-6
          flex h-14 w-14 items-center justify-center
          rounded-2xl
          bg-[#223670] text-white
          shadow-lg
        "
                  >
                    <step.icon size={28} />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                      {step.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-32 px-6">
          <div
            style={{
              backgroundImage: `url(${bgV})`,
              backgroundAttachment: "fixed",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="
      relative
      max-w-7xl mx-auto
      min-h-[400px]
      rounded-3xl
      overflow-hidden
      flex items-center justify-center
      text-white
    "
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div
              className="
        relative z-10
        grid grid-cols-1 md:grid-cols-2
        gap-12
        max-w-5xl
        px-6
        text-center md:text-left
      "
            >
              {/* Vision */}
              <div className="space-y-4">
                <h3 className="text-3xl font-bold">Our Vision</h3>
                <p className="text-white/90 text-lg">
                  To become a leading system integrator in the Middle East,
                  delivering innovative and secure technology solutions.
                </p>
              </div>

              {/* Mission */}
              <div className="space-y-4">
                <h3 className="text-3xl font-bold">Our Mission</h3>
                <p className="text-white/90 text-lg">
                  Empowering organizations with reliable IT infrastructure and
                  intelligent systems that drive growth.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function Feature({ icon, title }) {
  return (
    <div className="dark:bg-slate-900 p-6 rounded-2xl flex items-center gap-4 dark:hover:bg-slate-800 transition">
      <div className="">{icon}</div>
      <h4 className="font-semibold">{title}</h4>
    </div>
  );
}

function Card({ title, text }) {
  return (
    <div className=" dark:shadow-white dark:shadow-sm border dark:text-white dark:border-white border-none shadow-2xl p-8 rounded-2xl">
      <h3 className="text-xl font-semibold mb-3 ">{title}</h3>
      <p className="dark:text-gray-400 ">{text}</p>
    </div>
  );
}

function Reason({ text }) {
  return (
    <div className="border border-white p-6 rounded-2xl text-center dark:text-gray-300 shadow-2xl">
      {text}
    </div>
  );
}

export default AboutUs;
