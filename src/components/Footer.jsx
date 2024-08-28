import { Link } from "react-scroll";
import { links } from "../data/data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="bg-black py-10">
        <div className="align-element flex-col text-center">
          <div className="flex flex-col gap-x-12 mb-6 sm:flex-row sm:justify-center sm:mb-10">
            {links.map((link) => {
              const { id, href, text } = link;
              return (
                <Link
                  key={id}
                  to={href}
                  className="capitalize mb-4 cursor-default sm:mb-0 hover:text-blue-600"
                >
                  {text}
                </Link>
              );
            })}
          </div>
          <div className="mt-6 capitalize">
            &copy; {currentYear} akmal razif. all rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
