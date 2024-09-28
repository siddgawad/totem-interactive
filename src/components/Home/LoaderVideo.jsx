import React, { useState, useEffect } from 'react';
import { animated, useSpring } from '@react-spring/web';
import video from '../../assets/loader.mp4';

const VideoLoader = ({ onLoadComplete }) => {
  const [isVideoEnded, setIsVideoEnded] = useState(false);

  const fadeOut = useSpring({
    opacity: isVideoEnded ? 0 : 1,
    config: { duration: 1000 },
    onRest: () => {
      if (isVideoEnded) {
        onLoadComplete();
      }
    },
  });

  const handleVideoEnd = () => {
    setIsVideoEnded(true);
  };

  return (
    <animated.div 
      style={fadeOut} 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <video
        autoPlay
        muted
        onEnded={handleVideoEnd}
        className="w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </animated.div>
  );
};

export default VideoLoader;