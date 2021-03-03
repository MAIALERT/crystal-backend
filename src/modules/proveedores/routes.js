const express = require('express');
const router = express.Router();
const proveedoresController = require('./controllers/proveedoresController');



router.get('/proveedores/', proveedoresController.get);
router.post('/proveedores/', proveedoresController.post);
router.put('/proveedores/:id', proveedoresController.put);
router.delete('/proveedores/:id', proveedoresController.delete);

module.exports = router;
