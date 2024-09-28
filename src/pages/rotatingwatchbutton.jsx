import React, { useState } from "react";
import button from "../../assets/aboutassets/button.png";

const RotatingWatchButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full bg-transparent flex items-center justify-center overflow-hidden">
      <img
        src={button}
        alt="Watch Button"
        className={`w-full h-full object-cover rounded-full transition-all duration-300 ease-in-out ${
          isHovered ? "animate-spin scale-110" : ""
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
};

export default RotatingWatchButton;
