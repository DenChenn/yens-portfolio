import Lantern from './lantern'

class LanternSet {
  setOfLantern = []

  constructor(scene, world, groundMat) {
    const smallRadius = 250
    const bigRadius = 500
    const smallRotateUnit = Math.PI / 18.0
    const bigRotateUnit = Math.PI / 36.0

    for (let i = 0; i < 2 * Math.PI - 0.1; i += smallRotateUnit) {
      if (Math.sin(i) < 0) {
        this.setOfLantern.push(
          new Lantern(
            scene,
            world,
            groundMat,
            smallRadius * Math.cos(i) + 1125,
            2,
            smallRadius * Math.sin(i),
          ),
        )
      } else {
        this.setOfLantern.push(
          new Lantern(
            scene,
            world,
            groundMat,
            smallRadius * Math.cos(i) + 375,
            2,
            smallRadius * Math.sin(i),
          ),
        )
      }
    }
    for (let i = 0; i < 2 * Math.PI - 0.1; i += bigRotateUnit) {
      if (Math.sin(i) < 0) {
        this.setOfLantern.push(
          new Lantern(
            scene,
            world,
            groundMat,
            bigRadius * Math.cos(i) + 1125,
            2,
            bigRadius * Math.sin(i),
          ),
        )
      } else {
        this.setOfLantern.push(
          new Lantern(
            scene,
            world,
            groundMat,
            bigRadius * Math.cos(i) + 375,
            2,
            bigRadius * Math.sin(i),
          ),
        )
      }
    }
    for (let i = -50; i > -250; i -= 50) {
      this.setOfLantern.push(new Lantern(scene, world, groundMat, 125, 2, i))
      this.setOfLantern.push(new Lantern(scene, world, groundMat, -125, 2, i))
    }
    for (let i = 0; i < Math.PI / 2.0; i += smallRotateUnit) {
      this.setOfLantern.push(
        new Lantern(
          scene,
          world,
          groundMat,
          -smallRadius * Math.cos(i) + 1625,
          2,
          smallRadius * Math.sin(i),
        ),
      )
    }
  }

  updateAll() {
    for (let i = 0; i < this.setOfLantern.length; i++) {
      this.setOfLantern[i].update()
    }
  }
}

export default LanternSet
