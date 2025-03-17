import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import profpics from "../assets/profpics.jpg";
import resume from "../documents/Muhammad Nur Akmal Mohamad Razif (Resume).pdf";

const LandingPage = () => {
  return (
    <div className="py-16 " id="/">
      <div className="align-element grid justify-center sm:grid-cols-2 items-center gap-14">
        <article className="order-2 text-center sm:order-1 sm:text-left">
          <h2 className="text-2xl font-extrabold tracking-wide md:text-4xl">
            Hello, I'm <br />
            <span className="bg-gradientColor bg-clip-text text-transparent text-5xl md:text-7xl">
              Akmal Razif
            </span>
          </h2>
          <p className="mt-4 text-lg">
            Passionate Self-Taught Learner with a Focus on Full Stack
            Development, Data Science, & Artificial Intelligence
          </p>
          <div className="flex flex-col sm:flex-row items-center sm:gap-x-4 gap-y-4 mt-6">
            <div className="flex gap-x-4 text-5xl sm:text-4xl">
              <a
                href="https://www.linkedin.com/in/akmalrazif/"
                target="_blank"
                className="hover:text-accentColor hover:scale-110"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/MuhdNurAkmal"
                target="_blank"
                className="hover:text-accentColor hover:scale-110"
              >
                <FaGithubSquare />
              </a>
            </div>
            <a
              href={resume}
              download="Muhammad Nur Akmal Mohamad Razif (Resume).pdf"
              className="px-4 py-3 flex items-center rounded-xl bg-gradientBtn w-fit"
            >
              Download my CV
            </a>
          </div>
        </article>
        <article className="order-1 m-auto sm:order-2">
          <div className="relative">
            <img
              src={profpics}
              className="h-64 lg:h-96 p-2 rounded-full ring-4"
            />
          </div>
        </article>
      </div>
    </div>
  );
};
export default LandingPage;
