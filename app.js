require('dotenv').config();

const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();

const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'secret';
const AUTH_USER = process.env.AUTH_USER;
const AUTH_PASSWORD = process.env.AUTH_PASSWORD;

app.use(cors());
app.use(express.json());

const viewRoutes = require('./BackEnd/src/Routes/viewRoutes');
app.use('/', viewRoutes);

const areaRoutes = require('./BackEnd/src/Routes/areaRoutes');
app.use('/area', areaRoutes);

const temaRoutes = require('./BackEnd/src/Routes/temaRoutes');
app.use('/tema', temaRoutes);

const vestibularRoutes = require('./BackEnd/src/Routes/vestibularRoutes');
app.use('/vestibular', vestibularRoutes);

const dificuldadeRoutes = require('./BackEnd/src/Routes/dificuldadeRoutes');
app.use('/dificuldade', dificuldadeRoutes);

function verifyJWT(req, res, next) {
  const authHeader = req.headers['authorization'] || req.headers['Authorization'];
  if (!authHeader) {
    return res.status(401).json({ auth: false, message: 'Token não fornecido.' });
  }

  const parts = authHeader.split(' ');
  if (parts.length !== 2 || parts[0] !== 'Bearer') {
    return res.status(401).json({ auth: false, message: 'Formato do token inválido.' });
  }

  const token = parts[1];
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ auth: false, message: 'Token inválido ou expirado.' });
    }
    req.user = decoded;
    next();
  });
}

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ auth: false, message: 'Usuário e senha são obrigatórios.' });
  }

  if (username !== AUTH_USER || password !== AUTH_PASSWORD) {
    return res.status(401).json({ auth: false, message: 'Credenciais inválidas.' });
  }

  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
  return res.json({ auth: true, token, message: 'Login realizado com sucesso.' });
});

app.get('/painel-secreto', verifyJWT, (req, res) => {
  res.json({ auth: true, message: 'Acesso autorizado ao painel secreto.', user: req.user });
});

app.get('/', (req, res) => {
  res.json({
    mensagem: 'API de Banco de dados de Português com PostgreSQL',
    versao: '3.0',
    ambiente: process.env.NODE_ENV || 'development',
    banco: 'PostgreSQL'
  });
});

app.listen(PORT, () => {
  console.log('='.repeat(50));
  console.log('🚀 Servidor rodando!');
  console.log(`📍 URL: http://localhost:${PORT}`);
  console.log(`💾 Banco: PostgreSQL (${process.env.DB_NAME})`);
  console.log(`🌍 Ambiente: ${process.env.NODE_ENV || 'development'}`);
  console.log('='.repeat(50));
});
