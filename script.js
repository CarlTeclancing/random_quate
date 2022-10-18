
  quategenerator =()=>{
    fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let quote = Math.floor(Math.random() * data.length)
    document.getElementById('quate').innerHTML = data[quote].text;
    document.getElementById('author').innerHTML =('Author: ' + data[quote].author);
    console.log(data[quote]);
  });

  }
  quategenerator(); 

  fetch("https://jsonplaceholder.typicode.com/posts")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
console.log(data);
let quote = Math.floor(Math.random() * data.length)
document.getElementById('quate').innerHTML = ('user id: ' + data[quote].id);
document.getElementById('author').innerHTML =('title: ' + data[quote].title);
console.log(data[quote]);
  });