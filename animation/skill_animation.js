import anime from 'animejs/lib/anime.es.js'

const skillPage = document.querySelector('#skill')
let toggle = false

skillPage.addEventListener('click', () => {
  const timeline = anime.timeline({
    duration: 1000,
    easing: 'spring',
  })

  timeline.add({
    targets: '#skill',
    translateY: toggle ? 0 : 90,
    opacity: toggle ? 0 : 1,
  })
  if (toggle) {
    toggle = false
  } else {
    toggle = true
  }
})
