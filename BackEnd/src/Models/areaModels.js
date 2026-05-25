const pool = require("../Config/database");


async function filtragem() {
  const result = await pool.query(
      "SELECT * FROM filtragem"
    );
  return result.rows;    
}

async function buscarPorArea(nomea) {
  const sql = 'SELECT * FROM area WHERE nomea ILIKE $1';
  
  const result = await pool.query(
    sql,
    [`%${nomea}%`]  
  );
  
  return result.rows;
}




module.exports = {
  filtragem,
  buscarPorArea

};


