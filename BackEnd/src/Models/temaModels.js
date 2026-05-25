const pool = require("../Config/database");


//buscar por tema

async function buscarPorTema(idt) {
  const result = await pool.query(
      "SELECT * FROM tema WHERE idt = $1",
      [idt]
    );

  return result.rows[0];
}

module.exports ={
    buscarPorTema,
}