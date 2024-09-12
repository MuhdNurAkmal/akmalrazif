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
      <nav className="top-0">
        <div className="align-element flex flex-col justify-between py-4 sm:flex-row sm:items-center">
          <div className="flex items-center w-full sm:w-auto">
            <h2 className="text-3xl font-bold">
              <span className="text-accentColor">mal</span>zip
            </h2>
            <button
              onClick={toggleMenu}
              className="text-3xl sm:hidden ml-auto focus:outline-none"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <div
            className={`${
              isOpen ? "gap-y-2 mt-5" : "hidden"
            } flex-col flex gap-x-8 sm:flex-row sm:flex sm:items-center sm:mt-0`}
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
                  className={`capitalize text-lg tracking-widest cursor-pointer transition duration-300 ${
                    activeLink === id
                      ? "font-bold tracking-widest text-accentColor sm:border-b-2 sm:border-b-borderCustom"
                      : "hover:text-accentColor"
                  }`}
                >
                  {text}
                </Link>
              );
            })}
          </div>
          <div className="hidden sm:block">
            <a
              href="mailto:akmaln02@gmail.com"
              className="text-center px-4 py-3 flex items-center rounded-xl bg-gradientBtn"
            >
              Message Me
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
