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
import bg from "../assets/website/futuristic-business-scene-with-ultra-modern-ambiance.jpg";
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
        <section className="relative py-52 px-6 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70"></div>

          <div
            style={{ backgroundImage: `url(${bg})` }}
            className="absolute bg-fixed  inset-0 bg-cover bg-center"
          />
          <div className="relative max-w-7xl mx-auto">
            <h1
              data-aos-delay="300"
              data-aos="fade-up"
              className="text-5xl md:text-6xl font-extrabold mb-6 my-20  text-white"
            >
              Our <span className="text-white">Services</span>
            </h1>
            <p
              data-aos-delay="400"
              data-aos="fade-up"
              className="max-w-3xl  text-gray-100 text-lg"
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
              data-aos-delay="400"
              data-aos="fade-up"
              className="inline-flex items-center gap-2 bg-gray-700/50 text-white dark:text-slate-100 px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition"
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
    <div className="flex gap-6 items-start border-b border-[#223760] dark:border-slate-800 pb-8">
      <div className="text-[#223760] dark:text-white mt-1">{icon}</div>
      <div>
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
}


export default Services;
