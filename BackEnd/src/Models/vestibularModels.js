// Importa o Pool
const pool = require("../Config/database");

// Função de filtragem por banca
async function buscarPorVestibular(instituicao) {
  const sql = 'SELECT * FROM filtragem WHERE instituicao ILIKE $1';
  const result = await pool.query(
    sql,
    [`%${instituicao}%`]  
  );
  return result.rows;
}

// Exporta a função buscarPorVestibular
module.exports = {
buscarPorVestibular
};
