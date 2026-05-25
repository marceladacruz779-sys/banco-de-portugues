const pool = require("../Config/database");


async function filtragem() {
  const result = await pool.query(
      "SELECT * FROM filtragem"
    );
  return result.rows;    
}



module.exports = {
  filtragem,

};


