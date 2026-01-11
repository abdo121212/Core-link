import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AOS from "aos";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Services from "./pages/Services";
import MainLayout from "./MainLayout";
import Contact from "./pages/Contact";
import Solutions from "./pages/Solutions";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/autoplay";
function App() {
  useEffect(() => {
    AOS.init({
      offset: 140,
      duration: 800,
      easing: "ease-in-out-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },

        {
          path: "/services",
          element: <Services />,
        },

        {
          path: "/solutions",
          element: <Solutions />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
