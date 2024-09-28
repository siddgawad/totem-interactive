import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = `
  varying vec3 vNormal;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float time;
  uniform vec3 color1;
  uniform vec3 color2;
  varying vec3 vNormal;

  vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
    return a + b * cos(6.28318 * (c * t + d));
  }

  void main() {
    vec3 normal = normalize(vNormal);
    float t = time * 0.1;
    vec3 color = palette(
      normal.y * 0.5 + 0.5 + sin(normal.x * 10.0 + t) * 0.1,
      vec3(0.5, 0.5, 0.5),
      vec3(0.5, 0.5, 0.5),
      vec3(1.0, 1.0, 1.0),
      vec3(0.0, 0.33, 0.67)
    );
    color = mix(color1, color2, color);
    gl_FragColor = vec4(color, 1.0);
  }
`;

const AuroraSky = () => {
  const meshRef = useRef();
  const materialRef = useRef();

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[500, 60, 40]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          time: { value: 0 },
          color1: { value: new THREE.Color(0x000033) }, // Dark blue (night sky)
          color2: { value: new THREE.Color(0x0066ff) }, // Light blue (aurora)
        }}
        side={THREE.BackSide}
      />
    </mesh>
  );
};

export default AuroraSky;
