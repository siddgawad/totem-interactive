import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import file from "./assets/test.png";

const imageDescriptionPairs = [
  { image: file, description: "Description 1" },
  { image: file, description: "Description 2" },
  { image: file, description: "Description 3" },
  { image: file, description: "Description 4" },
  { image: file, description: "Description 5" },
];

const ScrollableImageDescription = ({ onScrollEnd }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const handleScroll = () => {
        const scrollTop = container.scrollTop;
        const itemHeight = container.clientHeight;
        const index = Math.round(scrollTop / itemHeight);
        setCurrentIndex(index % imageDescriptionPairs.length);

        if (
          container.scrollHeight - container.scrollTop ===
          container.clientHeight
        ) {
          onScrollEnd();
        }
      };

      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [onScrollEnd]);

  const getImagePosition = (index) => {
    const diff = index - currentIndex;
    const normalizedDiff =
      ((diff + imageDescriptionPairs.length) % imageDescriptionPairs.length) -
      1;

    if (normalizedDiff === 0) {
      return { x: "0%", y: "0%", scale: 1, opacity: 1, zIndex: 1 };
    } else if (normalizedDiff === -1) {
      return { x: "-75%", y: "-75%", scale: 0.8, opacity: 0, zIndex: 0 };
    } else if (normalizedDiff === 1) {
      return { x: "-75%", y: "75%", scale: 0.8, opacity: 0, zIndex: 0 };
    } else {
      return { x: "-100%", y: "0%", scale: 0.6, opacity: 0, zIndex: -1 };
    }
  };

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-auto snap-y snap-mandatory scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-200"
    >
      {imageDescriptionPairs.map((pair, index) => (
        <div
          key={index}
          className="h-screen w-full flex relative overflow-hidden snap-start"
        >
          <div className="w-1/2 h-full relative">
            <AnimatePresence>
              {imageDescriptionPairs.map((_, imgIndex) => (
                <motion.div
                  key={imgIndex}
                  className="absolute w-full h-full"
                  initial={getImagePosition(
                    (imgIndex - 1 + imageDescriptionPairs.length) %
                      imageDescriptionPairs.length
                  )}
                  animate={getImagePosition(imgIndex)}
                  exit={getImagePosition(
                    (imgIndex + 1) % imageDescriptionPairs.length
                  )}
                  transition={{ type: "spring", stiffness: 50, damping: 20 }}
                >
                  <img
                    src={imageDescriptionPairs[imgIndex].image}
                    alt={`Image ${imgIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="w-1/2 h-full flex flex-col justify-center items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: "0%" }}
                exit={{ opacity: 0, x: "-100%" }}
                transition={{ duration: 0.5 }}
                className="text-white text-center p-8"
              >
                <p className="text-lg">{pair.description}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScrollableImageDescription;
