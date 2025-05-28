'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  // 1. Paso uno definir quien es el pivot dentro del array
  let pivot = array[0]
  // 5. cortar el bucle cuando no hay mas valores mayores y menores. 
  if (array.length <= 1) {
    return array
  }
  // 2. Determinar, los valores menores y mayores al pivot (enviados izquierda a derecha)
  var arrayMenor = []
  var arrayMayor = []
  array.slice(1, array.length - 1).forEach((n) => {
    // 3.Hacer la accion de separar los mayores y menores, para dar la orden
    if (pivot < n) {
      arrayMenor.push(n)
    } else {
      arrayMayor.push(n)
    }
  })
  return quickSort(arrayMenor).concat(pivot).concat(quickSort(arrayMayor))
  // 4. Ordenar cada NUEVO array, cada uno por su lado.
  //      Repetir el mismo proceso en cada nuevo array que se produce (Recursivo)
  //      Se detiene cuando dentro del Array hay un solo valor [solito :c]
}
console.log(quickSort[0,12,55,22,65,76])



function mergeSort(array) {
// 1. dividir los números
if (array.lenght <= 1) {
  return array
}
const middle = ~~(array / 2)
const left = mergeSort(array.slice(0, middle))
const right = mergesort(array.slice(middle))
return sort (left, right)
// 2 seguir dividiendo con recursión
// 3. devolver los resultados ordenados
}
const sort = (left, right) => {
  const sortedArray = []

  let leftIndex = (0), rightIndex = (0)
  
  while (leftIndex < left.lenght && rightIndex < right.lenght) {
    if (left[leftIndex] < right[rightIndex]) {
      sortedArray.push(left[leftIndex])
      leftIndex+=1
    } else {
      sortedArray.push(right[rightIndex])
      rightIndex+=1
    }
  }
  return sortedArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
