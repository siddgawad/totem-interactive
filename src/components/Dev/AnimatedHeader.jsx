import React, { useState, useEffect } from 'react';
import gif from '../../assets/rr.gif';

const AnimatedHeader = () => {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSmall(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isSmall ? 'h-32' : 'h-screen'} ${isSmall ? 'bg-transparent' : 'bg-black'}`}>
      <div className={`relative h-full ${isSmall ? 'w-64' : 'w-full'} transition-all duration-300`}>
        <img 
          src={gif}
          alt="Animated Header"
          className={`w-full h-full object-cover transition-all duration-300 ${
            isSmall ? 'object-center w-1/2' : 'object-center'
          }`}
        />
      </div>
    </header>
  );
};

export default AnimatedHeader;
