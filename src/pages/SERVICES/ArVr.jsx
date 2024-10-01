import React, { useState } from "react";
import ExpertiseSection from "../../components/Services/ExpertiseSection";
import MagicSection from "../../components/Services/MagicSection";
import Banner from "../../components/Services/Banner";
import Navbar from "../../components/Home/Navbar";
import JoinOurTribeBanner from "../../components/About/AboutBanner";
// import web from "../../assets/service/webdev.png";
import videoSource from "../../assets/service/totemvid.mp4";
import Footer from "../../components/Home/Footer";

import arvrexp from "../../assets/arvrexp/arvrexp.png";
import arvrexp1 from "../../assets/arvrexp/arvrexp1.png";
import arvrexp2 from "../../assets/arvrexp/arvrexp2.png";
import arvrexp3 from "../../assets/arvrexp/arvrexp3.png";
import arvrexp4 from "../../assets/arvrexp/arvrexp4.png";

const VideoContainer = () => {
  return (
    <div className="w-full aspect-w-16 aspect-h-9 sm:aspect-w-4 sm:aspect-h-3 md:aspect-w-16 md:aspect-h-9 lg:aspect-w-21 lg:aspect-h-9">
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

const ArVr = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const webExpertiseData = [
    {
      image: arvrexp1,
      title: "Virtual Reality Development",
      description:
        "Crafting immersive VR environments that transport users to new worlds.",
    },
    {
      image: arvrexp2,
      title: "Augmented Reality Solutions",
      description:
        "Enhancing reality with interactive AR elements that bring your content to life.",
    },
    {
      image: arvrexp3,
      title: "Interactive 3D Modeling",
      description:
        "Creating detailed, interactive 3D models for training, marketing, and more.",
    },
    {
      image: arvrexp4,
      title: "AR/VR for Marketing",
      description:
        "Engaging your audience with cutting-edge AR/VR marketing experiences.",
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
      <main className="pt-16 sm:pt-20 md:pt-24 font-exo2  ">
        <Banner
          backgroundImage={arvrexp}
          text="build you own world digitally"
        />
        <section className="max-w-7xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <VideoContainer />
        </section>
        <section className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 xl:px-16 2xl:px-24">
          <div className="max-w-4xl mx-auto">
            <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium font-inter text-center">
              Step beyond the screen with our innovative AR/VR experiences. We
              bridge the gap between virtual and reality, creating memorable
              interactions that resonate.{" "}
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

export default ArVr;
