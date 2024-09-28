import React from "react";
import crakk from "../../assets/service/crakk.png";

const MagicCard = ({ image, title }) => {
  return (
    <div className="bg-[#000e00] border border-gray-700 rounded-lg overflow-hidden shadow-lg">
      <img src={image} alt={title} className="w-full object-contain p-2 " />
      <div className="m-2">
        <h3 className="text-[#02c503] text-center  font-inter p-2 object-contain text-base sm:text-lg md:text-lg lg:text-2xl">
          {title}
        </h3>
      </div>
    </div>
  );
};

const MagicSection = () => {
  const magicData = [
    {
      image: crakk,
      title: "Crakk: The Run",
    },
    {
      image: crakk,
      title: "Crakk: The Run",
    },
  ];

  return (
    <div className="bg-[#000e00] text-center py-16">
      <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-12 font-inter">
        OUR MAGIC
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-12">
        {magicData.map((item, index) => (
          <MagicCard key={index} image={item.image} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default MagicSection;
