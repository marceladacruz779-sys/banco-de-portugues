const AreaModel = require('../Models/areaModels')

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

module.exports = {
    area
}
