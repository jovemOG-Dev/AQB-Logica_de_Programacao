// Bancos de questões de todos os simulados disponíveis no menu.
// Para adicionar um novo simulado, basta acrescentar uma nova chave em
// window.QUIZZES seguindo este mesmo formato (veja o README para detalhes).
//
// "correta" é o índice (0 = a, 1 = b, 2 = c, 3 = d) da alternativa correta.

window.QUIZZES = {
  logica: {
    id: "logica",
    tema: "logica",
    titulo: "Lógica de Programação",
    subtitulo: "Estruturas sequenciais, condicionais, de repetição, algoritmos e fluxogramas",
    descricaoCurta: "Estruturas sequenciais, condicionais, laços, algoritmos e fluxogramas.",
    questoes: [
{
      pergunta: "O que é a lógica de programação segundo o texto?",
      alternativas: [
        "Uma linguagem de programação gráfica para criar aplicativos.",
        "Um conjunto de princípios e técnicas para resolver problemas de forma estruturada e eficiente.",
        "Um sistema operacional focado no desenvolvimento de jogos.",
        "Um banco de dados utilizado para automatizar tarefas repetitivas."
      ],
      correta: 1,
      explicacao: "A lógica de programação não é uma linguagem, um sistema operacional nem um banco de dados: é o conjunto de princípios e técnicas que orientam a resolução estruturada e eficiente de problemas, servindo de base para qualquer linguagem que se use depois."
    },
    {
      pergunta: "Qual é um dos principais benefícios de dominar a lógica de programação para um desenvolvedor?",
      alternativas: [
        "Aumentar o processamento do hardware.",
        "Construir soluções que são funcionais, otimizadas e fáceis de manter.",
        "Eliminar a necessidade de testar o código do software.",
        "Dispensar o uso de algoritmos em projetos reais."
      ],
      correta: 1,
      explicacao: "Dominar a lógica de programação não altera o hardware nem elimina testes ou algoritmos; o ganho real é a capacidade de criar soluções funcionais, otimizadas e fáceis de manter ao longo do tempo."
    },
    {
      pergunta: "Quais são as três principais estruturas lógicas mencionadas no artigo?",
      alternativas: [
        "Início, meio e fim.",
        "Entrada, processamento e saída.",
        "Algoritmos, fluxogramas e códigos.",
        "Sequencial, condicional e de repetição."
      ],
      correta: 3,
      explicacao: "As três estruturas de controle fundamentais da lógica de programação são a sequencial, a condicional e a de repetição — a base sobre a qual qualquer algoritmo é construído."
    },
    {
      pergunta: "Como as estruturas sequenciais operam dentro de um programa?",
      alternativas: [
        "Executam instruções uma após a outra, exatamente na ordem em que aparecem.",
        "Escolhem aleatoriamente quais blocos de código serão rodados.",
        "Executam o mesmo bloco de código repetidas vezes até serem interrompidas.",
        "Ignoram instruções caso encontrem um erro de formatação."
      ],
      correta: 0,
      explicacao: "A estrutura sequencial segue rigorosamente a ordem em que as instruções aparecem no código, uma após a outra, sem pular ou repetir etapas por conta própria."
    },
    {
      pergunta: "Qual situação o texto utiliza como exemplo clássico para o uso de estruturas condicionais?",
      alternativas: [
        "Somar duas notas e calcular a média.",
        "Processar uma lista extensa de itens de um array.",
        "Verificar se a senha inserida em um sistema de controle de acesso está correta.",
        "Monitorar a temperatura de um forno em um sistema industrial."
      ],
      correta: 2,
      explicacao: "O exemplo clássico de estrutura condicional é justamente decidir entre dois caminhos com base em uma verificação — como conferir se a senha digitada em um sistema de acesso está correta ou não."
    },
    {
      pergunta: "Além da instrução \"if\" (se), quais outras variações de estruturas condicionais são citadas para gerenciar múltiplas condições?",
      alternativas: [
        "for e while.",
        "else e switch.",
        "start e stop.",
        "input e output."
      ],
      correta: 1,
      explicacao: "Para tratar múltiplos caminhos possíveis além do simples 'if', o texto cita o 'else' (para o caso contrário) e o 'switch' (para várias condições distintas em uma mesma variável)."
    },
    {
      pergunta: "Para que servem as estruturas de repetição, também conhecidas como laços?",
      alternativas: [
        "Para executar um bloco de código apenas se uma condição for falsa.",
        "Para encerrar a execução de um fluxograma imediatamente.",
        "Para permitir que um bloco de código seja executado várias vezes.",
        "Para capturar dados de formulários web."
      ],
      correta: 2,
      explicacao: "As estruturas de repetição (laços) existem para repetir um mesmo bloco de código quantas vezes forem necessárias, evitando reescrever a mesma instrução manualmente."
    },
    {
      pergunta: "Segundo o artigo, quais são exemplos comuns de estruturas de repetição?",
      alternativas: [
        "if e else.",
        "for e while.",
        "switch e case.",
        "losango e retângulo."
      ],
      correta: 1,
      explicacao: "Os laços 'for' (quando se sabe o número de repetições) e 'while' (que repete enquanto uma condição for verdadeira) são os exemplos clássicos de estruturas de repetição citados."
    },
    {
      pergunta: "Como o texto define o conceito de algoritmo?",
      alternativas: [
        "Uma representação estritamente gráfica de um sistema empresarial.",
        "Um conjunto de códigos complexos que apenas computadores conseguem ler.",
        "Uma sequência de passos lógicos que descrevem como resolver um problema específico.",
        "O resultado final exibido na tela do e-commerce após uma compra."
      ],
      correta: 2,
      explicacao: "Um algoritmo é definido como uma sequência de passos lógicos e ordenados que descrevem, de forma clara, como resolver um problema específico — independente de linguagem ou representação gráfica."
    },
    {
      pergunta: "Qual é a primeira etapa recomendada para a criação de um algoritmo?",
      alternativas: [
        "Desenhar o fluxograma completo.",
        "Escrever o código diretamente na linguagem de programação.",
        "Testar o algoritmo com diferentes entradas.",
        "Definição do problema."
      ],
      correta: 3,
      explicacao: "Antes de desenhar fluxogramas, escrever código ou testar, é preciso entender exatamente qual problema será resolvido — por isso a definição do problema é sempre a primeira etapa."
    },
    {
      pergunta: "O que envolve a etapa de \"Definição do Problema\" na construção de um algoritmo?",
      alternativas: [
        "Escolher a cor e o formato dos símbolos do fluxograma.",
        "Identificar as entradas necessárias, as operações a serem realizadas e as saídas esperadas.",
        "Decidir qual linguagem de programação será utilizada no desenvolvimento do jogo.",
        "Conectar as setas indicando o fluxo do programa."
      ],
      correta: 1,
      explicacao: "Definir o problema significa mapear com clareza quais são as entradas disponíveis, quais operações precisam ser feitas sobre elas e quais saídas se espera obter ao final."
    },
    {
      pergunta: "O que é um fluxograma no contexto da lógica de programação?",
      alternativas: [
        "Uma ferramenta de análise de dados para gerar relatórios financeiros.",
        "Um aplicativo utilizado para gerenciar tarefas em sistemas industriais.",
        "Uma representação gráfica de um algoritmo que utiliza símbolos específicos.",
        "Uma instrução de repetição (laço) que simplifica a leitura de listas."
      ],
      correta: 2,
      explicacao: "Fluxograma é a representação visual de um algoritmo, usando símbolos padronizados (oval, retângulo, losango, setas) para tornar a sequência lógica mais fácil de entender."
    },
    {
      pergunta: "Em um fluxograma, o que o símbolo oval indica?",
      alternativas: [
        "Uma tomada de decisão baseada em uma variável.",
        "Uma ação ou um processo.",
        "A direção e o sentido do fluxo do programa.",
        "O início ou o fim do algoritmo."
      ],
      correta: 3,
      explicacao: "O símbolo oval marca os pontos de início e fim do fluxograma, delimitando onde a execução do algoritmo começa e onde ela termina."
    },
    {
      pergunta: "Qual formato geométrico é utilizado nos fluxogramas para representar uma ação ou um processo?",
      alternativas: [
        "Retângulo.",
        "Losango.",
        "Oval.",
        "Seta."
      ],
      correta: 0,
      explicacao: "O retângulo é o símbolo usado para representar uma ação ou processo dentro do fluxograma, como um cálculo ou uma atribuição de valor."
    },
    {
      pergunta: "Para que serve o símbolo de losango em um diagrama de fluxograma?",
      alternativas: [
        "Indicar que o programa finalizou sua execução.",
        "Representar decisões, onde o fluxo pode seguir diferentes caminhos dependendo de uma condição.",
        "Sinalizar o ponto de partida absoluto de qualquer algoritmo.",
        "Demonstrar as tarefas repetitivas controladas por comandos \"while\"."
      ],
      correta: 1,
      explicacao: "O losango representa uma tomada de decisão: a partir dele, o fluxo do programa se divide em caminhos diferentes conforme a condição avaliada for verdadeira ou falsa."
    },
    {
      pergunta: "Por que o texto afirma que é essencial realizar o teste do algoritmo?",
      alternativas: [
        "Para colorir a interface do usuário antes de lançar o aplicativo.",
        "Para garantir que funcionem corretamente e identificar possíveis erros antes da implementação do código.",
        "Para gerar os relatórios de vendas no e-commerce.",
        "Para obrigar o programador a memorizar os passos lógicos."
      ],
      correta: 1,
      explicacao: "Testar o algoritmo antes de implementá-lo em código permite verificar se ele funciona corretamente e corrigir eventuais falhas de lógica com antecedência, evitando retrabalho."
    },
    {
      pergunta: "Em um sistema de e-commerce, como a lógica de programação é aplicada de acordo com o texto?",
      alternativas: [
        "Renderizando os gráficos dos produtos em 3D.",
        "Filtrando a temperatura dos servidores na nuvem.",
        "Gerenciando o estoque, processando pagamentos e gerando relatórios de vendas.",
        "Verificando se os personagens do site devem pular ou correr."
      ],
      correta: 2,
      explicacao: "No e-commerce, a lógica de programação sustenta funções essenciais do negócio, como controlar o estoque, processar pagamentos e gerar relatórios de vendas."
    },
    {
      pergunta: "Como a lógica condicional é exemplificada no desenvolvimento de jogos eletrônicos?",
      alternativas: [
        "Calculando automaticamente a média de horas que o jogador passou online.",
        "Determinando se um personagem deve pular ou correr, dependendo da posição do jogador e dos obstáculos.",
        "Gerando os gráficos iniciais por meio do símbolo oval.",
        "Monitorando as transações financeiras para liberar fases."
      ],
      correta: 1,
      explicacao: "Em jogos, a lógica condicional decide, em tempo real, a ação do personagem — por exemplo, se ele deve pular ou correr — com base na posição do jogador e nos obstáculos do cenário."
    },
    {
      pergunta: "Na área de análise de dados (ferramentas de business intelligence), qual o papel principal da lógica condicional mencionado?",
      alternativas: [
        "Filtrar informações relevantes, permitindo que os usuários tomem decisões informadas.",
        "Interromper a leitura de grandes volumes de dados.",
        "Transformar algoritmos simples em sistemas industriais pesados.",
        "Controlar as máquinas e a energia de um ambiente fabril."
      ],
      correta: 0,
      explicacao: "Em ferramentas de business intelligence, a lógica condicional é usada para filtrar e destacar as informações mais relevantes, apoiando os usuários na tomada de decisões."
    },
    {
      pergunta: "Em aplicativos web, qual é uma função importante da lógica de programação ao lidar com formulários?",
      alternativas: [
        "Compactar os arquivos enviados pelos usuários.",
        "Verificar se todos os campos obrigatórios foram preenchidos e se os dados estão no formato correto antes do envio.",
        "Traduzir o conteúdo preenchido para o idioma do servidor.",
        "Bloquear o envio de informações repetidas através de um laço \"for\"."
      ],
      correta: 1,
      explicacao: "Em formulários web, a lógica de programação valida os dados antes do envio, conferindo se os campos obrigatórios foram preenchidos e se estão no formato esperado."
    }
    ]
  },

  scratch: {
    id: "scratch",
    tema: "scratch",
    titulo: "Scratch",
    subtitulo: "Interface, blocos, comunidade e uso educacional da linguagem visual do MIT",
    descricaoCurta: "Interface por blocos, comunidade, extensões e uso em sala de aula.",
    questoes: [
{
      pergunta: "O que é o Scratch segundo os textos fornecidos?",
      alternativas: [
        "Uma linguagem de programação textual avançada focada em inteligência artificial corporativa.",
        "Uma linguagem de programação visual baseada em blocos desenvolvida para tornar a programação acessível e divertida.",
        "Um sistema operacional voltado exclusivamente para computadores escolares.",
        "Um software pago de edição de vídeos e animações 3D."
      ],
      correta: 1,
      explicacao: "O Scratch é uma linguagem de programação visual baseada em blocos, criada justamente para tornar o aprendizado de programação acessível, lúdico e divertido, sem depender de digitar código textual."
    },
    {
      pergunta: "Qual instituição de ensino e grupo de pesquisa foram responsáveis pela criação do Scratch?",
      alternativas: [
        "Universidade de Harvard, pelo grupo de Robótica Avançada.",
        "Stanford, pelo laboratório de Inteligência Artificial.",
        "MIT Media Lab, pelo grupo Lifelong Kindergarten liderado por Mitchel Resnick.",
        "Oxford, pelo centro de Estudos de Ciência da Computação."
      ],
      correta: 2,
      explicacao: "O Scratch foi criado no MIT Media Lab pelo grupo Lifelong Kindergarten, sob liderança de Mitchel Resnick — não por Harvard, Stanford ou Oxford."
    },
    {
      pergunta: "Qual analogia é utilizada nos textos para explicar a facilidade de programar no Scratch?",
      alternativas: [
        "Escrever uma redação em uma máquina de escrever.",
        "Montar peças de LEGO ou encaixar um quebra-cabeça.",
        "Resolver equações matemáticas complexas em uma calculadora.",
        "Tocar um instrumento musical seguindo uma partitura."
      ],
      correta: 1,
      explicacao: "A facilidade do Scratch é comparada a montar peças de LEGO ou encaixar um quebra-cabeça: os blocos só se conectam de formas que fazem sentido, reduzindo erros de sintaxe."
    },
    {
      pergunta: "Quais são as três áreas principais da interface do Scratch descritas no texto?",
      alternativas: [
        "Barra de tarefas, Terminal de comando e Área de código em texto.",
        "Biblioteca de blocos (esquerda), Área de scripts (centro) e Palco de execução (direita).",
        "Menu superior, Painel de controle e Banco de dados.",
        "Editor de imagens, Reprodutor de áudio e Gerenciador de arquivos."
      ],
      correta: 1,
      explicacao: "A interface do Scratch se divide em três áreas: a biblioteca de blocos à esquerda, a área de scripts no centro (onde os blocos são montados) e o palco de execução à direita."
    },
    {
      pergunta: "O que fica localizado no \"Palco de execução\" da interface do Scratch?",
      alternativas: [
        "Os comandos categorizados por cor e função.",
        "O local onde os blocos são arrastados e organizados em sequência.",
        "O personagem (sprite) interagindo com os comandos e a lógica montada.",
        "As configurações avançadas do sistema e código-fonte em Python."
      ],
      correta: 2,
      explicacao: "O palco de execução é onde o sprite (personagem) reage em tempo real à lógica montada pelo usuário, mostrando visualmente o resultado do programa."
    },
    {
      pergunta: "Quais das categorias de blocos a seguir são expressamente mencionadas no texto?",
      alternativas: [
        "Movimento, som, eventos, controle, sensores, operadores e variáveis.",
        "Design, banco de dados, rede, segurança e criptografia.",
        "Animação 3D, compilação, renderização e servidor.",
        "Texto, formulário, tabela, consulta e impressão."
      ],
      correta: 0,
      explicacao: "As categorias de blocos citadas — movimento, som, eventos, controle, sensores, operadores e variáveis — refletem os elementos básicos que qualquer projeto no Scratch pode usar."
    },
    {
      pergunta: "Por quais motivos um profissional de TI deve conhecer o Scratch, de acordo com o texto?",
      alternativas: [
        "Para substituir completamente linguagens como Python e Java em projetos comerciais.",
        "Para ensino/mentoria, prototipagem/gamificação e promoção de inclusão e diversificação de talentos.",
        "Porque o Scratch é a única linguagem aceita em sistemas corporativos modernos.",
        "Para criar bancos de dados relacionais de alta complexidade."
      ],
      correta: 1,
      explicacao: "O texto destaca três motivos para um profissional de TI conhecer o Scratch: apoiar ensino e mentoria, criar protótipos e projetos gamificados, e promover inclusão e diversidade de talentos na área."
    },
    {
      pergunta: "A partir de qual faixa etária o Scratch é recomendado para alunos?",
      alternativas: [
        "A partir de 3 anos.",
        "A partir de 8 anos.",
        "A partir de 14 anos.",
        "Exclusivamente para adultos na universidade."
      ],
      correta: 1,
      explicacao: "O Scratch é recomendado a partir dos 8 anos de idade, justamente por sua interface visual e intuitiva, que dispensa a digitação de código."
    },
    {
      pergunta: "Qual diretriz educacional brasileira incorpora o pensamento computacional e utiliza o Scratch como aliado nas escolas?",
      alternativas: [
        "LDB (Lei de Diretrizes e Bases da Educação).",
        "BNCC (Base Nacional Comum Curricular).",
        "ENEM (Exame Nacional do Ensino Médio).",
        "MEC Digital."
      ],
      correta: 1,
      explicacao: "É a BNCC (Base Nacional Comum Curricular) que incorpora o pensamento computacional ao currículo escolar, tendo o Scratch como uma ferramenta aliada nesse processo."
    },
    {
      pergunta: "De acordo com o texto, qual é o impacto numérico da comunidade do Scratch registrado até 2025?",
      alternativas: [
        "Mais de 1 milhão de projetos em 5 idiomas.",
        "Mais de 10 milhões de projetos restritos aos Estados Unidos.",
        "Mais de 94 milhões de projetos criados, traduzidos para mais de 70 idiomas.",
        "Cerca de 500 mil projetos focados apenas em robótica."
      ],
      correta: 2,
      explicacao: "Até 2025, a comunidade do Scratch já havia produzido mais de 94 milhões de projetos, com a plataforma traduzida para mais de 70 idiomas — um alcance global, não restrito a um único país."
    },
    {
      pergunta: "O que é a extensão ScratchX e qual a sua principal utilidade?",
      alternativas: [
        "Uma versão paga do Scratch focada em desenvolvimento web.",
        "Uma extensão que permite conectar o Scratch a sensores, placas (como Arduino), webcams e robôs educacionais.",
        "Um compilador que converte blocos do Scratch em linguagem C++ automaticamente.",
        "Um aplicativo exclusivo para celulares e tablets antigos."
      ],
      correta: 1,
      explicacao: "O ScratchX estende as possibilidades do Scratch ao permitir a conexão com hardware externo, como sensores, placas Arduino, webcams e robôs educacionais."
    },
    {
      pergunta: "Qual dos exemplos a seguir NÃO é uma aplicação prática do ScratchX citada no texto?",
      alternativas: [
        "Controlar carrinhos com sensores ultrassônicos.",
        "Criar inteligências artificiais simples com base em reconhecimento de voz.",
        "Desenvolver sistemas operacionais completos para grandes servidores.",
        "Conectar dispositivos IoT educativos e simular fenômenos físicos."
      ],
      correta: 2,
      explicacao: "Desenvolver sistemas operacionais completos para grandes servidores está muito além da proposta educacional do ScratchX, que se limita a projetos como carrinhos com sensores, reconhecimento de voz simples e IoT educativa."
    },
    {
      pergunta: "Segundo a tabela comparativa do texto, qual é a principal diferença entre o Scratch e o Python?",
      alternativas: [
        "O Scratch é visual e voltado a partir dos 8 anos, enquanto o Python não é visual, é voltado a partir dos 14 anos e possui maior curva de aprendizado.",
        "O Scratch não possui comunidade ativa, enquanto o Python possui.",
        "O Python é recomendado para crianças a partir de 5 anos e o Scratch para adultos.",
        "O Scratch não permite criar projetos interativos, enquanto o Python permite."
      ],
      correta: 0,
      explicacao: "A tabela comparativa mostra que o Scratch é visual e indicado a partir dos 8 anos, enquanto o Python é textual, voltado a partir dos 14 anos e exige uma curva de aprendizado maior."
    },
    {
      pergunta: "De acordo com a tabela comparativa, qual linguagem possui comunidade \"Média\" e permissão \"Limitada\" para projetos interativos?",
      alternativas: [
        "Scratch.",
        "Code.org.",
        "Python.",
        "Blockly."
      ],
      correta: 3,
      explicacao: "Na tabela comparativa, é o Blockly que aparece com comunidade classificada como 'Média' e permissão 'Limitada' para a criação de projetos interativos."
    },
    {
      pergunta: "Qual a faixa etária indicada para a plataforma Code.org na tabela comparativa do texto?",
      alternativas: [
        "A partir de 8 anos.",
        "A partir de 9 anos.",
        "A partir de 10 anos.",
        "A partir de 14 anos."
      ],
      correta: 1,
      explicacao: "A tabela comparativa indica o Code.org como recomendado a partir dos 9 anos de idade, diferenciando-o da faixa etária do Scratch (8 anos) e do Python (14 anos)."
    },
    {
      pergunta: "Quais são as quatro principais vantagens do Scratch destacadas no segundo texto anexado?",
      alternativas: [
        "Gratuidade, velocidade de compilação, suporte a banco de dados e sintaxe complexa.",
        "Acessibilidade, criatividade, comunidade ativa e aprendizado lúdico.",
        "Portabilidade, automação industrial, inteligência artificial e criptografia.",
        "Design moderno, uso corporativo, licença comercial e rigidez estrutural."
      ],
      correta: 1,
      explicacao: "As quatro vantagens destacadas são acessibilidade, criatividade, comunidade ativa e aprendizado lúdico — características que resumem bem a proposta pedagógica do Scratch."
    },
    {
      pergunta: "O que a plataforma do Scratch permite que os usuários façam com os projetos de outros membros da comunidade?",
      alternativas: [
        "Apagar projetos de terceiros.",
        "Publicar, remixar e comentar em projetos.",
        "Vender os projetos em uma loja virtual.",
        "Bloquear o acesso ao código de todos os usuários."
      ],
      correta: 1,
      explicacao: "A comunidade do Scratch é construída em torno do compartilhamento: os usuários podem publicar seus próprios projetos, remixar os de outras pessoas e comentar, incentivando a colaboração."
    },
    {
      pergunta: "Como o Scratch é utilizado no ambiente escolar de forma interdisciplinar?",
      alternativas: [
        "Apenas nas aulas de informática avançada.",
        "Como ferramenta didática no ensino de matemática, português, ciências e artes.",
        "Exclusivamente para aplicar avaliações e provas teóricas.",
        "Para substituir os professores de disciplinas tradicionais."
      ],
      correta: 1,
      explicacao: "O Scratch vai além da aula de informática: é usado de forma interdisciplinar para apoiar o ensino de matemática, português, ciências e artes, tornando os conteúdos mais concretos e visuais."
    },
    {
      pergunta: "Qual é o formato de construção de código no Scratch em vez de digitar linhas de texto?",
      alternativas: [
        "Escrever comandos em cartões perfurados.",
        "Arrastar e soltar blocos gráficos de comandos.",
        "Digitar códigos em linguagem binária (0 e 1).",
        "Selecionar opções em menus suspensos de texto simples."
      ],
      correta: 1,
      explicacao: "Em vez de digitar linhas de código, o Scratch usa o modelo de arrastar e soltar blocos gráficos, que se encaixam como peças, eliminando erros comuns de sintaxe."
    },
    {
      pergunta: "Qual destas opções representa um exemplo real de projeto que pode ser criado no Scratch segundo o texto?",
      alternativas: [
        "Um jogo de labirinto com ranking de pontos e sprites que reagem ao teclado.",
        "Um software de contabilidade bancária internacional.",
        "Um driver para placas de vídeo corporativas.",
        "Um banco de dados para grandes redes de supermercados."
      ],
      correta: 0,
      explicacao: "Um jogo de labirinto com ranking de pontos e sprites que reagem ao teclado é um exemplo típico e viável de projeto no Scratch, bem diferente de sistemas corporativos complexos como bancos de dados ou drivers."
    },
    {
      pergunta: "Onde ficam organizados e arrastados os blocos para construir a lógica do programa na interface do Scratch?",
      alternativas: [
        "No Palco de execução (à direita).",
        "Na Biblioteca de blocos (à esquerda).",
        "Na Área de scripts (no centro).",
        "Na barra de ferramentas superior."
      ],
      correta: 2,
      explicacao: "É na área de scripts, no centro da tela, que os blocos retirados da biblioteca são arrastados, encaixados e organizados para formar a lógica do programa."
    },
    {
      pergunta: "Qual o papel do Scratch no aprendizado autodidata, segundo o segundo texto?",
      alternativas: [
        "Serve como ponto de partida para qualquer pessoa interessada em aprender programação de forma independente.",
        "É uma ferramenta de uso restrito a salas de aula sob supervisão de um professor.",
        "Exige obrigatoriamente a realização de um curso presencial para ser utilizado.",
        "É voltado apenas para quem já possui graduação na área de tecnologia."
      ],
      correta: 0,
      explicacao: "O Scratch funciona como uma porta de entrada acessível para o aprendizado autodidata de programação, podendo ser usado de forma independente, sem exigir sala de aula, curso presencial ou formação prévia."
    }
    ]
  }
};
