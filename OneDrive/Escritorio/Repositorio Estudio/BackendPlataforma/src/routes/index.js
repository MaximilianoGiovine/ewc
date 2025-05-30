const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('hola, funciono');
    res.send('GET recibido');
});

router.post('/', (req, res) => {
    console.log('hola, funciono con post');
    res.send('POST recibido');
});

router.put('/', (req, res) => {
    console.log('hola, funciono con put');
    res.send('PUT recibido');
});

router.delete('/', (req, res) => {
    console.log('hola, funciono con delete');
    res.send('DELETE recibido');
});

module.exports = router;