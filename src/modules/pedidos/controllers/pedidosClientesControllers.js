const db = require('../../../utils/database');
const Controller = require('../../../utils/controller');
const PedidosClientes = require('../models/pedidosClientes');

const get = async (req, res) => {
  const objPedidosClientes = new PedidosClientes(db);

  const datosObtenidos = await objPedidosClientes.consultar();
  return Controller.responseOk(res, 'Consulta exitosa!', datosObtenidos);
};
exports.get = get;

const post = async (req, res) => {
  const datos = req.body;

  const objPedidosClientes = new PedidosClientes(db);
  const id = await objPedidosClientes.insertar(datos);
  return Controller.responseOk(res, 'Guardo exitoso!', id);
}
exports.post = post;

const put = async (req, res) => {
  const id = req.params.id;
  const datos = req.body;

  const objPedidosClientes = new PedidosClientes(db);
  const datosObtenidos = await objPedidosClientes.actualizar(id, datos);
  return Controller.responseOk(res, 'Actualizacion exitosa!');
}
exports.put = put;

const _delete = async (req, res) => {
  const id = req.params.id;

  const objPedidosClientes = new PedidosClientes(db);
  const datosObtenidos = await objPedidosClientes.eliminar(id);
  return Controller.responseOk(res, 'Eliminacion exitosa!');
}
exports.delete = _delete;
