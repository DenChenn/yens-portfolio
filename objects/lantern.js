import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'
import CANNON from 'cannon'

const size = {
  x: 2,
  y: 6,
  z: 2,
}

class Lantern {
  mesh = new THREE.Mesh()
  boxBody = new CANNON.Body()
  //testMesh = new THREE.Mesh()
  //light = new THREE.PointLight()

  constructor(scene, world, groundMat, posX, posY, posZ) {
    const loader = new GLTFLoader()
    loader.load(
      'https://raw.githubusercontent.com/SwarzChen/yens-portfolio/master/models/japanese_lantern/scene.gltf',
      (gltf) => {
        this.mesh = gltf.scene
        this.mesh.scale.set(0.05, 0.05, 0.05)
        scene.add(this.mesh)
      },
    )

    // this.light = new THREE.PointLight(0xfafa11, 10, 10)
    // this.light.position.set(posX, posY + 1, posZ)
    // scene.add(this.light)
    // const lightHelper = new THREE.PointLightHelper(this.light)
    // scene.add(lightHelper)

    let boxShape = new CANNON.Box(new CANNON.Vec3(size.x, size.y, size.z))
    let boxMat = new CANNON.Material()
    this.boxBody = new CANNON.Body({
      mass: 1,
      shape: boxShape,
      position: new CANNON.Vec3(posX, posY, posZ),
      material: boxMat,
    })
    world.add(this.boxBody)

    // let boxGroundContact
    // boxGroundContact = new CANNON.ContactMaterial(groundMat, boxMat, {
    //   friction: 0.5,
    //   restitution: 0.7,
    // })
    // world.addContactMaterial(boxGroundContact)

    // let boxG = new THREE.BoxGeometry(
    //   2 * size.x,
    //   2 * size.y,
    //   2 * size.z,
    //   2,
    //   1,
    //   2,
    // )
    // let boxM = new THREE.MeshStandardMaterial({
    //   color: 0x33aaaa,
    //   wireframe: true,
    // })

    // this.testMesh = new THREE.Mesh(boxG, boxM)
    // this.testMesh.position.set(posX, posY, posZ)
    // scene.add(this.testMesh)
  }
  update() {
    this.mesh.position.copy(this.boxBody.position)
    this.mesh.quaternion.copy(this.boxBody.quaternion)
    // this.testMesh.position.copy(this.boxBody.position)
    // this.testMesh.quaternion.copy(this.boxBody.quaternion)
  }
}

export default Lantern
