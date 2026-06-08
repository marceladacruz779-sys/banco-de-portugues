import { useEffect, useState } from "react";

export default function Questao({ id }) {
  const [questao, setQuestao] = useState(null);
  const [aberta, setAberta] = useState(false);
  const [loading, setLoading] = useState(true);

  const questionId = id ?? 1;

  useEffect(() => {
    async function carregarQuestao() {
      try {
        const response = await fetch(
          `http://localhost:3000/questoes/${questionId}`
        );

        const data = await response.json();

        setQuestao(data);
      } catch (error) {
        console.error("Erro ao buscar questão:", error);
      } finally {
        setLoading(false);
      }
    }

    carregarQuestao();
  }, [questionId]);

  if (loading) return <p>Carregando...</p>;

  if (!questao) return <p>Questão não encontrada.</p>;

  return (
    <div className="questao-container">
      <p>{questao.enunciado}</p>

      <button
        onClick={() => setAberta(!aberta)}
        className="btn-resposta"
      >
        {aberta ? "▲" : "▼"}
      </button>

      {aberta && (
        <div className="resposta-container">
          <hr />

          <h3>Resposta:</h3>
          <p>{questao.resposta}</p>

          <h3>Comentário do especialista:</h3>
          <p>{questao.comentario}</p>
        </div>
      )}
    </div>
  );
}