import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

let btn = document.querySelector('.nav__button');
let menu = document.querySelector('.nav');
btn.addEventListener('click', () => {
   if (menu.classList.contains('active')) {
      menu.classList.remove('active');
   } else {
      menu.classList.toggle('active')
   }
})
