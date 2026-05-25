const pool = require("../Config/database");


//buscar por dificuldade

async function buscarPorDificuldade(idd) {
  const result = await pool.query(
      "SELECT * FROM tema WHERE idd = $1",
      [idd]
    );

  return result.rows[0];
}


module.exports = {
buscarPorDificuldade,
};