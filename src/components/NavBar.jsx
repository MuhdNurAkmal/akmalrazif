import { useState } from "react";
import { links } from "../data/data";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="sticky top-0 bg-mainBackground z-10">
        <div className="align-element flex flex-col justify-between py-4 sm:flex-row sm:items-center">
          <div className="flex items-center w-full sm:w-auto">
            <h2 className="text-3xl font-bold">
              Mal<span className="text-secondaryText">Code</span>
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
                  className="capitalize text-lg tracking-wide hover:text-blue-600 transition duration-300 cursor-default"
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
