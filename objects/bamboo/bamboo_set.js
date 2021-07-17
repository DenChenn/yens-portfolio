import Bamboo from './bamboo'

class BambooSet {
  setOfBamboo = []
  constructor(scene, world, groundMat) {
    this.setOfBamboo.push(new Bamboo(scene, world, groundMat, 2720, 5, 520))
    this.setOfBamboo.push(new Bamboo(scene, world, groundMat, 2650, 5, 500))
    this.setOfBamboo.push(new Bamboo(scene, world, groundMat, 2620, 5, 530))
    this.setOfBamboo.push(new Bamboo(scene, world, groundMat, 2590, 5, 500))
    this.setOfBamboo.push(new Bamboo(scene, world, groundMat, 2510, 5, 520))
    this.setOfBamboo.push(new Bamboo(scene, world, groundMat, 2480, 5, 530))
    this.setOfBamboo.push(new Bamboo(scene, world, groundMat, 2400, 5, 500))
    this.setOfBamboo.push(new Bamboo(scene, world, groundMat, 2300, 5, 520))
    this.setOfBamboo.push(new Bamboo(scene, world, groundMat, 2720, 5, 420))
    this.setOfBamboo.push(new Bamboo(scene, world, groundMat, 2650, 5, 400))
    this.setOfBamboo.push(new Bamboo(scene, world, groundMat, 2620, 5, 430))
    this.setOfBamboo.push(new Bamboo(scene, world, groundMat, 2590, 5, 400))
    this.setOfBamboo.push(new Bamboo(scene, world, groundMat, 2510, 5, 420))
    this.setOfBamboo.push(new Bamboo(scene, world, groundMat, 2480, 5, 430))
    this.setOfBamboo.push(new Bamboo(scene, world, groundMat, 2400, 5, 400))
    this.setOfBamboo.push(new Bamboo(scene, world, groundMat, 2300, 5, 420))
  }
  updateAll() {
    for (let i = 0; i < this.setOfBamboo.length; i++) {
      this.setOfBamboo[i].update()
    }
  }
}

export default BambooSet
