// import React, { useMemo, useRef, useEffect } from 'react';
// import { useFrame } from '@react-three/fiber';
// import * as THREE from 'three';

// const FloatingParticles = ({ count = 1000, color = '#00ff00', size = 0.02 }) => {
//   const mesh = useRef();
//   const [positions, speeds] = useMemo(() => {
//     const positions = new Float32Array(count * 3);
//     const speeds = new Float32Array(count);

//     for (let i = 0; i < count; i++) {
//       positions[i * 3] = (Math.random() - 0.5) * 10;
//       positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
//       positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
//       speeds[i] = Math.random() * 0.01 + 0.002;
//     }

//     return [positions, speeds];
//   }, [count]);

//   useEffect(() => {
//     if (mesh.current) {
//       mesh.current.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
//     }
//   }, [positions]);

//   useFrame(() => {
//     if (mesh.current) {
//       const positionAttribute = mesh.current.geometry.getAttribute('position');
//       const array = positionAttribute.array;

//       for (let i = 0; i < count; i++) {
//         array[i * 3 + 1] += speeds[i];
//         if (array[i * 3 + 1] > 5) {
//           array[i * 3 + 1] = -5;
//         }
//       }

//       positionAttribute.needsUpdate = true;
//     }
//   });

//   return (
//     <points ref={mesh}>
//       <bufferGeometry />
//       <pointsMaterial size={size} color={color} transparent opacity={0.6} />
//     </points>
//   );
// };

// export default FloatingParticles;

import React, { useMemo, useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const FloatingParticles = ({ count = 500, color = "#00ff00", size = 0.02 }) => {
  const mesh = useRef();
  const [positions, speeds] = useMemo(() => {
    const positions = new Float32Array(count * 4);
    const speeds = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

      speeds[i] = 0.008;
    }

    return [positions, speeds];
  }, [count]);

  const positionAttribute = useRef();

  useEffect(() => {
    if (mesh.current) {
      positionAttribute.current = new THREE.BufferAttribute(positions, 3);
      mesh.current.geometry.setAttribute("position", positionAttribute.current);
    }
  }, [positions]);

  useFrame(() => {
    if (positionAttribute.current) {
      const array = positionAttribute.current.array;

      for (let i = 0; i < count; i++) {
        array[i * 3 + 1] += speeds[i];
        if (array[i * 3 + 1] > 5) {
          array[i * 3 + 1] = -5;
        }
      }

      positionAttribute.current.needsUpdate = true;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry />
      <pointsMaterial
        size={size}
        color={color}
        transparent
        opacity={0.6}
        sizeAttenuation={true}
      />
    </points>
  );
};

export default React.memo(FloatingParticles);
