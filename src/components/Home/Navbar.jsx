import React, { useState, useRef } from "react";
import { FiX, FiChevronDown } from "react-icons/fi";
import CustomIcon from "../../assets/navassets/icon1.svg";
import CustomIcon2 from "../../assets/navassets/icon2.svg";

import bg from "../../assets/Isolation_Mode.png";
import saas from "../../assets/navassets/saas.png";
import arvr1 from "../../assets/navassets/arvr1.png";
import design from "../../assets/navassets/design.png";
import game from "../../assets/navassets/game.png";
import web from "../../assets/navassets/webdesign.png";
import vfx from "../../assets/navassets/vfx.png";
import logo from "../../assets/logo.png";

const services = [
  { name: "SaaS", image: saas, link: "/saas" },
  { name: "Game Development", image: game, link: "/game" },
  { name: "Web Design & Development", image: design, link: "/web" },
  { name: "VFX", image: vfx, link: "/vfx" },
  { name: "Design Consultancy", image: web, link: "/design" },
  { name: "AR/VR", image: arvr1, link: "/ar-vr" },
];

export default function Navbar({
  navOpen,
  setNavOpen,
  activeSection,
  setActiveSection,
}) {
  // Ref to main section button
  const mainButtonRef = useRef(null);
  // Function to toggle navigation
  const toggleNav = (section) => {
    if (section === null) {
      setNavOpen(false);
      setActiveSection(null);
    } else {
      setActiveSection(section);
      setNavOpen(true);
    }
  };
  // Handle the Chevron Down button click to activate "main"
  const handleChevronClick = () => {
    if (mainButtonRef.current) {
      mainButtonRef.current.click(); // Simulates a click on the main button
    }
  };

  return (
    <div className="font-['Exo 2']">
      {/* Transparent Navbar */}
      <nav className="fixed w-full flex justify-between items-center p-4 sm:p-6 md:p-8 bg-black h-4 z-20">
        <div className="flex items-center">
          {/* Logo */}
          <a href="/" className="text-white">
            <img src={logo} alt="Logo" className="h-4 sm:h-6 m-2 mt-2" />
          </a>
        </div>
        <div className="flex space-x-2 sm:space-x-4 ">
          <button onClick={() => toggleNav("services")} className="text-white">
            <img
              src={CustomIcon}
              alt="Custom Icon"
              className="h-4 sm:h-4 pr-2"
            />
          </button>
          <button
            onClick={() => toggleNav("main")}
            ref={mainButtonRef}
            className="text-white"
          >
            <img
              src={CustomIcon2}
              alt="Custom Icon"
              className="h-4 sm:h-4 pr-2"
            />
          </button>
        </div>
      </nav>

      {/* Full-screen Navigation Overlay */}
      {navOpen && (
        <div className="fixed inset-0 bg-black z-30 flex">
          <div
            className="absolute inset-0 opacity-80 text-white pointer-events-none bg-cover bg-center"
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
            }}
          />
          <button
            onClick={() => toggleNav(null)}
            className="absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 text-white z-40"
          >
            <FiX size={24} className="sm:h-8 md:h-10" />
          </button>
          {activeSection === "main" && (
            <div className="flex flex-col items-start w-full sm:flex-row  p-4 lg:p-16 sm:p-12 md:p-12">
              <div className="w-full sm:w-1/2 mb-8 sm:mb-0">
                <h2 className="text-[#979797] text-3xl sm:text-4xl  lg:text-7xl xl:text-8xl font-bold mb-8 mt-10 ml- ">
                  SITEMAP
                </h2>
                <ul className="text-white space-y-4 sm:space-y-6">
                  <li className="text-2xl sm:text-3xl md:text-[42px] w-full lg:text-5xl xl:text-6xl font-semibold">
                    {" "}
                    <a
                      href="/about"
                      className="text-white hover:text-green-500 transition-colors duration-200"
                    >
                      ABOUT
                    </a>
                  </li>
                  <li className="text-2xl sm:text-3xl md:text-[42px] w-full lg:text-5xl xl:text-6xl font-semibold">
                    <a
                      href="/services"
                      className="text-white hover:text-green-500 transition-colors duration-200"
                    >
                      OUR SERVICES
                    </a>
                  </li>

                  <li className="text-2xl sm:text-3xl md:text-[42px] w-full lg:text-5xl xl:text-6xl font-semibold">
                    <a
                      href="/contact"
                      className="text-white hover:text-green-500 transition-colors duration-200"
                    >
                      CONTACT
                    </a>
                  </li>

                  <li className="text-2xl sm:text-3xl md:text-[42px] w-full lg:text-5xl xl:text-6xl font-semibold">
                    <a
                      href="/CaseStudies"
                      className="text-white hover:text-green-500 transition-colors duration-200"
                    >
                      CASE STUDIES
                    </a>
                  </li>

                  <li className="text-2xl sm:text-3xl md:text-[42px] w-full lg:text-5xl xl:text-6xl font-semibold">
                    <a
                      href="/join"
                      className="text-white hover:text-green-500 transition-colors duration-200"
                    >
                      CAREERS
                    </a>
                  </li>
                  <li className="text-2xl sm:text-3xl md:text-[42px] w-full lg:text-5xl xl:text-6xl font-semibold">
                    <a
                      href="/privacy-policy"
                      className="text-white hover:text-green-500 transition-colors duration-200"
                    >
                      PRIVACY POLICY
                    </a>
                  </li>
                </ul>
              </div>
              <div className="absolute flex-end  right-10 sm:right-12  md:right-20">
                <h2 className="text-[#979797] text-4xl sm:text-4xl  lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-8 mt-10  ">
                  Socials
                </h2>
                <ul className="text-[#d5d5d5] flex flex-col items-end text-3xl sm:text-2xl  md:text-[26px] font-medium space-y-4">
                  <li>
                    <a
                      href="https://www.linkedin.com/company/totem-interactive/"
                      className="text-white hover:text-green-500 transition-colors duration-200 text-xl sm:text-2xl md:text-3xl lg:text-6xl xl:text-6xl pt-2"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/totem.interactive/"
                      className="text-white hover:text-green-500 transition-colors duration-200 text-xl sm:text-2xl md:text-3xl lg:text-6xl xl:text-6xl"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="#facebook"
                      className="text-white hover:text-green-500 transition-colors duration-200 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl"
                    >
                      Facebook
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}
          {navOpen && activeSection === "services" && (
            <div className="w-full p-4 mt-8 sm:p-8 md:p-12 lg:p-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {services.map((service, index) => (
                <a
                  key={index}
                  href={service.link}
                  className="relative border border-gray-700 rounded-lg overflow-hidden flex items-center justify-center group hover:border-green-500 transition-all duration-300"
                >
                  <div className="aspect-w-1 aspect-h-1 w-full h-full">
                    <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ backgroundImage: `url(${service.image})` }}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold text-center p-4">
                        {service.name}
                      </h3>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
