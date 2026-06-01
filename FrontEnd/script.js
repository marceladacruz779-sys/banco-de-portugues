const loginForm = document.getElementById('loginForm');
const message = document.getElementById('message');

function showMessage(text) {
  message.textContent = text;
  setTimeout(() => {
    message.textContent = '';
  }, 3000);
}

async function handleLogin(event) {
  event.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!email || !password) {
    showMessage('Preencha e-mail e senha.');
    return;
  }

  const serverOrigin = window.location.origin === 'null' ? 'http://localhost:3000' : window.location.origin;
  const loginUrl = `${serverOrigin}/auth/login`;
  const homeUrl = `${serverOrigin}/home.html`;

  try {
    const response = await fetch(loginUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    // Ler a resposta com tolerância a bodies vazios ou não-JSON
    let data = null;
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      const text = await response.text();
      try {
        data = text ? JSON.parse(text) : {};
      } catch (e) {
        data = { mensagem: text };
      }
    }

    if (!response.ok) {
      throw new Error(data.mensagem || 'Falha no login');
    }

    localStorage.setItem('jwtToken', data.token);
    window.location.href = homeUrl;
  } catch (error) {
    if (error instanceof TypeError) {
      showMessage('Não foi possível conectar ao servidor. Inicie o servidor com node App.js e abra a página via http://localhost:3000');
    } else {
      showMessage(error.message);
    }
  }
}

loginForm.addEventListener('submit', handleLogin);
