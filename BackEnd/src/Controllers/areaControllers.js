const areaModel = require('../Models/areaModels')

async function filtragem (req, res) {
    try{
        const filtragem = await areaModel.filtragem();
        res.status(200).json(filtragem);

    }catch(erro){
        res.status(500).json({
            mensagem: 'Erro ao listar a filtragem',
            erro: erro.message
        })
    }
    
}

module.exports = {
    filtragem
}