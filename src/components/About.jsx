import SectionTitle from "./SectionTitle";
import { experiences } from "../data/data";

const About = () => {
  return (
    <section className="align-element pt-24" id="about">
      <div className="sm:flex flex-row items-center">
        <SectionTitle text="get to know more" title="about me" />
      </div>
      <div className="pt-8">
        {experiences.map((experience) => {
          return (
            <article className="py-4 border-y tracking-wide">
              <p className="text-md mb-3">{experience.date}</p>
              <h1 className="text-3xl font-bold">{experience.title}</h1>
              <h2 className="text-xl text-secondaryText mt-1">
                {experience.location}
              </h2>
              <p className="my-4 text-secondaryText">{experience.desc}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default About;
