const VestibularModel = require('../Models/vestibularModels');

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

module.exports = {
    buscarPorVestibular
};
