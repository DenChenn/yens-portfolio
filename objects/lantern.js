import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

var lanternMesh;

export function BuildLantern(scene, posX, posY, posZ) {
    const loader = new GLTFLoader();
    loader.load('../models/japanese_lantern/scene.gltf', function(gltf){
        lanternMesh = gltf.scene;
        lanternMesh.position.set(posX, posZ, posY);
        lanternMesh.scale.set(0.5, 0.5, 0.5);
        scene.add(lanternMesh)
    })
}