const pool = require("../Config/database");

//buscar por vestibular

async function buscarPorVestibular(instituicao) {
  const sql = 'SELECT * FROM filtragem WHERE instituicao ILIKE $1';
  
  const result = await pool.query(
    sql,
    [`%${instituicao}%`]  
  );
  
  return result.rows;
}

module.exports = {
buscarPorVestibular
};
