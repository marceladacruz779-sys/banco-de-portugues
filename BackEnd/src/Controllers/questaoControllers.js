const QuestaoModel = require('../Models/questaoModels');

async function listarQuestoes(req, res) {
  try {
    const questao = await QuestaoModel.listarQuestoes();
    res.status(200).json(questao);
  } catch (erro) {
    res.status(500).json({ 
      mensagem: 'Erro ao listar questões', 
      erro: erro.message 
    });
  }
}

module.exports = {
    listarQuestoes
}
