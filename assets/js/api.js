//random
function random(limit=20){
  return Math.floor(Math.random() * limit);
}
//elements
const topLink = document.querySelector('#topLink');
const topImg = document.querySelector('#topImg');
const topNews = document.querySelector('#topNews');
const asideLink = document.querySelectorAll('.source a');
const asideImg= document.querySelectorAll('.source img');
const asideTitle = document.querySelectorAll('.source p');
const sourceLInk = document.querySelectorAll('.net a');

//news headlines 
   fetch('https://immense-bastion-02108.herokuapp.com/api/news' ,{
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin':'*'
        }
      })
    .then(response => response.json())
    .then(data => topSection(data))
//headline function
    function topSection(data){
      const i = random();
      const j = random();
  console.log(data.articles[i]) 
topLink.href = data.articles[i].url;
topImg.src = data.articles[i].urlToImage;
topImg.alt = data.articles[i].title;
topNews.textContent = data.articles[i].title;
asideLink[0].href =  data.articles[j].url;
asideImg[0].src =  data.articles[j].urlToImage;
asideTitle[0].textContent = data.articles[j].title;



    }
//source function
function source(data){
 
  for(let i = 0; i<=4; i++ ){
    const j =random(100);
sourceLInk[i].textContent = data.sources[j].name;
sourceLInk[i].href = data.sources[j].url;
  }
  console.log(data.sources[0].url);
}
//source api
fetch('https://immense-bastion-02108.herokuapp.com/api/source')
.then(res=> res.json())
.then(data=> source(data));