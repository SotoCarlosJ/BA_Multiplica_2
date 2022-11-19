const burger = document.getElementById('menu-bars');
const menu = document.getElementById('displayable-menu');

burger.addEventListener('click', () => {
    menu.classList.toggle('undisplayed')
})