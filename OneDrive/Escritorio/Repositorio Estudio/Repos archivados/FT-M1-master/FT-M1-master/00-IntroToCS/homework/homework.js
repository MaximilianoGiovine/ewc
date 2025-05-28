'use strict'

function BinarioADecimal(num) {
  //1. separar y dar vuelta
  const arr = num.split('')
  const inver = arr.reverse()
  //2. elevar elementos del array
  const transfr = inver.map(function(valor, index){
      return 2 ** index * valor

  })

  //3. sumar y devolver resultados
  return transfr.reduce(function(resultado, numero, i){
      resultado = resultado + numero
      return resultado
  })


}

function DecimalABinario(num) {
  
  // return num.toString(2) ||

  let arr = []
  let modificado = num

    while(modificado > 1){   
    // 1. pushear resto
            arr.push(modificado % 2)

    // 2. dividir a modificado para prox push
        modificado = modificado/2

    // 3. eliminar el resto redondeando para abajo
        modificado = Math.floor(modificado)
    }

    arr.push(1)

    //concatenar el array
    let reversed = arr.reverse()
    let joined = reversed.join('')
    return joined
  
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}