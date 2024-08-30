import { FaCode, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const LandingPage = () => {
  return (
    <div className="py-20" id="/">
      <div className="align-element grid justify-center sm:grid-cols-2 items-center gap-14">
        <article className="order-2 text-center sm:order-1 sm:text-left">
          <h1 className="text-5xl font-extrabold tracking-wide md:text-7xl">
            <span className="text-secondaryText">Akmal</span>&nbsp;Razif
          </h1>
          <h2 className="mt-4 text-3xl font-bold capitalize tracking-wide flex justify-center sm:justify-start items-center">
            <FaCode />
            &nbsp;
            <TypeAnimation
              sequence={[
                "Web Development",
                1000,
                "Mobile Application",
                1000,
                "Data Science",
                1000,
                "Artificial Intelligence",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-center text-2xl sm:text-3xl"
            />
          </h2>
          <div className="flex flex-col-reverse mt-8 gap-y-8 items-center sm:flex-row">
            <div className="flex gap-x-4 justify-center sm:justify-start">
              <a href="https://github.com/MuhdNurAkmal" target="blank">
                <FaGithubSquare className="h-12 sm:h-10 w-auto hover:text-gray-500" />
              </a>
              <a href="https://www.linkedin.com/in/akmalrazif/" target="blank">
                <FaLinkedin className="h-12 sm:h-10 w-auto hover:text-gray-300" />
              </a>
            </div>
            <div>
              <button
                type="button"
                className="border py-3 px-4 bg-white text-black text-center rounded-lg font-bold leading-loose tracking-wider sm:ml-8 sm:py-2"
              >
                Download CV
              </button>
            </div>
          </div>
        </article>
        <article className="order-1 m-auto sm:order-2">
          <img src="src\assets\react.svg" className="h-52 lg:h-80" />
        </article>
      </div>
    </div>
  );
};
export default LandingPage;
