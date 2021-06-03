fetch('https://newsapi.org/v2/everything?q=bangladesh&apiKey=6b17a1a2302b424892ed9b3f63361deb')
.then(response => response.json())
.then(data => console.log(data));