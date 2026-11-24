
// Importa o dotenv para carregar as variáveis locais
require('dotenv').config();

const { Pool } = require('pg');

// Configuração da conexão com o PostgreSQL
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),

    // Supabase usa SSL por padrão; servidores locais podem desativá-lo via DB_SSL=false.
    ssl: process.env.DB_SSL === 'false'
        ? false
        : { rejectUnauthorized: false },

    // Configurações para ambiente serverless
    max: 1,
    idleTimeoutMillis: 10000,
    connectionTimeoutMillis: 10000
});

// Captura erros inesperados no pool
pool.on('error', (erro) => {
    console.error('Erro inesperado no PostgreSQL:', erro.message);
});

// Exporta o pool para ser utilizado no projeto
module.exports = pool;
