import { shaderMaterial } from "@react-three/drei";
import * as THREE from "three";
import { extend } from "@react-three/fiber";

const LavaShaderMaterial = shaderMaterial(
  {
    time: 0,
    color: new THREE.Color(0.8, 0.1, 0.0),
    flowDirection: new THREE.Vector2(1, 0),
  },
  // Vertex Shader
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment Shader
  `
    uniform float time;
    uniform vec3 color;
    uniform vec2 flowDirection;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv + flowDirection * time * 0.1;
      float noise = fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453);
      vec3 lavaColor = color * (0.8 + 0.2 * sin(time + noise * 6.28));
      gl_FragColor = vec4(lavaColor, 1.0);
    }
  `
);

extend({ LavaShaderMaterial });

export { LavaShaderMaterial };
