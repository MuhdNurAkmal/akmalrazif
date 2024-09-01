import { FaGithub, FaGlobe } from "react-icons/fa";

const ProjectCard = ({ img, title, description, url, github }) => {
  return (
    <article className="bg-gradientColor p-3 rounded-xl sm:hover:scale-105">
      <img src={img} className="object-contain rounded-xl" />
      <div className="px-2 my-4">
        <h2 className="capitalize text-xl text-mainText tracking-wide font-medium">
          {title}
        </h2>
        <p className="my-4 text-secondaryText">
          Assalamualaikum, saya akmal...ini projek {description}
        </p>
      </div>
      <div className="flex gap-x-4 p-2 text-3xl hover:cursor-pointer">
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
