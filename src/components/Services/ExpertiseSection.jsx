import React from "react";


const ExpertiseCard = ({ image, title, description }) => {
  return (
    <div className="bg-[#000e00] border border-gray-700  overflow-hidden shadow-lg">
      <img src={image} alt={title} className="w-full p-2   object-contain" />
      <div className="m-2">
        <h3 className="text-[#02c503] text-left  font-inter object-contain text-base sm:text-lg md:text-lg lg:text-2xl pl-2 pb-6">
          {title}
        </h3>
        <p className="text-white  text-sm sm:text-base md:text-lg font-inter text-left pl-2 pb-2">
          {description}
        </p>
      </div>
    </div>
  );
};

const ExpertiseSection = ({ title, expertiseData }) => {
  return (
    <div className="bg-[#000e00] text-center py-8">
      <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-12 font-exo2">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  px-4 md:px-12">
        {expertiseData.map((item, index) => (
          <ExpertiseCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpertiseSection;
