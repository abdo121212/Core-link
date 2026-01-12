import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Mail, Phone, MapPin } from "lucide-react";
import "leaflet/dist/leaflet.css";
import { Helmet } from "react-helmet";

function Contact() {
  const riyadh = [24.7136, 46.6753];

  return (
    <>
      <Helmet>
        <title>Contact Us - Core Link</title>
        <meta
          name="description"
          content="تواصل معنا في Core Link عبر النموذج أو معلومات الاتصال."
        />
      </Helmet>
      <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white ">
        {/* Hero */}
        <section className="py-32 px-6 text-center bg-linear-to-r from-cyan-200/30 to-blue-200/20 dark:from-slate-900 dark:to-slate-800">
          <h1
            data-aos-delay="300"
            data-aos="fade-left"
            className="text-5xl md:text-6xl font-extrabold mb-4"
          >
            Contact <span className="text-[#223760] dark:text-white">Us</span>
          </h1>
          <p
            data-aos-delay="300"
            data-aos="fade-right"
            className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-lg"
          >
            We'd love to hear from you! Reach out to us via form, email, phone,
            or visit us.
          </p>
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
              123 IT Street, Riyadh, Saudi Arabia
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
            <p
              data-aos-delay="300"
              data-aos="fade-left"
              className="text-gray-700 dark:text-gray-300"
            >
              info@corelinkarabia.com
            </p>
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
              +966 55 123 4567
            </p>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <form
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
            <button className="dark:bg-cyan-500/50 bg-slate-400 hover:bg-cyan-400 dark:text-white text-slate-950 px-6 py-4 rounded-xl font-semibold transition">
              Send Message
            </button>
          </form>

          {/* Map */}
          <div
            data-aos-delay="300"
            data-aos="fade-right"
            className="h-96 w-full rounded-3xl overflow-hidden shadow-lg z-10"
          >
            <MapContainer
              center={riyadh} // مركز الخريطة على الرياض
              zoom={13} // مستوى التكبير
              scrollWheelZoom={false}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={riyadh}>
                <Popup>Core Link Arabia HQ - Riyadh</Popup>
              </Marker>
            </MapContainer>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
