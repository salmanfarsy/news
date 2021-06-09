//random
function random(){
  return Math.floor(Math.random() * 20);
}
//elements
const topLink = document.querySelector('#topLink');
const topImg = document.querySelector('#topImg');
const topNews = document.querySelector('#topNews');
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
  console.log(data.articles[i]) 
topLink.href = data.articles[i].url;
topImg.src = data.articles[i].urlToImage;
topImg.alt = data.articles[i].title;
topNews.textContent = data.articles[i].title;
    }

function source(){
  
}