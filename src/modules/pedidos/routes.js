const express = require('express');
const router = express.Router();
const pedidosProveedoresControllers = require('./controllers/pedidosProveedoresControllers');
const pedidosClientesControllers = require('./controllers/pedidosClientesControllers');


router.get('/pedidosProveedores/', pedidosProveedoresControllers.get);
router.post('/pedidosProveedores/', pedidosProveedoresControllers.post);
router.put('/pedidosProveedores/:id', pedidosProveedoresControllers.put);
router.delete('/pedidosProveedores/:id', pedidosProveedoresControllers.delete);

router.get('/pedidosClientes/', pedidosClientesControllers.get);
router.post('/pedidosClientes/', pedidosClientesControllers.post);
router.put('/pedidosClientes/:id', pedidosClientesControllers.put);
router.delete('/pedidosClientes/:id', pedidosClientesControllers.delete);

module.exports = router;
