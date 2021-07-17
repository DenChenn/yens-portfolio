import Base from './base'

class BaseSet {
  setOfBase = []
  constructor(scene, world, groundMat) {
    this.setOfBase.push(new Base(scene, world, groundMat, 1050, 10, -50))
    this.setOfBase.push(new Base(scene, world, groundMat, 1200, 10, -50))
  }
  updateAll() {
    for (let i = 0; i < this.setOfBase.length; i++) {
      this.setOfBase[i].update()
    }
  }
}

export default BaseSet
