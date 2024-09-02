import { FaPaperPlane } from "react-icons/fa";
import SectionTitle from "./SectionTitle";

const Contact = () => {
  return (
    <section className="py-20 w-full bg-teal-800 bg-opacity-70" id="contact">
      <div className="align-element grid grid-cols-1 items-center sm:grid-cols-2">
        <h4 className="text-2xl font-bold tracking-wide text-center sm:text-4xl sm:text-start">
          Interested in working together?
        </h4>
        <div className="flex justify-center sm:justify-end mt-8 sm:mt-0">
          <a
            href="mailto:akmaln02@gmail.com"
            className="text-center p-4 flex items-center gap-x-3 text-lg rounded-2xl border"
          >
            Message Me <FaPaperPlane />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
