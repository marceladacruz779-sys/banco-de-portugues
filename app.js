require ('dotenv').config();

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());


const areaRoutes = require('./BackEnd/src/Routes/areaRoutes');
app.use('/area', areaRoutes);

const dificuldadeRoutes = require('./BackEnd/src/Routes/dificuldadeRoutes');
app.use('/dificuldade', dificuldadeRoutes);

const questaoRoutes = require('./BackEnd/src/Models/questaoModels');
app.use('/questao');

const temaRoutes = require('./BackEnd/src/Models/temaModels');
app.use('/tema');


const vestibularRoutes = require('./BackEnd/src/Models/vestibularModels');
app.use('/vestibular');


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
