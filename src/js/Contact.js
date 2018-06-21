import { getOne } from './utils/helpers.js'

export default class Contactform {
  constructor(sel) {
    const contact = document.querySelector(sel)
    const contactbutton = document.querySelector('.contactbutton')
    const button = contactbutton.querySelector('button')
    const contactform = document.querySelector('.contactform')

    contactbutton.addEventListener('click', e => {
      contactform.classList.toggle('hidden')
      button.classList.toggle('activ')
    })
  }
}
