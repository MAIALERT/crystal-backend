const routes = (app) => {
    app.use('/', require('./../modules/seguridad/routes'));
    app.use('/', require('./../modules/parametros/routes'));
    app.use('/', require('./../modules/pedidos/routes'));
    app.use('/', require('./../modules/proveedores/routes'));

    
};

module.exports = routes;
