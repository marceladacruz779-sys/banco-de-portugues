import Navbar from "../../components/Navbar";
import styles from "./styles.module.css";

function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <Navbar />

        <div className={styles.heroTitle}>
          <h1>Banco de Questões</h1>
        </div>
      </section>

      <main className={styles.main}>
        <section className={styles.about}>
          <article className={styles.aboutCard}>
            <h2>SOBRE NÓS</h2>
            <p>
              Nós somos o Megamind, uma equipe de programadoras focadas no
              desenvolvimento de sistemas. Nosso grupo contém cinco estudantes
              da rede SESI - SENAI da cidade de Vinhedo. Esse projeto foi
              desenvolvido durante nosso último ano escolar, o terceiro ano.
            </p>
          </article>

          <article className={styles.aboutCard}>
            <h2>OBJETIVO</h2>
            <p>
              Nosso objetivo é promover uma plataforma de acesso a questões de
              Língua Portuguesa, com foco em Gramática e Literatura, para
              vestibulandos. Esse projeto servirá como avaliação do grupo,
              servindo como patamar para a conclusão do curso SENAI.
            </p>
          </article>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>Megamind @ SESI-SENAI</p>
      </footer>
    </div>
  );
}

export default Home;
