import DokanEdge from './dokan_edge'

class DokanEdgeSet {
  setOfDokanEdge = []
  constructor(scene, world, groundMat) {
    this.setOfDokanEdge.push(
      new DokanEdge(scene, world, groundMat, 1050, 40, -50),
    )
  }
  updateAll() {
    for (let i = 0; i < this.setOfDokanEdge.length; i++) {
      this.setOfDokanEdge[i].update()
    }
  }
}

export default DokanEdgeSet
