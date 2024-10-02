import React, { useState } from "react";
import { animated, useSpring } from "@react-spring/web";

const s3VideoUrl =
  "https://totem-video-loader-69.s3.ap-south-1.amazonaws.com/loader.mp4"; // S3 bucket video link

const VideoLoader = ({ onLoadComplete }) => {
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);

  const fadeOut = useSpring({
    opacity: isVideoEnded ? 0 : 1,
    config: { duration: 0 }, // Smooth fade-out
    onRest: () => {
      if (isVideoEnded) {
        onLoadComplete(); // Trigger load complete when video ends
      }
    },
  });

  const handleVideoEnd = () => {
    setIsVideoEnded(true); // Start fade-out when video ends
  };

  const handleCanPlay = () => {
    setIsVideoReady(true); // Show video once it's ready to play
  };

  return (
    <animated.div
      style={fadeOut}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      {/* Loading text before the video is ready */}
      {!isVideoReady && <div className="text-white">Loading...</div>}

      <video
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd} // Triggered when the video ends
        onCanPlay={handleCanPlay} // Triggered when the video is ready to play
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isVideoReady ? "visible" : "hidden"
        }`}
      >
        <source src={s3VideoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </animated.div>
  );
};

export default VideoLoader;
