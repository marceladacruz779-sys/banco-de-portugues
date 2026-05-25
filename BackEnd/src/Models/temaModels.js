const pool = require("../Config/database");


//buscar por 
async function buscarPorTema(nomet) {

  const sql = 'SELECT * FROM tema WHERE nomet ILIKE $1';
  
  const result = await pool.query(
    sql,
    [`%${nomet}%`]  
  );
  
  return result.rows;
}



module.exports ={
    buscarPorTema
}