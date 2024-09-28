import React, { useMemo, useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const OrbitingParticles = ({ count = 100, radius = 2, color = '#ffffff', size = 0.02 }) => {
  const mesh = useRef();

  const [positions, speeds] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = (Math.random() - 0.5) * radius;
      positions[i * 3 + 2] = Math.sin(angle) * radius;
      speeds[i] = 0.01 + Math.random() * 0.01;
    }

    return [positions, speeds];
  }, [count, radius]);

  useEffect(() => {
    if (mesh.current) {
      mesh.current.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    }
  }, [positions]);

  useFrame(() => {
    if (mesh.current && mesh.current.geometry.attributes.position) {
      const positions = mesh.current.geometry.attributes.position.array;

      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const x = positions[i3];
        const z = positions[i3 + 2];

        const angle = Math.atan2(z, x) + speeds[i];
        const newRadius = Math.sqrt(x * x + z * z);

        positions[i3] = Math.cos(angle) * newRadius;
        positions[i3 + 2] = Math.sin(angle) * newRadius;
      }

      mesh.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attachObject={['attributes', 'position']}
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={size} color={color} transparent opacity={0.6} />
    </points>
  );
};

export default OrbitingParticles;