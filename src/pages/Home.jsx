import Hero from "../Components/Hero";
import Quotes from "../Components/Quotes";
import Banner from "../Components/Banner";
import TwoBanner from "../Components/TwoBanner";
import Features from "../Components/Features";
import Security from "../Components/Security";
import Partners from "../Components/Partners";
import Clients from "../Components/Clients";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - Core Link</title>
        <meta
          name="description"
          content="الصفحة الرئيسية لشركة Core Link لحلول تكنولوجيا المعلومات"
        />
      </Helmet>
      <main className=" dark:text-white dark:bg-black  duration-300">
        <div className="container px-10 mx-auto">
        <Hero />
        {/* <Quotes /> */}
        <Banner />
        <TwoBanner />
        <Security />
        <Features />
        <Partners />
        <Clients />
        </div>
      </main>
    </>
  );
};

export default Home;
