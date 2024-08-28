import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className="py-24" id="/">
      <div className="align-element grid md:grid-cols-2 items-center gap-24">
        <article>
          <h1 className="text-5xl font-bold tracking-wide">Akmal Razif</h1>
          <h2 className="mt-4 text-3xl font-bold capitalize tracking-wide">
            Salam
          </h2>
          <p className="mt-2 text-lg capitalize tracking-wide text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sit
            nostrum odio velit! Dolores quidem, deserunt molestiae laudantium
            repudiandae dolorem fuga nemo provident doloribus quisquam quis.
            Ipsa officiis unde nisi!
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="#">
              <FaGithubSquare className="h-8 w-8" />
            </a>
            <a href="#">
              <FaLinkedin className="h-8 w-8" />
            </a>
          </div>
        </article>
        <article>
          <img src="src\assets\react.svg" className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};
export default LandingPage;
