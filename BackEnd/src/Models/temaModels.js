// Importa o Pool
const pool = require("../Config/database");

// Função de filtragem por matéria
async function buscarPorTema(nomet) {
  const sql = 'SELECT * FROM filtragem WHERE nomet ILIKE $1';
  const result = await pool.query(
    sql,
    [`%${nomet}%`]  
  );
  return result.rows;
}

// Exporta a função buscarPorTema
module.exports ={
    buscarPorTema
}
