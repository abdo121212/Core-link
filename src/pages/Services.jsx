import {
  Server,
  Network,
  Shield,
  Eye,
  Cpu,
  Wrench,
  ArrowRight,
} from "lucide-react";
import { Helmet } from "react-helmet";

import { Link } from "react-router-dom";

function Services() {
  return (
    <>
      {" "}
      <Helmet>
        <title>Services - Core Link</title>
        <meta
          name="description"
          content="خدمات Core Link في تركيب الشبكات، الأمن، الأنظمة الذكية، والصوت والصورة."
        />
      </Helmet>
      <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
        {/* Hero */}
        <section className="relative py-32 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-200/20 via-cyan-100/10 to-transparent dark:from-slate-950 dark:via-slate-800 dark:to-transparent" />
          <div className="relative max-w-7xl mx-auto">
            <h1
              data-aos-delay="300"
              data-aos="fade-up"
              className="text-5xl md:text-6xl font-extrabold mb-6"
            >
              Our{" "}
              <span className="text-[#223760] dark:text-[#223760]">
                Services
              </span>
            </h1>
            <p
              data-aos-delay="400"
              data-aos="fade-up"
              className="max-w-3xl text-gray-700 dark:text-gray-300 text-lg"
            >
              Professional IT services tailored to design, deploy, and maintain
              secure and scalable technology environments.
            </p>
          </div>
        </section>

        {/* Split Layout Services */}
        <section
          data-aos-delay="300"
          data-aos="fade-up"
          className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16"
        >
          <ServiceRow
            icon={<Server />}
            title="Data Center Services"
            text="Design, implementation, and maintenance of enterprise-grade data centers with high availability."
          />
          <ServiceRow
            icon={<Network />}
            title="Networking Services"
            text="Planning, deployment, and optimization of wired and wireless network infrastructures."
          />
          <ServiceRow
            icon={<Shield />}
            title="Cyber Security Services"
            text="Security assessment, firewall deployment, monitoring, and incident response services."
          />
          <ServiceRow
            icon={<Eye />}
            title="Physical Security & AV"
            text="Installation and support of CCTV, access control, and audio-visual systems."
          />
          <ServiceRow
            icon={<Cpu />}
            title="Smart & Low Current Systems"
            text="Design and integration of intelligent building and automation systems."
          />
          <ServiceRow
            icon={<Wrench />}
            title="Managed IT Services"
            text="Ongoing support, monitoring, and preventive maintenance for your IT environment."
          />
        </section>

        {/* Numbers / Stats */}
        <section
          data-aos-delay="300"
          data-aos="fade-up"
          className="bg-gray-100 dark:bg-slate-900 py-20 px-6"
        >
          <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
            <Stat number="10+" label="Years Experience" />
            <Stat number="200+" label="Projects Delivered" />
            <Stat number="24/7" label="Support Availability" />
            <Stat number="99.9%" label="System Uptime" />
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto rounded-3xl bg-linear-to-r from-cyan-500/20 to-blue-600/20 dark:from-cyan-500/10 dark:to-blue-600/10 p-16 text-center">
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
              data-aos-delay="400"
              data-aos="fade-up"
              className="inline-flex items-center gap-2 bg-cyan-500 text-white dark:text-slate-950 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 transition"
            >
              Request a Service <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

function ServiceRow({ icon, title, text }) {
  return (
    <div className="flex gap-6 items-start border-b border-primary dark:border-slate-800 pb-8">
      <div className="text-cyan-500 dark:text-cyan-400 mt-1">{icon}</div>
      <div>
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
}

function Stat({ number, label }) {
  return (
    <div>
      <h3 className="text-4xl font-extrabold text-cyan-500 dark:text-cyan-400 mb-2">
        {number}
      </h3>
      <p className="text-gray-700 dark:text-gray-300">{label}</p>
    </div>
  );
}

export default Services;
