import { getOne } from './utils/helpers.js'

export default class Nav {
  constructor(sel) {
    const nav = document.querySelector(sel)
    const button = nav.querySelector('button')
    const navi = nav.querySelector('nav')
    const div = nav.querySelector('div')

    button.addEventListener('click', e => {
      // nav.classList.toggle('hidden')
      button.classList.toggle('collapsed')
      div.classList.toggle('show')
    })
  }
}
