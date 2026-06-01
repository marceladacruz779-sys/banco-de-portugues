// Importa o areaModel
const AreaModel = require('../Models/areaModels')

// Função de intermediação das áreas Literatura e Gramática
async function area(req, res) {
    try {
        const { nomea } = req.params;
        const area = await AreaModel.area (nomea);
        res.status(200).json(area);
    } catch (erro) {
        res.status(500).json({
            mensagem: 'Erro ao escolher área',
            erro: erro.message
        });
    }
}

// Exporta a função area
module.exports = {
    area
}
