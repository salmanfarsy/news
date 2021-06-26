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
navBtn.addEventListener('click', ()=>{
    navMenu.classList.toggle('on');
})