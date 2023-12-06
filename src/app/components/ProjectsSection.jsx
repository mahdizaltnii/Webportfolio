"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
const projectsData = [
  {
    id: 1,
    title: "Customer Learning Platform",
    description: "A web application for customer learning. Built with Vue.js, Fastify,Nodejs,PrismaORM,Turbo and Tailwind CSS",
    image: "/images/projects/Joodbooking.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mahdizaltnii/Customer-learning.git",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Laboratory Management System",
    description: "A web application for laboratory management. Built with Angular.js, SpringBoot, Mysql,PrimeNG,Python and MongoDB",
    image: "/images/projects/laboratory.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mahdizaltnii/Backoffice",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Gaming Plateform",
    description: "A cross-platform gaming application using JavaFX for the desktop, Symfony for the web, and a shared database, ensuring a seamless gaming experience across desktop and mobile platforms",
    image: "/images/projects/java.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mahdizaltnii/GamingPlateform",
    previewUrl: "/",
  },
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 grid-cols-1 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
