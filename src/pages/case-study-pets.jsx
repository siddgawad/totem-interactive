import React, { useState } from "react";
import JoinOurTribeBanner from "../components/About/AboutBanner";
import { Link } from "react-router-dom";
import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";
import pet1 from "../assets/pets/pet1.png";
import petg1 from "../assets/pets/petg1.png";
import petg2 from "../assets/pets/petg2.png";
import petg3 from "../assets/pets/petg3.png";
import pet2 from "../assets/pets/pet2.png";
import pet3 from "../assets/pets/pet3.png";

const Pets = () => {
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
        {/* Main content */}
        <main className="flex-1">
          {/* Centered H1 tag with 50% width */}
          <div className="my-8 flex justify-center">
            <h1 className="text-4xl opacity-100 p-10 w-1/2 text-center uppercase font-exo2 ">
              Pets Paradise
            </h1>
          </div>

          <div className="border border-black w-full pt-3 pl-3 pb-3">
            <img src={pet1} alt="Main Game Image" className="w-full" />
          </div>

          {/* P tag under Column 1 */}
          <div className="w-full p-4 my-8 font-inter md:text-xl text-center">
            <p>
              Pets Paradise is an ecosystem for your pets designed to cater to
              the needs of pet owners by offering a wide range of pet products,
              including food, accessories, and grooming supplies, along with
              easy access to various pet care services.
            </p>
          </div>

          {/* Image grid with 3 images, aligned horizontally */}
          <div className="flex justify-between w-full p-4 my-8">
            <img
              src={petg1}
              alt="Image 1"
              className="w-1/3 border border-black p-2"
            />
            <img
              src={petg2}
              alt="Image 2"
              className="w-1/3 border border-black p-2"
            />
            <img
              src={petg3}
              alt="Image 3"
              className="w-1/3 border border-black p-2"
            />
          </div>

          {/* Introduction Section */}
          <div className="my-8 p-4">
            <h1 className="text-3xl opacity-100 text-center font-inter md:text-3xl">
              Introduction
            </h1>
          </div>

          <div className="p-4 font-inter md:text-2xl text-center">
            <p>
              Pets Paradise was developed to become the go-to eCommerce platform
              for pet owners, providing a seamless shopping experience for all
              things pet-related. The app needed to offer an extensive catalog
              of products while maintaining a user-friendly interface that
              allowed for easy browsing, filtering, and purchasing. In addition
              to products, the app also integrated services such as grooming
              appointments, veterinary consultations, and pet boarding, making
              it a comprehensive solution for pet care. Our challenge was to
              design an app that was visually appealing, easy to navigate, and
              highly functional, ensuring that users could find and purchase
              everything their pets needed in just a few taps.
            </p>
          </div>

          {/* Another image with padding */}
          <div className="border border-black p-4 w-full my-8">
            <img src={pet2} alt="Diverse Maps" className="w-full" />
          </div>

          {/* Outcomes Section */}
          <div className="my-8 p-4">
            <h1 className="text-3xl opacity-100 text-center font-inter uppercase md:text-3xl ">
              Outcomes
            </h1>
          </div>

          <div className="p-4 font-inter md:text-xl m-4 text-center">
            <p>
              The Pets Paradise app quickly gained popularity among pet owners
              for its intuitive design and extensive product offerings. The
              app’s clean and colorful interface made it easy for users to
              explore different product categories, compare options, and make
              purchases with confidence. The integration of pet care services
              further enhanced the app’s appeal, providing a one-stop shop for
              both products and services. User engagement soared, with many
              praising the app for its convenience and the quality of its
              offerings. As a result, Pets Paradise established itself as a
              growing eCommerce platform in the pet care industry, driving both
              sales and customer loyalty.
            </p>
          </div>
        </main>

        {/* Sidebar */}
        <div className="w-full md:w-1/4 p-4 font-exo2 uppercase">
          <div className="sticky top-[30%]">
            <h3 className="opacity-60 p-4">Industry</h3>
            <h2 className="p-4">Game Development</h2>
            <h2 className="p-4">User Experience</h2>

            <div className="my-8"></div>

            <h3 className="opacity-60 p-4">Services</h3>
            <h2 className="p-4">Game Development</h2>
            <h2 className="p-4">User Experience</h2>
          </div>
        </div>
      </div>

      {/* Full-width Image Div */}
      <div className="w-full py-8">
        <img src={pet3} alt="Full Width Image" className="w-full" />
      </div>

      {/* Join Our Tribe Section */}
      <div className="pt-16 pb-32">
        <JoinOurTribeBanner />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Pets;
