const pool = require("../Config/database");

//buscar por vestibular

async function buscarPorVestibular(idv) {
  const result = await pool.query(
      "SELECT * FROM tema WHERE idv = $1",
      [idv]
    );

  return result.rows[0];
}


module.exports = {
buscarPorVestibular,
};