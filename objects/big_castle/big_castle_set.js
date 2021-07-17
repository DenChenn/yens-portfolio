import BigCastle from './big_castle'

class BigCastleSet {
  setOfBigCastle = []
  constructor(scene, world, groundMat) {
    this.setOfBigCastle.push(
      new BigCastle(scene, world, groundMat, 2400, 15, 125),
    )
  }
  updateAll() {
    for (let i = 0; i < this.setOfBigCastle.length; i++) {
      this.setOfBigCastle[i].update()
    }
  }
}

export default BigCastleSet
