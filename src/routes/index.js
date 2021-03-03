const routes = (app) => {
    app.use('/roles', require('./../modules/seguridad/routes'));
    // Todas las rutas de los modulos
};

module.exports = routes;