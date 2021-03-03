const express = require('express');
const router = express.Router();
const pool = require('../database');

//Consultar Marca
router.get('/agregar',async(req,res)=>{
     
    //listar tabla
    const categoria = await pool.query('select * from categoria where estado = 1');

    res.render('producto/frmCategoria',{categoria}); 
 });

//Insertar Nueva Marca
router.post('/agregar',async(req,res)=>{

    const {nombre,descripcion} = req.body;

    const nuevaCategoria = {nombre,descripcion};
    await pool.query('insert into categoria set ?',[nuevaCategoria]); 

    //Redirecciono vista
    res.redirect('/categoria/agregar');
});

//Eliminar marca con cambio de estado --(1 acivo,0 inactivo)
router.get('/delete/:ID',async(req, res)=>{
    //Recibo parametro
    const {ID} = req.params;
    //Sentencia SQL   
    await pool.query('update categoria  SET estado = 0 WHERE id=?',[ID]);
    //Redirecciono
    res.redirect('/categoria/agregar');

});

//Insertar Actualización
router.post('/update/:ID', async (req, res) => {
    //recibo parametro id para actualizar datos
    const {
        ID
    } = req.params;
    //obtengo lo que sea editado en los campos del formulario
    const {
        nombre,
        descripcion
    } = req.body;
    //guardo lo valores de los campos en un objeto
    const updateRol = {
        nombre,
        descripcion
    };

    //console.log(rolActualizado);
    const rolID = await pool.query('update categoria set ? where id = ?', [req.body, ID]);

    //Redirecciono vista
    res.redirect('/categoria/agregar');
});

//Limpiar Campos de Formulario
router.post('/agregar',async(req,res)=>{

    descripcion = "";
    nombre = "";
    //Redirecciono vista
    res.redirect('/categoria/agregar');
});
module.exports = router;