//trayendo elementos del HTML
var account= document.getElementById("account");
var textArea = document.getElementById("tweet");//textArea
var button = document.getElementById("twittear"); //button tweet

var addTweet = function (event) {
  //Taer las tags necesarias para la funcion
  var textArea = document.getElementById("tweet");//textArea
  var button = document.getElementById("twittear"); //button tweet
  var conteinerTweets = document.getElementById("conteiner_tweets"); //contenedor de new tweets
  var text = textArea.value;
  //Creando nuevos elementos
   var tweet = document.createElement("div");//div
    tweet.className ="tweet";//dando clase al div
   var conteinerTweet = document.createElement("p");//p
   var conteinerHour = document.createElement("span");//span
   var conteinerText =  document.createTextNode(text);//node text
  //Agregar los nuevos elementos al html
  conteinerTweet.appendChild(conteinerText);
  tweet.appendChild(conteinerTweet);
  tweet.appendChild(conteinerHour);
  conteinerTweets.appendChild(tweet);
 console.log(tweet);

};

var accountLetters = function (event) {
  var account= document.getElementById("account");

};

//Agregando eventos a las variables

button.addEventListener("click", addTweet);
textArea.addEventListener("keyup", accountLetters);
