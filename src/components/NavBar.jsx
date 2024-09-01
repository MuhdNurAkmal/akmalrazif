import { useState } from "react";
import { links } from "../data/data";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSetActive = (id) => {
    setActiveLink(id);
  };

  return (
    <>
      <nav className="sticky top-0 z-10 bg-mainBg">
        <div className="align-element flex flex-col justify-between py-4 sm:flex-row sm:items-center">
          <div className="flex items-center w-full sm:w-auto">
            <h2 className="text-3xl font-bold">
              Mal<span className="text-accentText">Code</span>
            </h2>
            <button
              onClick={toggleMenu}
              className="text-3xl sm:hidden ml-auto focus:outline-none"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <div
            className={`flex-col mt-4 sm:flex-row flex gap-x-12 ${
              isOpen ? "flex gap-y-2" : "hidden"
            } sm:flex sm:items-center mt-2 sm:mt-0`}
          >
            {links.map((link) => {
              const { id, href, text } = link;
              return (
                <Link
                  key={id}
                  to={href}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={0}
                  onClick={() => handleSetActive(id)}
                  onSetActive={() => handleSetActive(id)}
                  className={`capitalize text-lg tracking-wide cursor-pointer transition duration-300 ${
                    activeLink === id
                      ? "text-accentText font-bold tracking-wider sm:border-b-2"
                      : "hover:text-accentText"
                  }`}
                >
                  {text}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
