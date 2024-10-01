import React, { useState } from "react";
import ExpertiseSection from "../../components/Services/ExpertiseSection";
import MagicSection from "../../components/Services/MagicSection";
import Banner from "../../components/Services/Banner";
import Navbar from "../../components/Home/Navbar";
import JoinOurTribeBanner from "../../components/About/AboutBanner";
import webdev from "../../assets/service/webdev.png";
import videoSource from "../../assets/service/totemvid.mp4";
import Footer from "../../components/Home/Footer";

import webexp from "../../assets/webdev-exp/webexp.png";
import webexp1 from "../../assets/webdev-exp/webexp1.png";
import webexp2 from "../../assets/webdev-exp/webexp2.png";
import webexp3 from "../../assets/webdev-exp/webexp3.png";
import webexp4 from "../../assets/webdev-exp/webexp4.png";

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

const web = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const webExpertiseData = [
    {
      image: webexp1,
      title: "Custom Software Development",
      description:
        "Our custom software integrates seamlessly with your systems",
    },
    {
      image: webexp2,
      title: "Cloud Solutions",
      description:
        "Leverage the power of the cloud for flexibility, security, and scalability",
    },
    {
      image: webexp3,
      title: "API Development & Integration",
      description:
        "Connecting your software ecosystems with best API solutions",
    },
    {
      image: webexp4,
      title: "Data Analytics",
      description:
        "Transform data into actionable insights with our advanced analytics solutions",
    },
  ];
  return (
    <div className="bg-[#000e00] min-h-screen">
      <Navbar
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main className="pt-16 sm:pt-20 md:pt-24">
        <Banner
          backgroundImage={webexp}
          text="Building Digital Homes"
          className="uppercase"
        />
        <section className="max-w-7xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <VideoContainer />
        </section>
        <section className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 xl:px-16 2xl:px-24">
          <div className="max-w-4xl mx-auto">
            <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium font-inter text-center">
              Design meets function in our web creations. We build sites that
              not only look stunning but also connect with users and convert
              clicks into loyal customers.{" "}
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

export default web;
