// import React, { useRef } from "react";
// import { motion, useScroll, useSpring, useTransform } from "framer-motion";
// import file from "../src/assets/file.png";

// const ScrollAnimationComponent = () => {
//   const componentRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: componentRef,
//     offset: ["start start", "end start"],
//   });

//   const smoothScrollProgress = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001,
//   });

//   // For moving and opacity of the image overlay
//   const imageY = useTransform(smoothScrollProgress, [0, 0.7], ["100%", "0%"]);
//   const imageOpacity = useTransform(smoothScrollProgress, [0, 0.5], [0, 1]);

//   return (
//     <div className="relative bg-black">
//       <div ref={componentRef} className=" h-[300vh] relative">
//         {/* Container with curved edges */}
//         <div className="sticky top-0 mx-auto w-90 h-[80vh] rounded-3xl overflow-hidden">
//           <div className="relative w-full h-full">
//             {/* Central text */}
//             <motion.div
//               className="absolute inset-0 flex flex-col items-center justify-center text-center z-30"
//               style={{
//                 perspective: "1000px",
//                 transformStyle: "preserve-3d",
//               }}
//             >
//               <motion.h2
//                 className="text-2xl lg:text-4xl font-medium text-white mb-4"
//                 style={{
//                   transform: "rotateX(10deg)",
//                 }}
//               >
//                 Mission Accomplished
//               </motion.h2>
//               <motion.h1
//                 className="text-[90px] font-bold text-green-400 leading-none"
//                 style={{
//                   transform: "rotateX(10deg)",
//                   fontFamily: "Exo, sans-serif",
//                   letterSpacing: "0%",
//                 }}
//               >
//                 What's Cooking
//               </motion.h1>
//             </motion.div>

//             {/* Image overlay */}
//             <motion.div
//               className="absolute inset-0 z-20"
//               style={{
//                 y: imageY,
//                 opacity: imageOpacity,
//               }}
//             >
//               <img
//                 src={file}
//                 alt="Overlay Icons"
//                 className="w-full h-52 object-cover lg:h-full"
//               />
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ScrollAnimationComponent;

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import action from "../src/assets/scroll-animate-home/action.png";
import Darshan from "../src/assets/scroll-animate-home/Darshan.png";
import crack from "../src/assets/scroll-animate-home/crack.png";
import PtwoP from "../src/assets/scroll-animate-home/PtwoP.png";
import Pets from "../src/assets/scroll-animate-home/Pets.png";

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

  // List of images and their respective horizontal positions and speeds
  const images = [
    { src: crack, left: "5%", speed: [0, 0.5] }, // Faster
    { src: Darshan, left: "25%", speed: [0, 0.7] }, // Medium
    { src: Pets, left: "45%", speed: [0, 0.9] }, // Slowest
    { src: action, left: "65%", speed: [0, 0.6] }, // Medium-fast
    { src: PtwoP, left: "85%", speed: [0, 0.4] }, // Fastest
  ];

  // Slow down the speed for all images by a factor
  const slowFactor = 1.5; // Adjust this value to control the speed

  return (
    <div className="relative bg-black">
      <div ref={componentRef} className="h-[300vh] relative">
        {/* Container with curved edges */}
        <div className="sticky top-0 mx-auto w-90 h-[80vh] rounded-3xl overflow-hidden">
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
                className="text-[90px] font-bold text-green-400 leading-none"
                style={{
                  transform: "rotateX(10deg)",
                  fontFamily: "Exo, sans-serif",
                  letterSpacing: "0%",
                }}
              >
                What's Cooking
              </motion.h1>
            </motion.div>

            {/* Image overlays with different speeds and starting positions */}
            {images.map((img, index) => {
              // Slow down the speed by applying the slowFactor
              const adjustedSpeed = img.speed[1] * slowFactor;

              // Unique upward movement for each image based on its speed
              const imageY = useTransform(
                smoothScrollProgress,
                [0, adjustedSpeed], // Use the adjusted speed
                ["150%", "-2000%"] // Starts from below the screen (150%)
              );

              const imageOpacity = useTransform(
                smoothScrollProgress,
                [0, adjustedSpeed - 0.8],
                [0.6, 1]
              );

              return (
                <motion.div
                  key={index}
                  className="absolute z-20"
                  style={{
                    bottom: "-20%", // Start from below the screen
                    left: img.left, // Position images horizontally
                    y: imageY,
                    opacity: imageOpacity,
                  }}
                >
                  <img
                    src={img.src}
                    alt={`Overlay Image ${index + 1}`}
                    className="w-18 h-10 md:w-24 md:h-full object-cover lg:h-full lg:w-32"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollAnimationComponent;
