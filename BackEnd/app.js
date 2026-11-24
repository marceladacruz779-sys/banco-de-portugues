
require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 3000;

// Configurações do servidor
app.use(cors({
    origin: process.env.FRONTEND_URL || '*'
}));

app.use(express.json());

// Rota inicial
app.get('/', (req, res) => {
    res.json({
        mensagem: 'Backend do Hub do Conhecimento funcionando!'
    });
});

// Rota do login
const authRoutes = require('./Routes/authRoutes');
app.use('/api/auth', authRoutes);

// Rota das questões
const filtragemRoutes = require('./Routes/filtragemRoutes');
app.use('/api/questoes', filtragemRoutes);

// Rota de informações da API
app.get('/api', (req, res) => {
    res.json({
        mensagem: 'API do Hub do Conhecimento',
        versao: '3.0',
        ambiente: process.env.NODE_ENV || 'development',
        banco: 'PostgreSQL'
    });
});

// Inicialização local
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
}

module.exports = app;
