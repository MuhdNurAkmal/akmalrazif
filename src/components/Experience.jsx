import { FaGraduationCap, FaSuitcase } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../data/data";

const Experience = () => {
  return (
    <div className="pt-10 sm:col-span-4 sm:p-0">
      <div>
        {experiences.map((experience) => {
          const icon =
            experience.tag === "work" ? <FaSuitcase /> : <FaGraduationCap />;
          return (
            <>
              <VerticalTimeline className="sm:mr-96">
                <VerticalTimelineElement
                  contentStyle={{
                    background: "#2563eb",
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid #2563eb",
                  }}
                  date=<div className="mr-6">{experience.date}</div>
                  iconStyle={{ background: "#2563eb", color: "#fff" }}
                  icon={icon}
                  position={"right"}
                >
                  <h3 className="vertical-timeline-element-title font-bold text-lg tracking-wide">
                    {experience.title}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle text-sm italic sm:text-base">
                    {experience.location}
                  </h4>
                  <div className="text-justify">
                    <p>{experience.desc}</p>
                  </div>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </>
          );
        })}
      </div>
    </div>
  );
};
export default Experience;
