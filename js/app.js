/**
 * Motor dos simulados — projeto único com um menu inicial para escolher
 * qual simulado fazer. Depende de `window.QUIZZES` (definido em
 * js/questoes.js), um objeto cujas chaves são os ids dos simulados:
 *
 * window.QUIZZES = {
 *   algumId: {
 *     id, tema, titulo, subtitulo, descricaoCurta,
 *     questoes: [{ pergunta, alternativas: [4 strings], correta: 0-3, explicacao }]
 *   },
 *   ...
 * }
 */
(function () {
  "use strict";

  const LETRAS = ["A", "B", "C", "D"];

  /** Embaralha um array in-place (Fisher–Yates) e retorna o próprio array. */
  function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  /**
   * Monta uma rodada nova de um simulado: embaralha a ordem das questões e,
   * para cada questão, embaralha a ordem das alternativas mantendo o
   * índice correto atualizado.
   */
  function montarRodada(quiz) {
    return embaralhar(quiz.questoes.slice()).map((q) => {
      const indices = embaralhar([0, 1, 2, 3]);
      const alternativas = indices.map((i) => q.alternativas[i]);
      const correta = indices.indexOf(q.correta);
      return {
        pergunta: q.pergunta,
        alternativas,
        correta,
        explicacao: q.explicacao,
      };
    });
  }

  function App(root, quizzes) {
    const idsQuizzes = Object.keys(quizzes);

    const state = {
      quizAtualId: null,
      questoes: [],
      atual: 0,
      pontos: 0,
      respondida: false,
    };

    root.innerHTML = `
      <div class="app-shell">
        <section class="tela tela-menu" data-tela="menu">
          <header class="menu-header">
            <p class="eyebrow">Simulados online</p>
            <h1>Escolha um simulado</h1>
            <p class="subtitulo">Selecione um dos temas abaixo para começar. A cada tentativa, a ordem das perguntas e das alternativas é sorteada novamente.</p>
          </header>
          <div class="menu-grade" data-menu-grade></div>
        </section>

        <section class="tela tela-quiz" data-tela="quiz" hidden>
          <div class="quiz-topo">
            <button class="link-voltar" data-acao="voltar-menu" type="button">← Trocar simulado</button>
          </div>
          <header class="quiz-header">
            <p class="eyebrow" data-quiz-eyebrow>Simulado online</p>
            <h1 data-quiz-titulo></h1>
            <p class="subtitulo" data-quiz-subtitulo></p>
          </header>

          <div class="progresso" aria-hidden="true">
            <div class="progresso-trilho" data-progresso-trilho></div>
          </div>
          <div class="status-linha">
            <span class="status-item" data-status-contador></span>
            <span class="status-item status-pontos" data-status-pontos>Pontuação: 0</span>
          </div>

          <div class="cartao cartao-questao">
            <h2 class="pergunta" data-pergunta></h2>
            <div class="alternativas" data-alternativas></div>
            <div class="feedback" data-feedback hidden>
              <p class="feedback-titulo" data-feedback-titulo></p>
              <p class="feedback-explicacao" data-feedback-explicacao></p>
            </div>
          </div>

          <div class="acoes">
            <button class="botao botao-primario" data-acao="proxima" disabled>Selecione uma alternativa</button>
          </div>
        </section>

        <section class="tela tela-fim" data-tela="fim" hidden>
          <div class="cartao cartao-fim">
            <p class="fim-rotulo" data-fim-rotulo>Resultado final</p>
            <div class="placar" data-placar>
              <span class="placar-numero" data-placar-numero>0</span>
              <span class="placar-total" data-placar-total>/ 0</span>
            </div>
            <p class="fim-mensagem" data-fim-mensagem></p>
            <div class="fim-acoes">
              <button class="botao botao-primario" data-acao="reiniciar">Refazer este simulado</button>
              <button class="botao botao-secundario" data-acao="voltar-menu">Escolher outro simulado</button>
            </div>
          </div>
        </section>
      </div>
    `;

    const telas = {
      menu: root.querySelector('[data-tela="menu"]'),
      quiz: root.querySelector('[data-tela="quiz"]'),
      fim: root.querySelector('[data-tela="fim"]'),
    };
    const elMenuGrade = root.querySelector("[data-menu-grade]");
    const elQuizEyebrow = root.querySelector("[data-quiz-eyebrow]");
    const elQuizTitulo = root.querySelector("[data-quiz-titulo]");
    const elQuizSubtitulo = root.querySelector("[data-quiz-subtitulo]");
    const elProgressoTrilho = root.querySelector("[data-progresso-trilho]");
    const elContador = root.querySelector("[data-status-contador]");
    const elPontos = root.querySelector("[data-status-pontos]");
    const elPergunta = root.querySelector("[data-pergunta]");
    const elAlternativas = root.querySelector("[data-alternativas]");
    const elFeedback = root.querySelector("[data-feedback]");
    const elFeedbackTitulo = root.querySelector("[data-feedback-titulo]");
    const elFeedbackExplicacao = root.querySelector("[data-feedback-explicacao]");
    const btnProxima = root.querySelector('[data-acao="proxima"]');
    const elFimRotulo = root.querySelector("[data-fim-rotulo]");
    const elPlacarNumero = root.querySelector("[data-placar-numero]");
    const elPlacarTotal = root.querySelector("[data-placar-total]");
    const elFimMensagem = root.querySelector("[data-fim-mensagem]");

    function mostrarTela(nome) {
      Object.entries(telas).forEach(([chave, el]) => {
        el.hidden = chave !== nome;
      });
    }

    function renderizarMenu() {
      elMenuGrade.innerHTML = "";
      idsQuizzes.forEach((id) => {
        const quiz = quizzes[id];
        const card = document.createElement("article");
        card.className = `menu-cartao menu-cartao-${quiz.tema}`;
        card.innerHTML = `
          <p class="menu-cartao-contador">${quiz.questoes.length} questões</p>
          <h2 class="menu-cartao-titulo">${quiz.titulo}</h2>
          <p class="menu-cartao-descricao">${quiz.descricaoCurta}</p>
          <button class="botao botao-primario" data-selecionar="${id}" type="button">Iniciar este simulado</button>
        `;
        elMenuGrade.appendChild(card);
      });
    }

    function irParaMenu() {
      document.body.removeAttribute("data-tema");
      mostrarTela("menu");
    }

    function construirProgresso(total) {
      elProgressoTrilho.innerHTML = "";
      for (let i = 0; i < total; i++) {
        const passo = document.createElement("span");
        passo.className = "progresso-passo";
        elProgressoTrilho.appendChild(passo);
      }
    }

    function atualizarProgresso() {
      const passos = elProgressoTrilho.querySelectorAll(".progresso-passo");
      passos.forEach((passo, i) => {
        passo.classList.toggle("passo-concluido", i < state.atual);
        passo.classList.toggle("passo-atual", i === state.atual);
      });
    }

    function iniciarQuiz(id) {
      const quiz = quizzes[id];
      if (!quiz) return;

      document.body.setAttribute("data-tema", quiz.tema);

      state.quizAtualId = id;
      state.questoes = montarRodada(quiz);
      state.atual = 0;
      state.pontos = 0;

      elQuizEyebrow.textContent = "Simulado online";
      elQuizTitulo.textContent = quiz.titulo;
      elQuizSubtitulo.textContent = quiz.subtitulo;

      construirProgresso(state.questoes.length);
      mostrarTela("quiz");
      renderizarQuestao();
    }

    function renderizarQuestao() {
      state.respondida = false;
      const q = state.questoes[state.atual];

      elContador.textContent = `Questão ${state.atual + 1} de ${state.questoes.length}`;
      elPontos.textContent = `Pontuação: ${state.pontos}`;
      elPergunta.textContent = q.pergunta;
      elFeedback.hidden = true;
      btnProxima.disabled = true;
      btnProxima.textContent = "Selecione uma alternativa";

      elAlternativas.innerHTML = "";
      q.alternativas.forEach((texto, i) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "alternativa";
        btn.setAttribute("data-indice", String(i));
        btn.innerHTML = `<span class="alternativa-letra">${LETRAS[i]}</span><span class="alternativa-texto">${texto}</span>`;
        btn.addEventListener("click", () => selecionar(i));
        elAlternativas.appendChild(btn);
      });

      atualizarProgresso();
    }

    function selecionar(indiceEscolhido) {
      if (state.respondida) return;
      state.respondida = true;

      const q = state.questoes[state.atual];
      const acertou = indiceEscolhido === q.correta;
      if (acertou) state.pontos += 1;

      const botoes = Array.from(elAlternativas.querySelectorAll(".alternativa"));
      botoes.forEach((btn) => {
        const i = Number(btn.getAttribute("data-indice"));
        btn.disabled = true;
        if (i === q.correta) {
          btn.classList.add("alternativa-correta");
        }
        if (i === indiceEscolhido && i !== q.correta) {
          btn.classList.add("alternativa-incorreta");
        }
        if (i === indiceEscolhido) {
          btn.classList.add("alternativa-selecionada");
        }
      });

      elFeedbackTitulo.textContent = acertou ? "✓ Resposta correta!" : "✕ Resposta incorreta";
      elFeedbackTitulo.className = "feedback-titulo " + (acertou ? "feedback-acerto" : "feedback-erro");
      elFeedbackExplicacao.textContent = q.explicacao;
      elFeedback.hidden = false;

      elPontos.textContent = `Pontuação: ${state.pontos}`;

      btnProxima.disabled = false;
      btnProxima.textContent =
        state.atual === state.questoes.length - 1 ? "Ver resultado" : "Próxima questão";
    }

    function avancar() {
      if (!state.respondida) return;
      if (state.atual < state.questoes.length - 1) {
        state.atual += 1;
        renderizarQuestao();
      } else {
        finalizar();
      }
    }

    function finalizar() {
      atualizarProgresso();
      const quiz = quizzes[state.quizAtualId];
      const total = state.questoes.length;
      const pct = Math.round((state.pontos / total) * 100);

      elFimRotulo.textContent = `Resultado — ${quiz.titulo}`;
      elPlacarNumero.textContent = String(state.pontos);
      elPlacarTotal.textContent = `/ ${total}`;

      let mensagem;
      if (pct === 100) {
        mensagem = "Pontuação perfeita! Você dominou todos os tópicos deste simulado.";
      } else if (pct >= 70) {
        mensagem = `Muito bom! Você acertou ${pct}% das questões.`;
      } else if (pct >= 40) {
        mensagem = `Você acertou ${pct}% das questões. Vale revisar os pontos que ficaram confusos.`;
      } else {
        mensagem = `Você acertou ${pct}% das questões. Que tal revisar o conteúdo e tentar novamente?`;
      }
      elFimMensagem.textContent = mensagem;
      mostrarTela("fim");
    }

    root.addEventListener("click", (ev) => {
      const alvoSelecionar = ev.target.closest("[data-selecionar]");
      if (alvoSelecionar) {
        iniciarQuiz(alvoSelecionar.getAttribute("data-selecionar"));
        return;
      }

      const acao = ev.target.closest("[data-acao]")?.getAttribute("data-acao");
      if (acao === "proxima") avancar();
      if (acao === "reiniciar") iniciarQuiz(state.quizAtualId);
      if (acao === "voltar-menu") irParaMenu();
    });

    renderizarMenu();
    mostrarTela("menu");
  }

  document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("app-root");
    if (root && window.QUIZZES) {
      App(root, window.QUIZZES);
    }
  });
})();
