const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/add',async(req,res)=>{
   // res.send('oh yeah');
   const usuario = await pool.query('select * from usuario');
   res.render('links/add',{usuario});
});

router.post('/add',async(req,res)=>{
   //res.send('oh yeah');
   console.log(req.body);

   const {usuario,contrasena} = req.body;//tal cua estan los nommbres de los campos en la tabla DB
   const nuevoUsuario = {usuario,contrasena};

   await pool.query('insert into usuario set ?',[nuevoUsuario]);
   //redirecciono la vista
   res.redirect('/links/add');
});

module.exports = router;