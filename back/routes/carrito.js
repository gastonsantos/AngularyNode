const express = require('express');
const router = express.Router();

const {getCarrito, addCarrito, sumProdCarrito, cantProdCarrito, deleteCarrito } = require('../controllers/carrito.js');

router.get('/CantgetCarrito/:id', cantProdCarrito);
//router.get('/getCarrito/:id', getCarrito); este es el q sirve
router.post('/getCarrito', getCarrito);
router.post('/addCarrito', addCarrito);
router.post('/sumProdCarrito', sumProdCarrito);
router.delete('/deleteCarrito/:id', deleteCarrito);

module.exports = router;