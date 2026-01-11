import banner from "../assets/website/employee-working-marketing-setting.jpg";

const TwoBanner = () => {
  return (
    <div className="py-12 sm:py-10  relative">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
          {/* text setion  */}
          <div className="space-y-5 lg:pr-20 order-2 sm:order-1 ">
            <h1 className="text-4xl font-semibold ">
              GET READY TO ENJOY WISH CORE LINK ,
              <span className="bg-linear-to-r  from-primary to-secondary bg-clip-text  text-transparent">
                We build intelligent, secure, and connected environments.
              </span>
            </h1>
            <p>
              We empower businesses with smart and reliable technology
              solutions.
            </p>
          </div>

          {/* image setion  */}
          <div className="order-1 sm:order-2">
            <img
              src={banner}
              alt="banner"
              className="rounded-3xl"
              width={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoBanner;
