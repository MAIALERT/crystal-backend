const db = require('./../../../utils/database');
const Roles = require('../models/roles');
const Controller = require('./../../../utils/controller');

const get = async (req, res) => {
  const roles = new Roles(db);

  const datosObtenidos = await roles.consultar();
  return Controller.responseOk(res, 'Consulta exitosa!', datosObtenidos);
};
exports.get = get;

const post = async (req, res) => {
  const datos = req.body;

  const roles = new Roles(db);
  const rolId = await roles.insertar(datos);
  return Controller.responseOk(res, 'Guardo exitoso!', rolId);
}
exports.post = post;

const put = async (req, res) => {
  const id = req.params.id;
  const datos = req.body;

  const roles = new Roles(db);
  const datosObtenidos = await roles.actualizar(id, datos);
  return Controller.responseOk(res, 'Actualizacion exitosa!');
}
exports.put = put;

const _delete = async (req, res) => {
  const id = req.params.id;

  const roles = new Roles(db);
  const datosObtenidos = await roles.eliminar(id);
  return Controller.responseOk(res, 'Eliminacion exitosa!');
}
exports.delete = _delete;
