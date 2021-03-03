class Categorias {
  db = null;
  constructor(db) {
    this.db = db;
  }

  consultar = async () => {
    const resultado = await this.db.query('select * from categoria');
    return resultado;
  }

  insertar = async (datos) => {
    const resultado = await this.db.query('insert into categoria set ?', [datos]);
    return resultado.insertId;
  }

  actualizar = async (id, datos) => {    
    const resultado = await this.db.query('update categoria set ? where id = ?', [datos, id]);
    return resultado.affectedRows > 0;
  }

  eliminar = async (id) => {
    const resultado = await this.db.query('delete from categoria WHERE ID=?', [id]);
    return resultado.affectedRows > 0;
  }
}

module.exports = Categorias;
