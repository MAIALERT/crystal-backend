const express = require('express');
const router = express.Router();
const rolesController = require('./controllers/rolesController');

router.get('/', rolesController.get);
router.post('/', rolesController.post);
router.put('/:id', rolesController.put);
router.delete('/:id', rolesController.delete);

module.exports = router;
