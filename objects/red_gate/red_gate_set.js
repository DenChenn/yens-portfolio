import RedGate from './red_gate'

class RedGateSet {
  setOfRedGate = []
  constructor(scene, world, groundMat) {
    this.setOfRedGate.push(new RedGate(scene, world, groundMat, 2700, 10, 560))
  }
  updateAll() {
    for (let i = 0; i < this.setOfRedGate.length; i++) {
      this.setOfRedGate[i].update()
    }
  }
}

export default RedGateSet
