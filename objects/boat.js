import { SkeletonUtils } from 'three/examples/jsm/utils/SkeletonUtils'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'
import { MAX_VELOCITY, ACCELERATION } from './config'

class VelocityModel {
  v = 0
  a = 0
  theta = 0
  triggerKey = ''

  constructor(triggerKey) {
    this.v = 0
    this.a = 0
    this.theta = 0
    this.triggerKey = triggerKey

    this.keyControl()
  }

  keyControl() {
    window.addEventListener('keydown', (event) => {
      const keyPress = event.key
      if (keyPress === this.triggerKey) {
        this.a = ACCELERATION
      }
      if (keyPress === 'd') {
        this.theta += Math.PI / 128
      }
      if (keyPress === 'a') {
        this.theta -= Math.PI / 128
      }
    })

    window.addEventListener('keyup', (event) => {
      const keyRelease = event.key
      if (keyRelease === this.triggerKey) {
        this.a = -ACCELERATION
      }
    })
  }

  accelerate() {
    if (this.v < MAX_VELOCITY && this.v > 0) {
      this.v += this.a
    } else if (this.v <= 0 && this.a > 0) {
      this.v += this.a
    } else if (this.v >= MAX_VELOCITY && this.a < 0) {
      this.v += this.a
    }
  }
}

class Boat {
  object = new THREE.Object3D()
  front = new VelocityModel('w')
  back = new VelocityModel('s')

  constructor(scene, posX, posY, posZ) {
    const loader = new GLTFLoader()
    loader.load('../models/tiny_boat/scene.gltf', (gltf) => {
      this.object.add(SkeletonUtils.clone(gltf.scene))
      this.object.position.set(posX, posY, posZ)
      this.object.scale.set(0.2, 0.2, 0.2)
      scene.add(this.object)
    })
  }

  update() {
    this.front.accelerate()
    this.back.accelerate()

    this.object.position.x += this.front.v * Math.cos(this.front.theta)
    this.object.position.z += this.front.v * Math.sin(this.front.theta)
    this.object.position.x -= this.back.v * Math.cos(this.front.theta)
    this.object.position.z -= this.back.v * Math.sin(this.front.theta)

    this.object.rotation.y = -this.front.theta
  }
}

export default Boat
