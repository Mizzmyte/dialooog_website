import { getOne } from './utils/helpers.js'

export default class Header {
  constructor(sel) {
    const header = document.querySelector(sel)
    const burger = header.querySelector('button')
    const nav = header.querySelector('nav')

    burger.addEventListener('click', e => {
      nav.classList.toggle('hidden')
      burger.classList.toggle('active')
    })
  }
}
