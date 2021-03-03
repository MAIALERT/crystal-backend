const db = require('../../../utils/database');
const Controller = require('../../../utils/controller');
const Productos = require('../models/productos');

const get = async (req, res) => {
  const objProductos = new Productos(db);

  const datosObtenidos = await objProductos.consultar();
  return Controller.responseOk(res, 'Consulta exitosa!', datosObtenidos);
};
exports.get = get;

const post = async (req, res) => {
  const datos = req.body;

  const objProductos = new Productos(db);
  const id = await objProductos.insertar(datos);
  return Controller.responseOk(res, 'Guardo exitoso!', id);
}
exports.post = post;

const put = async (req, res) => {
  const id = req.params.id;
  const datos = req.body;

  const objProductos = new Productos(db);
  const datosObtenidos = await objProductos.actualizar(id, datos);
  return Controller.responseOk(res, 'Actualizacion exitosa!');
}
exports.put = put;

const _delete = async (req, res) => {
  const id = req.params.id;

  const objProductos = new Productos(db);
  const datosObtenidos = await objProductos.eliminar(id);
  return Controller.responseOk(res, 'Eliminacion exitosa!');
}
exports.delete = _delete;
