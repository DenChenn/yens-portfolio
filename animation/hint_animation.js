import anime from 'animejs/lib/anime.es.js'

export function HintAnimate(toggle) {
  const timeline = anime.timeline({
    duration: 500,
    easing: 'easeOutExpo',
  })

  timeline.add({
    targets: '#hint',
    opacity: toggle ? 1 : 0,
    scale: toggle ? 1.3 : 1,
  })
}
