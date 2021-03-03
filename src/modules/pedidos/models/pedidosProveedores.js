class PedidosProveedores {
  db = null;
  constructor(db) {
    this.db = db;
  }

  consultar = async () => {
    const resultado = await this.db.query('select * from productoproveedor');
    return resultado;
  }

  insertar = async (datos) => {
    const resultado = await this.db.query('insert into productoproveedor set ?', [datos]);
    return resultado.insertId;
  }

  actualizar = async (id, datos) => {    
    const resultado = await this.db.query('update productoproveedor set ? where id = ?', [datos, id]);
    return resultado.affectedRows > 0;
  }

  eliminar = async (id) => {
    const resultado = await this.db.query('delete from productoproveedor WHERE ID=?', [id]);
    return resultado.affectedRows > 0;
  }
}

module.exports = PedidosProveedores;
