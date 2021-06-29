const date = document.querySelector('.date');
const now = new Date();
date.textContent = now.toDateString();
//sticky nav
const nav = document.querySelector('header');


window.addEventListener('scroll', (e)=>{
if(pageYOffset>nav.clientHeight){
    nav.classList.add('sticky');
}else{
    nav.classList.remove('sticky'); 
}
})
//menu active state
const iNews = document.querySelector('#news');

//toggle nav menu
const navMenu = document.querySelector('nav');
const navBtn = document.querySelector('.menu');
console.log(navBtn)
navBtn.addEventListener('click', (e)=>{
    e.stopPropagation()
    navMenu.classList.toggle('on');
})
//dark mode
const body = document.querySelector('body');
const darkBtn = document.querySelector('#dark');
const lightBtn = document.querySelector('#light');

darkBtn.addEventListener('click', ()=>{
    body.classList.add('dark');
    darkBtn.classList.add('off');
    lightBtn.classList.remove('off');
})
lightBtn.addEventListener('click', ()=>{
    body.classList.remove('dark');
    darkBtn.classList.remove('off');
    lightBtn.classList.add('off');
})
//menu toggle off
body.addEventListener('click', ()=>{
    navMenu.classList.remove('on');
})