import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { BuildWater } from './water'
import { BuildSky } from './sky';
import { BuildSun } from './sun';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const scene = new THREE.Scene();

function buildCamera() {
  const camera = new THREE.PerspectiveCamera(55, window.innerWidth/window.innerHeight, 1, 20000);
  camera.position.set(30, 30, 100);
  return camera;
}

//resizing window
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}
window.addEventListener('resize', onWindowResize);

const camera = buildCamera()

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg')
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({color: 0x6b0000});

const torus = new THREE.Mesh(geometry, material);

scene.add(torus);

const pointLight = new THREE.PointLight(0xffffff);
const ambienLight = new THREE.AmbientLight(0xfffff);

scene.add(pointLight, ambienLight);

const lightHelper = new THREE.PointLightHelper(pointLight)
scene.add(lightHelper);

const controls = new OrbitControls(camera, renderer.domElement);

const water = BuildWater(scene);
const sky = BuildSky();

scene.add(water)
scene.add(sky)
BuildSun(scene, renderer, sky);

let loader = new GLTFLoader();
loader.load('./japanese_gates_torii_low_poly/scene.gltf', function(gltf){
  const mesh = gltf.scene;
  mesh.position.set(50, 0, 50);
  scene.add(mesh)
})

loader.load('./japanese_standing_lantern/scene.gltf', function(gltf){
  const mesh = gltf.scene;
  mesh.position.set(25, 0, 25);
  scene.add(mesh)
})

loader.load('./japanese_style_bridge/scene.gltf', function(gltf){
  const mesh = gltf.scene;
  mesh.position.set(-25, 0, -25);
  scene.add(mesh) 
})

function animate() {
  requestAnimationFrame(animate);
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;
  water.material.uniforms[ 'time' ].value += 1.0 / 60.0;
  renderer.render(scene, camera);
}

animate();



