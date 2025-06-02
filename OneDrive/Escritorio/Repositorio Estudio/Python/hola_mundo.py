print("hola mundo")

edad = 18

frutas = ['manzana', 'banana', 'naranja']

for fruta in frutas:
    print(fruta)

contador = 0

while contador < 50:
    print(contador)
    contador += 1


def saludar():
    print('hola a toodos')


saludar()

def saludo(nombre):
    print(f'hola {nombre}')

saludo('maxi') #hola hoola holaaaaaaaa esto es un comentarioooo

def suma (a, b):
    return a + b

print(suma(15, 50))

"""
que comentarios mas sencillos de hacer, los amo
"""

nombre = input('ingresar nombre: ')
edad = int(input('ingresar edad: '))

if edad <18:
    print(f'hola {nombre}, eres menor de edad')
elif edad == 18:
    print(f'hola {nombre}, tienes 18 años')
else:
    print(f'hola {nombre}, eres mayor de edad')

import math

print(math.pi)

(not True) or (False and True)