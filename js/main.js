/*Funcion para crear un elelento de lista*/

function add() {
    var lista = document.createElement('li'); /*variable que crea un elemente "li" y la imprime en el html*/
    lista.className = 'row'; /* className - propiedad que establece o devuelve el nombre de la clase de un elemento*/
	var ingreso = document.getElementById('tarea').value; /* estableces id a un elemento y asi lo reconoce JS*/
    lista.innerHTML = '<input type="checkbox" onclick="check(this) class="right"> '+ ingreso + '</input> <span class="pull-right" onclick="remove(this)"><i class="fa fa-trash" aria-hidden="true"></i></span>' ;
    document.getElementById('contenido').appendChild(lista);
}

/*Funcion para borrar*/

function remove(input){
	console.log(input.parentNode).nodeName
	document.getElementById('contenido').removeChild(input.parentNode);
}

// /*Funcion chequeo*/

// function check(input){
// 	console.log("it's correct"+input.nodeName)
// 	if(this.checked){
// 		ingreso.className="right"
// 	}else{
// 		ingreso.className=""
// 	}
// } 