import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linked In <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/company/corelinkarabia/",
      style: "rounded-tr-md",
    },

    {
      id: 2,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:info@corelinkarabia.com",
    },

    {
      id: 3,
      child: (
        <>
          Linked In <FiTwitter size={30} />
        </>
      ),
      href: "https://x.com/Corelinkarabia",
      style: "rounded-tr-md",
    },

    {
      id: 4,
      child: (
        <>
          Linked In <FaInstagram size={30} />
        </>
      ),
      href: "https://www.instagram.com/corelinkarabia/?hl=en",
      style: "rounded-tr-md",
    },
  ];
  return (
    <>
      <div className="flex flex-col top-[35%] left-0 fixed z-50 ">
        <ul>
          {links.map(({ id, child, href, style, download }) => (
            <li
              key={id}
              className={
                "hidden  md:flex justify-between items-center w-40 h-14 rounded-md px-4 -ml-25 hover:-ml-2.5 duration-300 dark:text-white    bg-gray-500" +
                "" +
                style
              }
            >
              <a
                href={href}
                className=" flex  justify-between items-center w-full"
                download={download}
                target="_blank"
                rel="noopener noreferrer"
              >
                {child}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SocialLinks;
