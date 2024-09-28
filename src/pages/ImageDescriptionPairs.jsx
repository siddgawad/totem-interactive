import React, { useState, useEffect } from "react";
import { useSpring, animated, config } from "@react-spring/web";

const ImageDescriptionPairs = ({ scrollProgress }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const pairs = [
    {
      image: "/src/pages/Frame 34.png",
      title: "SaaS-ify Your Success",
      description:
        "Our SaaS solutions are the secret sauce to streamline your workflow and supercharge your growth. Turn complexity into clarity with tools that adapt as you scale.",
    },
    // Add more pairs as needed
  ];

  useEffect(() => {
    const index = Math.floor(scrollProgress * pairs.length) % pairs.length;
    setCurrentIndex(index);
  }, [scrollProgress, pairs.length]);

  const { opacity, transform } = useSpring({
    opacity: 1,
    transform: `translateY(${currentIndex * -100}%)`,
    config: config.slow,
  });

  return (
    <div className="w-full h-full flex">
      <div className="w-1/2 h-full relative overflow-hidden">
        <animated.div
          style={{ opacity, transform }}
          className="absolute w-full h-full"
        >
          {pairs.map((pair, index) => (
            <div key={index} className="w-full h-full">
              <img
                src={pair.image}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          ))}
        </animated.div>
      </div>
      <div className="w-1/2 h-full relative overflow-hidden flex items-center justify-center">
        <animated.div
          style={{ opacity, transform }}
          className="absolute w-full h-full flex flex-col justify-center p-8"
        >
          {pairs.map((pair, index) => (
            <div key={index} className="w-full">
              <h2 className="text-4xl font-bold text-green-500 mb-4">
                {pair.title}
              </h2>
              <p className="text-white text-lg">{pair.description}</p>
            </div>
          ))}
        </animated.div>
      </div>
    </div>
  );
};

export default ImageDescriptionPairs;
