// Carrega as variáveis de ambiente (informações) do .env primeiro
require('dotenv').config();

// Permitem importação e a inicialição do servidor
const express = require('express');
const app = express();
const path = require('path');

// Porta
const PORT = process.env.PORT || 3000;

// Permitem que os arquivos cheguem ao usuário e o entendimento de dados por requisições 
app.use(express.static(path.join(__dirname, 'FrontEnd')));
app.use(express.json());

// Rota do login de segurança
const authRoutes = require('./BackEnd/src/Routes/authRoutes');
const { verificarToken } = require('./BackEnd/src/middleware/authMiddleware');
app.use('/auth', authRoutes);

// Rota da area
const areaRoutes = require('./BackEnd/src/Routes/areaRoutes');
app.use('/area', areaRoutes);

// Rota da filtragem
const filtragemRoutes = require('./BackEnd/src/Routes/filtragemRoutes');
app.use('/filtragem', areaRoutes);


// Permite a navegação do usuário no HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'FrontEnd', 'index.html'));
});

// Rota sobre os dados do banco 
app.get('/api', (req, res) => {
  res.json({ 
    mensagem: 'API de bd_LP com PostgreSQL',
    versao: '3.0',
    ambiente: process.env.NODE_ENV || 'development',
    banco: 'PostgreSQL'
  });
});

// Inicia o Servidor
app.listen(PORT, () => {
  console.log('='.repeat(50));
  console.log('🚀 Servidor rodando!');
  console.log(`📍 URL: http://localhost:${PORT}`);
  console.log(`💾 Banco: PostgreSQL (${process.env.DB_NAME})`);
  console.log(`🌍 Ambiente: ${process.env.NODE_ENV || 'development'}`);
  console.log('='.repeat(50));
});
