//news headlines 
   fetch('https://immense-bastion-02108.herokuapp.com/api/news' ,{
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin':'*'
        }
      })
    .then(response => response.json())
    .then(data => {
  console.log(data.articles[0].title) 
  const title =data.articles[0].title;

    })


