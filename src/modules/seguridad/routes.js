const express = require('express');
const router = express.Router();
const rolesController = require('./controllers/rolesController');
const personasController = require('./controllers/personasController');
const usuariosController = require('./controllers/usuariosController');


router.get('/roles/', rolesController.get);
router.post('/roles/', rolesController.post);
router.put('/roles/:id', rolesController.put);
router.delete('/roles/:id', rolesController.delete);

router.get('/personas/', personasController.get);
router.post('/personas/', personasController.post);
router.put('/personas/:id', personasController.put);
router.delete('/personas/:id', personasController.delete);

router.get('/usuarios/', usuariosController.get);
router.post('/usuarios/', usuariosController.post);
router.put('/usuarios/:id', usuariosController.put);
router.delete('/usuarios/:id', usuariosController.delete);

module.exports = router;
