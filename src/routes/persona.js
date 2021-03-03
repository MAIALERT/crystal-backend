const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/agregar',async(req,res)=>{
    //res.send('Agregar Proveedor');

    //Listar combo de tipo de documento
    const personaDocumento = await pool.query('select * from tipodocumento order by nombre');
    
    //Listar combo genero
    const Personagenero = await pool.query('select * from genero order by nombre');

    //Listar Tabla
    const persona = await pool.query('select * from viewpersona');

    res.render('persona/frmPersona',{personaDocumento,Personagenero,persona});
 });

 //Insertar NuevaPersona
router.post('/agregar',async(req,res)=>{
    
    const {nombre,apellido,tipoDocumentoID,numeroDocumento,fechaNacimiento,generoID,correoElectronico,telefono,direccion} = req.body;

    const nuevaPersona = {nombre,apellido,tipoDocumentoID,numeroDocumento,fechaNacimiento,generoID,correoElectronico,telefono,direccion};
    await pool.query('insert into persona set ?',[nuevaPersona]); 
   
   //Redirecciono vista
   res.redirect('/persona/agregar');
});

//Eliminar persona con cambio de estado --(1 acivo,0 inactivo)
router.get('/delete/:ID',async(req, res)=>{
    //Recibo parametro
    const {ID} = req.params;
    //Sentencia SQL   
    await pool.query('update persona  SET estado = 0 WHERE id=?',[ID]);
    //Redirecciono
    res.redirect('/persona/agregar');

});

//Limpiar Campos del Formulario
router.post('/agregar',async(req,res)=>{
   
    nombre = "";
    apellido = "";
    tipoDocumentoID = "";
    numeroDocumento = "";
    fechaNacimiento = "";
    generoID = "";
    telefono = "";
    correoElectronico = "";
    direccion = "";
   //Redirecciono vista
   res.redirect('/persona/agregar');
});
module.exports = router;