// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import OIMO from 'oimo'; // Import OIMO if you have it as a dependency

// const DemoComponent = () => {
//   const containerRef = useRef(null);
//   const mixerRef = useRef(null);
//   const bonesRef = useRef(null);
//   const skeletonHelperRef = useRef(null);
//   const midRef = useRef([]);
//   const boneContainerRef = useRef(null);
//   const worldRef = useRef(null);
//   const loadedRef = useRef(false);

//   useEffect(() => {
//     const cam = (x, y, z, target) => {
//       // Initialize your camera here
//     };

//     const initSkeleton = () => {
//       const bones = bonesRef.current;
//       const mid = [];
//       for (let i = 0; i < bones.length; i++) {
//         // Calculate positions and initialize skeleton
//       }
//       loadedRef.current = true;
//       addHair();
//       addExtra();
//       worldRef.current.postLoop = postLoop;
//       worldRef.current.play();
//     };

//     const addHair = () => {
//       // Add hair functionality
//     };

//     const addExtra = () => {
//       // Add extra elements to the scene
//     };

//     const postLoop = () => {
//       if (mixerRef.current) mixerRef.current.update(0.003);
//       if (loadedRef.current) updateSkeleton();
//       // Additional post loop logic
//     };

//     const updateSkeleton = () => {
//       const bones = bonesRef.current;
//       const boneContainer = boneContainerRef.current;
//       // Update skeleton positions
//     };

//     const initAnimation = (result) => {
//       const skeleton = result.skeleton;
//       bonesRef.current = skeleton.bones;
//       const skeletonHelper = new THREE.SkeletonHelper(bonesRef.current[0]);
//       skeletonHelper.skeleton = skeleton;
//       skeletonHelper.visible = false;

//       const boneContainer = new THREE.Group();
//       boneContainer.add(bonesRef.current[0]);
//       boneContainer.scale.multiplyScalar(0.5);

//       // Add skeletonHelper and boneContainer to your scene

//       initSkeleton();

//       // Play animation
//       const mixer = new THREE.AnimationMixer(skeletonHelper);
//       mixer.clipAction(result.clip).setEffectiveWeight(1.0).play();
//       mixerRef.current = mixer;
//     };

//     const demo = () => {
//       cam(20, 20, 70, [0, 20, 0]);
//       worldRef.current = new OIMO.World({ info: true });
//       // Load BVH and initialize animation
//       view.load_bvh('action', initAnimation);
//     };

//     demo();

//     return () => {
//       // Cleanup on component unmount
//     };
//   }, []);

//   return <div ref={containerRef}></div>;
// };

// export default DemoComponent;
