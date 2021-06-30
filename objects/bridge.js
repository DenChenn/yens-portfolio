import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

var bridgeMesh

export function BuildBridge(scene, posX, posY, posZ) {
  const loader = new GLTFLoader()
  loader.load('../models/japanese_bridge/scene.gltf', function (gltf) {
    bridgeMesh = gltf.scene
    bridgeMesh.position.set(posX, posZ, posY)
    bridgeMesh.scale.set(2, 2, 2)
    scene.add(bridgeMesh)
  })
}
