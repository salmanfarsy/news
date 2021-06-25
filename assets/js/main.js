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

console.log(iNews.offsetTop)