import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

var gateMesh

export function BuildGate(scene, posX, posY, posZ) {
  const loader = new GLTFLoader()
  loader.load('../models/japanese_gates/scene.gltf', function (gltf) {
    gateMesh = gltf.scene
    gateMesh.position.set(posX, posZ, posY)
    gateMesh.scale.set(3, 3, 3)
    scene.add(gateMesh)
  })
}
