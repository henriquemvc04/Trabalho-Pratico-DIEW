const ligas = [
  {
    id: 1,
    nome: "Premier League",
    descricao: "A principal e mais disputada liga de futebol da Inglaterra.",
    detalhesGerais: "Conhecida mundialmente pelo alto nível de competitividade, arenas lotadas e ritmo de jogo extremamente intenso.",
    imagem: "imgsLigas/PremierLeague.jpg",
    destaque: true,
    times: [
      { id: 1, nome: "Liverpool", imagem: "imgsLigas/Liverpool.png" },
      { id: 2, nome: "Manchester United", imagem: "imgsLigas/ManchesterUnited.png" },
      { id: 3, nome: "Arsenal", imagem: "imgsLigas/Arsenal.png" },
      { id: 4, nome: "Manchester City", imagem: "imgsLigas/City.png" },
      { id: 5, nome: "Chelsea", imagem: "imgsLigas/Chelsea.png" },
      { id: 6, nome: "Tottenham", imagem: "imgsLigas/Tottenham.png" }
    ]
  },
  {
    id: 2,
    nome: "La Liga",
    descricao: "A prestigiada liga das estrelas da Espanha.",
    detalhesGerais: "Famosa pela técnica refinada, posse de bola e por abrigar um dos maiores clássicos do planeta (Real Madrid vs Barcelona).",
    imagem: "imgsLigas/LaLiga.jpg",
    destaque: true,
    times: [
      { id: 1, nome: "Real Madrid", imagem: "imgsLigas/RealMadrid.png" },
      { id: 2, nome: "Barcelona", imagem: "imgsLigas/Barcelona.png" },
      { id: 3, nome: "Atletico de Madrid", imagem: "imgsLigas/AtleticoMadrid.png" },
      { id: 4, nome: "Athletic Bilbao", imagem: "imgsLigas/Bilbao.png" },
      { id: 5, nome: "Valencia", imagem: "imgsLigas/Valencia.png" },
      { id: 6, nome: "Real Sociedad", imagem: "imgsLigas/Sociedad.png" }
    ]
  },
  {
    id: 3,
    nome: "Serie A",
    descricao: "A tradicional e tática liga de futebol da Itália.",
    detalhesGerais: "Uma das ligas mais históricas da Europa, reconhecida mundialmente pela rigidez defensiva e paixão fervorosa de suas torcidas.",
    imagem: "imgsLigas/SerieA.jpg",
    destaque: true,
    times: [
      { id: 1, nome: "Milan", imagem: "imgsLigas/Milan.png" },
      { id: 2, nome: "Juventus", imagem: "imgsLigas/Juventus.png" },
      { id: 3, nome: "Inter de Milão", imagem: "imgsLigas/Inter.png" },
      { id: 4, nome: "Roma", imagem: "imgsLigas/Roma.png" },
      { id: 5, nome: "Napoli", imagem: "imgsLigas/Napoli.png" },
      { id: 6, nome: "Genoa", imagem: "imgsLigas/Genoa.png" }
    ]
  },
  {
    id: 4,
    nome: "Bundesliga",
    descricao: "A liga da Alemanha, famosa por seus gols e festa nas arquibancadas.",
    detalhesGerais: "Ostenta a maior média de público nos estádios da Europa, com jogos dinâmicos, ofensivos e excelente gestão de clubes.",
    imagem: "imgsLigas/Bundesliga.png",
    destaque: false,
    times: [
      { id: 1, nome: "Bayern de Munique", imagem: "imgsLigas/Bayern.png" },
      { id: 2, nome: "Borussia Dortmund", imagem: "imgsLigas/Borussia.png" },
      { id: 3, nome: "Nuremberg", imagem: "imgsLigas/Nuremberg.png" },
      { id: 4, nome: "Schalke 04", imagem: "imgsLigas/Schalke.png" },
      { id: 5, nome: "Hamburgo", imagem: "imgsLigas/Hamburgo.png" },
      { id: 6, nome: "Stuttgart", imagem: "imgsLigas/Stuttgart.png" }
    ]
  },
  {
    id: 5,
    nome: "Brasileirão",
    descricao: "A elite do futebol brasileiro e uma das ligas mais imprevisíveis do mundo.",
    detalhesGerais: "O berço dos maiores craques da história. Destaca-se pelo equilíbrio extremo onde múltiplos clubes lutam pelo título a cada ano.",
    imagem: "imgsLigas/Brasileirao.png",
    destaque: false,
    times: [
      { id: 1, nome: "Flamengo", imagem: "imgsLigas/Flamengo.png" },
      { id: 2, nome: "Palmeiras", imagem: "imgsLigas/Palmeiras.png" },
      { id: 3, nome: "Santos", imagem: "imgsLigas/Santos.png" },
      { id: 4, nome: "São Paulo", imagem: "imgsLigas/SaoPaulo.png" },
      { id: 5, nome: "Atlético Mineiro", imagem: "imgsLigas/Galo.png" },
      { id: 6, nome: "Cruzeiro", imagem: "imgsLigas/Cruzeiro.png" }
    ]
  },
  {
    id: 6,
    nome: "Ligue 1",
    descricao: "A liga de futebol da França, marcada pelo talento jovem e grandes espetáculos.",
    detalhesGerais: "Reconhecida historicamente como um dos maiores celeiros de craques do mundo, combinando força física, técnica e o protagonismo de clubes gigantes.",
    imagem: "imgsLigas/Ligue1.jpg",
    destaque: false,
    times: [
      { id: 1, nome: "Paris Saint-Germain", imagem: "imgsLigas/PSG.png" },
      { id: 2, nome: "Olympique de Marseille", imagem: "imgsLigas/Marseille.png" },
      { id: 3, nome: "Lyon", imagem: "imgsLigas/Lyon.png" },
      { id: 4, nome: "Monaco", imagem: "imgsLigas/Monaco.png" },
      { id: 5, nome: "Lille", imagem: "imgsLigas/Lille.png" },
      { id: 6, nome: "Nice", imagem: "imgsLigas/Nice.png" }
    ]
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const indicatorsContainer = document.getElementById('carousel-indicators-container');
  const innerContainer = document.getElementById('carousel-inner-container');
  const cardsContainer = document.getElementById('cards-container');

  // 1. MONTAGEM DO CARROSSEL
  if (indicatorsContainer && innerContainer) {
    const itensDestaque = ligas.filter(l => l.destaque);
    itensDestaque.forEach((liga, index) => {
      const active = index === 0 ? 'active' : '';
      indicatorsContainer.innerHTML += `<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${index}" class="${active}" aria-current="${index === 0 ? 'true' : 'false'}"></button>`;
      
      innerContainer.innerHTML += `
        <div class="carousel-item ${active}">
          <a href="detalhe.html?id=${liga.id}" class="d-block text-center h-100">
            <img src="${liga.imagem}" class="carousel-img" alt="${liga.nome}" style="transform: translateY(-25px);">
          </a>
          
          <div class="position-absolute bottom-0 start-0 w-100 bg-dark bg-opacity-75 text-light text-center py-2 px-3" style="z-index: 10;">
            <h5 class="fw-bold mb-0 d-inline-block me-2">${liga.nome}:</h5>
            <p class="mb-0 small d-inline-block text-white-50">${liga.descricao}</p>
          </div>
        </div>`;
    });
  }

  // 2. CARDS (HOME)
  if (cardsContainer) {
    ligas.forEach(liga => {
      cardsContainer.innerHTML += `
        <div class="col">
          <div class="card h-100 shadow-sm">
            <img src="${liga.imagem}" class="card-img-top" alt="${liga.nome}">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${liga.nome}</h5>
              <p class="card-text text-muted small flex-grow-1">${liga.descricao}</p>
              <a href="detalhe.html?id=${liga.id}" class="btn btn-dark btn-sm mt-2">Ver Detalhes</a>
            </div>
          </div>
        </div>`;
    });
  }

  // 3. PÁGINA DE DETALHES (detalhe.html)
  const detalheContainer = document.getElementById('detalhe-liga-container');
  const timesContainer = document.getElementById('times-container');

  if (detalheContainer && timesContainer) {
    const urlParams = new URLSearchParams(window.location.search);
    const idLiga = parseInt(urlParams.get('id'));
    const ligaSelecionada = ligas.find(l => l.id === idLiga);

    if (ligaSelecionada) {
      detalheContainer.innerHTML = `
        <div class="row align-items-center">
          <div class="col-md-5 text-center">
            <img src="${ligaSelecionada.imagem}" class="img-fluid rounded p-3 bg-light" style="max-height: 300px; object-fit: contain;" alt="${ligaSelecionada.nome}">
          </div>
          <div class="col-md-7">
            <span class="badge bg-success mb-2">Liga Oficial</span>
            <h1 class="display-5 fw-bold">${ligaSelecionada.nome}</h1>
            <p class="lead text-secondary"><strong>Resumo:</strong> ${ligaSelecionada.descricao}</p>
            <hr>
            <p><strong>Contexto Histórico:</strong> ${ligaSelecionada.detalhesGerais}</p>
            <p class="small text-muted">Código de Identificação: #00${ligaSelecionada.id}</p>
          </div>
        </div>
      `;

      ligaSelecionada.times.forEach(time => {
        timesContainer.innerHTML += `
          <div class="col text-center">
            <div class="p-3 border rounded bg-white shadow-sm h-100 d-flex flex-column align-items-center justify-content-center">
              <img src="${time.imagem}" alt="${time.nome}" class="img-fluid mb-2" style="max-height: 80px; width: auto; object-fit: contain;">
              <h6 class="fw-bold mb-0 small">${time.nome}</h6>
            </div>
          </div>
        `;
      });
    } else {
      detalheContainer.innerHTML = `<div class="alert alert-danger">Liga não encontrada! <a href="index.html">Voltar para Home</a></div>`;
    }
  }
});