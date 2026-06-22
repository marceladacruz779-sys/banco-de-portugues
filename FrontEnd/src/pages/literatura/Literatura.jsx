import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import styles from "./styles.module.css";

export default function Literatura() {
  const [banca, setBanca] = useState("");
  const [tema, setTema] = useState("");
  const [dificuldade, setDificuldade] = useState("");
  const [questoes, setQuestoes] = useState([]);

  useEffect(() => {
    async function buscarQuestoes() {
      let url = "http://localhost:3000/questoes?";

      if (banca) url += `instituicao=${encodeURIComponent(banca)}&`;
      if (tema) url += `nomet=${encodeURIComponent(tema)}&`;
      if (dificuldade) url += `nomed=${encodeURIComponent(dificuldade)}`;

      try {
        const resposta = await fetch(url);
        const dados = await resposta.json();

        console.log("URL:", url);
        console.log("Status:", resposta.status);
        console.log("Dados recebidos:", dados);

        if (Array.isArray(dados)) {
          setQuestoes(dados);
        } else {
          console.error("A API não retornou um array:", dados);
          setQuestoes([]);
        }
      } catch (error) {
        console.error("Erro ao buscar questões:", error);
        setQuestoes([]);
      }
    }

    buscarQuestoes();
  }, [banca, tema, dificuldade]);

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <Navbar />
        <div className={styles.heroTitle}>
          <h1>Literatura</h1>
        </div>
      </section>

      <div className={styles.filters}>
        <label className={styles.filterGroup}>
          <span>Matéria</span>
          <select
            value={tema}
            onChange={(event) => setTema(event.target.value)}
          >
            <option value="">Todos os Temas</option>
            <option value="Modernismo">Modernismo</option>
            <option value="Romantismo">Romantismo</option>
          </select>
        </label>

        <label className={styles.filterGroup}>
          <span>Banca</span>
          <select
            value={banca}
            onChange={(event) => setBanca(event.target.value)}
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
        </label>

        <label className={styles.filterGroup}>
          <span>Dificuldade</span>
          <select
            value={dificuldade}
            onChange={(event) => setDificuldade(event.target.value)}
          >
            <option value="">Todas as Dificuldades</option>
            <option value="Baixa">Baixa</option>
            <option value="Média">Média</option>
            <option value="Alta">Alta</option>
          </select>
        </label>
      </div>

      <div className={styles.results}>
        {Array.isArray(questoes) &&
          questoes.map((questao, index) => (
            <details
              className={styles.question}
              key={questao.idq || index}
            >
              <summary className={styles.questionSummary}>
                <h3>{questao.enunciado}</h3>

                {[
                  questao.alternativa_a,
                  questao.alternativa_b,
                  questao.alternativa_c,
                  questao.alternativa_d,
                  questao.alternativa_e,
                ]
                  .filter(Boolean)
                  .map((alternativa) => (
                    <p key={alternativa}>{alternativa}</p>
                  ))}

                <span
                  className={styles.expandIcon}
                  aria-hidden="true"
                >
                  &lt;
                </span>
              </summary>

              <div className={styles.answer}>
                <p>
                  <strong>Resposta:</strong> {questao.resposta}
                </p>

                <p>
                  <strong>Comentário:</strong> {questao.comentario}
                </p>

                {(questao.material ||
                  questao.material_apoio ||
                  questao.material_de_apoio) && (
                  <div>
                    <p>
                      <strong>Material de apoio:</strong>
                    </p>
                    <p>
                      {questao.material ||
                        questao.material_apoio ||
                        questao.material_de_apoio}
                    </p>
                  </div>
                )}
              </div>
            </details>
          ))}
      </div>
    </div>
  );
}