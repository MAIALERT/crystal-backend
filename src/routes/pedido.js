const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/agregar',async(req,res)=>{
    //res.send('Agregar Proveedor');
    
    //Listar combo producto
    const producto = await pool.query('select * from producto where estado = 1 order by nombre');

    //Listar combo proveedor
    const proveedor = await pool.query('select * from proveedor where estado = 1 order by razonSocial');

    //Listar tabla productoproveedor
    const productoproveedor = await pool.query('select * from viewPedido');


    res.render('producto/frmPedido',{producto,proveedor,productoproveedor});
 });

 //Insertar NuevoPedido
router.post('/agregar',async(req,res)=>{
    
    const {productoID,proveedorID,cantidadProducto} = req.body;

    const NuevoPedido = {productoID,proveedorID,cantidadProducto};
    await pool.query('insert into productoproveedor set ?',[NuevoPedido]); 
   
   //Redirecciono vista
   res.redirect('/pedido/agregar');
});

//Eliminar pedido con cambio de estado --(1 acivo,0 inactivo)
router.get('/delete/:ID',async(req, res)=>{
    //Recibo parametro
    const {ID} = req.params;
    //Sentencia SQL   
    await pool.query('update productoproveedor  SET estado = 0 WHERE id=?',[ID]);
    //Redirecciono
    res.redirect('/pedido/agregar');

});

//Limpiar Campos del Formulario
router.post('/agregar',async(req,res)=>{

   productoID = "";
   proveedorID = "";
   cantidadProducto = "";
   //Redirecciono vista
   res.redirect('/pedido/agregar');
});


module.exports = router;