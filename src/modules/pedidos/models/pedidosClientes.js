class PedidosClientes {
  db = null;
  constructor(db) {
    this.db = db;
  }

  consultar = async () => {
    const resultado = await this.db.query('select * from pedido');
    return resultado;
  }

  insertar = async (datos) => {
    const resultado = await this.db.query('insert into pedido set ?', [datos]);
    return resultado.insertId;
  }

  actualizar = async (id, datos) => {    
    const resultado = await this.db.query('update pedido set ? where id = ?', [datos, id]);
    return resultado.affectedRows > 0;
  }

  eliminar = async (id) => {
    const resultado = await this.db.query('delete from pedido WHERE ID=?', [id]);
    return resultado.affectedRows > 0;
  }
}

module.exports = PedidosClientes;
