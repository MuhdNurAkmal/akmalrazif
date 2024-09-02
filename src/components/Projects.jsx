import ProjectCard from "../cards/ProjectCard";
import SectionTitle from "./SectionTitle";
import { useFetchProjects } from "../data/fetchProject";

const Projects = () => {
  const { loading, projects } = useFetchProjects();
  return (
    <section className="align-element pt-24" id="projects">
      <SectionTitle text="let's see all" title="my works" />
      <div className="py-8 grid md:grid-cols-3 gap-8 ">
        {projects.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};
export default Projects;
