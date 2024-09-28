import React from 'react';
import { animated } from '@react-spring/web';
import leftarr from '../../assets/left arrow.png';
import rightarr from '../../assets/right arrow.png';
import leftproj from '../../assets/leftproj.png';
import rightproj from '../../assets/rightproj.png';

const AboutSection = ({ animations }) => {
  return (
    <animated.div 
      style={animations.aboutUs}
      className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center p-8 md:p-16 bg-transparent"
    >
      <div className="z-10 text-white text-center max-w-2xl">
        <div className="flex items-center justify-center mb-4">
          <img src= {leftarr} alt="Left arrow" className="w-10 h-10 transform rotate-180" />
          <span className="mx-4 text-green-500 text-sm tracking-wider">ABOUT</span>
          <img src={rightarr} alt="Right arrow" className="w-6 h-6" />
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">WHO WE ARE?</h2>
        
        <p className="text-base md:text-lg mb-8">
          From humble beginnings to a leading agency, we turn ideas into epic digital experiences
        </p>
        
        <div className="relative inline-block group">
          <button className="relative z-10 px-6 py-3 text-white text-sm tracking-wider border border-green-500 bg-black transition-all duration-300 group-hover:px-10">
            ALL PROJECTS
          </button>
          <span className="absolute top-1 left-1 w-full h-full border border-white transition-all duration-300 group-hover:border-green-500"></span>
          <img src="/path-to-your-corner-vector.png" alt="Top left corner" className="w-6 h-6 absolute top-0 left-0 transform -translate-x-full -translate-y-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <img src="/path-to-your-corner-vector.png" alt="Top right corner" className="w-6 h-6 absolute top-0 right-0 transform translate-x-full -translate-y-full rotate-90 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <img src="/path-to-your-corner-vector.png" alt="Bottom left corner" className="w-6 h-6 absolute bottom-0 left-0 transform -translate-x-full translate-y-full -rotate-90 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <img src="/path-to-your-corner-vector.png" alt="Bottom right corner" className="w-6 h-6 absolute bottom-0 right-0 transform translate-x-full translate-y-full rotate-180 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      </div>
    </animated.div>
  );
};

export default AboutSection;