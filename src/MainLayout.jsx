import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const MainLayout = () => {
  return (
    <section className="dark:text-white ">
      <Navbar />

      <Outlet />

      <Footer />
    </section>
  );
};

export default MainLayout;
