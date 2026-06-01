const pool = require("../Config/database");

async function listarTodos() {
  const result = await pool.query(
    'SELECT * FROM filtragem'
  );
  

  return result.rows;
}

module.exports = {
listarTodos
};
