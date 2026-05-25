const DificuldadeModel = require('../Models/dificuldadeModels');

async function buscarPorDificuldade(req, res) {
    try {
        const { nomed } = req.params;
        const dificuldade = await DificuldadeModel.buscarPorDificuldade (nomed);
        res.status(200).json(dificuldade);
    } catch (erro) {
        res.status(500).json({
            mensagem: 'Erro ao filtrar por nível de dificuldade',
            erro: erro.message
        });
    }
}

module.exports = {
    buscarPorDificuldade
};
