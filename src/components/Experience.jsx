import { FaGraduationCap, FaSuitcase } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../data/data";

const Experience = () => {
  return (
    <section className="pt-20">
      <div>
        {experiences.map((experience) => {
          const tag = experience.tag === "work" ? "right" : "left";
          const icon =
            experience.tag === "work" ? <FaSuitcase /> : <FaGraduationCap />;
          return (
            <>
              <VerticalTimeline>
                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  contentStyle={{
                    background: "#2563eb",
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  #2563eb",
                  }}
                  date={experience.date}
                  iconStyle={{ background: "#2563eb", color: "#fff" }}
                  icon={icon}
                  position={tag}
                >
                  <h3 className="vertical-timeline-element-title">
                    {experience.title}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {experience.location}
                  </h4>
                  <p>{experience.desc}</p>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </>
          );
        })}
      </div>
    </section>
  );
};
export default Experience;
