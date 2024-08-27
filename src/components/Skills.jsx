import SectionTitle from "./SectionTitle";
import SkillCard from "../cards/SkillCard";
import { skills } from "../data/skillData";

const Skills = () => {
  return (
    <section className="align-element py-20" id="skills">
      <SectionTitle text="Skill Unlocked" icon="🧑🏻‍💻" />
      <div className="py-16 grid gap-8 grid-cols-4 md:grid-cols-6">
        {skills.map((skill) => {
          return <SkillCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};
export default Skills;    
