import React from "react";
import { FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#000e00] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Logo and Company Name */}
          <div className="mb-8 md:mb-0 md:w-1/4">
            <div className="flex items-center">
              <a href="/" className="text-white">
                <img
                  src={logo}
                  alt="Totem Interactive Logo"
                  className="h-10 w-10 mr-3"
                />
              </a>

              <h2 className="text-xl font-bold font-exo2">Totem Interactive</h2>
            </div>
          </div>

          {/* Our Services and Social Icons */}
          <div className="mb-8 md:mb-0 md:w-1/8">
            <h3 className="text-lg font-semibold mb-4 font-exo2">
              Our Services
            </h3>
            <ul className="space-y-2 mb-6 font-inter">
              <a href="/saas">
                <li>Saas</li>
              </a>
              <a href="/game">
                <li>Game Development</li>
              </a>
              <a href="/web">
                <li>Web Design & Development</li>
              </a>
              <a href="/vfx">
                <li>VFX</li>
              </a>
              <a href="/design">
                <li>Design Consultancy</li>
              </a>
              <a href="/ar-vr">
                <li>AR/VR</li>
              </a>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.instagram.com/totem.interactive?igsh=MXRscW14NDNwOGdtbA==">
                {" "}
                <FaInstagram className="h-6 w-6" />{" "}
              </a>
              <a href="https://www.linkedin.com/company/totem-interactive/posts/?feedView=all">
                {" "}
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a href="https://youtube.com/@toteminteractive?si=b7fqsL9zkOS4QQmn">
                {" "}
                <FaYoutube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className="md:w-1/4">
            <h3 className="text-lg font-semibold mb-4 font-exo2">Explore</h3>
            <ul className="space-y-2 font-inter">
              <a href="/about">
                {" "}
                <li>About us</li>{" "}
              </a>
              <a href="/services">
                {" "}
                <li>Services</li>{" "}
              </a>
              <a href="/">
                <li>Case Studies</li>{" "}
              </a>
              <a href="/contact">
                <li>Contact Us</li>{" "}
              </a>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
