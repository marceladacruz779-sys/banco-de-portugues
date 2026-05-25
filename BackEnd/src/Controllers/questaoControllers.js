const questaoModel = require('../Models/questaoModels');

async function listarQuestao (req, res){
    try {
    const questao = await questaoModel.listarQuestao();
    res.status(200).json(questao);
  } catch (erro) {
    res.status(500).json({ 
      mensagem: 'Erro ao listar a Questão', 
      erro: erro.message 
    });
  }
}

module.exports = {
    listarQuestao
}