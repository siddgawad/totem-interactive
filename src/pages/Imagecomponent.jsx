import React from "react";
import { useSpring, animated } from "@react-spring/web";

const ImageComponent = ({ images, scrollProgress }) => {
  const calculateImagePosition = (index) => {
    const itemProgress = scrollProgress * images.length - index;
    const angle = itemProgress * Math.PI; // 0 to π
    const radius = 5; // Reduced radius to fit in the column

    // Calculate x and y positions
    const x = 1.5 * radius;
    const y = 0.5 * radius;

    // Adjust these values to position the arc correctly on the screen
    const centerX = 0;
    const centerY = 10;

    return {
      x: centerX + x,
      y: centerY - y,
      scale: 1 - Math.abs(itemProgress - 0.5) * 0.5,
      opacity: 1 - Math.abs(itemProgress - 0.5) * 2,
    };
  };

  return (
    <div className="relative h-full overflow-hidden">
      {images.map((image, index) => {
        const imagePosition = calculateImagePosition(index);
        const imageSpring = useSpring({
          to: {
            transform: `translate(${imagePosition.x}vw, ${imagePosition.y}vh) scale(${imagePosition.scale})`,
            opacity: imagePosition.opacity,
          },
          config: { mass: 1, tension: 280, friction: 60 },
        });

        return (
          <animated.div
            key={index}
            className="absolute w-full p-2"
            style={imageSpring}
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </animated.div>
        );
      })}
    </div>
  );
};

export default ImageComponent;
