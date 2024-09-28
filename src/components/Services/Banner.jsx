import React from "react";

const Banner = ({ backgroundImage, text, height }) => {
  return (
    <div
      className="relative w-full bg-center  flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: height || "70vh", // Default to full viewport height if height is not provided
      }}
    >
      <div className="bg-transparent p-4 rounded-lg">
        <h1 className="text-white text-4xl font-bold text-center">{text}</h1>
      </div>
    </div>
  );
};

export default Banner;
