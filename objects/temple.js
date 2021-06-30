import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'

export function BuildTemple(scene, posX, posY, posZ) {
  const loader = new GLTFLoader()
  loader.load('../models/japanese_temple/scene.gltf', function (gltf) {
    templeMesh = gltf.scene
    templeMesh.position.set(posX, posZ, posY)
    templeMesh.scale.set(1, 1, 1)
    scene.add(templeMesh)
  })
}
