import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import profpics from "../assets/profpics.jpg";

const LandingPage = () => {
  return (
    <div className="py-16 " id="/">
      <div className="align-element grid justify-center sm:grid-cols-2 items-center gap-14">
        <article className="order-2 text-center sm:order-1 sm:text-left">
          <h2 className="text-2xl font-extrabold tracking-wide md:text-4xl">
            Hello, I'm <br />
            <span className="text-accentColor text-5xl md:text-7xl">
              Akmal Razif
            </span>
          </h2>
          <p className="mt-4 text-xl">
            I am passionate about Full Stack Development, Data Science &
            Artificial Intelligence.
          </p>
          <div className="flex mt-6 gap-x-4 text-5xl justify-center items-center sm:justify-start sm:text-4xl">
            <a
              href="https://www.linkedin.com/in/akmalrazif/"
              className="hover:text-accentColor hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/MuhdNurAkmal"
              className="hover:text-accentColor hover:scale-110"
            >
              <FaGithubSquare />
            </a>
          </div>
        </article>
        <article className="order-1 m-auto sm:order-2">
          <img src={profpics} className="h-64 lg:h-96 rounded-full" />
        </article>
      </div>
    </div>
  );
};
export default LandingPage;
