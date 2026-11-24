jest.mock('../BackEnd/src/Config/database', () => ({
    query: jest.fn()
}));

const pool = require('../BackEnd/src/Config/database');
const filtroModel = require('../BackEnd/src/Models/filtragemModel');

beforeEach(() => {
    jest.clearAllMocks();
    pool.query.mockResolvedValue({ rows: [] });
});

// MOD01 - Consulta sem filtros
test('Deve consultar questões sem filtros', async () => {
    await filtroModel.buscarQuestoes();

    expect(pool.query).toHaveBeenCalledWith(
        expect.stringContaining('SELECT * FROM filtragem'),
        []
    );
});

// MOD02 - Filtro por tema
test('Deve filtrar questões por tema', async () => {
    await filtroModel.buscarQuestoes('Literatura');

    const [sql, valores] = pool.query.mock.calls[0];

    expect(sql).toContain('nomet ILIKE $1');
    expect(valores).toEqual(['%Literatura%']);
});

// MOD03 - Filtro por instituição
test('Deve filtrar questões por instituição', async () => {
    await filtroModel.buscarQuestoes(undefined, 'ENEM');

    const [sql, valores] = pool.query.mock.calls[0];

    expect(sql).toContain('instituicao ILIKE $1');
    expect(valores).toEqual(['%ENEM%']);
});

// MOD04 - Filtro por dificuldade
test('Deve filtrar questões por dificuldade', async () => {
    await filtroModel.buscarQuestoes(undefined, undefined, 'Fácil');

    const [sql, valores] = pool.query.mock.calls[0];

    expect(sql).toContain('nomed ILIKE $1');
    expect(valores).toEqual(['%Fácil%']);
});

// MOD05 - Combinação de filtros
test('Deve combinar os três filtros corretamente', async () => {
    await filtroModel.buscarQuestoes(
        'Literatura',
        'ENEM',
        'Fácil'
    );

    const [sql, valores] = pool.query.mock.calls[0];

    expect(sql).toContain('nomet ILIKE $1');
    expect(sql).toContain('instituicao ILIKE $2');
    expect(sql).toContain('nomed ILIKE $3');

    expect(valores).toEqual([
        '%Literatura%',
        '%ENEM%',
        '%Fácil%'
    ]);
});

// MOD06 - Retornar questões encontradas
test('Deve retornar os registros encontrados no banco', async () => {
    const questoes = [
        { id: 1, nomet: 'Literatura' },
        { id: 2, nomet: 'Literatura' }
    ];

    pool.query.mockResolvedValue({ rows: questoes });

    const resultado = await filtroModel.buscarQuestoes('Literatura');

    expect(resultado).toEqual(questoes);
});

// MOD07 - Tratar erro do banco
test('Deve propagar erros ocorridos na consulta', async () => {
    pool.query.mockRejectedValue(new Error('Falha no banco'));

    await expect(
        filtroModel.buscarQuestoes()
    ).rejects.toThrow('Falha no banco');
});