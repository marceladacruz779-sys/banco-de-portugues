const pool = require("../Config/database");

async function buscarQuestoes(nomet, instituicao, nomed) {

    let sql = `
        SELECT * FROM filtragem
        WHERE 1=1
    `;

    let valores = [];
    let contador = 1;

    if (nomet) {
        sql += ` AND nomet ILIKE $${contador}`;
        valores.push(`%${nomet}%`);
        contador++;
    }

    if (instituicao) {
        sql += ` AND instituicao ILIKE $${contador}`;
        valores.push(`%${instituicao}%`);
        contador++;
    }

    if (nomed) {
        sql += ` AND nomed ILIKE $${contador}`;
        valores.push(`%${nomed}%`);
        contador++;
    }

    console.log(sql);
    console.log(valores);

    const result = await pool.query(sql, valores);

    return result.rows;
}

module.exports = {
    buscarQuestoes
};