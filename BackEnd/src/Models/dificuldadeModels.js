// Importa o Pool
const pool = require("../Config/database");

// Função de filtragem por nível de dificuldade (Alta, Média e Baixa)
async function buscarPorDificuldade (nomed){
  const sql = 'SELECT * FROM filtragem WHERE nomed ILIKE $1';
  const result = await pool.query(
    sql,
    [`%${nomed}%`]  
  );
  return result.rows;
}

// Exporta a função buscarPorDificuldade
module.exports = {
buscarPorDificuldade
};
