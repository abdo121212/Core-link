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
      name: "Services",
      link: "services",
    },
    {
      id: 3,
      name: "Contact Us",
      link: "contact",
    },
    {
      id: 4,
      name: "Profile",
      link: "/CoreLink Arabia Company Profile f2.pdf",
      download: true,
    },
  ];

  return (
    <nav className=" md:py-0 w-full  select-none  mx-auto   z-999   fixed dark:bg-black/90 bg-white   shadow-xl">
      <div className="flex items-center justify-between   px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14  mx-auto py-2">
        {/* Logo */}
        <Link to={"/"} className="flex items-center p-5 flex-col ">
          <h3
            data-aos="fade-right"
            className="text-3xl font-semibold dark:text-white text-[#223760]"
          >
            Core{" "}
            <span className=" text-[#636870] dark:text-white">
              Li
              <span className="text-[24px]">N</span>k
            </span>
          </h3>
          <h6
            data-aos="fade-left"
            className="text-[#223760] dark:text-white tracking-[0.5em] text-[12px]"
          >
            ARABIA
          </h6>
        </Link>

        {/* Desktop Menu section */}

        <nav className="hidden md:flex items-center gap-x-7">
          <ul className="flex items-center gap-8">
            {navLinks.map(({ id, name, link, download }) => (
              <li key={id}>
                {download ? (
                  <a
                    href={link}
                    download
                    className="text-xl font-medium hover:scale-105 transition-all duration-300"
                  >
                    {name}
                  </a>
                ) : (
                  <NavLink
                    to={link}
                    end
                    className={({ isActive }) =>
                      `relative transition-all duration-300 ${
                        isActive
                          ? "text-2xl font-medium text-[#223760] dark:text-white"
                          : "text-xl font-medium hover:scale-105"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <span className="relative inline-block">
                        {name}
                        {isActive && (
                          <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#223760] dark:bg-white rounded-full"></span>
                        )}
                      </span>
                    )}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

          <DarkMode />
        </nav>

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
                    {navLinks.map(({ id, link, name, download }) => (
                      <li key={id}>
                        {download ? (
                          <a
                            href={link}
                            download
                            onClick={() => setOpen(false)}
                            className="border flex items-center justify-center py-2 px-7 rounded-2xl text-xl duration-300 hover:scale-110"
                          >
                            {name}
                          </a>
                        ) : (
                          <Link
                            to={link}
                            onClick={() => {
                              setOpen(false);
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                            className="border flex items-center justify-center py-2 px-7 rounded-2xl text-xl duration-300 hover:scale-110"
                          >
                            {name}
                          </Link>
                        )}
                      </li>
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
