import { Mail, Phone, MapPin } from "lucide-react";
import "leaflet/dist/leaflet.css";
import { Helmet } from "react-helmet";
import background from "../assets/website/IMG_8021.JPG.jpeg";

function Contact() {
  return (
    <main>
      <Helmet>
        <title>Contact Us - Core Link</title>
        <meta
          name="description"
          content="تواصل معنا في Core Link عبر النموذج أو معلومات الاتصال."
        />
      </Helmet>
      <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white ">
        {/* Hero */}

        <section className="relative flex items-center justify-center px-6 overflow-hidden h-screen">
          {/* Background Image */}
          <div
            style={{ backgroundImage: `url(${background})` }}
            className="absolute inset-0 bg-fixed bg-cover  bg-center z-0"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 z-10"></div>

          {/* Content */}
          <div className="relative z-20 max-w-7xl mx-auto text-center">
            <h1
              data-aos-delay="300"
              data-aos="fade-up"
              className="text-5xl md:text-6xl font-extrabold mb-6 my-20 text-white"
            >
              Contact <span className="text-white">Us</span>
            </h1>
            <p
              data-aos-delay="400"
              data-aos="fade-up"
              className="max-w-3xl text-gray-100 text-lg mx-auto"
            >
              We'd love to hear from you! Reach out to us via form, email,
              phone, or visit us.
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center gap-4">
            <MapPin
              data-aos-delay="300"
              data-aos="fade-down"
              className="text-[#223760] dark:text-white"
              size={32}
            />
            <h3
              className="text-xl font-semibold"
              data-aos-delay="300"
              data-aos="fade-left"
            >
              Address
            </h3>
            <p
              data-aos-delay="300"
              data-aos="fade-right"
              className="text-gray-700 dark:text-gray-300"
            >
              Al Arid Dist. Riyadh
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <Mail
              data-aos-delay="300"
              data-aos="fade-down"
              className="text-[#223760] dark:text-white"
              size={32}
            />
            <h3
              data-aos-delay="300"
              data-aos="fade-right"
              className="text-xl font-semibold"
            >
              Email
            </h3>
            <a
              href="mailto:info@corelinkarabia.com:"
              data-aos-delay="300"
              data-aos="fade-left"
              className="text-gray-700 dark:text-gray-300"
            >
              info@corelinkarabia.com
            </a>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <Phone
              data-aos-delay="300"
              data-aos="fade-down"
              className="text-[#223760] dark:text-white"
              size={32}
            />
            <h3
              data-aos-delay="300"
              data-aos="fade-right"
              className="text-xl font-semibold"
            >
              Phone
            </h3>
            <p
              data-aos-delay="300"
              data-aos="fade-left"
              className="text-gray-700 dark:text-gray-300"
            >
              +966 59 708 0934
            </p>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="max-w-5xl mx-auto px-6 py-24 grid items-center-safe gap-12">
          {/* Form */}
          <form
            action="https://getform.io/f/184edfe2-14eb-4128-8a67-a3467847a450"
            method="POST"
            data-aos-delay="300"
            data-aos="fade-left"
            className="bg-gray-100 dark:bg-slate-900 p-10 rounded-3xl shadow-lg flex flex-col gap-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-4 rounded-xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-4 rounded-xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              className="p-4 rounded-xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
            <button className="bg-blue-950 text-white cursor-pointer  px-6 py-4 rounded-xl font-semibold transition">
              Send Message
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}

export default Contact;
