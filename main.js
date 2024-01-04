/*
 menu functianility
 */

let hamburgurMenu = document.querySelector('.hamburger-menu')
let closeMenu = document.querySelector('.close-menu')
let menuBtn = document.querySelector('.menu')
let navMenu = document.querySelector('#main-nav')

menuBtn.addEventListener('click', ()=>{
    console.log("clicked")
    console.log("hamburger", hamburgurMenu.classList)
    console.log("close",closeMenu.classList)
    hamburgurMenu.classList.toggle('active')
    closeMenu.classList.toggle('active')
    navMenu.classList.toggle('active')
})