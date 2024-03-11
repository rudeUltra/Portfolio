"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "20",
    postfix: "+",
  },
  {
    
    metric: "Clients",
    postfix:'+',
    value: "10",
  },
  {
    metric: "Leetcode Problems",
    value: "900",
    postfix:'+',
    
  },
  {
    metric: "GitHub Contributions",
    value: "2500",
    postfix:'+'
  },
  {
    metric: "Experience",
    value: "1",
    postfix:'+'
  },
];

const AchievementsSection = () => {
  return (
    <div className="my-86 xl:gap-16 sm:py-16 xl:px-16">
      <div className="rounded-md pt-8 px-16 flex flex-col   sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-row items-center flex-wrap justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex ">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] ">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
