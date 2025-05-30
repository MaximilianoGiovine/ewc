const express = require('express');
const { register, login } = require('../controllers');
const router = express.Router();

router.post('/register', register);

router.post('/auth/login', login);


router.get('/', (req, res) => {
console.log('hola, funciono');
res.send('GET recibido');
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