import { useEffect, useState } from "react";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";

function DarkMode() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );

  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  return (
    <div>
      {theme === "dark" ? (
        <BiSolidSun
          onClick={() => {
            setTheme("light");
          }}
          className="text-2xl cursor-pointer"
        />
      ) : (
        <BiSolidMoon
          onClick={() => {
            setTheme("dark");
          }}
          className="cursor-pointer text-2xl"
        />
      )}
    </div>
  );
}

export default DarkMode;
