export const CheckPosition = (boat, bridge) => {
  const boatVec = boat.getPosition()
  const bridgeVec = bridge.getPosition()
  if (distance(boatVec, bridgeVec) < 30000) {
    console.log('true')
    return true
  } else {
    console.log('false')
    return false
  }
}

const distance = (p1, p2) => {
  return (p1.x - p2.x) * (p1.x - p2.x) + (p1.z - p2.z) * (p1.z - p2.z)
}
