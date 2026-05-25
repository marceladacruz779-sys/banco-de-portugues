const pool = require("../Config/database");



async function buscarPorDificuldade (nomed){

  const sql = 'SELECT * FROM dificuldade WHERE nomed ILIKE $1';
  
  const result = await pool.query(
    sql,
    [`%${nomed}%`]  
  );
  
  return result.rows;
}




module.exports = {
buscarPorDificuldade
};