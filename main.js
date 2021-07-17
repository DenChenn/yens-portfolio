import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { BuildWater } from './objects/water'
import Boat from './objects/boat'
import CANNON from 'cannon'
import Stats from 'stats.js'
import { CheckPosition } from './animation/check_position'
import { HintAnimate } from './animation/hint_animation'
import { SkillAnimate } from './animation/skill_animation'
import { BuildSun } from './objects/sun'
import { BuildSky } from './objects/sky'
import LanternSet from './objects/lantern/lantern_set'
import BaseSet from './objects/base/base_set'
import CastleEdgeSet from './objects/castleEdge/castle_edge_set'
import DokanSet from './objects/dokan/dokan_set'
import DokanEdgeSet from './objects/dokan_edge/dokan_edge_set'
import HighCastleSet from './objects/high_castle/high_castle_set'
import BigCastleSet from './objects/big_castle/big_castle_set'
import GateSet2 from './objects/gate2/gate_2_set'
import WallSet2 from './objects/wall_2/wall_2_set'
import GateSet from './objects/gate/gate_set'
import WallSet from './objects/wall/wall_get'
import TreeSet from './objects/tree/tree_set'
import RedGateSet from './objects/red_gate/red_gate_set'
import BambooSet from './objects/bamboo/bamboo_set'

const scene = new THREE.Scene()

function buildCamera() {
  const camera = new THREE.PerspectiveCamera(
    55,
    window.innerWidth / window.innerHeight,
    1,
    20000,
  )
  camera.position.set(2400, 40, -500)
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
camera.position.set(2400, 40, -500)

renderer.render(scene, camera)

const pointLight = new THREE.PointLight(0xffffff)
const ambienLight = new THREE.AmbientLight(0x4f4d4d, 1)

scene.add(pointLight, ambienLight)

const lightHelper = new THREE.PointLightHelper(pointLight)
scene.add(lightHelper)
const axesHelper = new THREE.AxesHelper(5)
scene.add(axesHelper)

const controls = new OrbitControls(camera, renderer.domElement)

const water = BuildWater(scene)
const sky = BuildSky(scene)
scene.add(water)
scene.add(sky)
BuildSun(scene, renderer, sky)

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

const boat = new Boat(scene, world, groundMat, 0, 5, 0, camera)
const lanternSet = new LanternSet(scene, world, groundMat)
const baseSet = new BaseSet(scene, world, groundMat)
const castleEdgeSet = new CastleEdgeSet(scene, world, groundMat)
const dokanSet = new DokanSet(scene, world, groundMat)
const dokanEdgeSet = new DokanEdgeSet(scene, world, groundMat)
const highCastleSet = new HighCastleSet(scene, world, groundMat)
const bigCastleSet = new BigCastleSet(scene, world, groundMat)
const gateSet = new GateSet(scene, world, groundMat)
const gateSet2 = new GateSet2(scene, world, groundMat)
const wallSet = new WallSet(scene, world, groundMat)
const wallSet2 = new WallSet2(scene, world, groundMat)
const treeSet = new TreeSet(scene, world, groundMat)
const redGateSet = new RedGateSet(scene, world, groundMat)
const bambooSet = new BambooSet(scene, world, groundMat)

var stats = new Stats()
stats.showPanel(0) // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild(stats.dom)

function animate() {
  stats.begin()
  water.material.uniforms['time'].value += 1.0 / 60.0
  world.step(timeStep)

  boat.update()
  lanternSet.updateAll()
  baseSet.updateAll()
  castleEdgeSet.updateAll()
  dokanSet.updateAll()
  dokanEdgeSet.updateAll()
  highCastleSet.updateAll()
  bigCastleSet.updateAll()
  gateSet.updateAll()
  gateSet2.updateAll()
  wallSet.updateAll()
  wallSet2.updateAll()
  treeSet.updateAll()
  redGateSet.updateAll()
  bambooSet.updateAll()

  renderer.render(scene, camera)
  stats.end()
  requestAnimationFrame(animate)
}

animate()
