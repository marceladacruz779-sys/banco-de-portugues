import { useEffect, useState } from "react";

export default function Gramatica() {
  const [banca, setBanca] = useState("");
  const [tema, setTema] = useState("");
  const [dificuldade, setDificuldade] = useState("");
  const [questoes, setQuestoes] = useState([]);

  useEffect(() => {
    async function buscarQuestoes() {
      let url = "http://localhost:3000/filtro?";

      if (banca) {
        url += `instituicao=${banca}&`;
      }

      if (tema) {
        url += `nomet=${tema}&`;
      }

      if (dificuldade) {
        url += `nomed=${dificuldade}`;
      }

      try {
        const resposta = await fetch(url);
        const dados = await resposta.json();
        setQuestoes(dados);
      } catch (error) {
        console.error("Erro ao buscar questões:", error);
      }
    }

    buscarQuestoes();
  }, [banca, tema, dificuldade]);

  return (
    <>
      <header>
        <div className="cabecalho">
          <nav>
            <a href="/">Home</a>
            <a href="/gramatica">Gramática</a>
            <a href="/literatura">Literatura</a>
          </nav>

          <button className="btn-logout">
            Logout
          </button>
        </div>
      </header>

      <select
        value={banca}
        onChange={(e) => setBanca(e.target.value)}
      >
        <option value="">Todas as Bancas</option>
        <option value="ENEM">ENEM</option>
        <option value="ENEM PPL">ENEM PPL</option>
        <option value="Fuvest">FUVEST</option>
        <option value="Unifesp">UNIFESP</option>
        <option value="Mackenzie">MACKENZIE</option>
        <option value="Uel">UEL</option>
        <option value="PUC">PUC</option>
        <option value="Unicamp">UNICAMP</option>
        <option value="UECE">UECE</option>
        <option value="UGEM">UGEM</option>
        <option value="UFRRJ">UFRRJ</option>
        <option value="SESI editora">SESI editora</option>
      </select>

      <select
        value={tema}
        onChange={(e) => setTema(e.target.value)}
      >
        <option value="">Todos os Temas</option>
        <option value="Variação Linguística">Variação Linguística</option>
        <option value="Análise Sintática">Análise Sintática</option>
      </select>

      <select
        value={dificuldade}
        onChange={(e) => setDificuldade(e.target.value)}
      >
        <option value="">Todas as Dificuldades</option>
        <option value="Baixa">Baixa</option>
        <option value="Média">Média</option>
        <option value="Alta">Alta</option>
      </select>

      <hr />

      <div id="resultado">
        {questoes.map((q, index) => (
          <div className="questao" key={index}>
            <h3>{q.enunciado}</h3>

            <p> {q.alternativa_a}</p>
            <p> {q.alternativa_b}</p>
            <p>{q.alternativa_c}</p>
            <p>{q.alternativa_d}</p>
            <p>{q.alternativa_e}</p>

            <p>
              <strong>Resposta:</strong> {q.resposta}
            </p>

            <p>
              <strong>Comentário:</strong> {q.comentario}
            </p>

            <hr />
          </div>
        ))}
      </div>
    </>
  );
}