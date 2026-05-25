const AreaModel = require('../Models/areaModels')

async function buscarPorArea(req, res) {
  try {
    const ida = parseInt(req.params.ida);
    
    if (isNaN(ida)) {
      return res.status(400).json({ 
        mensagem: 'ID inválido' 
      });
    }
    
    const area = await AreaModel.buscarPorArea(ida);
    
    if (area) {
      res.status(200).json(area);
    } else {
      res.status(404).json({ 
        mensagem: `Área ${ida} não encontrada` 
      });
    }
  } catch (erro) {
    res.status(500).json({ 
      mensagem: 'Erro ao buscar área',
      erro: erro.message 
    });
  }
}

module.exports = {
    buscarPorArea
}