// Importa o jsonwebtoken
const jwt = require('jsonwebtoken');

// Função que verifica o acesso do usuário
function verificarToken(req, res, next) {
  const authHeader = req.headers.authorization;

 // Verifica se:
  // 1. O cabeçalho existe
  // 2. Começa com "Bearer "
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ mensagem: 'Token não fornecido' });
  }

    // Separa a string pelo espaço.
  // Exemplo:
  // "Bearer abc123"
  // vira:
  // ["Bearer", "abc123"]
 const token = authHeader.split(' ')[1];


 //pega a chave secreta pra validar o token, se nao usa a padrão
  try {
    const secret = process.env.JWT_SECRET || 'secret_jwt_default';
   //guarda os dados no token
    const payload = jwt.verify(token, secret);
    req.user = payload;
    next();
  } catch (erro) {
    return res.status(401).json({ mensagem: 'Token inválido ou expirado' });
  }
}

// Exporta a função verificarToken
module.exports = {
  verificarToken
};
