"use client";

import { cn } from "../../../utils/cn";
import React, { useEffect, useState } from "react";
import Image from "next/image";
interface Item {
    name: string;
    title: string;
    quote:string;
    img:string
}

const items: Item[] = [
    {
        name: "React.JS",
        title: "React",
        quote:"Hello bhai",
        img:"/images/react.js-img.png"
    },
    {
        name: "NodeJS",
        title: "NodeJS",
        quote:"Hello bhai",
        img:"/images/nodeJs.png"
    },
    {
        name: "JavaScript",
        title: "NextJS",
        quote:"Hello bhai",
        img:"/images/nextjsLogo.png"
    },
    {
      name: "TypeScript",
      title: "MongoDB",
      quote:"Hello bhai",
      img:"/images/mongoDb.png"
  },
  {
    name: "MongoDB",
    title: "JavaScript",
    quote:"Hello bhai",
    img:"/images/JavaScript-logo.png"
},
{
  name: "SQL",
  title: "Tailwind CSS",
  quote:"Hello bhai",
  img:"/images/tailwindLogo.png"
}
];




export const InfiniteMovingCards = ({
  
  className,
}: {
  
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {

  const direction="left";
  const speed="fast";
  const pauseOnHover=false;
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[150px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-800 px-8 py-6 md:w-[200px]"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            }}
            key={item.name}
          >
            <blockquote>
              
              <span className=" relative z-20 text-sm leading-[1.6] text-white-100 font-normal">
                <Image src={item.img} width={100} height={100} alt="image" className="w-8 h-8"/>
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                 
                  <span className=" text-lg leading-[1.6] text-white-400 font-normal">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
