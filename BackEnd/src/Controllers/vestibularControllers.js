const VestibularModel = require('../Models/vestibularModels');

async function buscarPorVestibular(req, res) {
    try {
        const { instituicao } = req.params;
        const vestibular = await VestibularModel.buscarPorVestibular (instituicao);
        res.status(200).json(vestibular);
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
