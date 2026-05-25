const pool = require("../Config/database");

async function listarQuestoes() {
  const result = await pool.query(
      "SELECT * FROM questao ORDER BY idq"
    );
  return result.rows;    
}

module.exports = {
  listarQuestoes
};
