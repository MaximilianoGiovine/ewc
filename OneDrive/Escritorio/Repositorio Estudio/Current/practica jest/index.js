const totalFactura = (items) => {
    if(!items.length) {
        throw Error('null')
    }
    let total = 0
    for(let item of items) {
        total += item.quantity * item.price
    }
    return total
}
module.exports = totalFactura