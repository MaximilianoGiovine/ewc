'use strict'
// Las funciones nFactoria y nFibonacci deben resolverlas
// usando recursión. Una vez realizadas de esa forma pueden probar hacerlas
// de forma iterativa pero esto último no es obligatorio.
// devolvé el factorial de n (n!)
// ej:
// el factorial de 3 es 6 (3 * 2 * 1)
function Factorial (n) {
  if (n === 0 || n === 1) {
    return 1
  }
    return n * Factorial(n - 1)
}
console.log(Factorial (90))


// Secuencia de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…
// Retorna el enésimo numero de la serie
// nFibonacci(0) // 0  // el elemento 0 es cero
// nFibonacci(1) // 1 // el elemento 1 es 1
// nFibonacci(6) // 1 // el elemento 6 es 8
function fibonacci(n) {
  return Array.from({ length: n }).reduce((acc, _, i) => {
    if (i === 0 || i === 1) {
      acc.push(i);
    } else {
      acc.push(acc[i - 1] + acc[i - 2]);
    }
    return acc;
  }, [])
}

console.log(fibonacci(10)); 
// Para esta parte no es necesario utilizar recursión.

function Queue(n) {
  // Implementa la clase Queue que debe contener los siguientes métodos:
  let Lista = []
  // enqueue: Agrega un valor a la queue. Respeta el orden existente.
  let enqueue = function () {
    Lista.push(n)
  }
  // dequeue: Remueve un valor de la queue. Obedece a FIFO y respeta el underflow (devuelve undefined cuando la queue tiene size cero, o sea, cuando no tiene ningún elemento).
  let dequeue = function () {
    if (Lista[0] === n) {
      Lista.pop(n)
    } else {
      return undefined
    }
  }
  // size: Devuelve el número de elementos que contiene la queue.
  let size = Lista.size()
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
