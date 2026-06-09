import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const showMessage = (text) => {
    setMessage(text);
    setTimeout(() => setMessage(''), 3000);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      showMessage('Preencha e-mail e senha.');
      return;
    }

    const defaultServerOrigin = 'http://localhost:3000';
    const serverOrigin = window.location.origin === 'null'
      ? defaultServerOrigin
      : window.location.origin.includes('localhost:3000')
        ? window.location.origin
        : defaultServerOrigin;
    const loginUrl = `${serverOrigin}/auth/login`;

    try {
      const response = await fetch(loginUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      let data = null;
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
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
        throw new Error(data.mensagem || 'Falha no login');
      }

      localStorage.setItem('jwtToken', data.token);
      navigate('/');
    } catch (error) {
      if (error instanceof TypeError) {
        showMessage('Não foi possível conectar ao servidor. Inicie o servidor com node app.js');
      } else {
        showMessage(error.message);
      }
    }
  };

  return (
    <section className="hero">
      <header className="header-login">
        <h1>Login</h1>
      </header>

      <main>
        <section className="panel-login-panel">
          <h2>Insira seu email e senha</h2>
          {message && <div className="message">{message}</div>}
          <form onSubmit={handleLogin}>
            <div className="form-row">
              <span className="material-symbols-outlined">person</span>
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="email"
                required
                placeholder="meu.email@.com.br"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br />
            <div className="form-row">
              <span className="material-symbols-outlined">key</span>
              <label htmlFor="password">Senha</label>
              <input
                id="password"
                type="password"
                required
                placeholder="senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <br />
            <div className="button-row">
              <button className="login" type="submit">
                Entrar
              </button>
            </div>
          </form>
        </section>
      </main>
    </section>
  );
}
