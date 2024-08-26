import { FaGithub, FaGlobe } from "react-icons/fa";

const ProjectCard = ({ img, title, description, url, github }) => {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-xl duration-300">
      <span>
        <img src={img} className="w-full object-fill rounded-t-lg h-64" />
      </span>
      <div className="capitalize p-8">
        <h2 className="text-lg tracking-wide font-medium">{title}</h2>
        <p className="mt-4 text-slate-700 leading-loose">{description}</p>
        <div className="mt-4 flex gap-x-4">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue"
          >
            <FaGlobe className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
          </a>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue"
          >
            <FaGithub className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
          </a>
        </div>
      </div>
    </article>
  );
};
export default ProjectCard;
