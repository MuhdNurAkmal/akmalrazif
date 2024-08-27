import ProjectCard from "../cards/ProjectCard";
import SectionTitle from "./SectionTitle";
import { projects } from "../data/data";
import { useFetchProjects } from "./fetchProject";

const Projects = () => {
  const { loading, projects } = useFetchProjects();
  return (
    <section className="align-element py-20" id="projects">
      <SectionTitle text="Recent Works" />
      <div className="py-16 grid md:grid-cols-3 gap-8">
        {projects.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};
export default Projects;
