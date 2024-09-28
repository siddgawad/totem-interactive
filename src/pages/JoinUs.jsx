import React from "react";
import CareersSection from "../components/JoinUs/CareersSections";
import Navbar from "../components/Home/Navbar";
import Openings from "../components/JoinUs/Openings";
import Footer from "../components/Home/Footer";
import { useState } from "react";
const JoinUs = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  return (
    <div className="bg-[#000E00] w-full overflow-hidden">
      <div className="top-1">
        <Navbar
          navOpen={navOpen}
          setNavOpen={setNavOpen}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </div>
      <CareersSection />
      <div className="p-8 sm:p-16 md:p-24">
        <div className=" flex sm:justify-center text-white text-xl sm:text-2xl  font-medium font-['Inter']  md:justify-center lg:justify-center xl:justify-center text-center sm:text-center lg:text-3xl ">
          At Totem Interactive, we’re more than just colleagues—we’re a tribe. A
          place where creativity flows, and innovation is a daily habit. Sound
          like your kind of workplace? Then let’s talk.
        </div>
        <Openings />
        <Footer />
      </div>
    </div>
  );
};
export default JoinUs;
