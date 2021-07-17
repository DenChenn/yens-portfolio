import Gate2 from './gate_2'

class GateSet2 {
  setOfGate2 = []
  constructor(scene, world, groundMat) {
    this.setOfGate2.push(new Gate2(scene, world, groundMat, 2200, 10, 125))
  }
  updateAll() {
    for (let i = 0; i < this.setOfGate2.length; i++) {
      this.setOfGate2[i].update()
    }
  }
}

export default GateSet2
