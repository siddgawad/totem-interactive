import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import file from "../src/assets/file.png";

const ScrollAnimationComponent = () => {
  const componentRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: componentRef,
    offset: ["start start", "end start"],
  });

  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // For moving and opacity of the image overlay
  const imageY = useTransform(smoothScrollProgress, [0, 0.7], ["100%", "0%"]);
  const imageOpacity = useTransform(smoothScrollProgress, [0, 0.5], [0, 1]);

  return (
    <div className="relative bg-black">
      <div ref={componentRef} className="h-[300vh] relative">
        {/* Container with curved edges */}
        <div className="sticky top-0 mx-auto w-4/5 h-[80vh] rounded-3xl overflow-hidden">
          <div className="relative w-full h-full">
            {/* Central text */}
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center text-center z-30"
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              <motion.h2
                className="text-2xl lg:text-4xl font-medium text-white mb-4"
                style={{
                  transform: "rotateX(10deg)",
                }}
              >
                Mission Accomplished
              </motion.h2>
              <motion.h1
                className="text-[156px] font-bold text-green-400 leading-none"
                style={{
                  transform: "rotateX(10deg)",
                  fontFamily: "Exo, sans-serif",
                  letterSpacing: "0%",
                }}
              >
                What's Cooking
              </motion.h1>
            </motion.div>

            {/* Image overlay */}
            <motion.div
              className="absolute inset-0 z-20"
              style={{
                y: imageY,
                opacity: imageOpacity,
              }}
            >
              <img
                src={file}
                alt="Overlay Icons"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollAnimationComponent;
