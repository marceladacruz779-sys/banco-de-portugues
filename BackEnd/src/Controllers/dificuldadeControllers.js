// Importa o dificuldadeModel
const DificuldadeModel = require('../Models/dificuldadeModels');

// Função de intermediação da filtragem por dificuldade
async function buscarPorDificuldade(req, res) {
    try {
        const { nomed } = req.params;
        const filtragem = await DificuldadeModel.buscarPorDificuldade (nomed);
        res.status(200).json(filtragem);
    } catch (erro) {
        res.status(500).json({
            mensagem: 'Erro ao filtrar por nível de dificuldade',
            erro: erro.message
        });
    }
}

// Exporta a função buscarPorDificuldade
module.exports = {
    buscarPorDificuldade
};
