import { GrUserExpert } from "react-icons/gr";
import { GiThink } from "react-icons/gi";
import { RiCustomerService2Line } from "react-icons/ri";
import { SlNote } from "react-icons/sl";

const Features = () => {
  const FeaturesData = [
    {
      id: 1,
      name: "Customer Service",
      icon: (
        <RiCustomerService2Line className="text-5xl text-primary group-hover:text-black duration-300" />
      ),
      description: "Fast response, dedicated support, professional assistance",
      aosDelay: "300",
    },
    {
      id: 2,
      name: "Innovation",
      icon: (
        <GiThink className="text-5xl text-primary group-hover:text-black duration-300" />
      ),
      description: "Innovative solutions to keep your business ahead",
      aosDelay: "500",
    },
    {
      id: 3,

      name: "Efficiency",
      icon: (
        <GrUserExpert className="text-5xl text-primary group-hover:text-black duration-500" />
      ),
      description: "Efficient solutions designed to save time and resources",
      aosDelay: "700",
    },
  ];

  return (
    <>
      <div className="container py-16 sm:min-h-150">
        <div>
          <h1
            className="text-3xl sm:text-4xl text-center mb-12"
            data-aos="fade-up"
          >
            Why choose Us
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {FeaturesData.map(({ id, name, description, icon, aosDelay }) => (
              <div
                key={id}
                data-aos="fade-up"
                data-aos-delay={aosDelay}
                className=" hover:text-black text-center group space-y-4 shadow-2xl select-none  p-4 sm:py-10 sm:space-y-6 hover:bg-linear-to-r from-primary to-secondary rounded-lg hover:shadow-[0_0_40px_#007cfff0] transition-all duration-300"
              >
                <div className="grid place-items-center">{icon}</div>
                <h1 className="text-2xl">{name}</h1>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
