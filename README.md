# Simulados Online — Lógica de Programação & Scratch

## Contexto

Este projeto foi criado para as aulas do **laboratório de informática**
da [Escola Aquarela do Brasil](https://qedu.org.br/escola/35444327-escola-aquarela-do-brasil),
mais especificamente para apoiar a atividade de pesquisa sobre lógica
de programação dos alunos do **4º ano (2026)**.

A estrutura foi pensada para ser genérica e reutilizável: qualquer
turma ou tema novo pode virar um simulado adicionando uma entrada em
`js/questoes.js` (veja "Como adicionar um novo simulado ao menu"
abaixo), então o projeto pode continuar sendo usado em anos e turmas
futuras, não só nesta atividade específica.

Um único projeto estático (HTML + CSS + JS puro, sem build step, sem
backend) com uma **tela inicial de menu**, onde a pessoa escolhe qual
simulado quer fazer. Um único deploy no **GitHub Pages** publica os
dois.

```
simulado-unico/
├── index.html                  # única página da aplicação
├── css/
│   └── style.css                # estilos do hub + dos dois temas de cor
├── js/
│   ├── questoes.js              # bancos de questões dos dois simulados
│   └── app.js                   # motor: menu, quiz e tela de resultado
└── .github/
    └── workflows/
        └── deploy.yml            # publica no GitHub Pages a cada push na main
```

## Como funciona

1. Ao abrir a página, a pessoa vê um **menu** com um card para cada
   simulado disponível (hoje: "Lógica de Programação" e "Scratch"),
   cada um com sua cor e número de questões.
2. Ao clicar em "Iniciar este simulado", o `<body>` recebe um atributo
   `data-tema="logica"` ou `data-tema="scratch"`, que troca a paleta de
   cores, a tipografia e o motivo decorativo da barra de progresso —
   tudo via CSS, sem recarregar a página.
3. O fluxo de perguntas, feedback, pontuação e resultado final é
   exatamente o mesmo dos dois simulados; só os dados (perguntas) e o
   tema visual mudam.
4. Um botão "← Trocar simulado" (no topo do quiz) e "Escolher outro
   simulado" (na tela de resultado) levam de volta ao menu a qualquer
   momento, sem sair da página.

## Como publicar no GitHub Pages

Este projeto já vem com um workflow pronto
(`.github/workflows/deploy.yml`) que publica o site automaticamente a
cada `push` na branch `main`.

1. Crie um repositório no GitHub e suba **todo** o conteúdo desta
   pasta (o `index.html` precisa ficar na raiz do repositório).
2. No repositório, vá em **Settings → Pages** e, em "Build and
   deployment → Source", selecione **GitHub Actions** (não
   "Deploy from a branch").
3. Faça um `push` para a branch `main` — a aba **Actions** vai mostrar
   o workflow "Deploy para o GitHub Pages" rodando.
4. Ao final, o link do site aparece em Settings → Pages e também na
   própria execução do workflow (saída `page_url`).

Não é necessário nenhum passo de build, servidor ou banco de dados —
é só HTML/CSS/JS estático; o workflow apenas empacota e publica os
arquivos como estão.

## Como adicionar um novo simulado ao menu

Tudo fica centralizado em `js/questoes.js`. Basta acrescentar uma nova
chave em `window.QUIZZES`, seguindo o mesmo formato dos exemplos
existentes:

```js
window.QUIZZES = {
  logica: { /* ... já existe ... */ },
  scratch: { /* ... já existe ... */ },

  meuNovoSimulado: {
    id: "meuNovoSimulado",
    tema: "meuNovoSimulado",        // usado no data-tema e nas classes CSS
    titulo: "Título do simulado",
    subtitulo: "Legenda mostrada durante o quiz",
    descricaoCurta: "Frase curta mostrada no card do menu.",
    questoes: [
      {
        pergunta: "Texto da pergunta?",
        alternativas: ["Alternativa A", "Alternativa B", "Alternativa C", "Alternativa D"],
        correta: 0, // índice da alternativa correta (0 = A, 1 = B, 2 = C, 3 = D)
        explicacao: "Por que essa é a resposta correta."
      }
      // ... demais questões
    ]
  }
};
```

O menu, a barra de progresso e a randomização se ajustam
automaticamente ao número de questões — não é preciso mexer em
`app.js`.

Se quiser dar uma cor própria ao novo tema (e não usar a paleta neutra
padrão), adicione em `css/style.css` um bloco como:

```css
body[data-tema="meuNovoSimulado"] {
  --accent: #minha-cor;
  --accent-strong: #minha-cor-mais-clara;
  --accent-soft: #fundo-suave-com-a-cor;
  /* ...demais variáveis, seguindo o mesmo padrão dos temas existentes */
}

.menu-cartao-meuNovoSimulado {
  --accent-card: #minha-cor;
}
```

## Como editar as questões existentes

Abra `js/questoes.js` e localize o bloco `logica:` ou `scratch:`. Cada
questão segue este formato:

```js
{
  pergunta: "Texto da pergunta?",
  alternativas: ["Alternativa A", "Alternativa B", "Alternativa C", "Alternativa D"],
  correta: 1, // índice da alternativa correta (0 = A, 1 = B, 2 = C, 3 = D)
  explicacao: "Por que essa é a resposta correta."
}
```

Para adicionar, remover ou reescrever questões, basta editar o array
`questoes` do simulado desejado — tudo se ajusta automaticamente.

## Como funciona a randomização

A cada clique em "Iniciar este simulado" ou "Refazer este simulado":

- A **ordem das questões** é embaralhada.
- A **ordem das alternativas** de cada questão também é embaralhada
  (o índice da resposta correta é recalculado automaticamente).

## Identidade visual

Os dois temas compartilham a mesma estrutura de layout, tipografia
(tamanhos e hierarquia), espaçamentos, componentes e fluxo de uso — a
diferenciação acontece pela paleta de cores e por um pequeno motivo
decorativo ligado ao tema de cada simulado:

| | Lógica de Programação | Scratch |
|---|---|---|
| Paleta | Azul-índigo profundo + acento azul elétrico | Violeta profundo + laranja/âmbar |
| Tipografia | Space Grotesk + IBM Plex Mono | Fredoka + Inter |
| Motivo visual | Barra de progresso com formas de fluxograma (retângulo/losango) | Barra de progresso com blocos empilhados, lembrando o encaixe de blocos do Scratch |

**Nenhum elemento da interface usa a cor verde**, em nenhum dos temas
— acertos são sinalizados com a cor de destaque do tema (azul ou
laranja) *e* com o ícone "✓", e erros com vermelho/coral e o ícone
"✕", garantindo que a informação não dependa só da cor.

## Acessibilidade e responsividade

- Layout fluido, de celulares (320px) até desktop.
- Foco de teclado visível em botões e alternativas.
- `prefers-reduced-motion` é respeitado (desliga transições).
- Feedback de acerto/erro nunca depende só de cor (usa também ícone e
  texto).