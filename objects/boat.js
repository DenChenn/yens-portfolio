import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

var boatMesh;

export function BuildBoat(scene, posX, posY, posZ) {
    const loader = new GLTFLoader();
    loader.load('../models/tiny_boat/scene.gltf', function(gltf){
        boatMesh = gltf.scene;
        boatMesh.position.set(posX, posZ, posY);
        boatMesh.scale.set(0.2, 0.2, 0.2);
        scene.add(boatMesh)
    })
}
