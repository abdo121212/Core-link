import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linked In <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/abdallah-atef-a70698242/",
      style: "rounded-tr-md",
    },

    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/abdo121212",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:atfbdallh147@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          profile <BsFillFileEarmarkPersonFill size={30} />
        </>
      ),
      href: "/CoreLink Arabia Company Profile f2.pdf",
      style: "rounded-br-md",
      download: true,
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
                "hidden  md:flex justify-between items-center w-40 h-14 rounded-md px-4 ml-[-100px] hover:ml-[-10px] duration-300 text-white bg-gray-500" +
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
