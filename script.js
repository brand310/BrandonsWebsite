const menu = document.querySelector ('#mobile-menu')
const menuLinks = document.querySelector ('.navmenu')
console.log ('hi')
menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menu.classList.toggle('active');
})