// Importa o Pool
const pool = require("../Config/database");

// Função de listar tudo da View (todas as informações armazenadas)
async function listarTodos() {
  const result = await pool.query(
    'SELECT * FROM filtragem'
  );
  return result.rows;
}

// Exporta a função listarTodos
module.exports = {
listarTodos
};
