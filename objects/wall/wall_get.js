import Wall from './wall'

class WallSet {
  setOfWall = []
  constructor(scene, world, groundMat) {
    this.setOfWall.push(new Wall(scene, world, groundMat, 1880, 10, -500))
    this.setOfWall.push(new Wall(scene, world, groundMat, 2155, 10, -500))
    this.setOfWall.push(new Wall(scene, world, groundMat, 2645, 10, -500))
    this.setOfWall.push(new Wall(scene, world, groundMat, 2920, 10, -500))
    this.setOfWall.push(new Wall(scene, world, groundMat, 1880, 10, 750))
    this.setOfWall.push(new Wall(scene, world, groundMat, 2155, 10, 750))
    this.setOfWall.push(new Wall(scene, world, groundMat, 2645, 10, 750))
    this.setOfWall.push(new Wall(scene, world, groundMat, 2920, 10, 750))
  }
  updateAll() {
    for (let i = 0; i < this.setOfWall.length; i++) {
      this.setOfWall[i].update()
    }
  }
}

export default WallSet
