const db = require('../../../utils/database');
const Controller = require('../../../utils/controller');
const PedidosProveedores = require('../models/PedidosProveedores');

const get = async (req, res) => {
  const objPedidosProveedores = new PedidosProveedores(db);

  const datosObtenidos = await objPedidosProveedores.consultar();
  return Controller.responseOk(res, 'Consulta exitosa!', datosObtenidos);
};
exports.get = get;

const post = async (req, res) => {
  const datos = req.body;

  const objPedidosProveedores = new PedidosProveedores(db);
  const id = await objPedidosProveedores.insertar(datos);
  return Controller.responseOk(res, 'Guardo exitoso!', id);
}
exports.post = post;

const put = async (req, res) => {
  const id = req.params.id;
  const datos = req.body;

  const objPedidosProveedores = new PedidosProveedores(db);
  const datosObtenidos = await objPedidosProveedores.actualizar(id, datos);
  return Controller.responseOk(res, 'Actualizacion exitosa!');
}
exports.put = put;

const _delete = async (req, res) => {
  const id = req.params.id;

  const objPedidosProveedores = new PedidosProveedores(db);
  const datosObtenidos = await objPedidosProveedores.eliminar(id);
  return Controller.responseOk(res, 'Eliminacion exitosa!');
}
exports.delete = _delete;
