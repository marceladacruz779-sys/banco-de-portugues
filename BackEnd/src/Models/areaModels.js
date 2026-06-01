// Importa o Pool
const pool = require("../Config/database");

// Função das áreas Literatura e Gramática
async function area(nomea){
  const sql = 'SELECT * FROM filtragem WHERE nomea ILIKE $1';
  const result = await pool.query(
    sql,
    [`%${nomea}%`]  
  );
  return result.rows;
}

// Exporta a função area
module.exports = {
  area
};
