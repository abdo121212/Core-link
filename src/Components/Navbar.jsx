import { RxDoubleArrowUp } from "react-icons/rx";

import { useState } from "react";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import DarkMode from "./DarkMode";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setOpen(!open);
  };
  const navLinks = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "About",
      link: "about",
    },
    {
      id: 3,
      name: "Solutions",
      link: "solutions",
    },
    {
      id: 4,
      name: "Services",
      link: "services",
    },
    {
      id: 5,
      name: "Contact",
      link: "contact",
    },
  ];

  return (
    <nav className=" md:py-0 w-full   mx-auto   z-999   fixed dark:bg-black/90 bg-white rounded-b-2xl  shadow-xl">
      <div className="flex items-center justify-between  px-5 py-2">
        {/* Logo */}
        <Link to={"/"} className="flex items-center p-5 flex-col ">
          <h3
            data-aos="fade-right"
            className="text-3xl font-semibold dark:text-white text-[#223760]"
          >
            Core <span className=" text-[#636870] dark:text-white">Link</span>
          </h3>
          <h6
            data-aos="fade-left"
            className="text-[#223760] dark:text-white tracking-widest"
          >
            ARABIA
          </h6>
        </Link>

        {/* Desktop Menu section */}

        <nav className="hidden md:flex items-center gap-x-7">
          <ul className="flex items-center gap-8">
            {navLinks.map(({ id, name, link }) => {
              return (
                <li key={id} data-aos="fade-up">
                  <NavLink
                    to={`${link}`}
                    onClick={() =>
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      })
                    }
                    className={({ isActive }) =>
                      isActive
                        ? "text-xl font-medium border-b-2 hover:scale-105 border-[#223760] text-[#223760]  dark:text-white dark:border-white duration-500 transition-colors py-2"
                        : "transition-colors py-2 text-xl font-medium  "
                    }
                  >
                    {name}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          <DarkMode />
        </nav>

        {/* Mobile Menu section */}

        <nav className="md:hidden flex items-center gap-4  ">
          <DarkMode />

          {showMenu ? (
            <HiMenuAlt1
              onClick={toggleMenu}
              className="cursor-pointer"
              size={30}
            />
          ) : (
            <HiMenuAlt3
              onClick={toggleMenu}
              className="cursor-pointer"
              size={30}
            />
          )}

          {open && (
            <div className=" absolute left-0 right-0 top-full bottom-0 z-9999">
              <div className="bg-white dark:bg-black w-full h-80">
                <div className="flex items-center justify-center w-full h-full">
                  <ul className="flex flex-col space-y-3">
                    {navLinks.map(({ id, link, name }) => (
                      <Link
                        to={link}
                        key={id}
                        onClick={() => {
                          setOpen(!open);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className=" border flex items-center justify-center  py-2 px-7  rounded-2xl text-xl duration-300 hover:scale-110"
                      >
                        {name}
                      </Link>
                    ))}
                  </ul>
                </div>
              </div>

              <RxDoubleArrowUp
                onClick={() => setOpen(!open)}
                size={25}
                className="absolute  left-1/2  -translate-x-1/2 -translate-y-1/2 cursor-pointer animate-bounce  text-  "
              />
            </div>
          )}
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
