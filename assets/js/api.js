//random
function random(){
  return Math.floor(Math.random() * 20);
}
//elements
const topLink = document.querySelector('#topLink');
const topImg = document.querySelector('#topImg');
const topNews = document.querySelector('#topNews');
const asideLink = document.querySelectorAll('.source a');
const asideImg= document.querySelectorAll('.source img');
const asideTitle = document.querySelectorAll('.source p');
console.log(asideTitle);
//news headlines 
   fetch('https://immense-bastion-02108.herokuapp.com/api/news' ,{
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin':'*'
        }
      })
    .then(response => response.json())
    .then(data => topSection(data))

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
  console.log(data)
}
//source api
fetch('https://immense-bastion-02108.herokuapp.com/api/source')
.then(res=> res.json())
.then(data=> source(data));