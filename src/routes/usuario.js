const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/agregar',async(req,res)=>{

     //Listar combo rol
     const rol = await pool.query('select * from rol where estado = 1 order by nombre');
     
     //Listar combo de Persona
     const persona = await pool.query('select * from persona where estado = 1 order by nombre');
     
     //Listar Tabla 
     const usuario = await pool.query('select * from viewUsuario');

    res.render('usuario/frmUsuario',{persona,rol,usuario});
 });

 //Insertar nuevo usuario
 router.post('/agregar',async(req,res)=>{
    
    const {usuario,contrasena,rolID,personaID} = req.body;

    const nuevoUsuario = {usuario,contrasena,rolID,personaID};
    await pool.query('insert into usuario set ?',[nuevoUsuario]); 
   
   //Redirecciono vista
   res.redirect('/usuario/agregar');
});

//Eliminar usuario con cambio de estado --(1 acivo,0 inactivo)
router.get('/delete/:ID',async(req, res)=>{
   //Recibo parametro
   const {ID} = req.params;
   //Sentencia SQL   
   await pool.query('update usuario  SET estado = 0 WHERE id=?',[ID]);
   //Redirecciono
   res.redirect('/usuario/agregar');

});

/* //Preparar los datos por ID seleccionado para cargar los campos del formulario y asi inciar con el proceso de actualización
router.get('/update/:ID', async (req, res) => {

   //Recibo parametro
   const {
       ID
   } = req.params;

   //consulto registro especifico 
   const UsuarioEditar = await pool.query('select * from usuarios inner join rol on rol.ID = usuarios.rolID where usuarios.estado = 1 and usuarios.ID=?', [ID]);

   //Solucionar esta linea para no repetir -HACER UTILIDAD DE LA RUTA AGREGAR
   const usuario = await pool.query('select * from viewUsuario');

   res.redirect('/usuario/agregar');

   res.render('usuario/frmUsuario', {
      UsuarioEditar: UsuarioEditar[0],
      usuario
   });
}); */


//Limpiar Campos de Formulario
router.post('/agregar',async(req,res)=>{

   usuario = "";
   contrasena = "";
   rolID = "";
   clienteID = "";
  //Redirecciono vista
  res.redirect('/usuario/agregar');
});
module.exports = router;
