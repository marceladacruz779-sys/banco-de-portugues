const loginForm = document.getElementById('loginForm');
const message = document.getElementById('message');

function showMessage(text) {
  if (message) {
    message.textContent = text;
    setTimeout(() => {
      message.textContent = '';
    }, 3000);
  } else {
    console.log(text);
  }
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
      } catch {
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

window.onload = buscarQuestoes;

async function buscarQuestoes(){

    const banca = document.getElementById("banca").value;
    const tema = document.getElementById("tema").value;
    const dificuldade = document.getElementById("dificuldade").value;

    let url = "http://localhost:3000/filtro?";

    if(banca){
        url += `instituicao=${banca}&`;
    }

    if(tema){
        url += `nomet=${tema}&`;
    }

    if(dificuldade){
        url += `nomed=${dificuldade}`;
    }

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    try {
      const resposta = await fetch(url);

      if (!resposta.ok) {
        let errText = '';
        try { errText = await resposta.text(); } catch { errText = resposta.statusText; }
        showMessage('Erro ao buscar questões: ' + (errText || resposta.statusText));
        console.error('Fetch /filtro error:', resposta.status, errText);
        return;
      }

      const questoes = await resposta.json();

      if (!Array.isArray(questoes)) {
        showMessage('Resposta inesperada do servidor. Veja o console para mais detalhes.');
        console.error('Resposta /filtro não é array:', questoes);
        return;
      }

      questoes.forEach(q => {
        resultado.innerHTML += `
          <div class="questao">

            <h3>${q.enunciado}</h3>

            <p>A) ${q.alternativa_a}</p>
            <p>B) ${q.alternativa_b}</p>
            <p>C) ${q.alternativa_c}</p>
            <p>D) ${q.alternativa_d}</p>

            <p><strong>Resposta:</strong> ${q.resposta}</p>

            <p><strong>Comentário:</strong> ${q.comentario}</p>

            <hr>

          </div>
        `;
      });

    } catch (error) {
      showMessage('Erro de comunicação com o servidor. Abra o console para detalhes.');
      console.error('Erro ao buscar questões:', error);
    }

}

if (loginForm) {
  loginForm.addEventListener('submit', handleLogin);
}