import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { BuildWater } from './objects/water'
import Bridge from './objects/bridge'
import Boat from './objects/boat'
import StoneIsland from './objects/stone_island'
import CANNON from 'cannon'
import Tree from './objects/tree'
import FlyingIsland from './objects/flying_island'
import Castle1 from './objects/castle1'
import Lantern from './objects/lantern'
import Castle2 from './objects/castle2'
import Castle3 from './objects/castle3'
import Temple from './objects/temple'
import Pagoda from './objects/pagoda'
import StraightTree from './objects/straight_tree'
import Stats from 'stats.js'

const scene = new THREE.Scene()

function buildCamera() {
  const camera = new THREE.PerspectiveCamera(
    55,
    window.innerWidth / window.innerHeight,
    1,
    20000,
  )
  camera.position.set(30, 40, 100)
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
camera.position.set(120, 10, 100)

renderer.render(scene, camera)

const pointLight = new THREE.PointLight(0xffffff)
const ambienLight = new THREE.AmbientLight(0xfaf398, 1)

scene.add(pointLight, ambienLight)

const lightHelper = new THREE.PointLightHelper(pointLight)
scene.add(lightHelper)

const controls = new OrbitControls(camera, renderer.domElement)

const water = BuildWater(scene)

scene.add(water)

const world = new CANNON.World()

world.gravity.set(0, -20, 0)
world.boardphase = new CANNON.NaiveBroadphase()
//ground
let groundShape = new CANNON.Plane()
let groundMat = new CANNON.Material()
let groundBody = new CANNON.Body({
  mass: 0,
  shape: groundShape,
  material: groundMat,
  position: new CANNON.Vec3(0, -7, 0),
})
//rotate the whole plane
groundBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2)
world.add(groundBody)
const timeStep = 1.0 / 60.0

const boat = new Boat(scene, world, groundMat, 100, 5, 100, camera)
const bridge = new Bridge(scene, world, groundMat, -100, 5, 0)
const stoneIsland_1 = new StoneIsland(scene, world, groundMat, 350, 5, 80)
const stoneIsland_2 = new StoneIsland(scene, world, groundMat, -150, 5, -325)
const stoneIsland_3 = new StoneIsland(scene, world, groundMat, -350, 5, 80)
const stoneIsland_4 = new StoneIsland(scene, world, groundMat, 170, 5, -320)
const centerIsland = new StoneIsland(scene, world, groundMat, 0, 5, 0)
const pagoda = new Pagoda(scene, world, groundMat, 0, 20, 0)

const flyingIsland = new FlyingIsland(scene, world, groundMat, 0, 40, 350)
const castle1 = new Castle1(scene, world, groundMat, -160, 20, -335)
const castle2 = new Castle2(scene, world, groundMat, 160, 20, -335)
const castle3 = new Castle3(scene, world, groundMat, -350, 20, 80)
const temple = new Temple(scene, world, groundMat, 350, 20, 80)
const tree = new Tree(scene, world, groundMat, -120, 20, -295)

const rotateUnit = Math.PI / 18.0
let lanternSet = []
for (let i = 0; i < 2 * Math.PI - 0.1; i += rotateUnit) {
  lanternSet.push(
    new Lantern(
      scene,
      world,
      groundMat,
      245 * Math.cos(i),
      2,
      245 * Math.sin(i),
    ),
  )
}

const treeRotateUnit = Math.PI / 36
let treeSet = []
for (let i = 0; i < 2 * Math.PI - 0.01; i += treeRotateUnit) {
  treeSet.push(
    new StraightTree(
      scene,
      world,
      groundMat,
      500 * Math.cos(i),
      2,
      500 * Math.sin(i),
    ),
  )
}

var stats = new Stats()
stats.showPanel(0) // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild(stats.dom)

function animate() {
  stats.begin()
  water.material.uniforms['time'].value += 1.0 / 60.0
  world.step(timeStep)

  boat.update()
  bridge.update()
  tree.update()
  stoneIsland_1.update()
  stoneIsland_2.update()
  stoneIsland_3.update()
  stoneIsland_4.update()
  centerIsland.update()
  flyingIsland.update()
  castle1.update()
  castle2.update()
  castle3.update()
  temple.update()
  pagoda.update()

  for (let i = 0; i < 36; i++) {
    lanternSet[i].update()
  }

  for (let i = 0; i < 72; i++) {
    treeSet[i].update()
  }

  renderer.render(scene, camera)
  stats.end()
  requestAnimationFrame(animate)
}

animate()
