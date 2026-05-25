const pool = require("../Config/database");

async function buscarPorArea(ida) {
  const result = await pool.query(
    'SELECT * FROM area WHERE ida = $1',
    [ida]
  );
  
  return result.rows;
}

module.exports = {
  buscarPorArea
};
