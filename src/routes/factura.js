const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/agregar',(req,res)=>{
    //res.send('Agregar Proveedor');
    res.render('factura/frmFactura');
 });
module.exports = router;