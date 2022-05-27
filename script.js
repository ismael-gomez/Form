
	var formulario = document.getElementById('formulario'),
		nombre = formulario.nombre,
		correo = formulario.correo,
		sexo = formulario.sexo,
		pregunta = formulario.pregunta1,
		porque = formulario.porque,
		pregunta2 = formulario.pregunta2,
		porque2 = formulario.porque2,
		pregunta3 = formulario.pregunta3,
		terminos = formulario.terminos,
		error = document.getElementById('error');

	function validarNombre(e){
		if (nombre.value == '' || nombre.value == null){
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor completa el nombre</li>';
			console.log('Por favor completa el nombre');

			e.preventDefault();
		} else {
			error.style.display = 'none';
		}
	}

	function validarCorreo(e){
		if (correo.value == '' || correo.value == null){
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor completa el correo</li>';
			console.log('Por favor completa el correo');

			e.preventDefault();
		} else {
			error.style.display = 'none';
		}
	}

	function validarSexo(e){
		if (sexo.value == '' || sexo.value == null){
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor selecciona el sexo</li>';
			console.log('Por favor completa el sexo');

			e.preventDefault();
		} else {
			error.style.display = 'none';
		}
	}

	
	function validarPregunta1(e){
		if (pregunta.value == '' || pregunta.value == null){
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor selecciona  una opcion</li>';
			console.log('Por favor completa una opcion');

			e.preventDefault();
		} else {
			error.style.display = 'none';
		}
	}

	function validarPorque(e){
		if (porque.value == '' || porque.value == null){
			error.style.display = 'block';
			error.innerHTML += '<li>Rellena la preguna 1</li>';

			e.preventDefault();
		} else {
			error.style.display = 'none';
		}
	}
	function validarPregunta2(e){
		if (pregunta2.value == '' || pregunta2.value == null){
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor selecciona  una opcion</li>';
			console.log('Por favor completa una opcion');

			e.preventDefault();
		} else {
			error.style.display = 'none';
		}
	}

	function validarPorque2(e){
		if (porque2.value == '' || porque2.value == null){
			error.style.display = 'block';
			error.innerHTML += '<li>Rellena la preguna 2</li>';

			e.preventDefault();
		} else {
			error.style.display = 'none';
		}
	}


	function validarPregunta3(e){
		if (pregunta3.value == '' || pregunta3.value == null){
			error.style.display = 'block';
			error.innerHTML += '<li>Llena el caampo 3</li>';
			console.log('Por favor completa una opcion');

			e.preventDefault();
		} else {
			error.style.display = 'none';
		}
	}

	function validarTerminos(e){
		if (terminos.checked == false){
			error.style.display = 'block';
			error.innerHTML += '<li>Por favor acepta los terminos y condiciones</li>';
			console.log('Por favor completa el terminos');

			e.preventDefault();
		} else {
			error.style.display = 'none';
		}
	}

	function validarForm(e){
		error.innerHTML = '';
		validarNombre(e);
		validarCorreo(e);
		validarSexo(e);
		validarPregunta1(e);
		validarPorque(e);
		validarPregunta2(e);
		validarPorque2(e);
		validarPregunta3(e);
		validarTerminos(e);
	}

	formulario.addEventListener('submit', validarForm);
// }())


console.log("Hola mundo");