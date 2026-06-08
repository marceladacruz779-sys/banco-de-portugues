import "./styles.css";

function Home() {
  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    window.location.href = "/"; // ajuste a rota conforme seu projeto
  };

  return (
    <>
      <div className="imagem">
        <header>
          <div className="cabecalho">
            <nav>
              <a href="/home">Home</a>
              <a href="/gramatica">Gramática</a>
              <a href="/literatura">Literatura</a>
            </nav>

            <button
              onClick={handleLogout}
              className="btn-logout"
            >
              Logout
            </button>
          </div>
        </header>

        <section className="hero">
          <div className="information">
            <h2>Banco de Questões</h2>
          </div>
        </section>
      </div>

      <main className="home">
        <section className="conteudo">
          <div className="text_Sobre">
            <h3>SOBRE NÓS</h3>

            <h4>
              Nós somos o Megamind, uma equipe de programadoras focadas no
              desenvolvimento de sistemas. Nosso grupo contém cinco estudantes
              da rede SESI-SENAI da cidade de Vinhedo. Esse projeto foi
              desenvolvido durante nosso último ano escolar, o terceiro ano.
            </h4>
          </div>

          <div className="text_Objt">
            <h3>OBJETIVO</h3>

            <h4>
              Nosso objetivo é promover uma plataforma de acesso a questões de
              Língua Portuguesa, com foco em Gramática e Literatura, para
              vestibulandos. Esse projeto servirá como avaliação do grupo,
              servindo como patamar para a conclusão do curso SENAI.
            </h4>
          </div>
        </section>
      </main>

      <footer>
        <p>Megamind @ SESI-SENAI</p>
      </footer>
    </>
  );
}

export default Home;