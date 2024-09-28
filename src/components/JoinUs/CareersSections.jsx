import React from "react";
import team from "../../assets/join/team.png";

const CareersSections = () => {
  return (
    <div className="relative flex flex-col sm:flex-row  md:flex-row  bg-[#02c503] sm:rounded-bl-[150px] p-8  sm:p-10 sm:py-16   ">
      {/* Text */}
      <div className="text-black  md:text-center mb-8 ">
        <h1 className="text-3xl sm:text-4xl font-bold font-['Exo2'] md:text-left md:pt-10 mt-10 ">
          CAREERS
        </h1>
        <h2 className="text-xl sm:text-2xl   lg:text-2xl md:text-left ">
          @ TOTEM INTERACTIVE
          <p className=" pt-4 md:pt-10 mr-2 text-left md:mr-2 md:text-left text-base sm:text-lg lg:text-xl ">
            Ready to join a team that values creativity as much as you do?
            Explore our open positions, and let's create something amazing
            together.
          </p>
        </h2>
      </div>

      {/* Image */}
      <div className="relative m-2">
        <img
          src={team}
          alt="Team"
          className="w-full object-cover rounded-lg  sm:h-[50%] md:h-[80%] md:mt-10 sm:mt-20   "
        />
      </div>
    </div>
  );
};

export default CareersSections;
