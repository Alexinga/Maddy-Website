'use strict';

const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('.navbar-links');
const navA = document.querySelectorAll('.navbar-link');

hamburger.addEventListener('click', openMenu);
navA.forEach((i) => {
    i.addEventListener('click', closeMenu);
})
function openMenu() {
    hamburger.classList.toggle('active');
    navUl.classList.toggle('active');
}
function closeMenu() {
    hamburger.classList.remove('active');
    navUl.classList.remove('active');
}