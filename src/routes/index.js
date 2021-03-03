const express = require('express');
const router = express.Router();

//creación de nuestra primera ruta
router.get('/',(req,res)=>{
    res.send('holitassss');
});
//exportar
module.exports=router;