const ViewModel = require('../Models/viewModel');

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

module.exports = {
  listarTodos
};
