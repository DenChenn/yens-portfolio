import anime from 'animejs/lib/anime.es.js'

let pressDown = false
let leave = true

const eventHandler = (event) => {
  const keyPress = event.key
  if (keyPress === 'e') {
    if (pressDown) {
      pressDown = false
    } else {
      pressDown = true
    }
    const timeline = anime.timeline({
      duration: 500,
      easing: 'spring',
    })

    timeline.add({
      targets: '#skill',
      translateY: pressDown ? 90 : 0,
      opacity: pressDown ? 1 : 0,
    })
  }
}

export const SkillAnimate = (toggle, isNear) => {
  if (toggle && isNear) {
    leave = true
    window.addEventListener('keydown', eventHandler)
  } else {
    if (leave) {
      const timeline = anime.timeline({
        duration: 500,
        easing: 'spring',
      })

      timeline.add({
        targets: '#skill',
        translateY: 0,
        opacity: 0,
      })

      leave = false
    }
    window.removeEventListener('keydown', eventHandler)
  }
}
