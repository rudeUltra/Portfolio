"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { Skills } from "./Skills";
import { Education } from "./Education";
import { BackgroundGradient } from "./custom-bg";
const TAB_DATA = [
  {
    title: "Achievment",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Github 3000+ Contributions</li>
        <li>CodeChef 3 ⭐ | Leetcode Top 15%</li>
        <li>10+ Clients</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>B.Tech Computer Science, VIT Vellore</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className=" border rounded-[22px] my-8 md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="https://media.giphy.com/media/gjrYDwbjnK8x36xZIO/giphy.gif" width={500} height={500} alt="about-me"/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4 text-[#AEFEFF]">About Me</h2>
          <p className="text-base lg:text-lg">
          Final Year Computer Science Student seeking and learning various fields of tech, Active on Competitive Coding sites like CodeChef (3 stars), Leetcode 1700+ rating (600+ problems solved), and possessing  knowledge of Full-stack Web Development including react.js and Javascript(ES6) basics with an interest in learning new frameworks and Technologies Constantly.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Achievements{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
      <BackgroundGradient className="bg-black rounded-[22px]">
      <Education/>
      <Skills/>

      </BackgroundGradient>
      
      
      
    </section>
  );
};

export default AboutSection;
