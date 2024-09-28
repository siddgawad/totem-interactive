import React from "react";

const JoinOurTribeBanner = () => {
  return (
    <div className="relative p-6 sm:m-8 text-center overflow-hidden">
      {/* Main Banner Content */}
      <div className="relative z-10 bg-[#02c503] py-6 sm:py-8 rounded">
        <h2 className="text-3xl sm:text-4xl font-exo2 font-bold mb-4">
          JOIN OUR TRIBE
        </h2>
        <p className="mb-6 max-w-xl sm:max-w-2xl mx-auto font-inter">
          Are you driven by innovation and creativity? Totem Interactive is
          always looking for talented individuals ready to push digital
          boundaries. Join our team and help shape the future of digital
          experiences.
        </p>
        <a href="/join">
          <button className="bg-black text-white px-6 py-2 w-full sm:w-auto font-semibold hover:bg-gray-800 transition-colors rounded font-inter">
            Explore Career Opportunities
          </button>
        </a>
      </div>
    </div>
  );
};

export default JoinOurTribeBanner;
