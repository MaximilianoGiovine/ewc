const txtop1 = document.getElementById('op1')
const txtop2 = document.getElementById('operación')
const txtop3 = document.getElementById('op2')
const butsbm = document.getElementById('calcular')
const rslt = document.getElementById ('resultado')

function calcular(){
    const operador = txtop2.value
    const op1 = parseFloat (txtop1.value)
    const op2 = parseFloat (txtop3.value)
    if ((operador == '+' ||
        operador == '-' || 
        operador == '*' ||
        operador == '/' ) &&
        isNaN (op1) == false &&
        isNaN (op2) == false){
        switch (operador){
            case '+':
                resultado = op1 + op2
                break;
            case '-':
                resultado = op1 - op2
                break;
            case '*':
                resultado = op1 * op2
                break;
            case '/':
                resultado = op1 / op2
                break;
        }
        rslt.innerText = '= ' + resultado
    }else {
        rslt.innerText = 'calculo imposible'

    }
    }
