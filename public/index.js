// 1. DADOS INICIAIS (ESTATICOS)
const ligas = [
  {
    id: 1,
    nome: "Premier League",
    descricao: "A principal e mais disputada liga de futebol da Inglaterra.",
    detalhesGerais:
      "Conhecida mundialmente pelo alto nivel de competitividade, arenas lotadas e ritmo de jogo extremamente intenso.",
    imagem: "imgsLigas/PremierLeague.jpg",
    destaque: true,
    times: [
      { id: 1, nome: "Liverpool", imagem: "imgsLigas/Liverpool.png" },
      {
        id: 2,
        nome: "Manchester United",
        imagem: "imgsLigas/ManchesterUnited.png",
      },
      { id: 3, nome: "Arsenal", imagem: "imgsLigas/Arsenal.png" },
      { id: 4, nome: "Manchester City", imagem: "imgsLigas/City.png" },
      { id: 5, nome: "Chelsea", imagem: "imgsLigas/Chelsea.png" },
      { id: 6, nome: "Tottenham", imagem: "imgsLigas/Tottenham.png" },
    ],
  },
  {
    id: 2,
    nome: "La Liga",
    descricao: "A prestigiada liga das estrelas da Espanha.",
    detalhesGerais:
      "Famosa pela tecnica refinada, posse de bola e por abrigar um dos maiores classicos do planeta (Real Madrid vs Barcelona).",
    imagem: "imgsLigas/LaLiga.jpg",
    destaque: true,
    times: [
      { id: 1, nome: "Real Madrid", imagem: "imgsLigas/RealMadrid.png" },
      { id: 2, nome: "Barcelona", imagem: "imgsLigas/Barcelona.png" },
      {
        id: 3,
        nome: "Atletico de Madrid",
        imagem: "imgsLigas/AtleticoMadrid.png",
      },
      { id: 4, nome: "Athletic Bilbao", imagem: "imgsLigas/Bilbao.png" },
      { id: 5, nome: "Valencia", imagem: "imgsLigas/Valencia.png" },
      { id: 6, nome: "Real Sociedad", imagem: "imgsLigas/Sociedad.png" },
    ],
  },
  {
    id: 3,
    nome: "Serie A",
    descricao: "A tradicional e tatica liga de futebol da Italia.",
    detalhesGerais:
      "Uma das ligas mais historicas da Europa, reconhecida mundialmente pela rigidez defensiva e paixao fervorosa de suas torcidas.",
    imagem: "imgsLigas/SerieA.jpg",
    destaque: true,
    times: [
      { id: 1, nome: "Milan", imagem: "imgsLigas/Milan.png" },
      { id: 2, nome: "Juventus", imagem: "imgsLigas/Juventus.png" },
      { id: 3, nome: "Inter de Milao", imagem: "imgsLigas/Inter.png" },
      { id: 4, nome: "Roma", imagem: "imgsLigas/Roma.png" },
      { id: 5, nome: "Napoli", imagem: "imgsLigas/Napoli.png" },
      { id: 6, nome: "Genoa", imagem: "imgsLigas/Genoa.png" },
    ],
  },
  {
    id: 4,
    nome: "Bundesliga",
    descricao:
      "A liga da Alemanha, famosa por seus gols e festa nas arquibancadas.",
    detalhesGerais:
      "Ostenta a maior media de publico nos estadios da Europa, com jogos dinamicos, ofensivos e excelente gestao de clubes.",
    imagem: "imgsLigas/Bundesliga.png",
    destaque: false,
    times: [
      { id: 1, nome: "Bayern de Munique", imagem: "imgsLigas/Bayern.png" },
      { id: 2, nome: "Borussia Dortmund", imagem: "imgsLigas/Borussia.png" },
      { id: 3, nome: "Nuremberg", imagem: "imgsLigas/Nuremberg.png" },
      { id: 4, nome: "Schalke 04", imagem: "imgsLigas/Schalke.png" },
      { id: 5, nome: "Hamburgo", imagem: "imgsLigas/Hamburgo.png" },
      { id: 6, nome: "Stuttgart", imagem: "imgsLigas/Stuttgart.png" },
    ],
  },
  {
    id: 5,
    nome: "Brasileirao",
    descricao:
      "A elite do futebol brasileiro e uma das ligas mais imprevisiveis do mundo.",
    detalhesGerais:
      "O berco dos maiores craques da historia. Destaca-se pelo equilibrio extremo onde multiplos clubes lutam pelo titulo a cada ano.",
    imagem: "imgsLigas/Brasileirao.png",
    destaque: false,
    times: [
      { id: 1, nome: "Flamengo", imagem: "imgsLigas/Flamengo.png" },
      { id: 2, nome: "Palmeiras", imagem: "imgsLigas/Palmeiras.png" },
      { id: 3, nome: "Santos", imagem: "imgsLigas/Santos.png" },
      { id: 4, nome: "Sao Paulo", imagem: "imgsLigas/SaoPaulo.png" },
      { id: 5, nome: "Atletico Mineiro", imagem: "imgsLigas/Galo.png" },
      { id: 6, nome: "Cruzeiro", imagem: "imgsLigas/Cruzeiro.png" },
    ],
  },
  {
    id: 6,
    nome: "Ligue 1",
    descricao:
      "A liga de futebol da Franca, marcada pelo talento jovem e grandes espetaculos.",
    detalhesGerais:
      "Reconhecida historicamente como um dos maiores celeiros de craques do mundo, combinando forca fisica, tecnica e o protagonismo de clubes gigantes.",
    imagem: "imgsLigas/Ligue1.jpg",
    destaque: false,
    times: [
      { id: 1, nome: "Paris Saint-Germain", imagem: "imgsLigas/PSG.png" },
      {
        id: 2,
        nome: "Olympique de Marseille",
        imagem: "imgsLigas/Marseille.png",
      },
      { id: 3, nome: "Lyon", imagem: "imgsLigas/Lyon.png" },
      { id: 4, nome: "Monaco", imagem: "imgsLigas/Monaco.png" },
      { id: 5, nome: "Lille", imagem: "imgsLigas/Lille.png" },
      { id: 6, nome: "Nice", imagem: "imgsLigas/Nice.png" },
    ],
  },
];

const CHAVE_LIGAS = "ligas";
const CHAVE_USUARIOS = "usuarios";
const CHAVE_USUARIO_LOGADO = "usuarioLogado";

function lerJSON(chave, valorPadrao) {
  try {
    const valor = localStorage.getItem(chave);
    return valor ? JSON.parse(valor) : valorPadrao;
  } catch {
    return valorPadrao;
  }
}

function salvarJSON(chave, valor) {
  localStorage.setItem(chave, JSON.stringify(valor));
}

function inicializarDados() {
  if (!localStorage.getItem(CHAVE_LIGAS)) {
    salvarJSON(CHAVE_LIGAS, ligas);
  }
}

function corrigirCaminhosDasImagensSalvas() {
  const ligasSalvas = obterLigas();
  let teveCorrecao = false;

  ligasSalvas.forEach((liga) => {
    if (!liga.times) return;

    liga.times.forEach((time) => {
      if (time.nome === "Schalke 04") {
        time.imagem = "imgsLigas/Schalke.png";
        teveCorrecao = true;
      }

      if (time.nome === "Lille") {
        time.imagem = "imgsLigas/Lille.png";
        teveCorrecao = true;
      }
    });
  });

  if (teveCorrecao) {
    salvarLigas(ligasSalvas);
  }
}

function obterLigas() {
  return lerJSON(CHAVE_LIGAS, ligas);
}

function salvarLigas(ligasAtualizadas) {
  salvarJSON(CHAVE_LIGAS, ligasAtualizadas);
}

function normalizarUsuario(valor) {
  if (!valor) return null;

  if (typeof valor === "string") {
    const texto = valor.trim();
    if (!texto) return null;

    try {
      return normalizarUsuario(JSON.parse(texto));
    } catch {
      return {
        nome: texto.split("@")[0] || texto,
        email: texto,
        admin: texto === "admin@admin.com",
      };
    }
  }

  if (typeof valor === "object") {
    const email = String(valor.email || "").trim();
    const nome = String(valor.nome || email.split("@")[0] || "Usuario").trim();

    if (!email) return null;

    return {
      ...valor,
      nome,
      email,
      admin: valor.admin === true,
    };
  }

  return null;
}

function obterUsuarioLogado() {
  let usuario = normalizarUsuario(sessionStorage.getItem(CHAVE_USUARIO_LOGADO));

  if (!usuario) {
    usuario = normalizarUsuario(localStorage.getItem(CHAVE_USUARIO_LOGADO));

    if (usuario) {
      salvarUsuarioLogado(usuario);
    }
  }

  return usuario;
}

function salvarUsuarioLogado(usuario) {
  const usuarioNormalizado = normalizarUsuario(usuario);

  if (!usuarioNormalizado) {
    limparUsuarioLogado();
    return;
  }

  sessionStorage.setItem(CHAVE_USUARIO_LOGADO, JSON.stringify(usuarioNormalizado));
  localStorage.removeItem(CHAVE_USUARIO_LOGADO);
}

function limparUsuarioLogado() {
  localStorage.removeItem(CHAVE_USUARIO_LOGADO);
  sessionStorage.removeItem(CHAVE_USUARIO_LOGADO);
}

function chaveFavoritos(usuario) {
  return `favoritos_${usuario.email}`;
}

function obterFavoritos(usuario) {
  if (!usuario) return [];
  return lerJSON(chaveFavoritos(usuario), []);
}

function salvarFavoritos(usuario, favoritos) {
  if (!usuario) return;
  salvarJSON(chaveFavoritos(usuario), favoritos);
}

function criarCardLiga(liga, estaFavoritado) {
  const iconeCoracao = estaFavoritado ? "&#9829;" : "&#9825;";

  return `
    <div class="col">
      <div class="card h-100 shadow-sm position-relative border-0 rounded-3 overflow-hidden">
        <button class="btn-favorito position-absolute top-0 end-0 m-2" data-id="${liga.id}" type="button">
          ${iconeCoracao}
        </button>

        <img src="${liga.imagem}" class="card-img-top" alt="${liga.nome}">

        <div class="card-body d-flex flex-column">
          <h5 class="card-title fw-bold">${liga.nome}</h5>
          <p class="card-text text-muted small flex-grow-1">${liga.descricao}</p>
          <a href="detalhes.html?id=${liga.id}" class="btn btn-dark btn-sm mt-2 rounded-2">Ver Detalhes</a>
        </div>
      </div>
    </div>`;
}

function renderizarCards(listaDeLigas = obterLigas()) {
  const cardsContainer = document.getElementById("cards-container");
  if (!cardsContainer) return;

  const usuarioLogado = obterUsuarioLogado();
  const favoritos = obterFavoritos(usuarioLogado);

  cardsContainer.innerHTML = listaDeLigas
    .map((liga) => criarCardLiga(liga, favoritos.includes(liga.id)))
    .join("");

  configurarCliquesFavoritos(cardsContainer);
}

function configurarCliquesFavoritos(container = document) {
  const botoes = container.querySelectorAll(".btn-favorito");

  botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
      const usuarioLogado = obterUsuarioLogado();

      if (!usuarioLogado) {
        alert("Voce precisa fazer login para favoritar ligas!");
        window.location.href = "login.html";
        return;
      }

      const idLiga = Number(botao.getAttribute("data-id"));
      atualizarFavorito(usuarioLogado, idLiga);
    });
  });
}

function atualizarFavorito(usuario, idLiga) {
  const favoritos = obterFavoritos(usuario);
  const index = favoritos.indexOf(idLiga);

  if (index !== -1) {
    favoritos.splice(index, 1);
  } else {
    favoritos.push(idLiga);
  }

  salvarFavoritos(usuario, favoritos);

  if (document.getElementById("favoritos-container")) {
    renderizarFavoritos();
  } else if (document.getElementById("cards-container")) {
    renderizarCards(obterLigas());
  } else {
    window.location.reload();
  }
}

function renderizarMenuAutenticacao() {
  const marcadorAutenticacao = document.getElementById("marcador-autenticacao");
  const usuarioLogado = obterUsuarioLogado();

  if (!marcadorAutenticacao) return;

  if (usuarioLogado) {
    marcadorAutenticacao.innerHTML = `
      <span class="text-white-50 small d-none d-md-inline">Ola, <strong class="text-white">${usuarioLogado.nome}</strong></span>
      <button id="btn-logout" class="btn btn-outline-danger btn-sm px-3 rounded-2" type="button">Sair</button>
    `;

    document.getElementById("btn-logout").addEventListener("click", () => {
      limparUsuarioLogado();
      window.location.href = "login.html";
    });
  } else {
    marcadorAutenticacao.innerHTML = `
      <a href="login.html" class="btn btn-light btn-sm px-4 fw-bold rounded-2 shadow-sm">Entrar</a>
    `;
  }
}

function gerenciarSegurancaEMenu() {
  const usuarioLogado = obterUsuarioLogado();
  const paginaAtual = window.location.pathname;
  const linkGerenciar = document.getElementById("link-gerenciar");
  const linksFavoritos = document.querySelectorAll('a[href*="favoritos.html"]');

  linksFavoritos.forEach((link) => {
    if (usuarioLogado) {
      link.style.removeProperty("display");
    } else {
      link.style.setProperty("display", "none", "important");
    }
  });

  if (linkGerenciar) {
    linkGerenciar.style.setProperty(
      "display",
      usuarioLogado && usuarioLogado.admin === true ? "block" : "none",
      "important",
    );
  }

  if (paginaAtual.includes("favoritos.html") && !usuarioLogado) {
    alert("Por favor, faca login para acessar esta pagina!");
    window.location.href = "login.html";
    return false;
  }

  if (
    paginaAtual.includes("cadastro_itens.html") &&
    (!usuarioLogado || usuarioLogado.admin !== true)
  ) {
    alert("Acesso restrito! Esta pagina e exclusiva para administradores.");
    window.location.href = "login.html";
    return false;
  }

  return true;
}

function configurarCarousel() {
  const indicatorsContainer = document.getElementById(
    "carousel-indicators-container",
  );
  const innerContainer = document.getElementById("carousel-inner-container");

  if (!indicatorsContainer || !innerContainer) return;

  const itensDestaque = obterLigas().filter((liga) => liga.destaque);
  indicatorsContainer.innerHTML = "";
  innerContainer.innerHTML = "";

  itensDestaque.forEach((liga, index) => {
    const active = index === 0 ? "active" : "";

    indicatorsContainer.innerHTML += `
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="${index}"
        class="${active}"
        aria-current="${index === 0 ? "true" : "false"}"
        aria-label="${liga.nome}"
      ></button>`;

    innerContainer.innerHTML += `
      <div class="carousel-item ${active}">
        <a href="detalhes.html?id=${liga.id}" class="d-block text-center h-100">
          <img src="${liga.imagem}" class="carousel-img" alt="${liga.nome}" style="transform: translateY(-25px);">
        </a>

        <div class="position-absolute bottom-0 start-0 w-100 bg-dark bg-opacity-75 text-light text-center py-2 px-3" style="z-index: 10;">
          <h5 class="fw-bold mb-0 d-inline-block me-2">${liga.nome}:</h5>
          <p class="mb-0 small d-inline-block text-white-50">${liga.descricao}</p>
        </div>
      </div>`;
  });
}

function configurarPesquisa() {
  const btnPesquisar = document.getElementById("btn-pesquisa");
  const inputPesquisar = document.getElementById("input-pesquisa");

  if (!btnPesquisar || !inputPesquisar) return;

  btnPesquisar.addEventListener("click", () => {
    const termoPesquisa = inputPesquisar.value.trim().toLowerCase();
    const ligasFiltradas = obterLigas().filter((liga) => {
      const nomeDaLiga = liga.nome.toLowerCase();
      const descricaoDaLiga = liga.descricao.toLowerCase();
      return (
        nomeDaLiga.includes(termoPesquisa) ||
        descricaoDaLiga.includes(termoPesquisa)
      );
    });

    renderizarCards(ligasFiltradas);
  });

  inputPesquisar.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      btnPesquisar.click();
    }
  });
}

function renderizarFavoritos() {
  const favoritosContainer = document.getElementById("favoritos-container");
  if (!favoritosContainer) return;

  const usuarioLogado = obterUsuarioLogado();
  if (!usuarioLogado) return;

  const favoritosIds = obterFavoritos(usuarioLogado);
  const ligasFavoritadas = obterLigas().filter((liga) =>
    favoritosIds.includes(liga.id),
  );

  if (ligasFavoritadas.length === 0) {
    favoritosContainer.innerHTML = `
      <div class="w-100 text-center py-5" style="min-height: 360px;">
        <p class="text-muted lead">Voce ainda nao favoritou nenhuma liga.</p>
        <a href="index.html" class="btn btn-dark btn-sm rounded-2">Voltar para a Home</a>
      </div>`;
    return;
  }

  favoritosContainer.innerHTML = ligasFavoritadas
    .map((liga) => criarCardLiga(liga, true))
    .join("");

  configurarCliquesFavoritos(favoritosContainer);
}

function renderizarDetalhes() {
  const detalheContainer = document.getElementById("detalhe-liga-container");
  const timesContainer = document.getElementById("times-container");

  if (!detalheContainer || !timesContainer) return;

  const urlParams = new URLSearchParams(window.location.search);
  const idLiga = Number(urlParams.get("id"));
  const ligaSelecionada = obterLigas().find((liga) => liga.id === idLiga);

  if (!ligaSelecionada) {
    detalheContainer.innerHTML = `
      <div class="alert alert-danger">
        Liga nao encontrada! <a href="index.html">Voltar para Home</a>
      </div>`;
    return;
  }

  const usuarioLogado = obterUsuarioLogado();
  const favoritos = obterFavoritos(usuarioLogado);
  const estaFavoritado = favoritos.includes(ligaSelecionada.id);
  const iconeCoracao = estaFavoritado ? "&#9829;" : "&#9825;";

  detalheContainer.innerHTML = `
    <div class="row align-items-center">
      <div class="col-md-5 text-center">
        <img src="${ligaSelecionada.imagem}" class="img-fluid rounded p-3 bg-light" style="max-height: 300px; object-fit: contain;" alt="${ligaSelecionada.nome}">
      </div>
      <div class="col-md-7 position-relative">
        <div class="d-flex align-items-center justify-content-between justify-content-md-start gap-3 mb-2">
          <span class="badge bg-success">Liga Oficial</span>
          <button class="btn-favorito" id="btn-favorito-detalhe" style="position: relative !important; margin: 0 !important;" type="button">
            ${iconeCoracao}
          </button>
        </div>

        <h1 class="display-5 fw-bold">${ligaSelecionada.nome}</h1>
        <p class="lead text-secondary"><strong>Resumo:</strong> ${ligaSelecionada.descricao}</p>
        <hr>
        <p><strong>Contexto Historico:</strong> ${ligaSelecionada.detalhesGerais}</p>
        <p class="small text-muted">Codigo de Identificacao: #00${ligaSelecionada.id}</p>
      </div>
    </div>`;

  const btnFavoritoDetalhe = document.getElementById("btn-favorito-detalhe");
  if (btnFavoritoDetalhe) {
    btnFavoritoDetalhe.addEventListener("click", () => {
      const usuarioAtual = obterUsuarioLogado();

      if (!usuarioAtual) {
        alert("Voce precisa fazer login para favoritar ligas!");
        window.location.href = "login.html";
        return;
      }

      atualizarFavorito(usuarioAtual, ligaSelecionada.id);
    });
  }

  timesContainer.innerHTML = "";
  if (ligaSelecionada.times && ligaSelecionada.times.length > 0) {
    timesContainer.innerHTML = ligaSelecionada.times
      .map(
        (time) => `
          <div class="col text-center">
            <div class="p-3 border rounded bg-white shadow-sm h-100 d-flex flex-column align-items-center justify-content-center">
              <img src="${time.imagem}" alt="${time.nome}" class="img-fluid mb-2" style="max-height: 80px; width: auto; object-fit: contain;">
              <h6 class="fw-bold mb-0 small">${time.nome}</h6>
            </div>
          </div>`,
      )
      .join("");
  }
}

function configurarCadastroDeItens() {
  const tabelaLigasBody = document.getElementById("tabela-ligas-body");
  const formLiga = document.getElementById("form-liga");
  const btnNovaLiga = document.getElementById("btn-nova-liga");

  if (!tabelaLigasBody || !formLiga) return;

  function garantirCampoTimesNoFormulario() {
    if (document.getElementById("liga-times")) return;

    const campoTimesHTML = `
      <div class="mb-3" id="grupo-liga-times">
        <label for="liga-times" class="form-label fw-semibold">Times da liga</label>
        <textarea
          id="liga-times"
          class="form-control"
          rows="5"
          placeholder="Bayern de Munique | imgsLigas/Bayern.png"
        ></textarea>
        <div class="form-text">
          Digite um time por linha usando: Nome do time | caminho da imagem
        </div>
      </div>
    `;

    const campoDestaque = document.getElementById("liga-destaque");
    const grupoDestaque = campoDestaque
      ? campoDestaque.closest(".mb-3, .form-check")
      : null;

    if (grupoDestaque && grupoDestaque.parentElement) {
      grupoDestaque.insertAdjacentHTML("beforebegin", campoTimesHTML);
    } else {
      formLiga.insertAdjacentHTML("beforeend", campoTimesHTML);
    }
  }

  function transformarTimesEmTexto(times = []) {
    return times
      .map((time) => `${time.nome} | ${time.imagem}`)
      .join("\n");
  }

  function transformarTextoEmTimes(texto) {
    return texto
      .split("\n")
      .map((linha) => linha.trim())
      .filter(Boolean)
      .map((linha, index) => {
        const partes = linha.split("|");
        const nome = partes[0] ? partes[0].trim() : "";
        const imagem = partes[1] ? partes[1].trim() : "";

        if (!nome || !imagem) return null;

        return {
          id: index + 1,
          nome,
          imagem,
        };
      })
      .filter(Boolean);
  }

  garantirCampoTimesNoFormulario();

  function renderizarTabelaAdmin() {
    const ligasAtuais = obterLigas();
    tabelaLigasBody.innerHTML = "";

    ligasAtuais.forEach((liga) => {
      tabelaLigasBody.innerHTML += `
        <tr>
          <td class="fw-bold">#${liga.id}</td>
          <td><img src="${liga.imagem}" alt="${liga.nome}" style="height: 40px; width: 60px; object-fit: contain;" class="bg-light p-1 rounded"></td>
          <td class="fw-semibold">${liga.nome}</td>
          <td class="text-muted small">${liga.descricao.substring(0, 50)}...</td>
          <td><span class="badge ${liga.destaque ? "bg-primary" : "bg-secondary"}">${liga.destaque ? "Sim" : "Nao"}</span></td>
          <td class="text-center">
            <div class="btn-group btn-group-sm">
              <button class="btn btn-outline-dark btn-editar" data-id="${liga.id}" type="button">Editar</button>
              <button class="btn btn-outline-danger btn-excluir" data-id="${liga.id}" type="button">Excluir</button>
            </div>
          </td>
        </tr>`;
    });

    configurarAcoesTabela();
  }

  function configurarAcoesTabela() {
    const botoesExcluir = tabelaLigasBody.querySelectorAll(".btn-excluir");
    botoesExcluir.forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = Number(btn.getAttribute("data-id"));

        if (confirm("Tem certeza que deseja excluir esta liga?")) {
          const ligasAtualizadas = obterLigas().filter((liga) => liga.id !== id);
          salvarLigas(ligasAtualizadas);
          renderizarTabelaAdmin();
        }
      });
    });

    const botoesEditar = tabelaLigasBody.querySelectorAll(".btn-editar");
    botoesEditar.forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = Number(btn.getAttribute("data-id"));
        const ligaParaEditar = obterLigas().find((liga) => liga.id === id);

        if (!ligaParaEditar) return;

        document.getElementById("liga-id-form").value = ligaParaEditar.id;
        document.getElementById("liga-nome").value = ligaParaEditar.nome;
        document.getElementById("liga-descricao").value =
          ligaParaEditar.descricao;
        document.getElementById("liga-detalhes").value =
          ligaParaEditar.detalhesGerais;
        document.getElementById("liga-imagem").value = ligaParaEditar.imagem;
        document.getElementById("liga-destaque").checked =
          ligaParaEditar.destaque;
        document.getElementById("liga-times").value = transformarTimesEmTexto(
          ligaParaEditar.times || [],
        );

        const modal = new bootstrap.Modal(document.getElementById("ligaModal"));
        modal.show();
      });
    });
  }

  if (btnNovaLiga) {
    btnNovaLiga.addEventListener("click", () => {
      formLiga.reset();
      document.getElementById("liga-id-form").value = "";
      document.getElementById("liga-times").value = "";
    });
  }

  formLiga.addEventListener("submit", (e) => {
    e.preventDefault();

    const idForm = document.getElementById("liga-id-form").value;
    const nome = document.getElementById("liga-nome").value.trim();
    const descricao = document.getElementById("liga-descricao").value.trim();
    const detalhesGerais = document
      .getElementById("liga-detalhes")
      .value.trim();
    const imagem = document.getElementById("liga-imagem").value.trim();
    const destaque = document.getElementById("liga-destaque").checked;
    const times = transformarTextoEmTimes(
      document.getElementById("liga-times").value,
    );

    let ligasAtuais = obterLigas();

    if (idForm) {
      const idElemento = Number(idForm);
      ligasAtuais = ligasAtuais.map((liga) => {
        if (liga.id === idElemento) {
          return {
            ...liga,
            nome,
            descricao,
            detalhesGerais,
            imagem,
            destaque,
            times,
          };
        }

        return liga;
      });
    } else {
      const novoId =
        ligasAtuais.length > 0
          ? Math.max(...ligasAtuais.map((liga) => liga.id)) + 1
          : 1;

      ligasAtuais.push({
        id: novoId,
        nome,
        descricao,
        detalhesGerais,
        imagem,
        destaque,
        times,
      });
    }

    salvarLigas(ligasAtuais);

    const modalElement = document.getElementById("ligaModal");
    const modalInstance =
      bootstrap.Modal.getInstance(modalElement) ||
      new bootstrap.Modal(modalElement);
    modalInstance.hide();

    renderizarTabelaAdmin();
  });

  renderizarTabelaAdmin();
}

function configurarCadastroUsuario() {
  const formCadastro = document.getElementById("form-cadastro-usuario");
  if (!formCadastro) return;

  formCadastro.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("cad-nome").value.trim();
    const email = document.getElementById("cad-email").value.trim();
    const senha = document.getElementById("cad-senha").value;
    const usuarios = lerJSON(CHAVE_USUARIOS, []);

    if (usuarios.find((usuario) => usuario.email === email)) {
      alert("Este e-mail ja esta cadastrado!");
      return;
    }

    usuarios.push({ nome, email, senha, admin: false });
    salvarJSON(CHAVE_USUARIOS, usuarios);
    alert("Conta criada com sucesso! Faca login.");
    window.location.href = "login.html";
  });
}

function configurarLogin() {
  const formLogin = document.getElementById("form-login-usuario");
  if (!formLogin) return;

  if (!document.getElementById("aviso-admin-login")) {
    formLogin.insertAdjacentHTML(
      "beforebegin",
      `
        <div id="aviso-admin-login" class="alert alert-dark border-0 shadow-sm mb-4" role="alert">
          <p class="fw-bold mb-1">Quer testar o modo administrador?</p>
          <p class="mb-1 small">Use estes dados para entrar com acesso de admin:</p>
          <p class="mb-0 small">
            <strong>E-mail:</strong> admin@admin.com
            <span class="mx-2">|</span>
            <strong>Senha:</strong> admin123
          </p>
        </div>
      `,
    );
  }

  formLogin.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("login-email").value.trim();
    const senha = document.getElementById("login-senha").value.trim();

    if (email === "admin@admin.com" && senha === "admin123") {
      salvarUsuarioLogado({
        id: 999,
        nome: "Administrador",
        email: "admin@admin.com",
        admin: true,
      });

      alert("Bem-vindo, Administrador!");
      window.location.href = "index.html";
      return;
    }

    const usuarios = lerJSON(CHAVE_USUARIOS, []);
    const usuarioEncontrado = usuarios.find(
      (usuario) => usuario.email === email && usuario.senha === senha,
    );

    if (usuarioEncontrado) {
      salvarUsuarioLogado({
        ...usuarioEncontrado,
        admin: usuarioEncontrado.admin === true,
      });
      window.location.href = "index.html";
      return;
    }

    alert("E-mail ou senha incorretos! Tente novamente.");
  });
}

function renderizarGraficoAvancado() {
  const graficoContainer = document.getElementById("grafico-container");
  if (!graficoContainer) return;

  const ligasAtuais = obterLigas();

  if (ligasAtuais.length === 0) {
    graficoContainer.innerHTML =
      '<p class="text-muted small text-center py-2 m-0">Nenhuma liga configurada para exibir estatisticas.</p>';
    return;
  }

  let maxTimes = 0;
  ligasAtuais.forEach((liga) => {
    const qtdTimes = liga.times ? liga.times.length : 0;
    if (qtdTimes > maxTimes) maxTimes = qtdTimes;
  });

  if (maxTimes === 0) maxTimes = 1;

  graficoContainer.innerHTML = ligasAtuais
    .map((liga) => {
      const qtdTimes = liga.times ? liga.times.length : 0;
      const percentagemLargura = (qtdTimes / maxTimes) * 100;

      return `
        <div class="row align-items-center my-2 text-dark">
          <div class="col-4 col-md-3 text-end fw-semibold text-truncate small">
            ${liga.nome}
          </div>

          <div class="col-6 col-md-8">
            <div class="progress" style="height: 24px; background-color: #e9ecef;" role="progressbar">
              <div class="progress-bar bg-dark text-start ps-2 fw-bold small" style="width: ${percentagemLargura}%; transition: width 1s ease-in-out;">
                ${qtdTimes > 0 ? qtdTimes : ""}
              </div>
            </div>
          </div>

          <div class="col-2 col-md-1 small text-muted text-nowrap text-start">
            ${qtdTimes} ${qtdTimes === 1 ? "time" : "times"}
          </div>
        </div>`;
    })
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  inicializarDados();
  corrigirCaminhosDasImagensSalvas();

  const podeContinuar = gerenciarSegurancaEMenu();
  renderizarMenuAutenticacao();

  if (!podeContinuar) return;

  renderizarCards();
  configurarCarousel();
  configurarPesquisa();
  renderizarFavoritos();
  renderizarDetalhes();
  configurarCadastroDeItens();
  configurarCadastroUsuario();
  configurarLogin();
  renderizarGraficoAvancado();
});
