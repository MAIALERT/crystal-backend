const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/agregar',async(req,res)=>{
    //res.send('Agregar Proveedor');

   //Listando combo Categoria
   const categoria = await pool.query('select * from categoria where estado = 1 order by nombre');

   //Listar tabla productos
   const producto = await pool.query('select * from viewProducto');

    res.render('producto/frmProducto',{categoria,producto});
 });
 
//Insertar NuevoProducto
  router.post('/agregar',async(req,res)=>{
   
    const {nombre,descripcion,categoriaID,valorUnidadCompra,valorUnidadCliente} = req.body;

    const NuevoProducto = {nombre,descripcion,categoriaID,valorUnidadCompra,valorUnidadCliente};
    await pool.query('insert into producto set ?',[NuevoProducto]); 
   
   //Redirecciono vista
   res.redirect('/producto/agregar');
});
//Eliminar producto con cambio de estado --(1 acivo,0 inactivo)
router.get('/delete/:ID',async(req, res)=>{
    //Recibo parametro
    const {ID} = req.params;
    //Sentencia SQL   
    await pool.query('update producto SET estado = 0 WHERE id=?',[ID]);
    //Redirecciono
    res.redirect('/producto/agregar');
  
  });

//Limpiar Campos
router.post('/agregar',async(req,res)=>{

  nombre = "";
  descripcion = "";
  categoriaID = "";
  valorUnidadCompra = "";
  valorUnidadCliente = "";
  //Redirecciono vista
  res.redirect('/producto/agregar');
});

module.exports = router;
  



