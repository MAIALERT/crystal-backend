//INICIO-------------
//llamando dependencias
const express = require('express');
const morgan = require('morgan');
// const path = require('path');
const routes = require('./routes');
const env = require('./env');

//CONFIGURACIONES---------
//ejecutar express
const app = express();

//configuración de la app y fuertes
app.set('port', env.app.port);

//PETICIONES----------
app.use(morgan(env.app.environment));
app.use(express.urlencoded({
    extends: false
}));
app.use(express.json());

// Configurar las rutas
routes(app);

//INICIAR EL SERVER...........
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});