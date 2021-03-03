const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/', async (req, res)=>{
    const rol = await pool.query('select * from rol where estado = 1');
    res.json(rol);
});

router.post('/', async (req, res)=>{
    // Validar los parametros
    const datos = req.body;
    const resultado = await pool.query('insert into rol set ?', [datos]);

    res.json({
        error: false,
        mensaje: 'El rol se creo correctamente',
        data: []
    });

    // Mensaje, Codigo de estado HTML [200, 201, 404, 422, 500]
});

router.put('/:id', async (req, res)=>{
    const id = req.params.id;
    const datos = req.body;
    
    await pool.query('update rol set ? where id = ?', [datos, id]);

    res.json({
        error: false,
        mensaje: 'El rol se actualizo correctamente',
        data: []
    });

    // Mensaje, Codigo de estado HTML [200, 201, 404, 422, 500]
});

router.delete('/:id', async (req, res)=>{
    //Recibo parametro
    const id = req.params.id;
    const usuario = await pool.query('update rol  SET estado = 0 WHERE ID=?', [id]);

    res.json({
        error: false,
        mensaje: 'El rol se elimino correctamente',
        data: []
    });

    // Mensaje, Codigo de estado HTML [200, 201, 404, 422, 500]
});

module.exports = router;

// //Consultar  rol
// router.get('/agregar', async (req, res) => {

//     const rol = await pool.query('select * from rol where estado = 1');

//     res.render('usuario/frmRol', {
//         rol
//     });
// });

// //Insertar Nuevo Rol
// router.post('/agregar', async (req, res) => {
//     //res.send('oh yeah');
//     const {
//         nombre,
//         descripcion
//     } = req.body;

//     const nuevoRol = {
//         nombre,
//         descripcion
//     };
//     await pool.query('insert into rol set ?', [nuevoRol]);

//     //Redirecciono vista
//     res.redirect('/rol/agregar');
// });


// //Eliminar rol con cambio de estado --(1 acivo,0 inactivo)
// router.get('/delete/:ID', async (req, res) => {
//     //Recibo parametro
//     const {
//         ID
//     } = req.params;
//     //Sentencia SQL
//     //const usuario = await pool.query('delete from rol where ID=?',[ID]);

//     const usuario = await pool.query('update rol  SET estado = 0 WHERE ID=?', [ID]);
//     //Redirecciono
//     res.redirect('/rol/agregar');

// });



// /* //Preparar los datos por ID seleccionado para cargar los campos del formulario y asi inciar con el proceso de actualización
// router.get('/update/:ID', async (req, res) => {

//     //Recibo parametro
//     const {
//         ID
//     } = req.params;

//     //consulto registro especifico 
//     const rolEditar = await pool.query('select * from rol where estado = 1 and ID=?', [ID]);

//     res.render('usuario/modificarRol', {
//         rolEditar
//     });
// });
//  */

// //Insertar Actualización
// router.post('/update/:ID', async (req, res) => {
//     //recibo parametro id para actualizar datos
//     const {
//         ID
//     } = req.params;
//     //obtengo lo que sea editado en los campos del formulario
//     const {
//         nombre,
//         descripcion
//     } = req.body;
//     //guardo lo valores de los campos en un objeto
//     const updateRol = {
//         nombre,
//         descripcion
//     };

//     //console.log(rolActualizado);
//     const rolID = await pool.query('update rol set ? where id = ?', [req.body, ID]);

//     //Redirecciono vista
//     res.redirect('/rol/agregar');
// });

// //Limpiar campos
// router.post('/limpiar', async (req, res) => {

//     //Limpiar los campos del formulario
//     nombre = "";
//     descripcion = "";
//     //Redirecciono vista
//     res.redirect('/rol/agregar');
// });


////////////////////////////////// 

