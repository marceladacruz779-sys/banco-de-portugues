const filtroModel = require("../Models/filtragemModel");

async function buscarQuestoes(req, res){

    try{

        const { nomet, instituicao, nomed } = req.query;

        const resultado = await filtroModel.buscarQuestoes(
            nomet,
            instituicao,
            nomed
        );

        res.status(200).json(resultado);
    } catch(erro) {
        res.status(500).json({
            mensagem: "Erro ao buscar questões",
            erro: erro.message
        });
    }
}

module.exports = {
    buscarQuestoes
};