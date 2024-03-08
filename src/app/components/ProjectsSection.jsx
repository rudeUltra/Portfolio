"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Next.JS Portfolio Website",
    description: "My Personal Portfolio made with Next.JS | Tailwind | Aceternity UI",
    image: "/images/projects/1.png",
    tag: ["All", "FrontEnd"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Kuebiko - React based Novel Reader and Writer Website. | MERN",
    description: "React-based novel Reader and writer website (Full Stack) built using MERN Stack | Audio Books | Upload/Read",
    image: "/images/projects/2.gif",
    tag: ["All", "FullStack"],
    gitUrl: "https://github.com/rudeUltra/Kuebiko-FrontEnd",
    previewUrl: "https://starlit-trifle-edb139.netlify.app/#/",
  },
  {
    id: 3,
    title: "Interview-AI | Next.JS | OpenAI ",
    description: "Web Application | Records and Analyzes Interviews using ChatGPT to provide feedback and suggestions.",
    image: "/images/projects/3.png",
    tag: ["All", "FullStack"],
    gitUrl: "https://github.com/saptarsheemitra/Interview-AI",
    previewUrl: "https://github.com/saptarsheemitra/Interview-AI",
  },
  {
    id: 4,
    title: "Food Delivery Application | React | Firebase",
    description: "Food Delivery Application made on React.js Fully Working Front-end, Firebase is used as a Database all Order details directyl fetched using the Firebase API",
    image: "/images/projects/4.gif",
    tag: ["All", "FullStack"],
    gitUrl: "https://github.com/rudeUltra/food",
    previewUrl: "https://rudeultrafood.netlify.app/",
  },
  {
    id: 5,
    title: "Telegram Weather Bot + Admin Page | NodeJS",
    description: "Weather Information | User Authentication | NodeJS | MongoDB | OpenWeather API",
    image: "/images/projects/5.gif",
    tag: ["All", "FullStack"],
    gitUrl: "https://github.com/rudeUltra/Telegram-API",
    previewUrl: "https://github.com/rudeUltra/Telegram-API",
  },
  {
    id: 6,
    title: "NextJS Blog Website",
    description: "Read the top headlines in India for each day | Search News by Title | NextJS | Tailwind | NEWS API",
    image: "/images/projects/6.png",
    tag: ["All", "FrontEnd"],
    gitUrl: "https://github.com/rudeUltra/Blog-NextJS",
    previewUrl: "https://blog-next-js-two-inky.vercel.app/",
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
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12 text-[#AEFEFF]">
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
          name="FullStack"
          isSelected={tag === "FullStack"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="FrontEnd"
          isSelected={tag === "FrontEnd"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
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
