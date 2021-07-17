import HighCastle from './high_castle'

class HighCastleSet {
  setOfHighCastle = []
  constructor(scene, world, groundMat) {
    this.setOfHighCastle.push(
      new HighCastle(scene, world, groundMat, 1750, 10, 350),
      new HighCastle(scene, world, groundMat, 1750, 10, -100),
    )
  }
  updateAll() {
    for (let i = 0; i < this.setOfHighCastle.length; i++) {
      this.setOfHighCastle[i].update()
    }
  }
}

export default HighCastleSet
