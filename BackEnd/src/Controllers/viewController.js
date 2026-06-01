// Importa o viewModel
const ViewModel = require('../Models/viewModel');

// Função de intermediação de listar tudo
async function listarTodos(req, res) {
  try {
    const filtragem = await ViewModel.listarTodos();
    res.status(200).json(filtragem);
  } catch (erro) {
    res.status(500).json({ 
      mensagem: 'Erro ao listar tudo', 
      erro: erro.message 
    });
  }
}

// Exporta a função listarTodos
module.exports = {
  listarTodos
};
