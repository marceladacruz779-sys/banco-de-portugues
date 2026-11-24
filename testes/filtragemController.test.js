jest.mock('../BackEnd/src/Models/filtragemModel', () => ({
    buscarQuestoes: jest.fn()
}));

const filtroModel = require('../BackEnd/src/Models/filtragemModel');
const { buscarQuestoes } = require('../BackEnd/src/Controllers/filtragemController');

function criarResposta() {
    return {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
    };
}

beforeEach(() => {
    jest.clearAllMocks();
});

// FIL01 - Buscar questões com filtros
test('Deve retornar questões encontradas', async () => {
    const questoes = [{ id: 1, nomet: 'Literatura' }];

    filtroModel.buscarQuestoes.mockResolvedValue(questoes);

    const req = {
        query: {
            nomet: 'Literatura',
            instituicao: 'ENEM',
            nomed: 'Fácil'
        }
    };

    const res = criarResposta();

    await buscarQuestoes(req, res);

    expect(filtroModel.buscarQuestoes).toHaveBeenCalledWith(
        'Literatura',
        'ENEM',
        'Fácil'
    );

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(questoes);
});

// FIL02 - Buscar sem filtros
test('Deve realizar consulta quando nenhum filtro for informado', async () => {
    filtroModel.buscarQuestoes.mockResolvedValue([]);

    const req = { query: {} };
    const res = criarResposta();

    await buscarQuestoes(req, res);

    expect(filtroModel.buscarQuestoes).toHaveBeenCalledWith(
        undefined,
        undefined,
        undefined
    );

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith([]);
});

// FIL03 - Erro durante a consulta
test('Deve retornar erro 500 quando a consulta falhar', async () => {
    filtroModel.buscarQuestoes.mockRejectedValue(
        new Error('Erro de conexão')
    );

    const req = { query: {} };
    const res = criarResposta();

    await buscarQuestoes(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
        mensagem: 'Erro ao buscar questões',
        erro: 'Erro de conexão'
    });
});