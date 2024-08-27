import { useState } from "react";
import { links } from "../data/data";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="sticky top-0 bg-[#181818]">
        <div className="align-element flex flex-col justify-between py-4 sm:flex-row sm:items-center">
          <div className="flex items-center w-full sm:w-auto">
            <img src="/malzip.svg" className="h-14 w-auto sm:h-16" alt="Logo" />
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
                <a
                  key={id}
                  href={href}
                  className="capitalize text-lg tracking-wide hover:text-blue-600 transition duration-300"
                >
                  {text}
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
