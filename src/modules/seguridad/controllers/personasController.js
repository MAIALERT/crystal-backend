const db = require('../../../utils/database');
const Controller = require('../../../utils/controller');
const Personas = require('./../models/personas');

const get = async (req, res) => {
  const objPersonas = new Personas(db);

  const datosObtenidos = await objPersonas.consultar();
  return Controller.responseOk(res, 'Consulta exitosa!', datosObtenidos);
};
exports.get = get;

const post = async (req, res) => {
  const datos = req.body;

  const objPersonas = new Personas(db);
  const id = await objPersonas.insertar(datos);
  return Controller.responseOk(res, 'Guardo exitoso!', id);
}
exports.post = post;

const put = async (req, res) => {
  const id = req.params.id;
  const datos = req.body;

  const objPersonas = new Personas(db);
  const datosObtenidos = await objPersonas.actualizar(id, datos);
  return Controller.responseOk(res, 'Actualizacion exitosa!');
}
exports.put = put;

const _delete = async (req, res) => {
  const id = req.params.id;

  const objPersonas = new Personas(db);
  const datosObtenidos = await objPersonas.eliminar(id);
  return Controller.responseOk(res, 'Eliminacion exitosa!');
}
exports.delete = _delete;
