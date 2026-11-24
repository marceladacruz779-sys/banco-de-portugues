// Define credenciais fictícias para os testes
process.env.AUTH_USER = 'teste@email.com';
process.env.AUTH_PASSWORD = 'senha123';
process.env.JWT_SECRET = 'chave_teste_123';

// Importa a função de login
const { login } = require('../BackEnd/src/Controllers/authControllers');

// Cria uma resposta simulada
function criarResposta() {
    return {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
    };
}

// Teste 1: campos vazios
test('Deve retornar erro quando os campos estiverem vazios', () => {
    const req = {
        body: {
            email: '',
            password: ''
        }
    };

    const res = criarResposta();

    login(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
        mensagem: 'E-mail e senha são obrigatórios'
    });
});

// Teste 2: credenciais incorretas
test('Deve retornar erro com credenciais inválidas', () => {
    const req = {
        body: {
            email: 'errado@email.com',
            password: 'senhaerrada'
        }
    };

    const res = criarResposta();

    login(req, res);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
        mensagem: 'Credenciais inválidas'
    });
});

// Teste 3: credenciais corretas
test('Deve permitir login com credenciais corretas', () => {
    const req = {
        body: {
            email: 'teste@email.com',
            password: 'senha123'
        }
    };

    const res = criarResposta();

    login(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
            token: expect.any(String)
        })
    );
});