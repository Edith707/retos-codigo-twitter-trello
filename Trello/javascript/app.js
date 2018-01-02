/*Variables globales */
var account =0; /* contador*/
var containerTasks = document.getElementById('tasks'); //contenedor de nuevos tasks
var buttonAction = document.getElementById("save");//buton que activara el evento
var textarea = document.getElementById("list");//Textarea que ingresara el texto
var text1 = document.getElementById("agregar");//textarea que ingrese el texto "Añadir una lista"

//Funcion para esconder el texto "Añadir una lista"
var hidden = function(event) {
  var text1 = document.getElementById("agregar"); //textarea que ingrese el texto "Añadir una lista"
  text1.style.display ="none";//cambiar el display a none para no mostrarlo
  var formulario = document.getElementById("formulario"); // referencia al formulario
  formulario.style.display ="inline-block" //cambiar display none a inline-block
};

//funcion para que al recargar la pagina los textarea no tengan caracter
function inner (){
  text1.value = "";
  textarea.value = "";
};

//funcion para crear los elementos

var createElements = function(event) {
  var containerTasks = document.getElementById('tasks'); //contenedor de nuevos tasks
  var textarea = document.getElementById("list"); //Llamando el elemento que tiene el textarea
  var section = document.createElement("section"); //Creando el elemento section que contendra la nueva tarea
   //agregar id y class al section
   section.id = "section" + account;
   section.className = ("addTask")
  var text = textarea.value;//Agregando el texto del textarea
  var textNode = document.createTextNode(text);//Creando nodo de texto y agregando el texto del textarea
  var label= document.createElement("label");//creando label
  var a = document.createElement("a"); //creaando el enlace
  var button = document.createElement("button"); // Se crea el  boton
  var textNode2 = document.createTextNode("Agregar una tarjeta");

   var id = "check" + account; //agregar un id contador

   label.setAttribute("for", id) //dandole un atributo a label
  label.textContent = text;


   var addAsk = button;
   addAsk.id = account; 
   addAsk.innerText = "Agregar una tarjeta"; // agregando texto al button 
   addAsk.className = "button-ask"; //agregando una clase al button
   addAsk.addEventListener("click",  addList);

   //Agregando elementos al html
   
   section.appendChild(label);
   section.appendChild(a);
   section.appendChild(button);
   containerTasks.appendChild(section);
   account++;



  list.value = ""; //limpiando el textarea
  list.placeholder = "Añadir lista.."; //insertando place holder a list despues de limpiar
};


var addTask = function () {
  var taskCheck= this.check; // Variable del Id al que se hará referencia

  var addBoard = document.createElement( "div"); //creando el elemento que contendra la nueva tarjeta
  var newText = document.getElementById('textAdd' + position); //Llamando al textarea y su posición
  addBoard.textContent = newText.value; // Añadiendo el texto a la nueva tarjeta
  document.getElementsByTagName('section')[position].appendChild(addBoard); //agregando al formulario el article contenedor de todo aumentando con position su id también
  newText.value=""; //Limpiando el espacio del textarea
};




var addList = function(event) {
  var thisId = this.id;  //Variable del Id al que se hará referencia
  position = thisId;
  var createTextarea = createElement("textarea"); // creando el elemento Textarea
  createTextarea.id= "textAdd" + thisId;
  var buttonNew = createElement("button"); //Creando un nuevo botton
  buttonNew.innerText = 'Añadir'; //agregándole texto al botón
  buttonNew.id = 'btnAdd' + elId; // creandole id al boton
  buttonNew.className = "buttonTask" // creandole clase al boton
  buttonNew.addEventListener('click', board); // Agregar un evento  click, ejecutar la funcion board
  document.getElementsByTagName('section')[thisId].appendChild(createTextArea); //agregándole el textarea al article por su id
  document.getElementsByTagName('section')[thisId].appendChild(buttonNew); //agregándole el boton al article por su id
};



//Función que agrega el evento
var addEvent = function(event){

  createElements(event); //Ejecutar funcion createElements
};


text1.addEventListener("click", hidden ); //Un evento que ejecuta la funcion hidden
buttonAction.addEventListener("click", addEvent); //Agregando evento al button y ejecutar funcion addEvent
window.addEventListener("load", inner); // Agregando evento al cargar la página el texto de textarea se borre
