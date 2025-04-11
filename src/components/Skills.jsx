import SectionTitle from "./SectionTitle";
import SkillCard from "../cards/SkillCard";
import { skillset } from "../data/skillData";

const Skills = () => {
  return (
    <section className="align-element py-16">
      <div id="skills" className="pt-24">
        <SectionTitle title="Skills & Expertise" />
        <div className="py-16 px-4 grid grid-cols-1 md:grid-cols-2 md:gap-6">
          {skillset.map((categoryItem) => (
            <div
              key={categoryItem.category}
              className="mb-12 bg-slate-900 p-4 rounded-2xl"
            >
              <h2 className="text-2xl font-bold text-white capitalize mb-6">
                {categoryItem.category}
              </h2>
              <div className="grid gap-3 grid-cols-2 md:grid-cols-2">
                {categoryItem.skills.map((skill) => (
                  <SkillCard key={skill.id} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
