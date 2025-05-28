//function saludar() {
//    console.log('holis',this);
//}
//saludar();


//function miFuncion() {
//    var x = 10 
//    console.log(x);
//}
//miFuncion();

//function b (){
//    console.log('B!')
//};
//function a (){
//    b();
//};
//a();

//var persona = {
//    nombre: 'Juan',
//    saludar: function(){
//        console.log(this.saludar());
//},
//};
//persona.saludar();


// CLOSURES

//function contenedor () {
//    var caja = [];
//
//    return function (item) {
//        caja.push(item);
//        return caja;
//   }
//}

//var miContenedor = contenedor();

//console.log(miContenedor('libro'))
//;

//var persona = {
//    nombre: 'Ignacio',
//    apellido: 'Cenni',
//}
//function saludar() {
//    console.log ('hola, mi nombre es', this.nombre)
//}

//var saludarPersona = saludar.bind(persona);

//saludarPersona();

//saludar.call(persona);

//  REPETIFY
//console.log('hola maxito '.repeat(10))

//function contarNumeros (numero) {
//    for (let i = 0; i<=numero; i++) {
//        console.log(i)
//    }
//}
//contarNumeros(10);

//function factorial (numero) {
//    if (numero === 0 || numero === 1) {
//        return 1;
//    }
//    return numero * factorial(numero - 1);
//}

//console.log(factorial (10));

//function stack () {
//    this.arr = []
//}
//stack.prototype.push = function (value) {
//    this.arr.push(value)
//}
//stack.prototype.pop = function () {
//    this.arr.pop()
//}
//var miStack = new stack();

//console.log(miStack);
//miStack.push(1);
//miStack.push(2);
//miStack.push(3);
//console.log(miStack);

//LINKEDLISTS

//function LinkedList () {
//    this.head = null;
//}

//function node (value) {
//    this.value = value;
//     this.next = null;
//}


//LinkedList.prototype.add = function (value) {
//    var newNode = new node(value);
//    var current = this.head
//    if (current === null) {
//        this.head = newNode
//        return value
//    }
//    while (current.next !== null) {
//        current = current.next;
//    }
//    current.next = newNode
//    return value;
//}

//var miLista = new LinkedList();

//miLista.add(19)
//miLista.add (100)
//console.log(miLista)

function BinarySearchTree (value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

BinarySearchTree.prototype.insert= function (value) {
    var newBST = new BinarySearchTree (value);
    if (value < this.value){
        if (this.left){
            this.left.insert(value);
        } else {
            this.left = newBST
        }
    } else {
        if (value > this.value){
            if (this.right) {
                this.right.insert(value);
            } else {
                this.right = newBST
            }
        }
    }
}

/* eslint-disable no-unused-vars */

function createBST(array) {
    // Tu código aca:
   //paso 1: crear el nuevo arbol binario
    var newBST = new BinarySearchTree()
   //paso 2: acceder al primer valor del array
    let arrayNum = array[0]
    var aumentador = 0
    while (arrayNum <= array.lenght){
   //paso 3: guardar el primer valor del array en el árbol
    newBST.insert(arrayNum)
   //paso 4: pasar al siguiente valor del array
    aumentador = aumentador + 1
    arrayNum = array[aumentador]
    //paso 5: repetir hasta que todo el array este guardado
    }
  }