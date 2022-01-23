import { useState, useEffect } from "react";
import { LinkData } from "../constant/data";

const Header = () => {
  const [hide, setHide] = useState(false);
  const [nav, setNav] = useState(false);
  const controlNavbar = () => {
    if (window.scrollY > 100) {
      setHide(true);
    } else {
      setHide(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <div>
      <header className="header">
        {/* left */}
        <div className="flex items-center">
          <span className=" text-gray-200 text-4xl font-bold pl-2 tracking-wide ">
            A<span className="text-portfolio-light">J</span>
          </span>
        </div>
        {/* hamburger */}
        <div className="md:hidden mt-1" onClick={() => setNav(!nav)}>
          <i className="bx bx-menu-alt-right text-4xl text-portfolio-light"></i>
        </div>

        {/* middle */}
        <nav
          className={
            nav
              ? "absolute rounded-md top-[75px] py-10 right-4 left-4 text-center bg-portfolio-blue md:relative"
              : "hidden md:flex"
          }
        >
          {LinkData.map((item) => (
            <li
              key={item.id}
              className="list-none py-4 text-gray-200 hover:text-portfolio-light transition duration-200 md:px-4"
            >
              <span className="text-portfolio-light text-sm px-1">
                {item.id}.{" "}
              </span>
              <a onClick={() => setNav(false)} href={item.href}>
                {item.text}
              </a>
            </li>
          ))}
        </nav>
        {/* right */}
        <button
          type="button"
          className="mt-2 text-gray-900 bg-portfolio-light hover:bg-[#CDA17D]/10 hover:text-white focus:ring-4 focus:ring-[#F7BE38]/50 font-medium rounded-sm text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2"
        >
          <a href="https://drive.google.com/uc?export=download&id=1anyP8Tt29F5N61hHo5pgpjwihin9kftC">
            Check out my resume
          </a>
        </button>
      </header>
    </div>
  );
};

export default Header;
