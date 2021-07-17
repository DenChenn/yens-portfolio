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

  renderer.render(scene, camera)
  stats.end()
  requestAnimationFrame(animate)
}

animate()
