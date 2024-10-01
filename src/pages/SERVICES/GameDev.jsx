import React, { useState } from "react";
import ExpertiseSection from "../../components/Services/ExpertiseSection";
import MagicSection from "../../components/Services/MagicSection";
import Banner from "../../components/Services/Banner";
import Navbar from "../../components/Home/Navbar";
import JoinOurTribeBanner from "../../components/About/AboutBanner";
import web from "../../assets/service/game1.png";
import videoSource from "../../assets/service/totemvid.mp4";
import Footer from "../../components/Home/Footer";

import gamedevexp from "../../assets/gamedev-exp/gamedevexp.png";

import gamedevexp2 from "../../assets/gamedev-exp/gamedevexp2.png";

import gamedevexp3 from "../../assets/gamedev-exp/gamedevexp3.png";

import gamedevexp4 from "../../assets/gamedev-exp/gamedevexp4.png";

const VideoContainer = () => {
  return (
    <div className="w-full aspect-[3/2] sm:aspect-w-4 sm:aspect-h-3 md:aspect-w-16 md:aspect-h-9 lg:aspect-w-21 lg:aspect-h-9">
      <video
        className="w-full h-full object-cover rounded-lg shadow-lg"
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

const game = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const webExpertiseData = [
    {
      image: gamedevexp,
      title: "Concept Design",
      description:
        "Bringing your ideas to life with engaging storylines and captivating characters.",
    },
    {
      image: gamedevexp2,
      title: "3D Modelling & Animation",
      description:
        "Creating lifelike characters and environments that captivate players.",
    },
    {
      image: gamedevexp3,
      title: "Game Mechanics",
      description:
        "Building smooth, intuitive gameplay that keeps players hooked.",
    },
    {
      image: gamedevexp4,
      title: "VR/AR Integration",
      description:
        "Taking gaming to the next level with immersive AR and VR experiences.",
    },
  ];

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

      <main className="pt-16 sm:pt-20 md:pt-24">
        <Banner
          backgroundImage={web}
          text="Game On! Crafting Immersive Worlds"
          className="uppercase"
        />
        <section className="max-w-7xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <VideoContainer />
        </section>
        <section className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 xl:px-16 2xl:px-24">
          <div className="max-w-4xl mx-auto">
            <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium font-inter text-center">
              We craft immersive game experiences that go beyond the screen.
              From concept to code, our games are designed to captivate,
              challenge, and keep players coming back for more.{" "}
            </p>
          </div>
        </section>
        <ExpertiseSection
          title="OUR WEB EXPERTISE"
          expertiseData={webExpertiseData}
        />

        <JoinOurTribeBanner />
        <Footer />
      </main>
    </div>
  );
};

export default game;
