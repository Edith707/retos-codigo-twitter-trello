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
  console.log(timeNow);
  return timeNow;
}

var addTweet = function (event, timeNow) {
  //Taer las tags necesarias para la funcion
  var textArea = document.getElementById("tweet");//textArea
  var button = document.getElementById("twittear"); //button tweet
  var conteinerNew = document.getElementById("conteiner_tweets"); //contenedor de new tweets
  var text = textArea.value;
  //Creando nuevos elementos
   var tweet = document.createElement("div");//div
    tweet.className ="tweet";//dando clase al div
   var conteinerTweet = document.createElement("p");//p
     conteinerTweet.className ="tweet2";
   var conteinerHour = document.createElement("span");//span
  var nodoText  = document.createTextNode(text);//node text
  var time = document.createTextNode(timeNow);


  /*//Agregar los nuevos elementos al html
   conteinerHour.appendChild(time);
   conteinerTweet.appendChild(nodoText);
   tweet.appendChild(conteinerTweet);
   tweet.appendChild(conteinerHour);
   conteinerNew.appendChild(tweet);*/
};

var accountLetters = function (event) {
  var account= document.getElementById("account");// //contador (p)
  var textLength = textArea.value.length; //longitud del texto
  var counter = account.value =140 -textLength; //contador de caracteres
   account.innerText = counter;
 console.log(counter);
//Condicionales para desabilitar el boton tweet y para cambiar el color del acoount
  if(textLength >= 140){
    button.disabled = true;
    button.style.background =  "#FF5733";
  }else if(textLength >= 130){
    button.style.background = "#1DA1F2";
    account.style.color = "#f39709 ";
  }else if(textLength >= 120){
    button.disabled = false;
    button.style.background = "#1DA1F2";
    account.style.color = " #61cd08";
  }else if(textLength <= 0){
    button.disabled = true;
    account.style.background= "##1DA1F2";
  }else{
   account.style.background= "none";
   button.disabled = false;
  }
};

//Funcion para que cada vez que recargo la página se limpie el textarea
var inner = function (event){
  textArea.value = "";
};
//Agregando eventos a las variables
button.addEventListener("click", time); //Agregando evento al button twitter y ejecutar la función time
button.addEventListener("click", addTweet); //Agregando evento al button twitter y ejecutar la función addTweet
textArea.addEventListener("keyup", accountLetters); //Agregando evento al button twitter y ejecutar la función contador de letras
window.addEventListener("load", inner); // Agregando evento al cargar la página
