import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import * as THREE from 'three';

const PulsatingGlowEffect = ({ baseColor = '#00ff00', intensity = 2, frequency = 2 }) => {
  const light = useRef();
  const time = useRef(0);

  const { intensitySpring } = useSpring({
    intensitySpring: intensity,
    config: { duration: 1000 / frequency }
  });

  useFrame((state, delta) => {
    time.current += delta * frequency;
    const pulseFactor = (Math.sin(time.current) + 1) / 2;  // 0 to 1
    
    if (light.current) {
      light.current.intensity = intensitySpring.get() * (1 + pulseFactor);
      
      // Pulsate color as well
      const color = new THREE.Color(baseColor);
      color.multiplyScalar(0.5 + 0.5 * pulseFactor);
      light.current.color = color;
    }
  });

  return (
    <animated.pointLight
      ref={light}
      color={baseColor}
      intensity={intensitySpring}
      distance={10}
      decay={2}
    />
  );
};

export default PulsatingGlowEffect;