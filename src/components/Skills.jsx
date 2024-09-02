import SectionTitle from "./SectionTitle";
import SkillCard from "../cards/SkillCard";
import { skills } from "../data/skillData";

const Skills = () => {
  return (
    <section className="align-element py-24" id="skills">
      <SectionTitle text="Explore my" title="Skills & Expertise" />
      <div className="py-16 grid gap-6 grid-cols-3 md:grid-cols-6">
        {skills.map((skill) => {
          return <SkillCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};
export default Skills;
