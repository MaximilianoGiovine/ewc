'use strict'


// No cambies los nombres de las funciones.

function factorear(num) {
 
}
// Factorear el número recibido como parámetro y devolver en un array
// los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
// Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
// Tu código:

function bubbleSort(array) {
  
}
// Implementar el método conocido como bubbleSort para ordenar de menor a mayor
// el array recibido como parámetro
// Devolver el array ordenado resultante
// Tu código:


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  var lenght = array_lenght(array)
  var i = 1
  // el array recibido como parámetro utilizando arreglos
  while (i < lenght) {
    var x = array[i]
    var Y = i -1
    while (Y >= 0 && array [Y] > x) {
      array [Y + 1] = array [Y];
      Y = Y -1
    }
    array [Y+1] = x
    i = i + 1
  }
  // Devolver el array ordenado resultante
  // Tu código:

}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
