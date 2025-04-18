import SectionTitle from "./SectionTitle";
import { experiences } from "../data/data";

const About = () => {
  return (
    <section className="align-element py-16">
      <div id="about" className="pt-24">
        <SectionTitle title="about me" />
      </div>
      <div className="py-4">
        {experiences.map((experience) => {
          return (
            <article className="py-4 tracking-wide border-y flex gap-6 flex-col items-center md:flex-row">
              <div className="flex items-center w-48">
                <img src={experience.logo} alt="" className="min-w-36" />
              </div>
              <div>
                <p className="mb-3 text-secondaryText">{experience.date}</p>
                <h1 className="text-2xl font-bold text-accentColor">
                  {experience.title}
                </h1>
                <h2 className="text-lg text-primaryText mt-1">
                  {experience.location}
                </h2>
                <p className="my-5 text-secondaryText">{experience.desc}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default About;
