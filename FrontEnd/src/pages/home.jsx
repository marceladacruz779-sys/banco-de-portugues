import "../index.css";
import "../script.js";

export default function Login() {
  return (
    <section className="hero">
      <header className="header-login">
        <h1>Login</h1>
      </header>

      <main>
        <section className="panel-login-panel">
          <h2>Faça login para acessar o Banco de Questões</h2>
          <div id="message" className="message"></div>
          <form id="loginForm">
            <div className="form-row">
              <span className="material-symbols-outlined">person</span>
              <label htmlFor="email">E-mail</label>
              <input id="email" type="email" required placeholder="meu.email@.com.br" />
            </div>
            <br />
            <div className="form-row">
              <span className="material-symbols-outlined">key</span>
              <label htmlFor="password">Senha</label>
              <input id="password" type="password" required placeholder="senha" />
            </div>
            <br />
            <div className="button-row">
              <button className="login" type="submit">Entrar</button>
            </div>
          </form>
        </section>
      </main>
    </section>
  );
}
