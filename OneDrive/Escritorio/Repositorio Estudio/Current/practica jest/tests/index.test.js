//calcular el total de una facturas con un solo item
//calcular el total en una factura con varios items
//manejar correctamente una lista vacia de items
const totalFactura = require('../index')

describe('esta es una prueba de test para calcular facturas', ()=> {
    it('debe calcular el total de las facturas con un solo item', () =>{
        expect(totalFactura([{name: 'producto A', price: 10, quantity: 2}])).toEqual(20)
    })
    it('debe calcular el total de una factura con varios items', () =>{
        expect(totalFactura([
            {name: 'toddy', price: 50, quantity: 20},
            {name: 'mayoliva', price: 200, quantity: 100},
            {name: 'ayudin', price: 950, quantity: 200}
        ])).toEqual(1000 + 20000 + 190000)
    })
    it('debe retornar null ante una lista vacía sin items', () =>{
        expect(() => totalFactura([])).toThrowError('null')
    })
})
//[{name: 'producto A', price: 10, quantity: 2}]