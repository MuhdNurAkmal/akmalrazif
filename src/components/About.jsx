import { useState } from "react";
import SectionTitle from "./SectionTitle";
import AboutCard from "../cards/AboutCard";

const About = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <section className="align-element py-24" id="about">
      <div className="sm:flex flex-row items-center justify-between">
        <SectionTitle text="flashback to my journey" icon='🚀' />
        <div className="flex justify-center py-10">
          <div className="flex flex-wrap gap-3 p-2 rounded-3xl w-full bg-[#383836] max-w-sm sm:max-w-md lg:max-w-lg">
            <button
              className={`btnTab ${
                activeTab === "about" ? "btnTabActive" : ""
              }`}
              onClick={() => setActiveTab("about")}
            >
              About
            </button>
            <button
              className={`btnTab ${
                activeTab === "education" ? "btnTabActive" : ""
              }`}
              onClick={() => setActiveTab("education")}
            >
              Education
            </button>
            <button
              className={`btnTab ${
                activeTab === "experience" ? "btnTabActive" : ""
              }`}
              onClick={() => setActiveTab("experience")}
            >
              Experience
            </button>
          </div>
        </div>
      </div>
      <AboutCard activeTab={activeTab} />
    </section>
  );
};

export default About;
