import React from 'react';

const CarouselCards = ({ slides }) => {
    return (
        <div className="flex flex-col space-y-4 w-full max-w-md mx-auto">
            {slides.map((slide, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-4 md:p-6">
                    <h3 className="text-lg md:text-xl text-white mb-2">{slide.title}</h3>
                    <p className="text-sm md:text-base text-gray-300">{slide.description}</p>
                </div>
            ))}
        </div>
    );
};

export default CarouselCards;