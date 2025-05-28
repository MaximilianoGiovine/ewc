
# Ejercicios

## JavaScript

### Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x); //10
  console.log(a); //5
  var f = function(a, b, c) {
    b = a;
    console.log(b); //5
    b = c;
    var x = 5;
  }
  f(a,b,c); // 5, 5, 5
  console.log(b); // 5
}
c(8,9,10);
console.log(b); //10
console.log(x); //1
```

```javascript
console.log(bar); //und
console.log(baz); //und
foo(); //und
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); //false
```

```javascript
var instructor = "Tony";
console.log(instructor); //tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);
   }
})();
console.log(instructor); //Tony
```
```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);
    console.log(pm);
}
console.log(instructor); //false
console.log(pm); //false
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 6/3
"2" * "3" // 63
4 + 5 + "px" // 9px
"$" + 4 + 5 // $9
"4" - 2 // 4-2
"4px" - 2 // 4px-2
7 / 0 // 1
{}[0] //0
parseInt("09") // 09
5 && 2 // 52
2 && 5 // 25
5 || 0 // 5 o 0
0 || 5 // 0 o 5
[3]+[3]-[10] // -4
3>2>1 // 3, 2, 1
[] == ![] //?
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test(); //va a devolver en consola und, ya que los console.log están ántes de la definicion de valores de tanto la variable como de la función, para devolver valores debería de estar antes todo aquello que posea valores asignados
``` 

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false); // retornará el valor snack, ya que la condición no es "friskies" sino que es "meow mix", además de que cuando se invoca el código dice que será false
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test()); // primero devolverá el console log que está primero, ese dará como resultado "Aurelio de Rosa", el segundo dará como resultado nuevamente "aurelo de Rosa" ya que el código prioriza el L.E. de donde se encuentra
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing(); //primero se mostrará el primer console.log y luego uno por uno ser irán ejecutando en orden de lineas, ya que JS es un lenguaje de código sincrónico, hasta que el código anterior no se reproduzca, no habrá un codigo siguiente
```
