const pool = require("../Config/database");

async function buscarQuestoes(nomet, instituicao, nomed) {

    let sql = `
        SELECT * FROM filtragem
    `;


    let valores = []; //valores do filtro
    let contador = 1; //Contador dos parâmetros da questão

    if (nomet) {
        sql += ` AND t.nomet ILIKE $${contador}`;
        valores.push(`%${nomet}%`);
        contador++;
    }

    if (instituicao) {
        sql += ` AND v.instituicao ILIKE $${contador}`;
        valores.push(`%${instituicao}%`);
        contador++;
    }

    if (nomed) {
        sql += ` AND d.nomed ILIKE $${contador}`;
        valores.push(`%${nomed}%`);
        contador++;
    }

    const result = await pool.query(sql, valores);

    return result.rows;
}

module.exports = {
    buscarQuestoes
};
