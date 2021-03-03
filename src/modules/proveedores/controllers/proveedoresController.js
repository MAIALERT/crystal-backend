const db = require('../../../utils/database');
const Controller = require('../../../utils/controller');
const Proveedores = require('../models/proveedores');

const get = async (req, res) => {
  const objProveedores = new Proveedores(db);

  const datosObtenidos = await objProveedores.consultar();
  return Controller.responseOk(res, 'Consulta exitosa!', datosObtenidos);
};
exports.get = get;

const post = async (req, res) => {
  const datos = req.body;

  const objProveedores = new Proveedores(db);
  const id = await objProveedores.insertar(datos);
  return Controller.responseOk(res, 'Guardo exitoso!', id);
}
exports.post = post;

const put = async (req, res) => {
  const id = req.params.id;
  const datos = req.body;

  const objProveedores = new Proveedores(db);
  const datosObtenidos = await objProveedores.actualizar(id, datos);
  return Controller.responseOk(res, 'Actualizacion exitosa!');
}
exports.put = put;

const _delete = async (req, res) => {
  const id = req.params.id;

  const objProveedores = new Proveedores(db);
  const datosObtenidos = await objProveedores.eliminar(id);
  return Controller.responseOk(res, 'Eliminacion exitosa!');
}
exports.delete = _delete;
