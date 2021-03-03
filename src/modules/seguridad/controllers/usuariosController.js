const db = require('../../../utils/database');
const Controller = require('../../../utils/controller');
const Usuarios = require('../models/Usuarios');

const get = async (req, res) => {
  const objUsuarios = new Usuarios(db);

  const datosObtenidos = await objUsuarios.consultar();
  return Controller.responseOk(res, 'Consulta exitosa!', datosObtenidos);
};
exports.get = get;

const post = async (req, res) => {
  const datos = req.body;

  const objUsuarios = new Usuarios(db);
  const id = await objUsuarios.insertar(datos);
  return Controller.responseOk(res, 'Guardo exitoso!', id);
}
exports.post = post;

const put = async (req, res) => {
  const id = req.params.id;
  const datos = req.body;

  const objUsuarios = new Usuarios(db);
  const datosObtenidos = await objUsuarios.actualizar(id, datos);
  return Controller.responseOk(res, 'Actualizacion exitosa!');
}
exports.put = put;

const _delete = async (req, res) => {
  const id = req.params.id;

  const objUsuarios = new Usuarios(db);
  const datosObtenidos = await objUsuarios.eliminar(id);
  return Controller.responseOk(res, 'Eliminacion exitosa!');
}
exports.delete = _delete;
