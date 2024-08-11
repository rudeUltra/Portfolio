"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import LeetcodeIcon2 from "../../../public/leetcode-icon2.svg";
const HeroSection = () => {
  return (
    <section className="lg:py-16 rounded-[22px]">
      <div className="grid grid-cols-1 sm:grid-cols-12 ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start m-10"
        >
          <h1 className="text-white mb-4 text-3xl sm:text-3xl md:text-5xl xl:text-7xl 2xl:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hey, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Rudhra",
                1000,
                "a Web Developer",
                1000,
                "a Programmer",
                1000,
                "a Web Designer",
                1000,
              ]}
              wrapper="span"
              speed={20}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#AEFEFF] text-base sm:text-lg mb-6 lg:text-lg">
          Full Stack Web Developer | Programmer | Web Designer
          </p>
          <div>
            <Link
              href="/#demo1"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Connect
            </Link>
            <a
             download=''
              href="/RudhraDeepBiswas-Resume.pdf"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >

             <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
             
              
            </a>
            
          
        
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4  place-self-center mt-4 mb-5 lg:mt-0 lg:mr-5 lg:pr-10"
        >
          <div className="rounded-full w-[200px] h-[200px] lg:w-[350px] lg:h-[350px] relative">
            <Image
              src="/images/hero1-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={320}
              height={320}
              priority
            />
          </div>
        </motion.div>
        
      </div>
      <div className="flex gap-2 items-center justify-center mt-5 mb-5 sm:mb-0">
            <Link href="https://github.com/rudeUltra" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/rudhra-deep-biswas-08507a236/" target="_blank">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="https://leetcode.com/rude_ultra1/" target="_blank">
            <Image src={LeetcodeIcon2} alt="Linkedin Icon" className="h-8 w-8 "/>
          </Link>

            </div>
    </section>
  );
};

export default HeroSection;
