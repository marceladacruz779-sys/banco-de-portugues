import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const showMessage = (text) => {
    setMessage(text);
    setTimeout(() => setMessage(""), 3000);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      showMessage("Preencha e-mail e senha.");
      return;
    }

    const defaultServerOrigin = "http://localhost:3000";
    const serverOrigin =
      window.location.origin === "null"
        ? defaultServerOrigin
        : window.location.origin.includes("localhost:3000")
          ? window.location.origin
          : defaultServerOrigin;

    try {
      const response = await fetch(`${serverOrigin}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const contentType = response.headers.get("content-type");
      let data;

      if (contentType?.includes("application/json")) {
        data = await response.json();
      } else {
        const text = await response.text();
        try {
          data = text ? JSON.parse(text) : {};
        } catch {
          data = { mensagem: text };
        }
      }

      if (!response.ok) {
        throw new Error(data.mensagem || "Falha no login");
      }

      localStorage.setItem("jwtToken", data.token);
      navigate("/");
    } catch (error) {
      if (error instanceof TypeError) {
        showMessage(
          "Não foi possível conectar ao servidor. Inicie o servidor com node app.js",
        );
      } else {
        showMessage(error.message);
      }
    }
  };

  return (
    <main className={styles.page}>
      <section className={styles.content}>
        <h1 className={styles.title}>Login</h1>

        <section className={styles.panel}>
          <h2>Insira seu email e senha</h2>
          {message && <div className={styles.message}>{message}</div>}

          <form className={styles.form} onSubmit={handleLogin}>
            <div className={styles.formRow}>
              <span className="material-symbols-outlined">person</span>
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="email"
                required
                placeholder="meu.email@.com.br"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className={styles.formRow}>
              <span className="material-symbols-outlined">key</span>
              <label htmlFor="password">Senha</label>
              <input
                id="password"
                type="password"
                required
                placeholder="senha"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <div className={styles.buttonRow}>
              <button className={styles.submit} type="submit">
                Entrar
              </button>
            </div>
          </form>
        </section>
      </section>
    </main>
  );
}
