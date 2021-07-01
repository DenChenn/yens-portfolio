import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { BuildWater } from './objects/water'
import { BuildSky } from './objects/sky'
import { BuildSun } from './objects/sun'
import Bridge from './objects/bridge'
import Gate from './objects/gate'
import Lantern from './objects/lantern'
import Temple from './objects/temple'
import Boat from './objects/boat'
import Castle1 from './objects/castle1'
import Castle2 from './objects/castle2'
import FlyingIsland from './objects/flying_island'
import Ship from './objects/ship'
import Stone from './objects/stone'
import StoneIsland from './objects/stone_island'
import CANNON from 'cannon'

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

const bridge = new Bridge(scene, 30, 0, 0)
const gate = new Gate(scene, 80, 0, 0)
const lantern = new Lantern(scene, 110, 0, 0)
const temple = new Temple(scene, 140, 0, 0)
const castle1 = new Castle1(scene, 190, 0, 0)
const castle2 = new Castle2(scene, 280, 0, 0)
const flyingIsland = new FlyingIsland(scene, 0, 20, 50)
const ship = new Ship(scene, 30, -10, 50)
const stone = new Stone(scene, 80, 0, 50)
const stoneIsland = new StoneIsland(scene, 130, 0, 80)

const world = new CANNON.World()

world.gravity.set(0, -9.8, 0)
world.boardphase = new CANNON.NaiveBroadphase()
const timeStep = 1.0 / 60.0

const boat = new Boat(scene, world, 0, -2, 0)

function animate() {
  requestAnimationFrame(animate)
  boat.update()
  water.material.uniforms['time'].value += 1.0 / 60.0

  world.step(timeStep)

  renderer.render(scene, camera)
}

animate()
