import React, { useState } from "react";
import test from "../assets/service/test.jpg";
import ScrollSlideshow from "../components/Services/ScrollSlideshow";
import Navbar from "../components/Home/Navbar";
import subwayVideoSrc from "../assets/service/totemvid.mp4";
import SubwayVideoPlayer from "../components/Services/SubwayVideoPlayer";
import Anima from "../components/Services/Anima";
import AnimatedText from "../components/Projects/AnimatedText";
import Footer from "../components/Home/Footer";
import videoSource from "../assets/service/totemvid.mp4";
import DiagonalMarquee from "../components/Services/DiagonalMarquee";
import DiagonalTrainMarquee from "../components/Services/DiagonalMarquee";
import DiagonalMarqueeText from "../components/Services/DiagonalMarquee";

const images = [
  test,
  test,
  test,
  // Add more image URLs as needed
];

const VideoContainer = () => {
  return (
    <div className="bg-[#000e00] w-full aspect-[16/9]  sm:aspect-w-16 sm:aspect-h-16 md:aspect-w-16 md:aspect-h-9 lg:aspect-w-21 lg:aspect-h-9">
      <video
        className="bg-[#000e00] w-full h-full object-cover rounded-lg shadow-lg"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

const Projects = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  return (
    <div className="bg-[#000e00] min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar
          navOpen={navOpen}
          setNavOpen={setNavOpen}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </div>
      <div class="bg-[#000e00]">
        <section className=" bg-[#000e00] max-w-7xl mx-auto px-4 py-20 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <h1 className="text-center font-bold font-exo2 text-2xl mb-8 text-white">
            OUR SERVICES
          </h1>
          <VideoContainer />
        </section>
      </div>
      <div className="bg-[#000e00]">
        <div className="w-full flex  flex-col md:flex-row pb-20">
          <div className="text-[16px] md:text-[33.20px] font-medium font-['Inter'] text-white max-w-[90%] md:max-w-[800px] text-center ml-4">
            <p>
              Totem Interactive is a rising force in digital innovation,
              specializing in software development, AR/VR applications, mobile
              app development, web development, game creation, and 3D pipeline
              services. We craft impactful digital experiences that engage users
              and drive results.
            </p>
          </div>
        </div>
      </div>

      <ScrollSlideshow />
      <Footer />
    </div>
  );
};

export default Projects;
