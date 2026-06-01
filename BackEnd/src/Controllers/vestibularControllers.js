// Importa o vestibularModel
const VestibularModel = require('../Models/vestibularModels');

// Função de intermediação da filtragem por banca
async function buscarPorVestibular(req, res) {
    try {
        const { instituicao } = req.params;
        const filtragem = await VestibularModel.buscarPorVestibular (instituicao);
        res.status(200).json(filtragem);
    } catch (erro) {
        res.status(500).json({
            mensagem: 'Erro ao filtrar por banca',
            erro: erro.message
        });
    }
}

// Exporta a função buscarPorVestibular
module.exports = {
    buscarPorVestibular
};
