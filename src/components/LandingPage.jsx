import { FaCode, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import profpics from "../assets/profpics.jpg";
import resume from "../resume/Muhammad Nur Akmal Mohamad Razif (Resume).pdf";

const LandingPage = () => {
  return (
    <div className="py-20 " id="/">
      <div className="align-element grid justify-center sm:grid-cols-2 items-center gap-14">
        <article className="order-2 text-center sm:order-1 sm:text-left">
          <h2 className="text-4xl font-extrabold tracking-wide leading-tight md:text-6xl">
            Hello, my name is <br />
            <span className="text-accentText">Akmal Razif</span>
          </h2>
          <p className="mt-4 text-2xl">// Full Stack Developer</p>
          <div className="flex flex-col-reverse mt-6 gap-y-8 items-center sm:flex-row">
            <div className="flex gap-x-4 justify-center sm:justify-start">
              <a href="https://github.com/MuhdNurAkmal" target="blank">
                <FaGithubSquare className="h-12 sm:h-10 w-auto hover:text-gray-500" />
              </a>
              <a href="https://www.linkedin.com/in/akmalrazif/" target="blank">
                <FaLinkedin className="h-12 sm:h-10 w-auto hover:text-gray-300" />
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
