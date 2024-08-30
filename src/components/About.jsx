import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Experience from "./Experience";
import Achievement from "./Achievement";
import { interests } from "../data/data";

const About = () => {
  return (
    <section className="align-element pt-24" id="about">
      <div className="sm:flex flex-row items-center">
        <SectionTitle text="flashback to my journey" icon="🚀" />
      </div>
      <div className="pt-8 grid sm:grid-cols-6">
        <div className="sm:col-span-2">
          <p className="text-lg text-justify">
            I'm a passionate Computer Science graduate with a knack for turning
            complex problems into simple, elegant software solutions. With a
            solid background in software engineering, web development, and
            artificial intelligence, I thrive on building innovative
            applications—from dynamic web platforms to intelligent, AI-powered
            systems. I'm driven by curiosity and a love for technology, always
            eager to learn, adapt, and take on new challenges. I'm looking to
            join a forward-thinking team where I can make a meaningful impact by
            pushing the boundaries of what's possible with code and creativity.
          </p>
          <div className="py-12">
            <h2 className="text-3xl text-center font-bold tracking-wide mb-8">
              Area of Interest
            </h2>
            {interests.map((interest) => {
              return (
                <div className="flex flex-col py-10 my-auto items-center">
                  <img src={interest.icon} className="h-32"></img>
                  <h4 className="text-lg mt-4 tracking-wide">
                    {interest.title}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
        <Experience />
      </div>
      <Achievement />
    </section>
  );
};

export default About;
