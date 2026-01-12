import { ShieldCheck, Network, Server, Cpu, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import backGr from "../assets/website/employee-working-marketing-setting.jpg";
function AboutUs() {
  return (
    <>
      <Helmet>
        <title>About Us - Core Link</title>
        <meta
          name="description"
          content="تعرف على شركة Core Link وفريق العمل والخدمات التي نقدمها."
        />
      </Helmet>

      <div className="w-full  select-none dark:bg-slate-950   overflow-hidden bg-white">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center">
          <div
            style={{ backgroundImage: `url(${backGr})` }}
            className="absolute bg-fixed  inset-0 bg-cover bg-center"
          />

            <div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 text-center max-w-4xl px-6"
            >
              <h1
                data-aos-delay="300"
                data-aos="fade-up"
                className="text-4xl md:text-6xl font-bold mb-6 text-white"
              >
                About <span >Core Link</span>
              </h1>
              <p
                data-aos-delay="400"
                data-aos="fade-up"
                className="text-white text-lg md:text-xl leading-relaxed "
              >
                Integrated Technology Solutions delivering secure, scalable, and
                smart IT infrastructure across Saudi Arabia.
              </p>
            </div>
        </section>

        {/* Who We Are */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2
                data-aos-delay="500"
                data-aos="fade-up"
                className="text-3xl font-bold mb-4"
              >
                Who We Are
              </h2>
              <p
                data-aos-delay="600"
                data-aos="fade-up"
                className="dark:text-gray-400 leading-relaxed"
              >
                Core Link is a Saudi-based technology company specializing in
                ICT solutions, data centers, networking, cyber security, smart
                systems, and low current solutions. We connect businesses with
                future-ready technology.
              </p>
            </div>

            <div
              data-aos-delay="300"
              data-aos="fade-up"
              className="grid grid-cols-2 gap-6"
            >
              <Feature icon={<Network />} title="Networking" />
              <Feature icon={<Server />} title="Data Centers" />
              <Feature icon={<ShieldCheck />} title="Cyber Security" />
              <Feature icon={<Cpu />} title="Smart Solutions" />
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="dark:bg-slate-900 py-20 px-6">
          <div
            data-aos-delay="300"
            data-aos="fade-up"
            className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10"
          >
            <Card
              title="Our Vision"
              text="To become a leading system integrator in the Middle East, delivering innovative and secure technology solutions."
            />
            <Card
              title="Our Mission"
              text="Empowering organizations with reliable IT infrastructure and intelligent systems that drive growth."
            />
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <h2
            data-aos-delay="300"
            data-aos="fade-up"
            className="text-3xl font-bold text-center mb-12"
          >
            Why Core Link?
          </h2>

          <div
            data-aos-delay="500"
            data-aos="fade-up"
            className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 "
          >
            <Reason text="Enterprise-grade solutions" />
            <Reason text="Certified engineers" />
            <Reason text="End-to-end integration" />
            <Reason text="24/7 technical support" />
          </div>
        </section>

        {/* CTA */}
        <section className="bg-linear-to-r dark:from-slate-950 dark:to-slate-800 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              data-aos-delay="300"
              data-aos="fade-up"
              className="text-3xl font-bold mb-4"
            >
              Let’s Build the Future Together
            </h2>
            <p data-aos-delay="500" data-aos="fade-up" className="mb-6">
              Partner with Core Link for reliable, scalable, and secure IT
              solutions.
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
    <div className="dark:bg-slate-950 border dark:text-white dark:border-slate-800 border-none shadow-2xl p-8 rounded-2xl">
      <h3 className="text-xl font-semibold mb-3 ">{title}</h3>
      <p className="dark:text-gray-400 ">{text}</p>
    </div>
  );
}

function Reason({ text }) {
  return (
    <div className="dark:bg-slate-900 p-6 rounded-2xl text-center dark:text-gray-300 shadow-2xl">
      {text}
    </div>
  );
}

export default AboutUs;
