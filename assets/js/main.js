/*variables declaradas para crear los eventos y las funciones que ocuparemos*/
var cerrar = document.getElementsByClassName("close");

var origen = document.getElementById("origen");
var extincion = document.getElementById("extincion");
var restaurar  = document.getElementById("restaurar");

var imagen = document.getElementsByClassName("img__container");
var longitud = imagen.length;

var texto1 = document.getElementById("lorem-1");
var texto2 = document.getElementById("lorem-2");



/*asignando eventos a los botones*/
restaurar.addEventListener("click",restaurarImagen);
origen.addEventListener("click", ocultarOrigen);
extincion.addEventListener("click", ocultarExtincion);
/*funcion para ocultar y momstrar el lorem2*/
function ocultarExtincion(){
	if(texto2.style.visibility=="hidden"){
		texto2.style.visibility="visible"
	} else {
		texto2.style.visibility="hidden";
	}
}
/*funcion para ocultar y ostrar el lorem1*/
function ocultarOrigen(){
	if(texto1.style.visibility=="hidden"){
		texto1.style.visibility="visible"
	} else {
		texto1.style.visibility="hidden";
	}
}
 /*for que sirve para agregar el evento para quitar la imagen*/   
for (var i = 0; i < cerrar.length; i++){
		cerrar[i].addEventListener("click",cerrarImagen);
	}
/*funcion para restaurar las imagenes*/
function restaurarImagen(){	
	for (var i = 0; i < longitud; i++){
		imagen[i].style.display = "flex";
	}
}
/*funcion para cerrar las imagenes*/
function cerrarImagen(){
		this.parentElement.style.display = "none";
}