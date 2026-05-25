const pool = require("../Config/database");

async function listarTodos() {
  const result = await pool.query(
    'SELECT * FROM filtragem'
  );
  
  // Os dados ficam em result.rows
  return result.rows;
}

module.exports = {
listarTodos
};
