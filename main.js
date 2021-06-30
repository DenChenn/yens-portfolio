import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { BuildWater } from './objects/water'
import { BuildSky } from './objects/sky'
import { BuildSun } from './objects/sun'
import { BuildBridge } from './objects/bridge'
import { BuildGate } from './objects/gate'
import { BuildLantern } from './objects/lantern'
import { BuildTemple } from './objects/temple'
import Boat from './objects/boat'

const scene = new THREE.Scene()

function buildCamera() {
  const camera = new THREE.PerspectiveCamera(
    55,
    window.innerWidth / window.innerHeight,
    1,
    20000,
  )
  camera.position.set(30, 30, 100)
  return camera
}

//resizing window
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}
window.addEventListener('resize', onWindowResize)

const camera = buildCamera()

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg'),
})

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
camera.position.setZ(30)

renderer.render(scene, camera)

const pointLight = new THREE.PointLight(0xffffff)
const ambienLight = new THREE.AmbientLight(0xfffff)

scene.add(pointLight, ambienLight)

const lightHelper = new THREE.PointLightHelper(pointLight)
scene.add(lightHelper)

const controls = new OrbitControls(camera, renderer.domElement)

const water = BuildWater(scene)
const sky = BuildSky()

scene.add(water)
scene.add(sky)
BuildSun(scene, renderer, sky)

BuildBridge(scene, 20, 20, 0)
const boat = new Boat(scene, 0, -2, 0)
BuildGate(scene, 20, 50, 0)
BuildLantern(scene, 20, -50, 0)
BuildTemple(scene, 50, 50, 0)

function animate() {
  requestAnimationFrame(animate)
  boat.update()
  water.material.uniforms['time'].value += 1.0 / 60.0
  renderer.render(scene, camera)
}

animate()
