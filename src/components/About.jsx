import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Experience from "./Experience";
import Achievement from "./Achievement";

const About = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <section className="align-element py-24" id="about">
      <div className="sm:flex flex-row items-center">
        <SectionTitle text="flashback to my journey" icon="🚀" />
      </div>
      <div className="py-8 text-lg text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo voluptates
        excepturi assumenda numquam? Illum dolorum quis nisi neque mollitia
        voluptates, facilis deleniti consequatur est error autem doloribus quam?
        Repellendus, unde.
      </div>
      <Experience />
      <Achievement />
    </section>
  );
};

export default About;
