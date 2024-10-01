import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Home/Navbar";
import JoinOurTribeBanner from "../components/About/AboutBanner";
import crakk from "../assets/service/crakk.png";
import Footer from "../components/Home/Footer";
import vel1 from "../../src/assets/velocity/vel1.png";
import pet1 from "../assets/pets/pet1.png";

const caseStudies = [
  { id: 1, title: "Crakk: The Run", image: crakk, href: "/crakk" },
  { id: 2, title: "Velocity", image: vel1, href: "/velocity" },
  {
    id: 3,
    title: "Pets Paradise",
    image: pet1,
    href: "/pets",
  },
];

const CaseStudyCard = ({ title, image, href }) => (
  <Link
    to={href}
    className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 mt-10 text-center flex flex-col"
  >
    <div className="relative pt-[75%] overflow-hidden">
      <img
        src={image}
        alt={title}
        className="absolute top-0 left-0 w-full h-full object-cover object-center"
      />
    </div>
    <div className="p-4 flex-grow flex items-center justify-center">
      <h3 className="text-green-500 text-lg font-semibold font-exo2">
        {title}
      </h3>
    </div>
  </Link>
);

const CaseStudies = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div className="bg-black min-h-screen">
      <Navbar
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-white text-3xl font-bold text-center mt-4 mb-12 font-exo2">
          CASE STUDIES
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} {...study} />
          ))}
        </div>
      </div>
      <JoinOurTribeBanner />
      <Footer />
    </div>
  );
};

export default CaseStudies;
