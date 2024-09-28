import React, { useState, useEffect, useRef } from "react";
import image1 from "../../assets/aboutassets/image1.png";
import image2 from "../../assets/aboutassets/image2.png";
import image3 from "../../assets/aboutassets/image3.png";
import image4 from "../../assets/aboutassets/image4.png";
import image5 from "../../assets/aboutassets/image5.png";
import image6 from "../../assets/aboutassets/image6.png";
import image7 from "../../assets/aboutassets/image7.png";
import smiley from "../../assets/SmileyFlower.png";
import banner from "../../assets/aboutassets/banner.png";
import TotemSquad from "./TotemSquad";
import rish from "../../assets/aboutassets/team/rish.png";
import tammy from "../../assets/aboutassets/team/tammy.png";
import JoinOurTribeBanner from "./AboutBanner";
import arm from "../../assets/aboutassets/team/arman.png";
import gogo from "../../assets/aboutassets/team/muku.png";
import button from "../../assets/aboutassets/button.png";
import ResponsiveImageGallery from "./ResponsiveImageGallery";
import Navbar from "../Home/Navbar";
import heroicon from "../../assets/aboutassets/aboutimage.png";
import Footer from "../Home/Footer";

const cards = [
  { name: "Card 1", image: rish },
  { name: "Card 1", image: tammy },
  { name: "Card 1", image: arm },
  { name: "Card 1", image: gogo },
  { name: "Card 1", image: tammy },
  { name: "Card 1", image: tammy },
  { name: "Card 1", image: tammy },
  { name: "Card 1", image: tammy },
];

const FadeInSection = ({ children, delay = 0 }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
        observer.disconnect(); // Disconnect the observer after first appearance
      }
    });

    observer.observe(domRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const RotatingWatchButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="w-10 h-10 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full bg-transparent overflow-hidden  ">
      <img
        src={button}
        alt="Watch Button"
        className={`w-full h-full object-cover rounded-full transition-all duration-300 ease-in-out ${
          isHovered ? "animate-[spin_3s_linear_infinite] scale-140" : ""
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
};

const AboutUsEntry = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div className="relative min-h-screen bg-[#000e00] text-white z-30">
      <Navbar
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <div className="w-full bg-[#000e00] text-white font-['Exo 2'] relative min-h-screen px-4 sm:px-6 md:px-8 lg:px-12">
        <FadeInSection delay={500}>
          <h1 className="absolute left-1/2 transform -translate-x-1/2 top-16 sm:top-20 md:top-24 lg:top-32 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold uppercase text-center pt-4 w-full px-4">
            Crafting Tomorrow, Today
          </h1>
        </FadeInSection>

        <FadeInSection delay={500}>
          <div className="absolute right-2 sm:right-6 md:right-4 lg:right-12 top-32 sm:top-40 md:top-48 lg:top-56 z-10 ">
            <RotatingWatchButton />
          </div>
        </FadeInSection>

        <FadeInSection delay={500}>
          <div className="sm:pt-56 md:pt-64 lg:pt-24 m-2 top-48">
            <ResponsiveImageGallery />
          </div>
        </FadeInSection>

        <FadeInSection delay={500}>
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center  md:mt-6 lg:mt-6 p-2">
            <div className="flex m-3 ml-6 p-2 flex-col md:flex-row ">
              <img
                src={heroicon}
                alt="Totem Interactive Logo"
                className="flex-col relative  sm:w-10 sm:h-10 md:w-32 md:h-26 lg:w-40 lg:h-40   p-4  "
              />
            </div>

            <div className="relative text-lg sm:text-xl md:text-2xl lg:text-4xl font-normal font-['Inter'] text-white max-w-2xl md:max-w-3xl lg:max-w-4xl mr-12 ml-12 ">
              <p className="text-center m-4 ml-8 pl-4 flex justify-center w-auto">
                At Totem Interactive, we don't just aim to follow trends—we work
                to create them. Our dedicated team of creatives and tech experts
                brings challenging ideas to life, one line of code and one pixel
                at a time.
              </p>
            </div>
            <div className=" flex m-3 ml-6 p-2 flex-col md:flex-row ">
              <img
                src={smiley}
                alt="Smiley Face"
                className="relative flex-col  sm:w-10 sm:h-10 md:w-32 md:h-26 lg:w-40 lg:h-40   p-4 "
              />
            </div>
          </div>
        </FadeInSection>
      </div>
      <div className="mt-16 md:mt-24 lg:mt-32 px-4 sm:px-6 md:px-8 lg:px-12">
        <FadeInSection delay={500}>
          <TotemSquad cards={cards} />
        </FadeInSection>
      </div>

      <FadeInSection delay={500}>
        <div className=" md:mt-12  lg:mt-20 md:pb-4 ">
          <JoinOurTribeBanner />
        </div>
      </FadeInSection>
    </div>
  );
};

export default AboutUsEntry;
