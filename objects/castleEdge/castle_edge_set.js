import CastleEdge from './castle_edge'

class CastleEdgeSet {
  setOfCastleEdge = []
  constructor(scene, world, groundMat) {
    this.setOfCastleEdge.push(
      new CastleEdge(scene, world, groundMat, 375, 15, 100),
    )
  }
  updateAll() {
    for (let i = 0; i < this.setOfCastleEdge.length; i++) {
      this.setOfCastleEdge[i].update()
    }
  }
}

export default CastleEdgeSet
