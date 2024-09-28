import React, { useEffect } from 'react'
import { useThree } from '@react-three/fiber'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'
import * as THREE from 'three'

const SkyBox = () => {
  const { scene } = useThree()

  useEffect(() => {
    const loader = new RGBELoader()
    loader.load(
      '../models/NewWebBg.hdr',  // Update this path to the correct location of your HDR file
      (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping
        scene.background = texture
        scene.environment = texture
      },
      undefined,
      (error) => console.error('An error occurred loading the HDR file:', error)
    )

    return () => {
      scene.background = null
      scene.environment = null
    }
  }, [scene])

  return null
}

export default SkyBox