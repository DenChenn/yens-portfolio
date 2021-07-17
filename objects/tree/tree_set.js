import Tree from './tree'

class TreeSet {
  setOfTree = []
  constructor(scene, world, groundMat) {
    this.setOfTree.push(new Tree(scene, world, groundMat, 500, 5, 100))
    this.setOfTree.push(new Tree(scene, world, groundMat, 200, 5, 100))
    this.setOfTree.push(new Tree(scene, world, groundMat, 600, 5, 550))
    this.setOfTree.push(new Tree(scene, world, groundMat, 100, 5, 550))
    this.setOfTree.push(new Tree(scene, world, groundMat, 1500, 5, 300))
    this.setOfTree.push(new Tree(scene, world, groundMat, 1000, 5, 100))
    this.setOfTree.push(new Tree(scene, world, groundMat, 1500, 5, -400))
    this.setOfTree.push(new Tree(scene, world, groundMat, 1000, 5, -600))
  }
  updateAll() {
    for (let i = 0; i < this.setOfTree.length; i++) {
      this.setOfTree[i].update()
    }
  }
}

export default TreeSet
