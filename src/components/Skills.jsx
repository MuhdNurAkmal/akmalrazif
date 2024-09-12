import SectionTitle from "./SectionTitle";
import SkillCard from "../cards/SkillCard";
import { skills } from "../data/skillData";

const Skills = () => {
  return (
    <section className="align-element py-16">
      <div id="skills" className="pt-10">
        <SectionTitle title="Skills & Expertise" />
        <div className="py-16 grid gap-3 grid-cols-2 md:grid-cols-6">
          {skills.map((skill) => {
            return <SkillCard key={skill.id} {...skill} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default Skills;
