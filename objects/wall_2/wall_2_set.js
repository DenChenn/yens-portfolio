import Wall2 from './wall_2'

class WallSet2 {
  setOfWall2 = []
  constructor(scene, world, groundMat) {
    this.setOfWall2.push(new Wall2(scene, world, groundMat, 1750, 10, -310))
    this.setOfWall2.push(new Wall2(scene, world, groundMat, 1750, 10, 560))
    this.setOfWall2.push(new Wall2(scene, world, groundMat, 3050, 10, -310))
    this.setOfWall2.push(new Wall2(scene, world, groundMat, 3050, 10, 560))
  }
  updateAll() {
    for (let i = 0; i < this.setOfWall2.length; i++) {
      this.setOfWall2[i].update()
    }
  }
}

export default WallSet2
