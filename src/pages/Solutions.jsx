import {
  Server,
  Network,
  ShieldCheck,
  Eye,
  Cpu,
  Database,
  Lock,
  ArrowRight,
} from "lucide-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Solutions() {
  return (
    <>
      {" "}
      <Helmet>
        <title>Solutions - Core Link</title>
        <meta
          name="description"
          content="استكشف حلول Core Link المتقدمة لتكنولوجيا المعلومات."
        />
      </Helmet>
      <div className="w-full select-none dark:bg-slate-950 dark:text-white">
        {/* Hero */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.15),transparent_60%)]" />

          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="relative z-10 text-center max-w-5xl px-6"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
              Our <span className="text-[#223760]">Solutions</span>
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="500"
              className="dark:text-gray-300 text-lg md:text-xl leading-relaxed"
            >
              End-to-end technology solutions designed to secure, connect, and
              transform your business infrastructure.
            </p>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <h2
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-4xl font-bold text-center mb-16"
          >
            What We Deliver
          </h2>

          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            <SolutionCard
              icon={<Server />}
              title="Data Center Solutions"
              text="Design, build, and optimize scalable data centers with high availability and efficiency."
            />
            <SolutionCard
              icon={<Network />}
              title="Networking & Structured Cabling"
              text="Robust wired and wireless networks engineered for performance, reliability, and growth."
            />
            <SolutionCard
              icon={<ShieldCheck />}
              title="Cyber Security Solutions"
              text="Advanced protection strategies to safeguard your data, systems, and digital assets."
            />
            <SolutionCard
              icon={<Eye />}
              title="Physical Security & AV"
              text="Integrated surveillance, access control, and audio-visual systems for complete visibility."
            />
            <SolutionCard
              icon={<Cpu />}
              title="Smart & Low Current Systems"
              text="Intelligent building systems that enhance automation, control, and operational efficiency."
            />
            <SolutionCard
              icon={<Database />}
              title="ICT & System Integration"
              text="Seamless integration of hardware and software into one powerful ecosystem."
            />
          </div>
        </section>

        {/* How We Work */}
        <section className="dark:bg-slate-900 py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <h2
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-4xl font-bold text-center mb-16"
            >
              How We Work
            </h2>

            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="grid md:grid-cols-4 gap-8"
            >
              <Step
                number="01"
                title="Consult"
                text="Understand your business goals and challenges."
              />
              <Step
                number="02"
                title="Design"
                text="Architect scalable and secure solutions."
              />
              <Step
                number="03"
                title="Implement"
                text="Deploy with precision and best practices."
              />
              <Step
                number="04"
                title="Support"
                text="Continuous monitoring and expert support."
              />
            </div>
          </div>
        </section>

        {/* Security First Banner */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border dark:border-slate-800 shadow-2xl border-none">
            <div className="absolute inset-0 bg-linear-to-r dark:from-slate-950 dark:to-slate-800" />

            <div className="relative z-10 p-14 text-center">
              <Lock
                data-aos="fade-up"
                data-aos-delay="200"
                className="mx-auto mb-6 text-cyan-400"
                size={48}
              />
              <h2
                className="text-4xl font-bold mb-4"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Security by Design
              </h2>
              <p
                data-aos="fade-up"
                data-aos-delay="400"
                className="dark:text-gray-300 max-w-3xl mx-auto"
              >
                Every solution we deliver is built with security, compliance,
                and resilience at its core.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r dark:from-slate-950 dark:to-slate-800 py-20">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-4xl font-bold mb-6"
            >
              Ready to Transform?
            </h2>
            <p data-aos="fade-up" data-aos-delay="400" className="mb-8">
              Let Core Link design and deliver the right technology solutions
              for your business.
            </p>
            <Link
              to={"/contact"}
              data-aos="fade-up"
              data-aos-delay="500"
              className="inline-flex items-center gap-2 darK:bg-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
            >
              Talk to Our Experts <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

function SolutionCard({ icon, title, text }) {
  return (
    <div className="dark:bg-slate-900 p-8 rounded-2xl border dark:border-slate-800 border-none shadow-2xl hover:border-cyan-400/40 hover:-translate-y-2 transition">
      <div className="text-cyan-400 mb-5">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{text}</p>
    </div>
  );
}

function Step({ number, title, text }) {
  return (
    <div className="dark:bg-slate-950 border dark:border-slate-800 border-none shadow-2xl p-8 rounded-2xl text-center">
      <span className="text-cyan-400 font-bold text-3xl">{number}</span>
      <h4 className="mt-4 mb-2 font-semibold">{title}</h4>
      <p className="dark:text-gray-400 text-sm">{text}</p>
    </div>
  );
}

export default Solutions;
