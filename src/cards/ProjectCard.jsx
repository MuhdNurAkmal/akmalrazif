import { FaGithub, FaGlobe } from "react-icons/fa";

const ProjectCard = ({ img, title, description, url, github }) => {
  return (
    <article className="">
      <img src={img} className="object-contain rounded-xl" />
      <h2 className="capitalize text-xl tracking-wide font-medium text-mainText text-center py-4 leading-loose">
        {title}
      </h2>
    </article>
  );
};
export default ProjectCard;
