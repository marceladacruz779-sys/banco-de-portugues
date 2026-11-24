process.env.JWT_SECRET = 'chave_teste_123';

const jwt = require('jsonwebtoken');
const { verificarToken } = require('../BackEnd/src/middleware/authMiddleware');

function criarResposta() {
    return {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
    };
}

// SEG01 - Sem token
test('Deve bloquear acesso quando não houver token', () => {
    const req = { headers: {} };
    const res = criarResposta();
    const next = jest.fn();

    verificarToken(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(next).not.toHaveBeenCalled();
});

// SEG02 - Formato incorreto
test('Deve bloquear acesso quando o cabeçalho não começar com Bearer', () => {
    const req = {
        headers: { authorization: 'Token abc123' }
    };
    const res = criarResposta();
    const next = jest.fn();

    verificarToken(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(next).not.toHaveBeenCalled();
});

// SEG03 - Token inválido
test('Deve bloquear acesso com token inválido', () => {
    const req = {
        headers: { authorization: 'Bearer token_invalido' }
    };
    const res = criarResposta();
    const next = jest.fn();

    verificarToken(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(next).not.toHaveBeenCalled();
});

// SEG04 - Token expirado
test('Deve bloquear acesso com token expirado', () => {
    const token = jwt.sign(
        { email: 'teste@email.com' },
        process.env.JWT_SECRET,
        { expiresIn: '-1s' }
    );

    const req = {
        headers: { authorization: `Bearer ${token}` }
    };
    const res = criarResposta();
    const next = jest.fn();

    verificarToken(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(next).not.toHaveBeenCalled();
});

// SEG05 - Token válido
test('Deve permitir acesso com token válido', () => {
    const token = jwt.sign(
        { email: 'teste@email.com' },
        process.env.JWT_SECRET,
        { expiresIn: '2h' }
    );

    const req = {
        headers: { authorization: `Bearer ${token}` }
    };
    const res = criarResposta();
    const next = jest.fn();

    verificarToken(req, res, next);

    expect(next).toHaveBeenCalled();
    expect(req.user.email).toBe('teste@email.com');
});