"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 grid grid-cols-3 ">
        <li>Angular</li>
        <li>Vue.js</li>
        <li>React</li>

        <li>Node.js</li>
        <li>Java</li>
        <li>SpringBoot</li>
        <li>MongoDB</li>
        <li>MySQL</li>
        <li>Docker</li>
        <li>Jenkins</li>
        <li>Nexus</li>
        <li>Kubernetes</li>
        <li>Git</li>
        <li>RestAPI</li>
        <li>GraphQL</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Higher Private School of Engineering And Technology</li>
        <li>Faculty of Science , Tunisia</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Object Oriented Programming in JAVA</li>
        <li>CCNA:Routing And Switching Essentials</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [ startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" alt="about image" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a Software engineer. I have a burning desire to put together
            well-written code that helps to create advanced applications which
            are fit for purpose, functionally correct and meets the user's
            precise needs. My key strengths include being able to use web based
            systems that create a highly interactive user experience. On a
            personal level I'm is loaded with energy and passion. Right now i
            would like to join a company where there is a culture of
            encourangement,respect and teamwork.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8 ">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
