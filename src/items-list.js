import dishesMarkup from './templates/markup.hbs'
import dishes from'./menu.json'

const dishesListRef = document.querySelector('.js-menu');


dishesListRef.insertAdjacentHTML('beforeend', dishesMarkup(dishes));