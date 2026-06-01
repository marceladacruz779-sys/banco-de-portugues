// Importa o dotenv, para carregar as informações do arquivo .env
require('dotenv').config();

// Importa o Pool (conexões de reutilização) do PostgreSQL
const { Pool } = require('pg');

// Busca as variáveis no arquivo .env
const pool = new Pool({
  user: process.env.DB_USER,           
  host: process.env.DB_HOST,           
  database: process.env.DB_NAME,      
  password: process.env.DB_PASSWORD, 
  port: parseInt(process.env.DB_PORT),
});

// Teste de conexão com o banco
pool.connect((erro, client, release) => {
  if (erro) {
    console.error('❌ Erro ao conectar ao PostgreSQL:', erro.message);
    console.error('💡 Verifique suas credenciais no arquivo .env');
  } else {
    console.log('✅ Conectado ao PostgreSQL!');
    console.log(`📊 Banco: ${process.env.DB_NAME}`);
    console.log(`🏠 Host: ${process.env.DB_HOST}:${process.env.DB_PORT}`);
    release();
  }
});

// Exporta a função do pool
module.exports = pool;
