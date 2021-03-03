//INICIO-------------
//llamando dependencias
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');/*sirve para los directorios y asi tener las ubicaciones y 
direccionarlas en los directorios que uno quiera.*/

//CONFIGURACIONES---------
//ejecutar express
const app = express();


//configuración de la app y fuertes
app.set('port',process.env.PORT || 4000);/*si esta ocupado el puerto 4000 asigneme uno que usted tenga*/

//ruta de vistas
app.set('views',path.join(__dirname,'views'));

//handlebars
app.engine('.hbs',exphbs({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs',
    //lamando libreria handlebars
    helpers: require('./lib/handlebars')
}));
app.set('view engine','.hbs');//arrancamos la configuración de handlebars

//PETICIONES----------
app.use(morgan('dev'));
app.use(express.urlencoded({extends:false}));
app.use(express.json());

//VARIABLES GLOBALES--------
app.use((req,res,next)=>{
    next();
});

//RUTAS--------
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/links',require('./routes/links'));
app.use('/proveedor',require('./routes/proveedor'));
app.use('/persona',require('./routes/persona'));
app.use('/producto',require('./routes/producto'));//este me sirve tanto para producto, marca
app.use('/categoria',require('./routes/categoria'));
app.use('/usuario',require('./routes/usuario'));
app.use('/roles',require('./routes/roles'));
app.use('/pedido',require('./routes/pedido'));
app.use('/factura',require('./routes/factura'));
app.use('/principal',require('./routes/principal'));

//PUBLIC------------
app.use('/static', express.static(__dirname + '/public'));

//INICIAR EL SERVER...........
app.listen(app.get('port'),()=>{
    console.log('server on port',app.get('port'));
});


