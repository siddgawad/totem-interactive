import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";
import case1 from "../assets/case1.png";
import grid1 from "../assets/grid1.png";
import grid2 from "../assets/grid2.png";
import grid3 from "../assets/grid3.png";
import case12 from "../assets/case12.png";
import case13 from "../assets/case13.png";
import JoinOurTribeBanner from "../components/About/AboutBanner";
const Layout = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <div className="flex flex-col lg:flex-row w-full pt-10">
        <div className="w-full lg:w-3/4 p-4">
          <div className="my-8 flex justify-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl opacity-100 p-4 sm:p-6 md:p-10 w-full sm:w-3/4 md:w-1/2 text-center uppercase font-exo2">
              Crakk: The Run
            </h1>
          </div>
          <div className="relative flex justify-end w-full p-4 sm:p-6 md:p-8">
            <div className="border border-black w-full">
              <img src={case1} alt="Main Game Image" className="w-full" />
            </div>
          </div>
          <div className="w-full p-4 my-4 sm:my-6 md:my-8">
            <p className="text-sm sm:text-base md:text-lg font-inter text-center">
              Crakk: The Run Game is an action-packed endless runner inspired by
              the movie "Crakk," starring Vidyut Jamwal, Arjun Rampal, and Nora
              Fatehi. The game features multiple maps and three dynamic
              characters, each representing the movie's stars.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between w-full p-4 my-4 sm:my-6 md:my-8 space-y-4 sm:space-y-0 sm:space-x-4">
            {[grid1, grid2, grid3].map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Image ${index + 1}`}
                className="w-full sm:w-1/3 border border-black p-2"
              />
            ))}
          </div>
          <div className="my-8 p-4">
            <h1 className="text-2xl sm:text-3xl opacity-100 text-center font-exo2">
              Introduction
            </h1>
          </div>
          <div className="p-4">
            <p className="text-sm sm:text-base md:text-lg font-inter text-center">
              Crakk: The Run Game was designed to immerse players in the
              high-octane world of the movie "Crakk." The game allows players to
              choose from three characters—Vidyut Jamwal, Arjun Rampal, and Nora
              Fatehi—each with unique abilities and styles.
            </p>
          </div>
          <div className="border border-black p-4 w-full my-4 sm:my-6 md:my-8">
            <img src={case12} alt="Diverse Maps" className="w-full" />
          </div>
          <div className="my-8 p-4">
            <h1 className="text-2xl sm:text-3xl opacity-100 text-center m-4 border-b-10 border-black py-8 sm:py-12 font-exo2 uppercase font-semibold">
              Outcomes
            </h1>
            <section className="mb-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 font-exo2">
                THE IMPACT
              </h2>
              <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-4 md:space-x-8 lg:space-x-12 space-y-4 sm:space-y-0">
                {["Downloads", "Active Users", "Positive Reviews"].map(
                  (label, index) => (
                    <div key={index} className="text-center">
                      <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-500">
                        50,000+
                      </p>
                      <p className="text-xs sm:text-sm md:text-base">{label}</p>
                    </div>
                  )
                )}
              </div>
            </section>
          </div>
          <div className="p-4">
            <p className="text-sm sm:text-base md:text-xl font-exo2 text-center">
              Crakk: The Run Game successfully brought the movie's intense
              energy to the gaming world. With its varied maps and character
              selection, the game quickly became a hit among fans.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/4 p-4 font-exo2 uppercase">
          <div className="sticky top-[30%]">
            <h3 className="opacity-60 p-4 text-sm sm:text-base font-exo2">
              Industry
            </h3>
            <h2 className="p-4 text-base sm:text-lg font-exo2">
              Game Development
            </h2>
            <h2 className="p-4 text-base sm:text-lg font-exo2">
              User Experience
            </h2>
            <div className="my-8"></div>
            <h3 className="opacity-60 p-4 text-sm sm:text-base font-exo2">
              Services
            </h3>
            <h2 className="p-4 text-base sm:text-lg font-exo2">
              Game Development
            </h2>
            <h2 className="p-4 text-base sm:text-lg font-exo2">
              User Experience
            </h2>
          </div>
        </div>
      </div>
      <div className="w-full py-4 sm:py-6 md:py-8">
        <img src={case13} alt="Full Width Image" className="w-full" />
      </div>
      <JoinOurTribeBanner />
      <Footer />
    </div>
  );
};
export default Layout;
