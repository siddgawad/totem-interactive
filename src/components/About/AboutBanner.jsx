import React from "react";

const JoinOurTribeBanner = () => {
  return (
    <div className="relative p-6 sm:m-8 md:m-8 text-center overflow-hidden">
      {/* Main Banner Content */}
      <div className="relative z-10 bg-[#02c503] py-6 sm:py-8">
        <h2 className="text-3xl sm:text-4xl font-exo2 font-bold mb-4">
          JOIN OUR TRIBE
        </h2>
        <p className="mb-6 max-w-xl sm:max-w-2xl mx-auto font-inter p-4">
          Are you driven by innovation and creativity? Totem Interactive is
          always looking for talented individuals ready to push digital
          boundaries. Join our team and help shape the future of digital
          experiences.
        </p>
        <a href="/join">
          <button className="bg-black text-white h-6 sm:h-10 md:h-14 w-[90%] font-semibold hover:bg-gray-800 transition-colors font-inter ">
            Explore Career Opportunities
          </button>
        </a>
      </div>
    </div>
  );
};

export default JoinOurTribeBanner;
