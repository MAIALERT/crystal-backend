const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/agregar',async(req,res)=>{
    //res.send('Agregar Proveedor');

    //Listar combo de tipo de documento
    const proveedorDocumento = await pool.query('select * from tipodocumento order by nombre');

     //Listar Tabla 
    const Proveedor = await pool.query('select * from viewProveedor');

    res.render('producto/frmProveedor',{proveedorDocumento,Proveedor});
 });

//Insertar NuevoProveedor
router.post('/agregar',async(req,res)=>{
   
    const {razonSocial,tipodocumentoID,numeroDocumento,direccion,telefono,correoElectronico} = req.body;

    const nuevoProveedor = {razonSocial,tipodocumentoID,numeroDocumento,direccion,telefono,correoElectronico};
    await pool.query('insert into proveedor set ?',[nuevoProveedor]); 
   
   //Redirecciono vista
   res.redirect('/proveedor/agregar');
});

//Eliminar proveedor con cambio de estado --(1 acivo,0 inactivo)
router.get('/delete/:ID',async(req, res)=>{
  //Recibo parametro
  const {ID} = req.params;
  //Sentencia SQL   
  await pool.query('update proveedor SET estado = 0 WHERE id=?',[ID]);
  //Redirecciono
  res.redirect('/proveedor/agregar');

});

//Limpiar Campos del Formulario
router.post('/agregar',async(req,res)=>{

  razonSocial = "";
  tipodocumentoID = "";
  numeroDocumento = "";
  direccion = "";
  telefono = "";
  correoElectronico= "";
 //Redirecciono vista
 res.redirect('/proveedor/agregar');
});
module.exports = router;

