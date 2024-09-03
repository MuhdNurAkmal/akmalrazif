import { Link } from "react-scroll";
import { links } from "../data/data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="py-4">
        <div className="align-element flex-col text-center">
          <div className="capitalize">
            &copy; {currentYear} akmal razif. all rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
