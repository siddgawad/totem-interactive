import React from "react";
import { useSpring, animated } from "@react-spring/web";

const DescriptionComponent = ({ descriptions, scrollProgress }) => {
  const calculateDescriptionPosition = (index) => {
    const itemProgress = (scrollProgress * descriptions.length - index) % 1;
    return {
      x: (1 - itemProgress) * 50, // Reduced movement range
      opacity: 1 - Math.abs(itemProgress - 0.5) * 2,
    };
  };

  return (
    <div className="relative h-full overflow-hidden">
      {descriptions.map((description, index) => {
        const descPosition = calculateDescriptionPosition(index);
        const descSpring = useSpring({
          to: {
            transform: `translateX(${descPosition.x}%)`,
            opacity: descPosition.opacity,
          },
          config: { mass: 1, tension: 280, friction: 60 },
        });

        return (
          <animated.div
            key={index}
            className="absolute top-1/2 w-full p-2 transform -translate-y-1/2"
            style={descSpring}
          >
            <div className="bg-green-900 bg-opacity-50 p-4 rounded-lg shadow-lg">
              <p className="text-white text-lg">{description}</p>
            </div>
          </animated.div>
        );
      })}
    </div>
  );
};

export default DescriptionComponent;
