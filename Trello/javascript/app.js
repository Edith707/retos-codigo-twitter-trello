/*Variables globales */
var account =0; /* contador*/
var containerTasks = document.getElementById('tasks');
var buttonAction = document.getElementById("save");
var textarea = document.getElementById("list");

/*funcion para crear los elementos*/
var createElements = function(event) {
  var list = document.getElementById("list"); /*Llamando el elemento que tiene el textarea*/
  var section = document.createElement("section"); /*Creando el elemento section que contendra la nueva tarea*/
  section.id = 'section' + account; /*Definiendo el id a section y se concatena el contador para poder agregarle los mismos estilos a todas las tareas que agregue el usuario*/
  section.className = ("section") /*creando una clase para el elemento section*/
  var label = document.createElement("label"); /*Creando el elemento label*/
  var a = document.createElement("a"); /*creando elemento a*/
  var text = document.createTextNode('Agregar una tarjeta');/*Creando nodo de texto */
  var button = document.createElement("button"); /* Se crea el  boton*/

  //var input = document.createElement('input');
  var id = 'accountant' + account; /* Se le define un id al contador*/
  label.setAttribute('for', id); /*Se le define un atributo al label*/
  label.textContent = list.value;/*Se crea un contenido de texto al label para que se visualice en el textarea*/
  var addCard = button; /*Declaramos una variable  para la funcion  board que va a añadir una tarjeta en las listas*/
  addCard.id = account;//creando un id al link que agregará la tarjeta
  addCard.innerText = 'Agregar una tarjeta';//creando un texto al link
  addCard.className = ('buttonCard');//crenado una clase para el link
  addCard.addEventListener('click', board);/* FAlta definir board Agregando evento a board */
  /*Agregando atributos al section*/
  section.appendChild(label);
  section.appendChild(a);
  section.appendChild(button);
  containerTasks.appendChild(section);
  account++;

  list.value = ""; //esto sirve para limpiar o borrar el contenido que el usuario agregó
  list.placeholder = "Añadir lista";//después de limpiarlo, se le agregará este placeholder
};

var board = fuction (event) {};

/*Función que agrega el evento*/
var addEvent = function(event){
  event.preventDefault();
  createElements(e);
};

buttonAction.addEventListener("click", addEvent);
