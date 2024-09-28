import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";
import vel1 from "../assets/velocity/vel1.png";
import vel2 from "../assets/velocity/vel2.png";
import vel3 from "../assets/velocity/vel3.png";
import Rectangle38 from "../assets/velocity/Rectangle38.png";
import Velicon from "../assets/velocity/Velicon.png";
import Group52 from "../assets/velocity/Group52.png";
import JoinOurTribeBanner from "../components/About/AboutBanner";
import "../pages/style.css";

const Velocity = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar at the top */}
      <Navbar
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main container */}
      <div className="flex flex-col md:flex-row">
        <main className="flex-1">
          {/* Column 1 - 75% width */}
          <div className="my-8 flex justify-center">
            {/* Centered H1 tag */}
            <h1 className="text-4xl opacity-100 p-10 ['font-Exo2']">
              VELOCITY
            </h1>
          </div>

          {/* Main image */}
          <div className="border border-black w-full pt-3 pl-3 pb-3">
            <img src={vel1} alt="Velocity AI Platform" className="w-full" />
          </div>

          {/* Description */}
          <div className="w-full p-4 my-8">
            <p className="w-full p-4 my-8 font-inter text-base md:text-xl text-center">
              Velocity is a web-based tool designed to enhance the quality of AI
              generation by offering a simple interface for users to control the
              final output through a generation playground, ensuring perfect
              results across various AI platforms.
            </p>
          </div>

          {/* Image grid with 3 images */}
          {/* <div className="flex justify-between w-full p-4 my-8">
  <img
    src={Rectangle38}
    alt="Image 1"
    className="border border-black p-2"
    style={{ width: '300px', height: '200px', objectFit: 'contain' }}
  />
  <img
    src={Velicon}
    alt="Image 2"
    className="border border-black p-2"
    style={{ width: '300px', height: '200px', objectFit: 'contain' }}
  />
  <img
    src={Group52}
    alt="Image 3"
    className="border border-black p-2"
    style={{ width: '300px', height: '200px', objectFit: 'contain' }}
  />
</div> */}
          <div className="flex flex-col sm:flex-row justify-between w-full p-4 my-8 gap-4">
            <div className="w-full sm:w-1/3 aspect-[3/2] relative">
              <img
                src={Rectangle38}
                alt="Image 1"
                className="absolute inset-0 w-full h-full object-contain border border-black p-2"
              />
            </div>
            <div className="w-full sm:w-1/3 aspect-[3/2] relative">
              <img
                src={Velicon}
                alt="Image 2"
                className="absolute inset-0 w-full h-full object-contain border border-black p-2"
              />
            </div>
            <div className="w-full sm:w-1/3 aspect-[3/2] relative">
              <img
                src={Group52}
                alt="Image 3"
                className="absolute inset-0 w-full h-full object-contain border border-black p-2"
              />
            </div>
          </div>

          {/* Introduction Section */}
          <div className="my-8 p-4">
            <h1 className="text-3xl opacity-100 text-center font-exo2 font-bold">
              Introduction
            </h1>
          </div>
          <div className="p-4 font-inter text-center text-base md:text-xl m-4">
            <p>
              Velocity was conceptualized to simplify the process of refining
              AI-generated images for designers, artists, and hobbyists alike.
              The platform provides users with a user-friendly interface where
              they can tweak parameters like style, composition, and color
              schemes to achieve their desired output. By bridging the gap
              between user intent and AI capabilities, Velocity empowers
              creators to push the boundaries of what's possible with
              AI-assisted art generation.
            </p>
          </div>

          {/* Another image */}
          <div className="border border-black p-4 w-full my-8">
            <img src={vel2} alt="Velocity Interface" className="w-full" />
          </div>

          {/* Outcome Section */}
          <div className="my-8 p-4">
            <h1 className="text-3xl opacity-100 text-center uppercase font-exo2 font-bold">
              Outcomes
            </h1>
          </div>

          <div className="p-4 font-inter text-base md:text-xl m-4">
            <p>
              The launch of Velocity was met with widespread acclaim for its
              ease and flexibility of use. Users praised its ability to
              fine-tune AI outputs to their exact needs. The resulting interface
              has proven both beginner-friendly and robust enough for more
              advanced users to achieve professional-quality results. Moving
              forward, Velocity continues to evolve, incorporating user feedback
              to become a go-to tool for creatives looking to harness the power
              of AI, with its design being used as a key factor in its success.
            </p>
          </div>
        </main>

        {/* Column 2 - Sticky Sidebar */}
        <div className="w-full md:w-1/4 p-4 font-inter">
          <div className="sticky top-[30%]">
            <h3 className="opacity-60 p-4">Industry</h3>
            <h2 className="p-4">GAME DEVELOPMENT</h2>
            <h2 className="p-4">USER EXPERIENCE</h2>

            <div className="my-8"></div>

            <h3 className="opacity-60 p-4">Services</h3>
            <h2 className="p-4">GAME DEVELOPMENT</h2>
            <h2 className="p-4">USER EXPERIENCE</h2>
          </div>
        </div>
      </div>

      {/* Full-width Image Div */}
      <div className="w-full py-8">
        <img src={vel3} alt="Full Width Image" className="w-full" />
      </div>

      {/* Work With Us Section */}
      {/* <div className="w-full bg-green-500 text-black text-center py-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          WORK WITH US
        </h2>
        <p className="my-4 text-sm md:text-base lg:text-lg">
          Let's bring your vision to life with stunning AI-powered designs. Get
          in touch with us today!
        </p>
        <Link
          to="/contact"
          className="bg-black text-white px-6 py-2 mt-4 text-sm md:text-base"
        >
          CONTACT US
        </Link>
      </div> */}

      <JoinOurTribeBanner />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Velocity;
