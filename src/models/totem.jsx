// import React, { useRef, useEffect, useState, useMemo } from "react";
// import { useGLTF, PerspectiveCamera } from "@react-three/drei";
// import { useFrame, useThree } from "@react-three/fiber";
// import { a, useSpring } from "@react-spring/three";
// import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
// import { LavaShaderMaterial } from "./LavaShaderMaterial";
// import * as THREE from "three";
// // import totemscene from "../models/Arjun.glb";
// // import hdr from "../hdr/NewWebBg.hdr";
// import { PMREMGenerator } from "three";
// import PulsatingGlowEffect from "../components/Home/PulsatingGlowEffect";
// import OrbitingParticles from "../components/Home/OrbitingParticles";
// import gsap from "gsap";

// // const BUCKET_URL = 'https://storage.googleapis.com/assets-totem';
// const totemscene = "https://storage.googleapis.com/assets-totem/Arjun.glb";
// const hdr = "https://storage.googleapis.com/assets-totem/NewWebBg.hdr";

// const Totem = ({ ...props }) => {
//   const totemref = useRef();
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const totemLogoRef = useRef();
//   const totemLogoParentRef = useRef();
//   const energy010Ref = useRef();
//   const { gl } = useThree();
//   const { nodes, materials } = useGLTF(totemscene);
//   const lavaRef = useRef();
//   const lavaRefs = useRef([]);
//   const lavaShaderRef = useRef();
//   const [isRotating, setIsRotating] = useState(false);
//   const [hovered, setHovered] = useState(false);
//   const { scene } = useThree();
//   const tl = useRef();
//   const [isVisible, setIsVisible] = useState(false);
//   const rotationPoint = new THREE.Vector3(-0.10818139, 2.07571244, -2.33628869);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const windowHeight = window.innerHeight;
//       const documentHeight = document.documentElement.scrollHeight;
//       const maxScroll = documentHeight - windowHeight;
//       const progress = Math.min(scrollY / maxScroll, 1);
//       setScrollProgress(progress);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), 0);
//     return () => clearTimeout(timer);
//   }, []);

//   useFrame((state, delta) => {
//     if (lavaRef.current) {
//       lavaRef.current.scale.z =
//         0.06795455 + Math.sin(state.clock.elapsedTime * 2) * 0.01;
//     }

//     if (totemLogoParentRef.current) {
//       // Rotate the parent group around its y-axis based on scroll progress
//       totemLogoParentRef.current.rotation.y = scrollProgress * Math.PI * 2;
//     }

//     if (energy010Ref.current && isRotating) {
//       totemLogoParentRef.current.rotation.y -= delta * 2;
//     }
//   });

//   const handleLogoClick = () => {
//     setIsRotating(!isRotating);
//   };

//   useEffect(() => {
//     tl.current = gsap.timeline({ repeat: -1, yoyo: true });

//     // Animate lava flow
//     tl.current.to(
//       scene.getObjectByName("flow_lava003").position,
//       {
//         z: "+=0.1",
//         duration: 2,
//         ease: "power2.inOut",
//       },
//       0
//     );

//     const rockNames = [
//       "Aset_nature_rock_L_vmhifen_LOD0",
//       "Aset_nature_rock_L_vmjdff0_LOD0",
//       "Aset_nature_rock_L_vmjefjf_LOD0",
//       "Aset_nature_rock_L_vmjjfa3_LOD0",
//       "Aset_nature_rock_L_vmoebgzqx_LOD0",
//       "Aset_nature_rock_L_vmoebgzqx_LOD0001",
//       "Aset_nature_rock_L_vmjefjf_LOD0001",
//       "Aset_nature_rock_L_vmoebgzqx_LOD0002",
//       "Aset_nature_rock_L_vmjjfiv_LOD0",
//       "Aset_nature_rock_L_vmjjfiv_LOD0001",
//       "Aset_nature_rock_L_vmjecjd_LOD0",
//       "Aset_nature_rock_L_vmjecjd_LOD0001",
//     ];

//     rockNames.forEach((rockName, index) => {
//       const rock = scene.getObjectByName(rockName);
//       if (rock) {
//         // Randomize the animation for each rock
//         const delay = Math.random() * 2; // Random delay between 0 and 2 seconds
//         const duration = 2 + Math.random() * 3; // Random duration between 2 and 5 seconds
//         const rotationAmount = (Math.random() - 0.5) * 0.1; // Random rotation between -0.05 and 0.05 radians

//         tl.current.to(
//           rock.rotation,
//           {
//             x: `+=${rotationAmount}`,
//             y: `+=${rotationAmount}`,
//             z: `+=${rotationAmount}`,
//             duration: duration,
//             ease: "sine.inOut",
//             repeat: -1,
//             yoyo: true,
//           },
//           delay
//         );

//         // Add a subtle floating animation
//         tl.current.to(
//           rock.position,
//           {
//             y: `+=${Math.random() * 0.05}`, // Random float between 0 and 0.05
//             duration: duration * 1.5,
//             ease: "sine.inOut",
//             repeat: -1,
//             yoyo: true,
//           },
//           delay
//         );
//       }
//     });
//   }, [scene]);

//   useFrame((state, delta) => {
//     if (lavaRef.current) {
//       // Pulsating scale animation
//       // lavaRef.current.scale.x = 0.06795454 + Math.sin(state.clock.elapsedTime * 2) * 0.01;
//       lavaRef.current.scale.z =
//         0.06795455 + Math.sin(state.clock.elapsedTime * 2) * 0.01;
//       // lavaRef.current.scale.z = 0.06795455 + Math.sin(state.clock.elapsedTime * 2) * 0.01;

//       // Slow rotation
//       // lavaRef.current.rotation.y += delta * 0.1;
//     }
//   });

//   const handleHover = (hovering) => {
//     setHovered(hovering);
//   };

//   const handlePointerMove = (event) => {
//     if (!hovered) return;

//     const { clientX, clientY } = event;
//     const { innerWidth, innerHeight } = window;

//     // Calculate normalized coordinates
//     const x = (clientX / innerWidth) * 2 - 1;
//     const y = -(clientY / innerHeight) * 2 + 1;

//     // Update spring with new rotation based on mouse position
//     logoApi.start({
//       rotation: [
//         1.57070328 + (y * Math.PI) / 8,
//         -0.00067104 + (x * Math.PI) / 8,
//         0.00832983,
//       ],
//     });
//   };

//   const handleClick = () => {
//     setIsRotating(!isRotating);
//   };

//   useFrame((state, delta) => {
//     if (isRotating) {
//       energy010Ref.current.rotation.y -= delta * 2; // Smoother rotation
//     }
//   });

//   useEffect(() => {
//     const pmremGenerator = new PMREMGenerator(gl);
//     pmremGenerator.compileEquirectangularShader();

//     new RGBELoader()
//       .setDataType(THREE.UnsignedByteType)
//       .load(hdr, (texture) => {
//         const envMap = pmremGenerator.fromEquirectangular(texture).texture;
//         scene.background = envMap;
//         scene.environment = envMap;
//         texture.dispose();
//         pmremGenerator.dispose();
//       });

//     // Add event listener for mouse move
//     window.addEventListener("mousemove", handlePointerMove);

//     return () => {
//       window.removeEventListener("mousemove", handlePointerMove);
//     };
//   }, [gl, scene, hovered]);
//   return (
//     <>
//       {/* <Suspense fallback={null}> */}
//       <a.group ref={totemref} {...props} visible={isVisible}>
//         <group name="Scene">
//           <group name="ThreeJs02glb">
//             <group name="Final_Scene_Light_Bakingglb">
//               <PerspectiveCamera
//                 name="Camera"
//                 makeDefault={false}
//                 far={1000}
//                 near={0.1}
//                 fov={43.77911554}
//                 position={[0, 0.39086911, 2.71306062]}
//                 rotation={[0.06148382, 0, 0]}
//               />
//               <mesh
//                 name="Plane"
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Plane.geometry}
//                 material={nodes.Plane.material}
//                 position={[0, -0.43239975, -8.92535877]}
//                 scale={10.90911484}
//               />
//               <mesh
//                 name="Aset_nature_rock_L_vmhifen_LOD0"
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Aset_nature_rock_L_vmhifen_LOD0.geometry}
//                 material={materials.default_material}
//                 position={[0, -0.00019356, 1.54893613]}
//                 rotation={[Math.PI / 2, 0, 0]}
//                 scale={0.0060163}
//               />
//               <mesh
//                 name="Aset_nature_rock_L_vmjdff0_LOD0"
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Aset_nature_rock_L_vmjdff0_LOD0.geometry}
//                 material={materials["default_material.001"]}
//                 position={[1.19593513, -0.00019356, 1.10276198]}
//                 rotation={[Math.PI / 2, -3e-8, 0.29127433]}
//                 scale={0.00707009}
//               />
//               <mesh
//                 name="Aset_nature_rock_L_vmjefjf_LOD0"
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Aset_nature_rock_L_vmjefjf_LOD0.geometry}
//                 material={materials["default_material.002"]}
//                 position={[0.07511023, 0, 0.29062104]}
//                 rotation={[Math.PI / 2, 0, 0]}
//                 scale={[0.0078303, 0.00783031, 0.00783031]}
//               />
//               <mesh
//                 name="Aset_nature_rock_L_vmjjfa3_LOD0"
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Aset_nature_rock_L_vmjjfa3_LOD0.geometry}
//                 material={materials["default_material.003"]}
//                 position={[-1.36565316, 0, 1.46576536]}
//                 rotation={[Math.PI / 2, 0, 0]}
//                 scale={0.00742983}
//               />
//               <mesh
//                 name="Aset_nature_rock_L_vmoebgzqx_LOD0"
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Aset_nature_rock_L_vmoebgzqx_LOD0.geometry}
//                 material={materials["default_material.004"]}
//                 position={[-1.38786972, 0, 0.16187581]}
//                 rotation={[Math.PI / 2, 0, 0]}
//                 scale={0.01}
//               />
//               <mesh
//                 name="Aset_nature_rock_L_vmoebgzqx_LOD0001"
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Aset_nature_rock_L_vmoebgzqx_LOD0001.geometry}
//                 material={materials["default_material.004"]}
//                 position={[1.24445498, 0, -0.90774846]}
//                 rotation={[Math.PI / 2, 5e-8, -2.75477302]}
//                 scale={0.01}
//               />
//               <mesh
//                 name="Aset_nature_rock_L_vmjefjf_LOD0001"
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Aset_nature_rock_L_vmjefjf_LOD0001.geometry}
//                 material={materials["default_material.002"]}
//                 position={[-0.90142781, 0, -1.44635439]}
//                 rotation={[Math.PI / 2, 0, 0]}
//                 scale={[0.0078303, 0.00783031, 0.00783031]}
//               />
//               <mesh
//                 name="Aset_nature_rock_L_vmoebgzqx_LOD0002"
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Aset_nature_rock_L_vmoebgzqx_LOD0002.geometry}
//                 material={materials["default_material.004"]}
//                 position={[-0.56905264, 0, -3.56474614]}
//                 rotation={[Math.PI / 2, 0, 0]}
//                 scale={0.02244113}
//               />
//               <mesh
//                 name="Aset_nature_rock_L_vmjjfiv_LOD0"
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Aset_nature_rock_L_vmjjfiv_LOD0.geometry}
//                 material={materials["default_material.005"]}
//                 position={[-3.19466877, 0, -0.41653991]}
//                 rotation={[Math.PI / 2, 0, 0]}
//                 scale={0.01211476}
//               />
//               <mesh
//                 name="Aset_nature_rock_L_vmjjfiv_LOD0001"
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Aset_nature_rock_L_vmjjfiv_LOD0001.geometry}
//                 material={materials["default_material.005"]}
//                 position={[3.37005782, 0, -1.96728206]}
//                 rotation={[Math.PI / 2, -7e-8, 2.59216518]}
//                 scale={0.01211476}
//               />
//               <group
//                 name="group1"
//                 position={[0.01331571, -1.24482048, -2.00621486]}
//                 rotation={[Math.PI / 2, -5e-8, -1.56951719]}
//                 scale={0.01}
//               >
//                 <mesh
//                   name="shi_Group31753"
//                   castShadow
//                   receiveShadow
//                   geometry={nodes.shi_Group31753.geometry}
//                   material={materials.shi_aiStandardSurface4SG}
//                   position={[0.00000961, 0, -0.00001518]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={[2.53999996, 2.54000009, 2.54000009]}
//                 />
//                 <mesh
//                   name="shi_Group31754"
//                   castShadow
//                   receiveShadow
//                   geometry={nodes.shi_Group31754.geometry}
//                   material={materials.shi_aiStandardSurface4SG}
//                   position={[0.00000961, 0, -0.00001518]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={[2.53999996, 2.54000009, 2.54000009]}
//                 />
//                 <mesh
//                   name="shi_Group31756"
//                   castShadow
//                   receiveShadow
//                   geometry={nodes.shi_Group31756.geometry}
//                   material={materials.shi_aiStandardSurface4SG}
//                   position={[0.00000961, 0, -0.00001518]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={[2.53999996, 2.54000009, 2.54000009]}
//                 />
//               </group>
//               <mesh
//                 name="Aset_nature_rock_XL_vfgjfag_LOD0"
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Aset_nature_rock_XL_vfgjfag_LOD0.geometry}
//                 material={materials["default_material.007"]}
//                 position={[-4.05249214, 0, -11.60162544]}
//                 rotation={[Math.PI / 2, 0, 0]}
//                 scale={0.00020261}
//               />
//               <mesh
//                 name="Aset_nature_rock_XL_vfgjfag_LOD0001"
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Aset_nature_rock_XL_vfgjfag_LOD0001.geometry}
//                 material={materials["default_material.007"]}
//                 position={[6.83497047, 0, -11.60162544]}
//                 rotation={[Math.PI / 2, 0, 0]}
//                 scale={0.00020261}
//               />
//               <mesh
//                 name="Aset_nature_rock_L_vmjecjd_LOD0"
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Aset_nature_rock_L_vmjecjd_LOD0.geometry}
//                 material={materials["default_material.008"]}
//                 position={[-1.0209825, 0.07021494, 0.95282173]}
//                 rotation={[Math.PI / 2, 0.40595561, -1.59849429]}
//                 scale={0.00116778}
//               />
//               <mesh
//                 name="Aset_nature_rock_L_vmjecjd_LOD0001"
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Aset_nature_rock_L_vmjecjd_LOD0001.geometry}
//                 material={materials["default_material.008"]}
//                 position={[0.71388572, 0.09453732, 1.55138218]}
//                 rotation={[1.5703915, -0.09883044, 1.50268698]}
//                 scale={0.00062814}
//               />
//               <mesh
//                 name="ground"
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.ground.geometry}
//                 material={materials["Material #43.001"]}
//                 position={[0.29480347, 0.02485711, -0.99948752]}
//                 rotation={[Math.PI / 2, 0, 0]}
//                 scale={[8.08107758, 8.08107866, 6.4337329]}
//               />
//               {[
//                 "flow_lava001",
//                 "flow_lava003",
//                 "flow_lava003001",
//                 "flow_lava003002",
//                 "flow_lava003003",
//                 "flow_lava001001",
//               ].map((name, index) => (
//                 <mesh
//                   key={name}
//                   ref={(el) => (lavaRefs.current[index] = el)}
//                   name={name}
//                   geometry={nodes[name].geometry}
//                   position={nodes[name].position}
//                   rotation={nodes[name].rotation}
//                   scale={nodes[name].scale}
//                 >
//                   <lavaShaderMaterial
//                     ref={lavaShaderRef}
//                     color={new THREE.Color(0.0, 0.8, 0.2)}
//                     flowDirection={new THREE.Vector2(1, 0)}
//                   />
//                 </mesh>
//               ))}

//               {/* Keep other existing meshes and groups */}
//             </group>

//             <group
//               name="Totem_Logo_Websiteglb"
//               ref={totemLogoRef}
//               onClick={handleClick}
//               onPointerOver={() => setHovered(true)}
//               onPointerOut={() => setHovered(false)}
//             >
//               <group ref={totemLogoParentRef} position={rotationPoint}>
//                 <group ref={totemLogoRef} position={[0, 0, 0]}>
//                   <a.mesh
//                     name="Totem_logo001"
//                     // ref={totemLogoRef}
//                     castShadow
//                     receiveShadow
//                     geometry={nodes.Totem_logo001.geometry}
//                     material={materials["lambert1.003"]}
//                     scale={[0.00245747, 0.00220266, 0.00245747]}
//                     position={[0, 0, 0]}
//                     rotation={[1.57070328, -0.00067104, 0.00832983]}
//                     onClick={handleLogoClick}
//                   />
//                 </group>
//               </group>

//               <a.mesh
//                 name="energy010"
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.energy010.geometry}
//                 material={materials.ball}
//                 position={[-0.10691898, 1.91769505, -2.33513784]}
//                 rotation={[0, 0.45477294, 0]}
//                 scale={0.07173906}
//                 ref={energy010Ref}
//               />
//             </group>
//             <PulsatingGlowEffect
//               baseColor="#00a730"
//               intensity={hovered ? 10 : 5} // Increase intensity when hovered
//               frequency={1.5}
//               position={[-0.10691898, 1.91769505, -2.33513784]}
//             />
//             <mesh
//               name="Plane_1"
//               castShadow
//               receiveShadow
//               geometry={nodes.Plane_1.geometry}
//               material={nodes.Plane_1.material}
//               position={[-0.21, 2.01182837, -2.35209352]}
//               rotation={[0.00015189, -0.0257871, 0.03119206]}
//               scale={3.46602705}
//             />
//           </group>
//           <directionalLight
//             name="DirectionalLight"
//             intensity={7}
//             decay={0}
//             color="#00a730"
//             position={[28.08236206, -0.23453065, -1.54444163]}
//           >
//             <group position={[0, 0, -1]} />
//           </directionalLight>
//           <directionalLight
//             name="DirectionalLight_2"
//             intensity={7}
//             decay={1}
//             color="#00a730"
//             position={[-11.38697813, -0.16368225, -1.38756734]}
//           >
//             <group position={[0, 0, -1]} />
//           </directionalLight>
//           <directionalLight
//             name="DirectionalLight_4"
//             intensity={0}
//             decay={1}
//             color="#a16bcb"
//             position={[1.00726246, 5.78541993, 5.5314043]}
//             scale={2.4259577}
//           >
//             <group position={[0, 0, -1]} />
//           </directionalLight>
//           <directionalLight
//             name="DirectionalLight_4"
//             intensity={1}
//             decay={1}
//             color="#ffffff"
//             position={[1.00726246, 9.78541993, 9.5314043]}
//             scale={2.4259577}
//           >
//             <group position={[0, 0, -1]} />
//           </directionalLight>
//           <OrbitingParticles
//             count={200}
//             radius={3}
//             color="#00a730"
//             size={0.03}
//           />
//         </group>
//       </a.group>
//       {/* </Suspense> */}
//     </>
//   );
// };

// export default Totem;

import React, { useRef, useEffect, useState, useMemo } from "react";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a, useSpring } from "@react-spring/three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { LavaShaderMaterial } from "./LavaShaderMaterial";
import * as THREE from "three";
import totemscene from "../models/Arjun.glb";
import hdr from "../hdr/NewWebBg.hdr";
import { PMREMGenerator } from "three";
import PulsatingGlowEffect from "../components/Home/PulsatingGlowEffect";
import OrbitingParticles from "../components/Home/OrbitingParticles";
import gsap from "gsap";

//const BUCKET_URL = 'https://storage.googleapis.com/assets-totem';
// const totemscene = "https://storage.googleapis.com/assets-totem/Arjun.glb";

const Totem = ({ ...props }) => {
  // const hdr = "https://storage.googleapis.com/assets-totem/NewWebBg.hdr";
  const totemref = useRef();
  const [scrollProgress, setScrollProgress] = useState(0);
  const totemLogoRef = useRef();
  const totemLogoParentRef = useRef();
  const energy010Ref = useRef();
  const { gl } = useThree();
  const { nodes, materials } = useGLTF(totemscene);
  const lavaRef = useRef();
  const lavaRefs = useRef([]);
  const lavaShaderRef = useRef();
  const [isRotating, setIsRotating] = useState(false);
  const [hovered, setHovered] = useState(false);
  const { scene } = useThree();
  const tl = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const rotationPoint = new THREE.Vector3(-0.10818139, 2.07571244, -2.33628869);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - windowHeight;
      const progress = Math.min(scrollY / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 0);
    return () => clearTimeout(timer);
  }, []);

  useFrame((state, delta) => {
    if (lavaRef.current) {
      lavaRef.current.scale.z =
        0.06795455 + Math.sin(state.clock.elapsedTime * 2) * 0.01;
    }

    if (totemLogoParentRef.current) {
      // Rotate the parent group around its y-axis based on scroll progrss
      totemLogoParentRef.current.rotation.y = scrollProgress * Math.PI * 2;
    }

    if (energy010Ref.current && isRotating) {
      totemLogoParentRef.current.rotation.y -= delta * 2;
    }
  });

  const handleLogoClick = () => {
    setIsRotating(!isRotating);
  };

  useEffect(() => {
    tl.current = gsap.timeline({ repeat: -1, yoyo: true });

    // Animate lava flow
    tl.current.to(
      scene.getObjectByName("flow_lava003").position,
      {
        z: "+=0.1",
        duration: 2,
        ease: "power2.inOut",
      },
      0
    );

    const rockNames = [
      "Aset_nature_rock_L_vmhifen_LOD0",
      "Aset_nature_rock_L_vmjdff0_LOD0",
      "Aset_nature_rock_L_vmjefjf_LOD0",
      "Aset_nature_rock_L_vmjjfa3_LOD0",
      "Aset_nature_rock_L_vmoebgzqx_LOD0",
      "Aset_nature_rock_L_vmoebgzqx_LOD0001",
      "Aset_nature_rock_L_vmjefjf_LOD0001",
      "Aset_nature_rock_L_vmoebgzqx_LOD0002",
      "Aset_nature_rock_L_vmjjfiv_LOD0",
      "Aset_nature_rock_L_vmjjfiv_LOD0001",
      "Aset_nature_rock_L_vmjecjd_LOD0",
      "Aset_nature_rock_L_vmjecjd_LOD0001",
    ];

    rockNames.forEach((rockName, index) => {
      const rock = scene.getObjectByName(rockName);
      if (rock) {
        // Randomize the animation for each rock
        const delay = Math.random() * 2; // Random delay between 0 and 2 seconds
        const duration = 2 + Math.random() * 3; // Random duration between 2 and 5 seconds
        const rotationAmount = (Math.random() - 0.5) * 0.1; // Random rotation between -0.05 and 0.05 radians

        tl.current.to(
          rock.rotation,
          {
            x: rock.rotation.x + rotationAmount, // Update the value directly
            y: rock.rotation.y + rotationAmount, // Update the value directly
            z: rock.rotation.z + rotationAmount, // Update the value directly
            duration: duration,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          },
          delay
        );

        // Add a subtle floating animation
        // tl.current.to(
        //   rock.position,
        //   {
        //     y: +=${Math.random() * 0.05}, // Random float between 0 and 0.05
        //     duration: duration * 1.5,
        //     ease: "sine.inOut",
        //     repeat: -1,
        //     yoyo: true,
        //   },
        //   delay
        // );
      }
    });
  }, [scene]);

  useFrame((state, delta) => {
    if (lavaRef.current) {
      // Pulsating scale animation
      // lavaRef.current.scale.x = 0.06795454 + Math.sin(state.clock.elapsedTime * 2) * 0.01;
      lavaRef.current.scale.z =
        0.06795455 + Math.sin(state.clock.elapsedTime * 2) * 0.01;
      // lavaRef.current.scale.z = 0.06795455 + Math.sin(state.clock.elapsedTime * 2) * 0.01;

      // Slow rotation
      // lavaRef.current.rotation.y += delta * 0.1;
    }
  });

  const handleHover = (hovering) => {
    setHovered(hovering);
  };

  const handlePointerMove = (event) => {
    if (!hovered) return;

    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;

    // Calculate normalized coordinates
    const x = (clientX / innerWidth) * 2 - 1;
    const y = -(clientY / innerHeight) * 2 + 1;

    // Update spring with new rotation based on mouse position
    logoApi.start({
      rotation: [
        1.57070328 + (y * Math.PI) / 8,
        -0.00067104 + (x * Math.PI) / 8,
        0.00832983,
      ],
    });
  };

  const handleClick = () => {
    setIsRotating(!isRotating);
  };

  useFrame((state, delta) => {
    if (isRotating) {
      energy010Ref.current.rotation.y -= delta * 6; // Smoother rotation
    }
  });

  useEffect(() => {
    const pmremGenerator = new PMREMGenerator(gl);
    pmremGenerator.compileEquirectangularShader();

    new RGBELoader()
      .setDataType(THREE.UnsignedByteType)
      .load(hdr, (texture) => {
        const envMap = pmremGenerator.fromEquirectangular(texture).texture;
        scene.background = envMap;
        scene.environment = envMap;
        texture.dispose();
        pmremGenerator.dispose();
      });

    // Add event listener for mouse move
    window.addEventListener("mousemove", handlePointerMove);

    return () => {
      window.removeEventListener("mousemove", handlePointerMove);
    };
  }, [gl, scene, hovered]);
  return (
    <>
      {/* <Suspense fallback={null}> */}
      <a.group ref={totemref} {...props} visible={isVisible}>
        <group name="Scene">
          <group name="ThreeJs02glb">
            <group name="Final_Scene_Light_Bakingglb">
              <PerspectiveCamera
                name="Camera"
                makeDefault={false}
                far={1000}
                near={0.1}
                fov={43.77911554}
                position={[0, 0.39086911, 2.71306062]}
                rotation={[0.06148382, 0, 0]}
              />
              <mesh
                name="Plane"
                castShadow
                receiveShadow
                geometry={nodes.Plane.geometry}
                material={nodes.Plane.material}
                position={[0, -0.43239975, -8.92535877]}
                scale={10.90911484}
              />
              <mesh
                name="Aset_nature_rock_L_vmhifen_LOD0"
                castShadow
                receiveShadow
                geometry={nodes.Aset_nature_rock_L_vmhifen_LOD0.geometry}
                material={materials.default_material}
                position={[0, -0.00019356, 1.54893613]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.0060163}
              />
              <mesh
                name="Aset_nature_rock_L_vmjdff0_LOD0"
                castShadow
                receiveShadow
                geometry={nodes.Aset_nature_rock_L_vmjdff0_LOD0.geometry}
                material={materials["default_material.001"]}
                position={[1.19593513, -0.00019356, 1.10276198]}
                rotation={[Math.PI / 2, -3e-8, 0.29127433]}
                scale={0.00707009}
              />
              <mesh
                name="Aset_nature_rock_L_vmjefjf_LOD0"
                castShadow
                receiveShadow
                geometry={nodes.Aset_nature_rock_L_vmjefjf_LOD0.geometry}
                material={materials["default_material.002"]}
                position={[0.07511023, 0, 0.29062104]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[0.0078303, 0.00783031, 0.00783031]}
              />
              <mesh
                name="Aset_nature_rock_L_vmjjfa3_LOD0"
                castShadow
                receiveShadow
                geometry={nodes.Aset_nature_rock_L_vmjjfa3_LOD0.geometry}
                material={materials["default_material.003"]}
                position={[-1.36565316, 0, 1.46576536]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.00742983}
              />
              <mesh
                name="Aset_nature_rock_L_vmoebgzqx_LOD0"
                castShadow
                receiveShadow
                geometry={nodes.Aset_nature_rock_L_vmoebgzqx_LOD0.geometry}
                material={materials["default_material.004"]}
                position={[-1.38786972, 0, 0.16187581]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.01}
              />
              <mesh
                name="Aset_nature_rock_L_vmoebgzqx_LOD0001"
                castShadow
                receiveShadow
                geometry={nodes.Aset_nature_rock_L_vmoebgzqx_LOD0001.geometry}
                material={materials["default_material.004"]}
                position={[1.24445498, 0, -0.90774846]}
                rotation={[Math.PI / 2, 5e-8, -2.75477302]}
                scale={0.01}
              />
              <mesh
                name="Aset_nature_rock_L_vmjefjf_LOD0001"
                castShadow
                receiveShadow
                geometry={nodes.Aset_nature_rock_L_vmjefjf_LOD0001.geometry}
                material={materials["default_material.002"]}
                position={[-0.90142781, 0, -1.44635439]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[0.0078303, 0.00783031, 0.00783031]}
              />
              <mesh
                name="Aset_nature_rock_L_vmoebgzqx_LOD0002"
                castShadow
                receiveShadow
                geometry={nodes.Aset_nature_rock_L_vmoebgzqx_LOD0002.geometry}
                material={materials["default_material.004"]}
                position={[-0.56905264, 0, -3.56474614]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.02244113}
              />
              <mesh
                name="Aset_nature_rock_L_vmjjfiv_LOD0"
                castShadow
                receiveShadow
                geometry={nodes.Aset_nature_rock_L_vmjjfiv_LOD0.geometry}
                material={materials["default_material.005"]}
                position={[-3.19466877, 0, -0.41653991]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.01211476}
              />
              <mesh
                name="Aset_nature_rock_L_vmjjfiv_LOD0001"
                castShadow
                receiveShadow
                geometry={nodes.Aset_nature_rock_L_vmjjfiv_LOD0001.geometry}
                material={materials["default_material.005"]}
                position={[3.37005782, 0, -1.96728206]}
                rotation={[Math.PI / 2, -7e-8, 2.59216518]}
                scale={0.01211476}
              />
              <group
                name="group1"
                position={[0.01331571, -1.24482048, -2.00621486]}
                rotation={[Math.PI / 2, -5e-8, -1.56951719]}
                scale={0.01}
              >
                <mesh
                  name="shi_Group31753"
                  castShadow
                  receiveShadow
                  geometry={nodes.shi_Group31753.geometry}
                  material={materials.shi_aiStandardSurface4SG}
                  position={[0.00000961, 0, -0.00001518]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[2.53999996, 2.54000009, 2.54000009]}
                />
                <mesh
                  name="shi_Group31754"
                  castShadow
                  receiveShadow
                  geometry={nodes.shi_Group31754.geometry}
                  material={materials.shi_aiStandardSurface4SG}
                  position={[0.00000961, 0, -0.00001518]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[2.53999996, 2.54000009, 2.54000009]}
                />
                <mesh
                  name="shi_Group31756"
                  castShadow
                  receiveShadow
                  geometry={nodes.shi_Group31756.geometry}
                  material={materials.shi_aiStandardSurface4SG}
                  position={[0.00000961, 0, -0.00001518]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[2.53999996, 2.54000009, 2.54000009]}
                />
              </group>
              <mesh
                name="Aset_nature_rock_XL_vfgjfag_LOD0"
                castShadow
                receiveShadow
                geometry={nodes.Aset_nature_rock_XL_vfgjfag_LOD0.geometry}
                material={materials["default_material.007"]}
                position={[-4.05249214, 0, -11.60162544]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.00020261}
              />
              <mesh
                name="Aset_nature_rock_XL_vfgjfag_LOD0001"
                castShadow
                receiveShadow
                geometry={nodes.Aset_nature_rock_XL_vfgjfag_LOD0001.geometry}
                material={materials["default_material.007"]}
                position={[6.83497047, 0, -11.60162544]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.00020261}
              />
              <mesh
                name="Aset_nature_rock_L_vmjecjd_LOD0"
                castShadow
                receiveShadow
                geometry={nodes.Aset_nature_rock_L_vmjecjd_LOD0.geometry}
                material={materials["default_material.008"]}
                position={[-1.0209825, 0.07021494, 0.95282173]}
                rotation={[Math.PI / 2, 0.40595561, -1.59849429]}
                scale={0.00116778}
              />
              <mesh
                name="Aset_nature_rock_L_vmjecjd_LOD0001"
                castShadow
                receiveShadow
                geometry={nodes.Aset_nature_rock_L_vmjecjd_LOD0001.geometry}
                material={materials["default_material.008"]}
                position={[0.71388572, 0.09453732, 1.55138218]}
                rotation={[1.5703915, -0.09883044, 1.50268698]}
                scale={0.00062814}
              />
              <mesh
                name="ground"
                castShadow
                receiveShadow
                geometry={nodes.ground.geometry}
                material={materials["Material #43.001"]}
                position={[0.29480347, 0.02485711, -0.99948752]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[8.08107758, 8.08107866, 6.4337329]}
              />
              {[
                "flow_lava001",
                "flow_lava003",
                "flow_lava003001",
                "flow_lava003002",
                "flow_lava003003",
                "flow_lava001001",
              ].map((name, index) => (
                <mesh
                  key={name}
                  ref={(el) => (lavaRefs.current[index] = el)}
                  name={name}
                  geometry={nodes[name].geometry}
                  position={nodes[name].position}
                  rotation={nodes[name].rotation}
                  scale={nodes[name].scale}
                >
                  <lavaShaderMaterial
                    ref={lavaShaderRef}
                    color={new THREE.Color(0.0, 0.8, 0.2)}
                    flowDirection={new THREE.Vector2(1, 0)}
                  />
                </mesh>
              ))}

              {/* Keep other existing meshes and groups */}
            </group>

            <group
              name="Totem_Logo_Websiteglb"
              ref={totemLogoRef}
              onClick={handleClick}
              onPointerOver={() => setHovered(true)}
              onPointerOut={() => setHovered(false)}
            >
              <group ref={totemLogoParentRef} position={rotationPoint}>
                <group ref={totemLogoRef} position={[0, 0, 0]}>
                  <a.mesh
                    name="Totem_logo001"
                    // ref={totemLogoRef}
                    castShadow
                    receiveShadow
                    geometry={nodes.Totem_logo001.geometry}
                    material={materials["lambert1.003"]}
                    scale={[0.00245747, 0.00220266, 0.00245747]}
                    position={[0, 0, 0]}
                    rotation={[1.57070328, -0.00067104, 0.00832983]}
                    onClick={handleLogoClick}
                  />
                </group>
              </group>

              <a.mesh
                name="energy010"
                castShadow
                receiveShadow
                geometry={nodes.energy010.geometry}
                material={materials.ball}
                position={[-0.10691898, 1.91769505, -2.33513784]}
                rotation={[0, 0.45477294, 0]}
                scale={0.07173906}
                ref={energy010Ref}
              />
            </group>
            <PulsatingGlowEffect
              baseColor="#00a730"
              intensity={hovered ? 10 : 5} // Increase intensity when hovered
              frequency={1.5}
              position={[-0.10691898, 1.91769505, -2.33513784]}
            />
            <mesh
              name="Plane_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane_1.geometry}
              material={nodes.Plane_1.material}
              position={[-0.21, 2.01182837, -2.35209352]}
              rotation={[0.00015189, -0.0257871, 0.03119206]}
              scale={3.46602705}
            />
          </group>
          <directionalLight
            name="DirectionalLight"
            intensity={7}
            decay={0}
            color="#00a730"
            position={[28.08236206, -0.23453065, -1.54444163]}
          >
            <group position={[0, 0, -1]} />
          </directionalLight>
          <directionalLight
            name="DirectionalLight_2"
            intensity={7}
            decay={1}
            color="#00a730"
            position={[-11.38697813, -0.16368225, -1.38756734]}
          >
            <group position={[0, 0, -1]} />
          </directionalLight>
          <directionalLight
            name="DirectionalLight_4"
            intensity={0}
            decay={1}
            color="#a16bcb"
            position={[1.00726246, 5.78541993, 5.5314043]}
            scale={2.4259577}
          >
            <group position={[0, 0, -1]} />
          </directionalLight>
          <directionalLight
            name="DirectionalLight_4"
            intensity={1}
            decay={1}
            color="#ffffff"
            position={[1.00726246, 9.78541993, 9.5314043]}
            scale={2.4259577}
          >
            <group position={[0, 0, -1]} />
          </directionalLight>
          <OrbitingParticles
            count={200}
            radius={3}
            color="#00a730"
            size={0.03}
          />
        </group>
      </a.group>
      {/* </Suspense> */}
    </>
  );
};

export default Totem;
