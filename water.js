import * as THREE from 'three';

function buildWater() {
  const waterGeometry = new THREE.PlaneGeometry(10000, 10000);
  const water = new Water(
    waterGeometry,
          {
            textureWidth: 512,
            textureHeight: 512,
            waterNormals: new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/waternormals.jpg', function ( texture ) {
              texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            }),
            alpha: 1.0,
            sunDirection: new THREE.Vector3(),
            sunColor: 0xffffff,
            waterColor: 0x001e0f,
            distortionScale: 3.7,
            fog: scene.fog !== undefined
          }
  );
  water.rotation.x = -Math.PI / 2;
  //add ouside
  //scene.add(water);
  const waterUniforms = water.material.uniforms;
  return water;
}