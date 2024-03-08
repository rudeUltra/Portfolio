import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";

import AchievementsSection from "./components/AchievementsSection";
import { InfiniteMovingCards } from "./components/moving-card";
import { BackgroundGradient } from "./components/custom-bg";
import { Meteors } from "./components/Meteor";

export default function Home() {
  return (
    <div className="overflow-hidden">
  <Navbar className=""/> {/* Render Navbar outside of the container */}
  <main className="flex min-h-screen flex-col bg-[#121212] overflow-hidden">
    <div className="container mt-24 mx-auto px-12 py-4">
     <BackgroundGradient className="bg-black rounded-[22px]">
     <div className="w-full relative overflow-hidden rounded-[22px]">
        <HeroSection/>
        <Meteors/>
      </div> 

     </BackgroundGradient>

     <div class="flex justify-center items-center">
  <div class="text-center">
  <AchievementsSection/>
  
  </div>
</div>
      <AboutSection />
      
  <InfiniteMovingCards className="mt-5 text-white"/>
  
      
      <ProjectsSection />
      
      <EmailSection />
    </div>
  </main>
  <section id="demo1"></section>
</div>

    
    
  );
}
