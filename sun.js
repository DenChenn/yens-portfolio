import * as THREE from 'three';

export function BuildSun(scene, renderer, sky) {
  const pmremGenerator = new THREE.PMREMGenerator( renderer );
  const sun = new THREE.Vector3();

  const theta = Math.PI * (0.49 - 0.5);
  const phi = 2 * Math.PI * (0.205 - 0.5);

  sun.x = Math.cos(phi);
  sun.y = Math.sin(phi) * Math.sin(theta);
  sun.z = Math.sin(phi) * Math.cos(theta);

  sky.material.uniforms['sunPosition'].value.copy(sun);

  scene.environment = pmremGenerator.fromScene(sky).texture;
  return sun;
}