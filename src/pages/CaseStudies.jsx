import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Home/Navbar";
import JoinOurTribeBanner from "../components/About/AboutBanner";
import crakk from "../assets/service/crakk.png";
import Footer from "../components/Home/Footer";

const caseStudies = [
  { id: 1, title: "Crakk: The Run", image: crakk },
  { id: 2, title: "Crakk: The Run", image: crakk },
  { id: 3, title: "Crakk: The Run", image: crakk },
  { id: 4, title: "Crakk: The Run", image: crakk },
  { id: 5, title: "Crakk: The Run", image: crakk },
  { id: 6, title: "Crakk: The Run", image: crakk },
  { id: 7, title: "Crakk: The Run", image: crakk },
  { id: 8, title: "Crakk: The Run", image: crakk },
];

const CaseStudyCard = ({ id, title, image }) => (
  <Link
    to={`/case-study/${id}`}
    className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 mt-10 text-center"
  >
    <img src={image} alt={title} className="w-full h-auto object-cover" />
    <div className="p-4">
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
        <h1 className="text-white text-3xl font-bold text-center mt-4 font-exo2">
          CASE STUDIES
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
