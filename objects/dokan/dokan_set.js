import Dokan from './dokan'

class DokanSet {
  setOfDokan = []
  constructor(scene, world, groundMat) {
    this.setOfDokan.push(new Dokan(scene, world, groundMat, 1200, 40, -50))
  }
  updateAll() {
    for (let i = 0; i < this.setOfDokan.length; i++) {
      this.setOfDokan[i].update()
    }
  }
}

export default DokanSet
