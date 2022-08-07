const { verify } = require('crypto');
const express = require('express');
const router = express.Router();




const { test, registrer, logout, loggearse} = require('../controllers/usuarios.js');


router.post('/registrer', registrer);
router.post('/loggearse', loggearse);
router.get('/logout', logout);
router.post('/test', test ); 
module.exports = router; 