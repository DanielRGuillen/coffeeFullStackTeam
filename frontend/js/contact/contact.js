const formulario = document.querySelector('form');
function validacion(){
  //llamamos los elementos del DOM con su respectivo valor (value)
  const nombreCompleto = document.getElementById('nombreCompleto').value;
  const correoElectronico = document.getElementById('email').value;
  const telefono = document.getElementById('telefono').value;
  if (validacionNombre(nombreCompleto) && validacionEmail(correoElectronico) && validacionTelefono(telefono)) {
    msgValidacion();
    return true;//retorna verdadero si todos los datos son validados
  }
  return false;
}

// funciones
function validacionNombre(nombreCompleto){
  const expresionRegular = /^[a-zA-ZáéíóúÁÉÍÓÚ]{2,30}$/;
  if(nombreCompleto.trim() === ""){ //verificamos que el campo no esté vacio 
    alert('Debes ingresar tu nombre');
    document.getElementById('nombreCompleto').focus();
    return false;
  }else if(!expresionRegular.test(nombreCompleto)){
    alert('Ingresa un nombre válido');
    return false;
  }
  return true;
}
function validacionEmail(correoElectronico){
  //declaramos las variables de las funciones para evitar hoisting
  const emailValido = (correoElectronico) => {
    const expresionRegular = /[a-z0-9.]+@[a-z]+\.[a-z]{2,3}$/;
      /*
      [a-z0-9.]+ ----> verifica que haya letras y/o numeros antes del "@"
      [a-z]+ -----> verifica que despues del @ haya caracteres entre la 'a' y la 'z' y antes del punto "."
      .[a-z]{2,3} -----> Despues del punto verifica que haya de 2 a 3 caracteres entre la 'a' y la 'z'
      $ ---> Busca el final de la cadena
      */
     return expresionRegular.test(correoElectronico);
     /* ------ .test() ------
      método ejecuta una búsqueda de una coincidencia entre un expresión regular y una cadena especificada. Devoluciones true o false.
     */
    }
    if(!emailValido(correoElectronico)){
      alert('Ingresa un email válidosssss');
      document.getElementById('email').focus();
      return false;
    }
  return true;
}

function validacionTelefono(telefono){
  const telefonoValido = (telefono) =>{
    const expresionRegular = /^[0-9]{3}[0-9]{3}[0-9]{4}$/;
    /*
    ^ ---> Busca el inicio de la cadena
    [0-9]{3} ---> busca 3 consecutivos entre 0-9. lo mismo con {4} pero 4 numeros siendo asi en total 10 numeros consecutivos para validar
    */
   return expresionRegular.test(telefono);
  }
  if(!telefonoValido(telefono)){
    alert('Ingresa un número de télefono válido');
    document.getElementById('telefono').focus();
    return false
  }
  return true;
}

function msgValidacion(){
  alert('Tus datos han sido enviados correctamente');
  //Luego de enviar los datos se limpian los campos de texto
  document.getElementById('nombreCompleto').value = '';
  document.getElementById('email').value = '';
  document.getElementById('telefono').value = '';
  document.getElementById('motivoSolicitud').value = '';
  document.getElementById('mensaje').value = '';
}