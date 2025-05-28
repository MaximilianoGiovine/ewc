const { Queue, Node, Stack, LinkedList, BinarySearchTree } = require("./DS.js");

// ---- Linked List ----
//EJERCICIO 1
// Agregar el método orderList al prototipo de LinkedList. Este método deberá ordenar los elementos de nuestra lista enlazada de menor a mayor.
// Ejemplo:
//     Suponiendo que la lista actual es: Head --> [4] --> [5] --> [1]
//     lista.orderList();
//     Ahora la lista quedaría: Head --> [1] --> [4] --> [5]
LinkedList.prototype.orderList = function () {
  // start from the head
  var node = this.head;
  // if the list is empty or has only one node, no need to sort
  if (!node || !node.next) return;
  // bubble-sort-like approach: 
  // compare adjacent nodes, swap if out of order, and reset to head when swapping
  while (node && node.next) {
    if (node.value < node.next.value) {
      // values are in order, move to the next node
      node = node.next;
    } else {
      // out of order, swap values
      var aux1 = node.value;
      node.value = node.next.value;
      node.next.value = aux1;
      // after swapping, start again from the head
      node = this.head;
    }
  }
};
// EJERCICIO 2
// Agregar al prototipo de LinkedList un método reverseLinkedList que invierta el orden de los elementos de la lista.
// Ejemplo:
// let myList = Head --> [1] --> [2] --> [3] --> [4]
// myList.reverseLinkedList()
// myList = Head --> [4] --> [3] --> [2] --> [1]
LinkedList.prototype.reverseLinkedList = function () {
  // Tu código aca:
    // start from the head
    var node = this.head;
    // if the list is empty or has only one node, no need to sort
    if (!node || !node.next) return;
    // bubble-sort-like approach: 
    // compare adjacent nodes, swap if out of order, and reset to head when swapping
    while (node && node.next) {
      if (node.value > node.next.value) {
        // values are in order, move to the next node
        node = node.next;
      } else {
        // out of order, swap values
        var aux1 = node.value;
        node.value = node.next.value;
        node.next.value = aux1;
        // after swapping, start again from the head
        node = this.head;
      }
    }
};


// EJERCICIO 3
// Implementar la función joinLinkedLists que, a partir de dos listas simplemente enlazadas
// del mismo tamaño retorne una nueva lista con los elementos de ambas listas
// Ejemplo:
//    Lista 1: Head --> [2] --> [8] --> [22] --> null
//    Lista 2: Head --> [6] --> [15] --> [4] --> null
//    joinLinkedList(linkedListOne, linkedListTwo)
//    Head --> [2] --> [6] --> [8] --> [15] --> [22] --> [4] --> null
function joinLinkedList(linkedListOne, linkedListTwo) {
  var newLinkedList = new LinkedList();

  var node1 = linkedListOne.head;
  var node2 = linkedListTwo.head;

  // Corrige la condición del bucle
  while (node1 || node2) {
      if (node1) {
          newLinkedList.add(node1.value);
          node1 = node1.next;
      }
      if (node2) {
          newLinkedList.add(node2.value);
          node2 = node2.next;
      }
  }
  
  return newLinkedList;
}

  

// ---- Arboles Binarios ----
// EJERCICIO 4
// Implementar la función searchMin que busque en nuestro arbol binario, el valor minimo.
// Ejemplo:
//             16
//          /      \
//        6         23
//      /  \       /   \
//     2    14    17    31
//      \
//       5
//  Debería retornarnos 2
BinarySearchTree.prototype.searchMin = function () {
// acceder a los valores del arbol binario

// caminar hacia la izquierda buscando al mas chiquito hasta encontrarlo
// buscar el valor mínimo
//1 caminar hacia la izquierda
//2 caminar hasta el null
//3 devolver el numero mas chiquito
// 1 acceder al arbol binario
var ArbolMovil = this
// repetir hasta que llegue a null
var arbolResultado = null
while (ArbolMovil !== null) {
  console.log(arbolResultado, ArbolMovil)
  // 2 mover hacia la izquierda       crear una variable que equivalga al primer valor del arbol y despues redefinir la variable con el siguiente nodo
  arbolResultado = ArbolMovil.value
  if (ArbolMovil.left == null){
    return arbolResultado
  } else {
    ArbolMovil = ArbolMovil.left
  }
}
// devolver el numero anterior al null
}



// EJERCICIO 5
// Implementar la función createBST para que a partir de un array recibido como parametro
// genere un BinarySearchTree.
// Ejemplo:
//    - Array[16,6,23,2,17,31,14,5];
//             16
//          /      \
//        6         23
//      /  \       /   \
//     2    14    17    31
//      \
//       5
function createBST(array) {
  // Tu código aca:
  // paso 1: crear el nuevo arbol binario
  if (array.length === 0) {
    return null
  }
  var newBST = new BinarySearchTree(array[0]);
  // paso 2: recorrer el array
  for (let i = 1; i < array.length; i++) {
    // paso 3: insertar cada valor del array en el árbol
    newBST.insert(array[i]);
  }
  
  // paso 4: retornar el árbol
  return newBST;
} 

//Closures -----
// EJERCICIO 6
// Implementar la función passport que recibe como parámetro:
//  - Una edad mínima para que las personas puedan ingresar a un país
//  - El país en cuestión
// La función passport retorna una función isAllowed, la cual recibirá un arreglo de personas que quieren ingresar al país, y retornará un nuevo arreglo con los admitidos (aquellos que cumplan con la edad requerida).
  //dos listas que tiene esta funcion:
  //                      1: recibe una lista de los que quieren entrar al país
  //                      2: devuelve a los que estan en condiciones de entrar
  //cómo hacerlo
  //            2 criterios
  //                        1- la edad mínima
  //                        2- el país al que van
  // si no cumplen algun criterio
  // tiene que retornar "false"
  // si cumple tiene que retornar la lista con los que cumplen
  
  // seguir recorriendo hasta que no queden datos
  // hacer la lista de los que tienen permitido entrar
  function passport(minAge, country) {
    if (minAge < 18) {
      return false;
    }
  
    let permitidos = [];
    
    function isAllowed(array) {
      // Verificar si el array está vacío
      if (array.length === 0) {
        return [];
      }
      
      // Recorrer el array
      for (let i = 0; i < array.length; i++) {
        let persona = array[i];
        let edadDelArray = persona.age;
        let paisDelArray = persona.allowed;
        
        // Evaluar si cumple con los criterios
        if (edadDelArray >= minAge && paisDelArray.includes(country)) {
          permitidos.push(persona);
        }
      }
      
      // Retornar el array de permitidos
      return permitidos.length > 0 ? permitidos : false;
    }
    
    return isAllowed;
  }  
// ---- Recursión ----
// EJERCICIO 7
// La función countDeep recibe por parámetro un arreglo que contiene números y/o arreglos (estos últimos contienen, a su vez, más números y/o arreglos), y retorna la cantidad de arreglos que hay en total, incluyendo al padre.
// Ejemplo:
// countDeep( [ 1, 2, 3, [ 4, [ 5, 6 ] ], 7, [ 8 ], 9] ) ----> Debería retornar 4
function countDeep(arr) {
  //inicio el contador
  let count = 1
  //recorro el array
  arr.forEach(elemento => {
    if(Array.isArray(elemento)) {
      count+= countDeep(elemento)
    }
  });
  return count;
}


// EJERCICIO 8
// Implementar la función isAncestor: debe determinar si dado dos nombres de personas las mismas
// son parientes o no (La primera debe ser ancestro de la segunda). La función recibira un objeto
// que va a representar sólo la parte femenina del "arbol genealogico" familiar y será de la siguiente forma:
// const genealogyTree = {
//   "Mona Simpson": [],
//   "Marge Simpson": ["Lisa Simpson", "Maggie Simpson"],
//   "Jacqueline Bouvier": [ "Patty Bouvier", "Marge Simpson", "Selma Bouvier"],
//   "Patty Bouvier": [],
//   "Selma Bouvier": ["Ling Bouvier"],
//   "Edwina": ["Abigail Simpson"],
//   "Lisa Simpson": [],
//   "Maggie Simpson": [],
//   "Ling Bouvier": []
// }
// Ejemplo:
//  - Caso que devuelve true --> isAncestor(genealogyTree, "Jacqueline Bouvier", "Maggie Simpson")
//  - Caso que devuelve false --> isAncestor(genealogyTree, "Jacqueline Bouvier", "Abigail Simpson")
//  [Observar los tests para otros casos]
var isAncestor = function (genealogyTree, ancestor, descendant) {
  // Tu código aca:
  if(ancestor === descendant) {
    return true;
  }
  const descendientes = genealogyTree [ancestor];
  if (descendientes.includes(descendant)) {
    return true
  }
  for (let i=0 ; i< descendientes.length; i++) {
    if (isAncestor(genealogyTree, descendientes[i], descendant)) {
      return true
    }
  }
  return false;
}

// ---- Queue ----
// EJERCICIO 9
// Implementar la función cardGame: a partir de dos Queues que va a recibir como paráemtro que
// van a representar mazos de cartas de dos jugadores debemos determinar quien va a ser el ganador
// de este juego que va a tener la siguiente dinámica:
// - Los jugadores tendrán que defender su "Castillo" que contiene un total de 100 puntos de resistencia
// - Cada carta tendrá puntos de ataque (attack) y puntos de defensa (defense)
// - Ambos jugadores van a sacar las dos primeras cartas de su mazo
//      * La primera carta será su carta asignada para atacar
//      * La segunda carta será su carta asignada para defender
// - La carta asignada para atacar del jugador uno se enfrentará contra la carta asignada para defender
//   del jugador dos y viceversa. Si el ataque supera los puntos de defensa el daño sobrante será aplicado
//   sobre el castillo.
// - El juego finaliza cuando alguno de los dos castillos se quede sin puntos de resistencia o cuando los mazos
//   se acaben. En este último caso ganará aquel jugador que tenga mayor cantidad de puntos de resistencia
//   restantes en su castillo.
// La función deberá devolver un string indicando al ganador: 'PLAYER ONE' o 'PLAYER TWO' (Respetar mayúsculas) o
// 'TIE' en el caso de empate
// NOTA: Ambos mazos contienen la misma cantidad de cartas
//
// Ejemplo:
// Los jugadores levantan 2 cartas cada uno.
// La primera carta del jugador uno va a atacar a la segunda carta del jugador dos
// La primer carta del jugador dos va a atacar a la segunda carta del jugador uno
//
// Primer carta del jugador 1 (ATAQUE) vs Segunda carta del jugador 2 (DEFENSA):
// {attack: 5, defense: 5} vs {attack: 5, defense: 26}
// Ataque 5 vs Defensa 20 --> 5 no supera 20 --> No hay daño sobre el castillo
//
// Primer carta del jugador 2 (ATAQUE) vs Segunda carta del jugador 1 (DEFENSA):
// {attack: 20, defense: 26} vs {attack: 15, defense: 10}
// Ataque 20 vs Defensa 10 --> 20 supera a 10 --> Como hay 10 puntos de diferencia esa cantidad de daño es aplicada
// al castillo del jugador 1
//
// Una vez terminada la ronda, se procede a repetir lo mismo con las siguientes 2 cartas de cada jugaodr hasta
// finalizar el juego.
function cardGame(playerOneCards, playerTwoCards) {
 //iniciar los puntos de los castillos
  let castleOne = 100
  let castleTwo = 100 
 //repartir las cartas de ataque y defensa
  while(playerOneCards.size() > 0 && playerTwoCards.size () > 0){
    let attackOne = playerOneCards.dequeue()
    let defenseOne = playerOneCards.dequeue ()
    let attackTwo = playerTwoCards.dequeue ()
    let defenseTwo = playerTwoCards.dequeue()

    //comparar los valores de los ataques
    if(attackOne.attack > defenseTwo.defense) {
      castleTwo-= (attackOne.attack - defenseTwo.defense)
    }
    if(attackTwo.attack >defenseOne.defense){
      castleOne -= (attackTwo.attack - defenseOne.defense)
    }
    //si el castillo lega a 0 gana el que queda
    if (castleOne <= 0) return 'PLAYER TWO'
    if (castleTwo <= 0) return 'PLAYER ONE'
  }
  if (castleOne > castleTwo) return 'PLAYER ONE'
  if (castleTwo > castleOne) return 'PLAYER TWO'
  //determinar el empate
  return 'TIE'
}



// ---- Algoritmos ----
// EJERCICIO 10
// Ordená un arreglo de objetos usando un bubble sort pero con algunas particularidades.
// Además del arreglo a ordenar la función va a recibir como parámetro una función
// que va a retornar 1 sí no hay que ordenarlo y -1 en el caso de que si haya que ordenarlo.
// Ejemplo:
// var array = [
//   {name: 'Cristian', age: 26, height: 1.85},
//   {name: 'Dylan', age: 30, height: 1.75},
//   {name: 'Joaquin', age: 25, height: 1.77},
// ]
// specialSort(array, swapFunction) --> Retornaría el siguiente array:
// [
//   {name: 'Cristian', age: 26, height: 1.77},
//   {name: 'Joaquin', age: 25, height: 1.85},
//   {name: 'Dylan', age: 30, height: 1.75},
// ]
function specialSort(array, swapFunction) {
  //acceder al array
  let n = array.length
  //recorrer el array
  for (i = 0; i < n; i++) {
      for (let j=0; j < n - i - 1; j++){
          //comparar los valores
          if(swapFunction(array[j], array[j + 1]) === -1){
              //ordenar si es necesario
              let rec = array [j]
              array[j] = array[j+1]
              array[j+1] = rec
          }
      }
  }
  //pasar a los siguientes valores del array
  return array
}


module.exports = {
  passport,
  LinkedList,
  joinLinkedList,
  BinarySearchTree,
  countDeep,
  specialSort,
  createBST,
  isAncestor,
  cardGame,
  Queue, 

}
