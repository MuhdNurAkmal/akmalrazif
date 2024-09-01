import { FaCode, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import profpics from "../assets/profpics.jpg";
import resume from "../resume/Muhammad Nur Akmal Mohamad Razif (Resume).pdf";

const LandingPage = () => {
  return (
    <div className="py-20 " id="/">
      <div className="align-element grid justify-center sm:grid-cols-2 items-center gap-14">
        <article className="order-2 text-center sm:order-1 sm:text-left">
          <h2 className="text-3xl font-extrabold tracking-wide md:text-5xl">
            Hi, I'm
          </h2>
          <h1 className="text-5xl font-extrabold tracking-wide md:text-7xl">
            <span className="text-accentText">Akmal</span>
            &nbsp;Razif
          </h1>
          <div className="flex flex-col-reverse mt-6 gap-y-8 items-center sm:flex-row">
            <div className="flex gap-x-4 justify-center sm:justify-start">
              <a href="https://github.com/MuhdNurAkmal" target="blank">
                <FaGithubSquare className="h-12 sm:h-10 w-auto hover:text-gray-500" />
              </a>
              <a href="https://www.linkedin.com/in/akmalrazif/" target="blank">
                <FaLinkedin className="h-12 sm:h-10 w-auto hover:text-gray-300" />
              </a>
            </div>
            <div>
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg p-4 bg-gradientColor text-mainText text-center rounded-lg font-bold leading-loose tracking-wider sm:ml-8 sm:p-4"
              >
                My Resume
              </a>
            </div>
          </div>
        </article>
        <article className="order-1 m-auto sm:order-2">
          <img src={profpics} className="h-56 lg:h-96 rounded-full" />
        </article>
      </div>
    </div>
  );
};
export default LandingPage;
