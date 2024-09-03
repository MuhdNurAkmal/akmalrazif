import { FaGithub, FaGlobe } from "react-icons/fa";

const ProjectCard = ({ img, title, description, url, github }) => {
  return (
    <article className="bg-boxColor p-3 rounded-xl sm:hover:scale-105 border-borderCustom border-4">
      <img src={img} className="object-contain rounded-xl" />
      <div className="px-2 my-4">
        <h2 className="capitalize text-xl text-mainText tracking-wide font-bold">
          {title}
        </h2>
        <p className="my-4 text-secondaryText tracking-wide leading-relaxed">
          {description}
        </p>
      </div>
      <div className="gap-x-4 p-2 text-3xl hover:cursor-pointer hidden">
        <a href={url} target="_blank">
          <FaGlobe />
        </a>
        <a href={github} target="_blank">
          <FaGithub />
        </a>
      </div>
    </article>
  );
};
export default ProjectCard;
