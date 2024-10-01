import React, { useState } from "react";
import ExpertiseSection from "../../components/Services/ExpertiseSection";
import MagicSection from "../../components/Services/MagicSection";
import Banner from "../../components/Services/Banner";
import Navbar from "../../components/Home/Navbar";
import JoinOurTribeBanner from "../../components/About/AboutBanner";
import web from "../../assets/service/banner.png";
import videoSource from "../../assets/service/totemvid.mp4";
import Footer from "../../components/Home/Footer";

import banner from "../../assets/service/banner.png";
import image1 from "../../assets/service/image1.png";
import image2 from "../../assets/service/image2.png";
import image3 from "../../assets/service/image3.png";
import image4 from "../../assets/service/image4.png";

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

const vfx = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const webExpertiseData = [
    {
      image: image1,
      title: "CGI & 3D Modeling",
      description:
        "Creating lifelike characters, environments, and effects that blend seamlessly into any scene",
    },
    {
      image: image2,
      title: "Compositing",
      description: "Merging layers of magic to create a flawless final image",
    },
    {
      image: image3,
      title: "Special Effects",
      description:
        "From explosions to natural phenomena, we make it all look real",
    },
    {
      image: image4,
      title: "Post-Production",
      description: "Polishing every pixel to perfection",
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
        <Banner backgroundImage={banner} text="art of 3d homes" />
        <section className="max-w-7xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <VideoContainer />
        </section>
        <section className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 xl:px-16 2xl:px-24">
          <div className="max-w-4xl mx-auto">
            <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium font-inter text-center">
              Reimagine the Ordinary with Our Creative Generalists. We create
              procedural animations & simulations, to deliver visual experiences{" "}
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

export default vfx;
