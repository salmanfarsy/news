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
const newsLink = document.querySelectorAll('#news a');
const newsImg = document.querySelectorAll('#news img');
const newsTitle = document.querySelectorAll('#news h2');
const usaLink = document.querySelectorAll('#usa a');
const usaImg = document.querySelectorAll('#usa img');
const usaTitle = document.querySelectorAll('#usa h2');
const covidLink = document.querySelectorAll('#covid a');
const covidImg = document.querySelectorAll('#covid img');
const covidTitle = document.querySelectorAll('#covid h2');
const bdLink = document.querySelectorAll('#bd a');
const bdImg = document.querySelectorAll('#bd img');
const bdTitle = document.querySelectorAll('#bd h2');
const cricketLink = document.querySelectorAll('#cricket a');
const cricketImg = document.querySelectorAll('#cricket img');
const cricketTitle = document.querySelectorAll('#cricket h2');

//news headlines  api
   fetch('https://immense-bastion-02108.herokuapp.com/api/news' ,{
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin':'*'
        }
      })
    .then(response => response.json())
    .then(data => topSection(data))



    //source api
fetch('https://immense-bastion-02108.herokuapp.com/api/source')
.then(res=> res.json())
.then(data=> source(data));

//usa api
fetch('https://immense-bastion-02108.herokuapp.com/api/usa')
.then(res=> res.json())
.then(data=> usa(data));
//covid api
fetch('https://immense-bastion-02108.herokuapp.com/api/covid')
.then(res=> res.json())
.then(data=> covid(data));
//bd api
fetch('https://immense-bastion-02108.herokuapp.com/api/bd')
.then(res=> res.json())
.then(data=> bd(data));
//cricket api
fetch('https://immense-bastion-02108.herokuapp.com/api/cricket')
.then(res=> res.json())
.then(data=> cricket(data));

//headline function
    function topSection(data){
      //top section 
      const i = random();
      const j = random();
  console.log(data.articles[i]) 
topLink.href = data.articles[i].url;
topImg.src = data.articles[i].urlToImage;
topImg.alt = data.articles[i].title;
topNews.textContent = data.articles[i].title;
//asside part
asideLink[0].href =  data.articles[j].url;
asideImg[0].src =  data.articles[j].urlToImage;
if(!data.articles[j].urlToImage){
  asideImg[0].src = 'http://media.istockphoto.com/photos/stack-of-blank-newspapers-against-a-white-background-picture-id157528154?k=6&m=157528154&s=612x612&w=0&h=MF6T6XYbAYEVVdhvKlmsr8Gt97dBHRjRKfHNPn3S_kQ=';
}
asideTitle[0].textContent = data.articles[j].title;
//main section
render(data, newsLink, newsImg, newsTitle);
}



 
//source function
function source(data){
 
  for(let i = 0; i<=4; i++ ){
    const j =random(100);
sourceLInk[i].textContent = data.sources[j].name;
sourceLInk[i].href = data.sources[j].url;
  }
}
//rendering function
function render(data, link, img, title, i=10){
  for(let k=0; k<=5; k++){
    // const r = random();
    link[k].href = data.articles[k+i].url;
   img[k].src = data.articles[k+i].urlToImage;
   if(!data.articles[k+i].urlToImage){
     img[k].src = 'http://media.istockphoto.com/photos/stack-of-blank-newspapers-against-a-white-background-picture-id157528154?k=6&m=157528154&s=612x612&w=0&h=MF6T6XYbAYEVVdhvKlmsr8Gt97dBHRjRKfHNPn3S_kQ=';
   }
img[k].alt = data.articles[k+i].title;
    title[k].textContent = data.articles[k+i].title;
  }
}
//usanews function
function usa(data){
//asside part
const j = random();
asideLink[1].href =  data.articles[j].url;
asideImg[1].src =  data.articles[j].urlToImage;
if(!data.articles[j].urlToImage){
  asideImg[1].src = 'http://media.istockphoto.com/photos/stack-of-blank-newspapers-against-a-white-background-picture-id157528154?k=6&m=157528154&s=612x612&w=0&h=MF6T6XYbAYEVVdhvKlmsr8Gt97dBHRjRKfHNPn3S_kQ=';
}
asideTitle[1].textContent = data.articles[j].title;
//render
render(data, usaLink, usaImg, usaTitle);
}

//Covid news function
function covid(data){
  //asside part
  const j = random();
  asideLink[2].href =  data.articles[j].url;
  asideImg[2].src =  data.articles[j].urlToImage;
  if(!data.articles[j].urlToImage){
    asideImg[2].src = 'http://media.istockphoto.com/photos/stack-of-blank-newspapers-against-a-white-background-picture-id157528154?k=6&m=157528154&s=612x612&w=0&h=MF6T6XYbAYEVVdhvKlmsr8Gt97dBHRjRKfHNPn3S_kQ=';
  }
  asideTitle[2].textContent = data.articles[j].title;
  //render
  render(data, covidLink, covidImg, covidTitle);
  }
  //bd news function
function bd(data){
  //asside part
  const j = random();
  asideLink[3].href =  data.articles[j].url;
  asideImg[3].src =  data.articles[j].urlToImage;
  if(!data.articles[j].urlToImage){
    asideImg[3].src = 'http://media.istockphoto.com/photos/stack-of-blank-newspapers-against-a-white-background-picture-id157528154?k=6&m=157528154&s=612x612&w=0&h=MF6T6XYbAYEVVdhvKlmsr8Gt97dBHRjRKfHNPn3S_kQ=';
  }
  asideTitle[3].textContent = data.articles[j].title;
  //render
  render(data, bdLink, bdImg, bdTitle, 0);
  }
    //cricket news function
function cricket(data){
  //asside part
  const j = random();
  asideLink[4].href =  data.articles[j].url;
  asideImg[4].src =  data.articles[j].urlToImage;
  if(!data.articles[j].urlToImage){
    asideImg[4].src = 'http://media.istockphoto.com/photos/stack-of-blank-newspapers-against-a-white-background-picture-id157528154?k=6&m=157528154&s=612x612&w=0&h=MF6T6XYbAYEVVdhvKlmsr8Gt97dBHRjRKfHNPn3S_kQ=';
  }
  asideTitle[4].textContent = data.articles[j].title;
  //render
  render(data, cricketLink, cricketImg, cricketTitle, random(10));
  }
