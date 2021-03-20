import dishesMarkup from './templates/markup.hbs'
import dishes from'./menu.json'

const dishesListRef = document.querySelector('.js-menu');


console.log(dishesMarkup(dishes))




dishesListRef.insertAdjacentHTML('beforeend', dishesMarkup(dishes));