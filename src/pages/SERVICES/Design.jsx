import React, { useState } from "react";
import ExpertiseSection from "../../components/Services/ExpertiseSection";
import MagicSection from "../../components/Services/MagicSection";
import Banner from "../../components/Services/Banner";
import Navbar from "../../components/Home/Navbar";
import JoinOurTribeBanner from "../../components/About/AboutBanner";
import web from "../../assets/service/designcon.png";
import videoSource from "../../assets/service/totemvid.mp4";
import Footer from "../../components/Home/Footer";

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

const Web = () => {
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
      <main className="pt-16 sm:pt-20 md:pt-24">
        <Banner backgroundImage={web} text="THE ARCHITECTS OF IDEAS" />
        <section className="max-w-7xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <VideoContainer />
        </section>
        <section className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 xl:px-16 2xl:px-24">
          <div className="max-w-4xl mx-auto">
            <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium font-['Inter'] leading-relaxed">
              Consult with us to unlock your brand’s potential. Our design
              strategies don’t just look good—they work hard, delivering impact
              and fostering growth.{" "}
            </p>
          </div>
        </section>
        <ExpertiseSection />
        <MagicSection />
        <JoinOurTribeBanner />
        <Footer />
      </main>
    </div>
  );
};

export default Web;
