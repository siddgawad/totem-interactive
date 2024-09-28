import React, { useRef, useState } from 'react';
import Anima from './Anima';

const SubwayVideoPlayer = ({ videoSrc }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#000e00] p-4 sm:p-8">
      <div className="w-full max-w-4xl flex flex-col items-center justify-center gap-8">
        <div className="relative w-full aspect-w-16 aspect-h-9">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full sm:w-[80%] md:w-[66.67%] rounded-lg overflow-hidden">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                src={videoSrc}
                loop
                muted
                autoPlay
                onClick={togglePlay}
              />
            </div>
          </div>
        </div>
        <div className="text-white text-center max-w-xl sm:max-w-2xl px-2 sm:px-4">
          <p className="text-base sm:text-sm leading-relaxed mt-32 sm:mt-32 mb-16 sm:mb-32 md:mb-64">
            At Totem Interactive, we offer a comprehensive range of services tailored to your unique needs. Whether you need software development, AR/VR experiences, or game design, we have the expertise to bring your vision to life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubwayVideoPlayer;