import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

const DiagonalMarquee = ({ text, duration = 2, fontSize = '24px' }) => {
  const containerRef = useRef(null);
  const marqueeRef = useRef(null);
  const [containerSize, setContainerSize] = useState({ width: 100, height: 100 });

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const { offsetWidth, offsetHeight } = containerRef.current;
        console.log('Container size:', offsetWidth, offsetHeight);
        setContainerSize({
          width: offsetWidth,
          height: offsetHeight,
        });
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    if (marqueeRef.current && containerSize.width && containerSize.height) {
      const diagonal = Math.sqrt(Math.pow(containerSize.width, 2) + Math.pow(containerSize.height, 2));
      console.log('Diagonal length:', diagonal);
      
      gsap.set(marqueeRef.current, {
        width: diagonal,
        rotation: -45,
        transformOrigin: 'left center',
        x: -diagonal,
        y: containerSize.height,
      });

      gsap.to(marqueeRef.current, {
        x: containerSize.width,
        y: -diagonal + containerSize.height,
        ease: 'none',
        repeat: -1,
        duration: duration,
      });

      console.log('Animation set up complete');
    }
  }, [containerSize, duration]);

  return (
    <div 
      ref={containerRef} 
      className="diagonal-marquee-container"
      style={{
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        position: 'relative',
        background: '#000e00',
      }}
    >
      <div 
        ref={marqueeRef}
        className="diagonal-marquee-text"
        style={{
          position: 'absolute',
          color: 'white',
          whiteSpace: 'nowrap',
          fontSize: fontSize,
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
        }}
      >
        {Array(20).fill(text).join(' • ')}
      </div>
    </div>
  );
};

export default DiagonalMarquee;
