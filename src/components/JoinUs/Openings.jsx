import React from 'react';

const jobOpenings = [
  '3D Generation',
  'Full Stack Developer',
  'Game Developer',
  'Machine Learning Developer',
  // Add more openings as needed
];

const Openings = () => {
  return (
    <div className="bg-transparent text-white mt-12 sm:mt-24 px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-xl sm:text-2xl font-semibold mb-8">CURRENT OPENINGS</h2>
      <div className="space-y-4 max-w-xl sm:max-w-3xl mx-auto">
        {jobOpenings.map((job, index) => (
          <div key={index} className="flex items-center justify-between border-b border-gray-700 pb-2">
            <span className="text-base sm:text-lg">{job}</span>
            <button className="bg-[#00FF00] text-black px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-base font-semibold rounded">
              APPLY NOW
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Openings;