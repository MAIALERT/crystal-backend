const db = require('./../../../utils/database');
const Controller = require('./../../../utils/controller');
const Roles = require('../models/roles');

const get = async (req, res) => {
  const objRoles = new Roles(db);

  const datosObtenidos = await objRoles.consultar();
  return Controller.responseOk(res, 'Consulta exitosa!', datosObtenidos);
};
exports.get = get;

const post = async (req, res) => {
  const datos = req.body;

  const objRoles = new Roles(db);
  const id = await objRoles.insertar(datos);
  return Controller.responseOk(res, 'Guardo exitoso!', id);
}
exports.post = post;

const put = async (req, res) => {
  const id = req.params.id;
  const datos = req.body;

  const objRoles = new Roles(db);
  const datosObtenidos = await objRoles.actualizar(id, datos);
  return Controller.responseOk(res, 'Actualizacion exitosa!');
}
exports.put = put;

const _delete = async (req, res) => {
  const id = req.params.id;

  const objRoles = new Roles(db);
  const datosObtenidos = await objRoles.eliminar(id);
  return Controller.responseOk(res, 'Eliminacion exitosa!');
}
exports.delete = _delete;
