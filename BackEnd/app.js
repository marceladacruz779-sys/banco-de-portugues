require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rota do login de segurança (agora com /api na frente)
const authRoutes = require('./src/Routes/authRoutes');
app.use('/api/auth', authRoutes);

// Rota das questões (agora com /api na frente)
const filtragemRoutes = require('./src/Routes/filtragemRoutes');
app.use('/api/questoes', filtragemRoutes);

// Rota sobre os dados do banco 
app.get('/api', (req, res) => {
  res.json({ 
    mensagem: 'API de bd_LP com PostgreSQL',
    versao: '3.0',
    ambiente: process.env.NODE_ENV || 'development',
    banco: 'PostgreSQL'
  });
});

// Só inicia a porta localmente (na Vercel ele ignora isso e usa o module.exports)
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log('='.repeat(50));
    console.log('🚀 Servidor rodando!');
    console.log(`📍 URL: http://localhost:${PORT}`);
    console.log(`💾 Banco: PostgreSQL (${process.env.DB_NAME})`);
    console.log(`🌍 Ambiente: ${process.env.NODE_ENV || 'development'}`);
    console.log('='.repeat(50));
  });
}

module.exports = app;
