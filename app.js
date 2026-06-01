require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

// ✅ Servir arquivos estáticos do FrontEnd
app.use(express.static(path.join(__dirname, 'FrontEnd')));
app.use(express.json());

const authRoutes = require('./BackEnd/src/Routes/authRoutes');
const { verificarToken } = require('./BackEnd/src/middleware/authMiddleware');



app.use('/auth', authRoutes);


const viewRoutes = require('./BackEnd/src/Routes/viewRoutes');
app.use('/view', verificarToken, viewRoutes);

const areaRoutes = require('./BackEnd/src/Routes/areaRoutes');
app.use('/area', verificarToken, areaRoutes);

const temaRoutes = require('./BackEnd/src/Routes/temaRoutes');
app.use('/tema', verificarToken, temaRoutes);

const vestibularRoutes = require('./BackEnd/src/Routes/vestibularRoutes');
app.use('/vestibular', verificarToken, vestibularRoutes);

const dificuldadeRoutes = require('./BackEnd/src/Routes/dificuldadeRoutes');
app.use('/dificuldade', verificarToken, dificuldadeRoutes);



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'FrontEnd', 'index.html'));
});


app.get('/api', (req, res) => {
  res.json({ 
    mensagem: 'API de bd_LP com PostgreSQL',
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
