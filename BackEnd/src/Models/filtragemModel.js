const pool = require("../Config/database");

async function buscarQuestoes(nomet, instituicao, nomed) {

    let sql = `
        SELECT
            q.*,
            q.alt_a AS alternativa_a,
            q.alt_b AS alternativa_b,
            q.alt_c AS alternativa_c,
            q.alt_d AS alternativa_d,
            q.alt_e AS alternativa_e
        FROM questao q
        LEFT JOIN vestibular v ON q.vestibular = v.idv
        LEFT JOIN tema t ON q.tema = t.idt
        LEFT JOIN dificuldade d ON q.dificuldade = d.idd
        WHERE 1=1
    `;
    let valores = [];
    let contador = 1;

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
