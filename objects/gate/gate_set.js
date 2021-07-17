import Gate from './gate'

class GateSet {
  setOfGate = []
  constructor(scene, world, groundMat) {
    this.setOfGate.push(new Gate(scene, world, groundMat, 2400, 10, -500))
    this.setOfGate.push(new Gate(scene, world, groundMat, 2400, 10, 750))
  }
  updateAll() {
    for (let i = 0; i < this.setOfGate.length; i++) {
      this.setOfGate[i].update()
    }
  }
}

export default GateSet
