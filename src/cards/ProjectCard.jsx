import { TbWorld } from "react-icons/tb";

const ProjectCard = ({ img, title, description, url }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
      <img className="rounded-t-lg" src={img} alt="" />
      <div className="p-5 flex flex-col flex-grow">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-white">
          {title}
        </h5>
        <p className="font-normal text-gray-400 mb-4 flex-grow">
          {description}
        </p>
        {/* <div className="mt-auto">
          {url ? (
            <a
              href={url}
              className="text-3xl inline-block hover:scale-110 hover:text-accentColor"
            >
              <TbWorld />
            </a>
          ) : (
            <p className="text-white text-base italic">Coming Soon</p>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default ProjectCard;
