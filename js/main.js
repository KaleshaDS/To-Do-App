(function(){
	// Variables//
	var lista = document.getElementById("lista"), //variable para agregar elementos a ul//
		tareaInput = document.getElementById("tareaInput"), //usa la clase de input donde se escribe//
		btnNuevaTarea = document.getElementById("add-botton"); //usa el boton Agregar tarea//
	    // btnTrash = document.getElementById("trashi") //agregar icono de basura//
 	
	// Funciones
	var agregarTarea = function(){ //funcion que agrega una tarea como un elemento li a ul//
		var tarea = tareaInput.value, //el valor add del input se guarda aqui//
			nuevaTarea = document.createElement("li"), //method to create an Element Node with the specified name
			enlace = document.createElement("a"), //usa el link //
			contenido = document.createTextNode(tarea); //method creates a Text Node with the specified text.//

 
		if (tarea === "") {
			tareaInput.setAttribute("placeholder", "Agrega una tarea valida");  //si el espacio esta en blanco, mandara en placeholder "error"//
			tareaInput.className = "error";
			return false;
		}
 
		enlace.appendChild(contenido); // Agregamos el contenido al enlace

		// Le establecemos un atributo href
		enlace.setAttribute("href", "#"); // Agregamos el enlace (a) a la nueva tarea (li)
		nuevaTarea.appendChild(enlace);	// Agregamos la nueva tarea a la lista
		lista.appendChild(nuevaTarea);
		tareaInput.value = "";
 
		for (var i = 0; i <= lista.children.length -1; i++) {
			lista.children[i].addEventListener("click", function(){
				this.parentNode.removeChild(this);
			});
		}
 
	};
	var comprobarInput = function(){
		tareaInput.className = "";
		teareaInput.setAttribute("placeholder", "Agrega tu tarea");
	};
 
	var eleminarTarea = function(){
		this.parentNode.removeChild(this);
	};
 
	// Eventos
 
	// Agregar Tarea
	btnNuevaTarea.addEventListener("click", agregarTarea);
 
	// Comprobar Input
	tareaInput.addEventListener("click", comprobarInput ,"check");
 
	// Borrando Elementos de la lista
	for (var i = 0; i <= lista.children.length -1; i++) {
		lista.children[i].addEventListener("click", eleminarTarea);
	}
}());

