import React, { useState } from "react";
import ExpertiseSection from "../components/Services/ExpertiseSection";
import MagicSection from "../components/Services/MagicSection";
import Banner from "../components/Services/Banner";
import banner from "../assets/service/banner.png";
import Navbar from "../components/Home/Navbar";
import JoinOurTribeBanner from "../components/About/AboutBanner";

const Services = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div className="bg-[#000e00]">
      <Navbar
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <main className="pt-16 sm:pt-20 md:pt-24">
        <Banner backgroundImage={banner} text="Our Upcoming Projects" />
        <section className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 xl:px-16 2xl:px-24">
          <div className="p-64">
            <div class=" w-[845px] text-white text-[33.20px] font-medium font-['Inter']">
              Totem Interactive is a firm believer in the future and its how its
              all about AI innovation, driving the future of digital
              experiences. One of our most exciting projects is Velocity, an
              AI-powered platform designed to revolutionize how users interact
              with digital content. By leveraging advanced machine learning
              algorithms, Velocity will offer personalized experiences,
              predictive analytics, and intelligent automation.
            </div>
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

export default Services;
