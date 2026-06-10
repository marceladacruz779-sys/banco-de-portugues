import "../styles.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    navigate("/login");
  };

  return (
    <>
      <div className="imagem">
       
       <Navbar></Navbar>

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