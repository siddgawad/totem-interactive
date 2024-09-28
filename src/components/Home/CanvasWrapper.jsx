import React from 'react';
import { Canvas } from '@react-three/fiber';
import Totem from '../../models/totem';

const CanvasWrapper = ({ scrollProgress }) => {
  return (
    <div className="w-full h-full md:p-0 p-4">
      <div className="w-full h-full md:rounded-none rounded-3xl overflow-hidden">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}
        >
          <Totem scrollProgress={scrollProgress} />
        </Canvas>
      </div>
    </div>
  );
};

export default CanvasWrapper;