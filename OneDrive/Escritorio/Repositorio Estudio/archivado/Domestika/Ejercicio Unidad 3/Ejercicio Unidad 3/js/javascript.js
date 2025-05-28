function recogeDatos(evento) {
  evento.preventDefault();

  var nombre = document.querySelector("#nombre").value;
  var fecha = document.querySelector("#fecha").value;
  var edad = 2019 - fecha;

  var bienvenida = document.querySelector("#bienvenida");
  
  var menorDe30 = '. Wow que jóven'
  var mayorDe30 = '. Wow que viejo'
  var edadJusta = '. Impresionante'
  var identificador;
  
  if (edad === 30) {
    identificador = edadJusta
  } else if (edad > 30) {
    identificador = mayorDe30
  } else {
    identificador = menorDe30
  }

  // EJERCICIO: declara las variables necesarias (puedes necesitar
  // más de una) para componer el mensaje de bienvenida
  var saludo = 'hola ' + nombre + ', '
  var reconocerEdad = 'usted tiene ' + edad + ' años' + identificador
  var missingNombre = 'Por favor, Rellene lo solicitado en "TU NOMBRE" '
  var missingEdad = 'Por favor, Rellene lo solicitado en "AÑO EN EL QUE NACISTE" '
  var FaltaTodo = 'Por favor, Rellene todos los datos. Muchas gracias'
  // EJERCICIO: crea un condicional que dé un mensaje u otro en
  // función de la edad
  // BONUS: si quieres, puedes comprobar si alguno de los campos
  // está vacío y modificar el mensaje de bienvenida para pedir
  // Que se rellene
  var mensaje;
    if (nombre == 0 && fecha == 0) {
      mensaje = FaltaTodo
    } else if(nombre == 0){
      mensaje = missingNombre
    } else if(fecha == 0){
      mensaje = saludo + missingEdad
    } else {
      mensaje= saludo + reconocerEdad
    }
  // EJERCICIO: Realiza la composición del mensaje final y cárgalo
  // en la variable que hayas preparado
  bienvenida.innerHTML = mensaje
  
  // EJERCICIO: Añade el mensaje final como contenido HTML del
  // nodo que hemos cargado en la variable bienvenida
}

var miForm = document.querySelector("#formulario");

miForm.addEventListener("submit", recogeDatos);
