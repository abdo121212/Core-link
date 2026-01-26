import { Helmet } from "react-helmet";
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

      <div id="about" className="w-full   select-none   overflow-hidden ">
        <section className="h-fit ">
          <div className=" max-w-6xl mx-auto  mt-40">
            <h2 className="text-center text-5xl  font-bold mb-16 dark:text-white  text-[#223670]">
              About Us
            </h2>

            <section className="max-w-5xl mx-auto text-start space-y-6 p-4">
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Core Link Arabia delivers comprehensive ICT, networking, and
                security solutions under one roof. Our integrated approach
                covers every stage — from strategic planning and design to
                seamless implementation and long-term operations — ensuring
                alignment with modern business objectives.
              </p>

              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Beyond deployment, we guarantee operational excellence through
                structured Service Level Agreements (SLA), proactive
                maintenance, and expert technical support. We manage the full
                lifecycle of mission-critical systems to ensure high
                availability, minimal downtime, and full regulatory compliance.
              </p>
            </section>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="px-6">
          <div
            className="
      relative
      max-w-7xl mx-auto
      min-h-100
      rounded-3xl
      overflow-hidden
      flex items-center justify-center
      text-white
    "
          >
            {/* Content */}
            <div
              className="text-black  dark:text-white
        relative z-10
        grid grid-cols-1 md:grid-cols-2
        gap-12
        max-w-5xl
        px-6
        text-center  md:text-left
      "
            >
              {/* Vision */}
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-[#223670] dark:text-white">
                  Our Vision
                </h3>
                <p className=" text-lg">
                  To become a leading system integrator in the Middle East,
                  delivering innovative and secure technology solutions.
                </p>
              </div>

              {/* Mission */}
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-[#223670] dark:text-white">
                  Our Mission
                </h3>
                <p className="text-lg">
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

export default AboutUs;
