import "../styles.css";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function Literatura() {
  const [banca, setBanca] = useState("");
  const [tema, setTema] = useState("");
  const [dificuldade, setDificuldade] = useState("");
  const [questoes, setQuestoes] = useState([]);

  useEffect(() => {
    async function buscarQuestoes() {
      let url = "http://localhost:3000/questoes?";

      if (banca) {
        url += `instituicao=${encodeURIComponent(banca)}&`;
      }

      if (tema) {
        url += `nomet=${encodeURIComponent(tema)}&`;
      }

      if (dificuldade) {
        url += `nomed=${encodeURIComponent(dificuldade)}`;
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
      <Navbar />
<div className="filtro">

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
        <option value="Modernismo">Modernismo</option>
        <option value="Romantismo">Romantismo</option>
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
      
      </div>

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

            {(q.material || q.material_apoio || q.material_de_apoio) && (
              <div className="material">
                <p>
                  <strong>Material de apoio:</strong>
                </p>
                <p>{q.material || q.material_apoio || q.material_de_apoio}</p>
              </div>
            )}

            <hr />
          </div>
        ))}
      </div>
    </>
  );
}