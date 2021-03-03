const express = require('express');
const router = express.Router();
const categoriasController = require('./controllers/categoriasController');
const productosController = require('./controllers/productosController');


router.get('/categorias/', categoriasController.get);
router.post('/categorias/', categoriasController.post);
router.put('/categorias/:id', categoriasController.put);
router.delete('/categorias/:id', categoriasController.delete);

router.get('/productos/', productosController.get);
router.post('/productos/', productosController.post);
router.put('/productos/:id', productosController.put);
router.delete('/productos/:id', productosController.delete);

module.exports = router;
