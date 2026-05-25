const temaModel = require('../Models/temaModels');

async function buscarPorTema(req, res) {
  try {
    const { nomet } = req.params;
    const filtragem = await temaModel.buscarPorTema(nomet);
    res.status(200).json(filtragem);
  } catch (erro) {
    res.status(500).json({ 
      mensagem: 'Erro ao buscar tema',
      erro: erro.message 
    });
  }
}

module.exports ={
buscarPorTema
}
