import SectionTitle from "./SectionTitle";
import { experiences } from "../data/data";

const About = () => {
  return (
    <section className="align-element py-16">
      <div id="about" className="pt-10">
        <SectionTitle title="about me" />
      </div>
      <div className="py-4">
        {experiences.map((experience) => {
          return (
            <article className="py-4 tracking-wide border-y">
              <p className="mb-3 text-secondaryText">{experience.date}</p>
              <h1 className="text-2xl font-bold text-accentColor">
                {experience.title}
              </h1>
              <h2 className="text-lg text-primaryText mt-1">
                {experience.location}
              </h2>
              <p className="my-5 text-secondaryText">{experience.desc}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default About;
