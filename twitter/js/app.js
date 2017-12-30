//trayendo elementos del HTML
var account= document.getElementById("account");
var textArea = document.getElementById("tweet");//textArea
var button = document.getElementById("twittear"); //button tweet

//Funcion para generar la variable tiempo
var time = function (event){
  var toDay = new Date();
  var hour = toDay.getHours();
  var min = toDay.getMinutes();
  var ampm = "";
  //Condicional para ver si se utiliza am o pm
  if(hour >= 12){
    hour = hour - 12;
    ampm = "PM";
  }else{
    ampm = "AM";
  };

  if(hour === 0){
    hour = 12;
  };

  if(min < 10){
    min = "0" + min;
  };

 var timeNow =hour + ":" + min+ ampm;
 return timeNow
}

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

};

var accountLetters = function (event) {
  var account= document.getElementById("account").innerText;  //contador (p)
  var textArea = document.getElementById("tweet");// Tag del textarea
  var textLength = textArea.value.length; //longitud del texto
  var counter = account.value =140 -textLength; //contador de caracteres
  var button = document.getElementById("twittear"); //buton Tweet
/*
  if(textLength > 140){
    button.disabled = true;
    button.style.background = "#EEA5CC";
    counter.style.color = "red";
  }else if(textLength >= 130){
    button.disabled = false;
    button.style.background = "#D61E80";
    counter.style.color = "orange";
  }else if(textLength >= 120){
    button.disabled = false;
    button.style.background = "#D61E80";
    counter.style.color = "green";
  }else if(textLength <= 0){
    button.disabled = true;
    button.style.background= "#EEA5CC";
  }else{
    button.disabled = false;
    button.style.background = "#D61E80";
    counter.style.color = "gray";

*/
  console.log(counter);

};



//Agregando eventos a las variables
button.addEventListener("click", time); //Agregando evento al button twitter y ejecutar la función time
button.addEventListener("click", addTweet); //Agregando evento al button twitter y ejecutar la función addTweet
textArea.addEventListener("keyup", accountLetters); //Agregando evento al button twitter y ejecutar la función contador de letras
