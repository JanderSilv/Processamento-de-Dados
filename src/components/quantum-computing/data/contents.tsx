export const contentsData = [
  {
    id: 1,
    path: 0,
    title: 'O que é Computação Quântica',
    content: (
      <>
        <p>
          Computação quântica é uma tecnologia emergente, que tenta resolver problemas difíceis demais ou até
          impossíveis para os supercomputadores tradicionais, por meio de uma abordagem de computação baseada em uma
          unidade básica completamente diferente: os qubits – em vez dos bits.
        </p>
        <p>
          Na prática, o comportamento desses qubits permite que computadores quânticos rodem vários cálculos ao mesmo
          tempo, com múltiplas fontes de dados, com uma escala enorme.
        </p>
        <p>
          Os computadores quânticos são máquinas caras e complexas, desenvolvidas por poucas empresas. Há computadores
          quânticos experimentais em laboratórios de universidades, em empresas privadas e startups, e também
          computadores que fazem parcialmente o que um computador quântico completo faria.
        </p>
      </>
    ),
    image: {
      src: '/assets/quantum/quantum-computing.jpg',
      alt: 'Ilustração de processador com um símbolo de um átomo',
      width: 670,
      height: 697,
    },
  },
  {
    id: 2,
    path: 1,
    title: 'Porquê precisamos de um Computador Quântico',
    image: {
      src: '/assets/quantum/why.png',
      alt: 'Ilustração de duas pessoas com várias interrogações ao redor delas',
      width: 2000,
      height: 2000,
      source: 'https://storyset.com/people',
    },
    content: (
      <>
        <p className="mb-3">Resolução de problemas até hoje com resposta desconhecida:</p>
      </>
    ),
  },
  {
    id: 3,
    path: 1,
    title: 'Porquê você (provavelmente) não precisará de um.',
    image: {
      src: '/assets/quantum/cancel.png',
      alt: 'Ilustração de um homem cancelando uma compra em um aplicativo',
      width: 952,
      height: 936,
      source: 'https://www.freepik.com/vectors/web-app',
    },
    content: (
      <>
        <p>
          Estamos longe de ver computadores quânticos sendo usados ​​na vida cotidiana – há muita empolgação, mas ainda
          estamos nos primeiros dias de desenvolvimento. Existem várias limitações (temperatura do ambiente e custo) e
          problemas (correção de erros e aproximação de valores) que precisam ser quebradas e solucionadas para que
          possamos ter um computador quântico completamente funcional e acessível.
        </p>
        <p>
          A partir disso não existe em um futuro próximo a necessidade da substituição de um computador usado no nosso
          dia-a-dia por um quântico pois os computadores domésticos suprem a necessidade das usabilidades cotidianas. E
          mesmo que a alcancemos o nível desejado das funcionalidades de um computador quântico o seu foco não será
          voltado para games (atendidos perfeitamente pela computação clássica) ou coisas mais simples – tentar usar um
          computador quântico para abrir um editor de texto é a mesma coisa que “
          <strong>Matar uma mosca com uma bazuca</strong>
        </p>
        <p>
          Os computadores quânticos serão usados para pesquisas mais avançadas e resolução de problemas que a computação
          clássica não consegue resolver.
        </p>
      </>
    ),
  },
  {
    id: 4,
    path: 1,
    title: 'Quântica não é magia',
    content: (
      <>
        <p>
          Quando pesquisamos sobre computação quântica é comum encontrarmos muitas afirmações e analogias que não
          condizem com a realidade, criando assim mitos sobre o funcionamento das máquinas quânticas.
        </p>
        <p>
          Uma das ideias mais difundidas é que &ldquo;o computador quântico encontra a solução para um problema testando
          simultaneamente todas as opções possíveis&rdquo;.
        </p>
        <p>
          Da maneira como essa frase é montada deixa a entender que a tecnologia completa qualquer problema em um passo
          de mágica.
        </p>
        <p>
          De certa forma pode-se dizer que um algoritmo quântico cria uma sobreposição de muitas possibilidades,
          entrelaça-as com seus resultados
        </p>
      </>
    ),
    image: {
      src: '/assets/quantum/magic.png',
      alt: 'Ilustração de um mago mexendo em um caldeirão',
      width: '3000',
      height: '2526',
    },
  },
  {
    id: 5,
    path: 1,
    translate: {
      y: 'up',
    },
    title: 'Entenda as limitações',
    content: (
      <>
        <p>
          Apesar de ser um grande avanço para computação e para a ciência existem limitações e barreiras a serem
          vencidas (como no começo da computação clássica), como:
        </p>
        <ul>
          <li>
            Manipulação eficiente dos qubits, uma vez que eles são altamente instáveis e podem perder eficiência por
            conta das condições do ambiente;
          </li>
          <li>Limitações na hora de criar algoritmos para aplicações novas;</li>
          <li>Vibrações e ruídos externos ao computador podem ser ocasionados;</li>
          <li>
            O tamanho das máquinas é um desafio, assim como quando os computadores clássicos surgiram. Atualmente as
            máquinas ocupam espaços médios de 10m² e tem cerca de 3m de altura;
          </li>
          <li>Para operar, as máquinas precisam de uma temperatura próxima de -273°C.</li>
          <li>Pessoal especializado para desenvolver.</li>
          <li>
            Complexidade para a correção de erros, realizar cálculos com qubits pode ser um desafio. Computadores comuns
            têm correção de erros ou redundâncias internas, locais onde vários bits executam a mesma função no caso de
            um deles falhar. Para computadores quânticos fazerem isso, eles precisam ter qubits extras integrados em seu
            sistema especificamente para verificar erros. Mas a natureza da mecânica quântica torna mais difícil
            realizar essa correção de erros do que nos computadores clássicos. Poderia levar cerca de dois mil qubits
            físicos trabalhando em conjunto, de fato, para criar um qubit confiável e “corrigido por erros”, resistente
            a falhas.
          </li>
        </ul>
      </>
    ),
    image: {
      src: '/assets/quantum/barriers.png',
      alt: 'Ilustração de um homem passando por dentro de uma parede quebrada',
      width: '2000',
      height: '2000',
    },
  },
  {
    id: 6,
    path: 1,
    title: 'Porque não encontro um nas prateleiras?',
    content: (
      <p>
        Computadores quânticos só funcionam em condições muito específicas, o que inviabiliza a escala por enquanto. Os
        qubits só assumem as características de entrelaçamento em temperaturas próximas ao zero absoluto (-273,15º C),
        exigindo sistemas sofisticados de refrigeração. Além disso, o núcleo precisa ser blindado contra campos
        magnéticos ou ondas eletromagnéticas, que podem interferir nos cálculos e prejudicar o funcionamento desses
        computadores.
      </p>
    ),
    image: {
      src: '/assets/quantum/shelf.png',
      alt: 'Ilustração de um homem com uma luneta procurando um produto em uma prateleira de mercado',
      width: '2000',
      height: '2000',
    },
  },

  {
    id: 7,
    path: 2,
    title: 'Um pouquinho de física quântica',
    content: [
      <>
        <h3>A. Experimento da Dupla Fenda</h3>
        <p>
          Considere uma divisória com duas fendas paralelas, de um lado coloca-se uma fonte de luz. Se somente uma fenda
          está aberta, a intensidade da luz na tela atinge seu máximo na posição diretamente na linha da fenda. Quando
          ambas as fendas estão abertas, o que é visto na tela não é somente duas posições as quais a luz incide, e sim
          um padrão característico de franjas claras e escuras. Surpreendentemente, a interferência contínua mesmo
          quando a fonte de luz emite somente um fóton, ou seja, o mesmo padrão de franjas aparece.
        </p>
      </>,
      <div key={2} className="media-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/84Bhoyo2yCM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>,
      <div key={3} className="media-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/E7EsHajyyro"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>,
      <>
        <h3>B. Amplitude de Probabilidade</h3>
        <p>
          O objetivo da mecânica quântica é prever a probabilidade de que um evento ocorra baseado em seus estados
          iniciais e finais e nas transformações que acontecem entre esses dois estados. No experimento da dupla fenda,
          “um fóton sai da origem S e chega à parede na posição X” é um evento.
        </p>
        <p>
          A probabilidade p de um evento ocorrer é dada pela norma quadrada de um número complexo α (onde α é chamado
          amplitude de probabilidade ou simplesmente amplitude), ou seja: p = ||α||².
        </p>
      </>,
      <>
        <h3>C. Brackets, Dirac</h3>
        <p>
          A notação de Dirac é utilizada para para representar a amplitude de probabilidade α devido a sua praticidade
          em em representar transformações e estado quânticos. Devido ao símbolo 〈ψ| ser chamado de bra e o símbolo |ψ⟩
          é chamado de ket a notação 〈Ø|ψ⟩ é chamada de bracket.
        </p>
        <p>No experimento da fenda dupla 〈x|s⟩ representa a amplitude do fóton sair de s e chegar em x.</p>
      </>,
    ],
    image: {
      src: '/assets/quantum/physics.png',
      alt: 'Ilustração de alunos em uma sala de aula com um quadro negro escrito Física.',
      width: '4200',
      height: '3301',
    },
  },
  {
    id: 8,
    path: 2,
    title: 'Bit X Qubit',
    content: (
      <>
        <p>
          Um bit é a base da informação computacional. Independente de suas representações físicas, ele sempre é lido
          como 0 ou 1. Uma analogia são as posições de um interruptor de luz (a posição desligada pode ser representada
          por 0, enquanto a posição ligada pode ser representada por 1).
        </p>
        <p>
          Um qubit possui algumas similaridades com o bit clássico, mas é bem diferente no geral. Como o bit, um qubit
          pode ter dois possíveis valores - normalmente um 0 ou um 1. A diferença é que enquanto um bit deve ser 0 ou 1,
          um qubit pode ser 0, 1, ou uma superposição de ambos.
        </p>
        <p>
          Os estados em que um qubit pode ser medido são conhecidos como estados básicos (ou vetores). Como é tradição
          com qualquer tipo de estado quântico, Dirac, ou notação bra-ket é usada para representá-los.
        </p>
        <p>
          Isso significa que dois estados básicos computacionais são convencionalmente escritos como |0&gt; e |1&gt;
          (pronunciado: &apos;ket 0&apos; and &apos;ket 1&apos;).
        </p>
        <p>O órgão francês Commissariat à l&apos;Énergie Atomique criou uma representação da superposição.</p>
      </>
    ),
    image: {
      src: '/assets/quantum/bitxqubit.jpg',
      alt: 'O bit clássico podendo ser 0 ou 1, ou um qubit pode ser 0, 1 ou uma superposição de ambos',
      width: '682',
      height: '654',
    },
  },
  {
    id: 9,
    path: 2,
    title: 'Alfabeto Quântico',
    image: {
      src: '/assets/quantum/alphabet.jpg',
      alt: 'Anna escreve uma mensagem para Bill usando o spin de um elétron que viaja a velocidades próximas à velocidade da luz. Se Anna e Bill usarem o procedimento usual para ler o spin (representado como o alfabeto latino padrão), Bill não conseguirá decodificar a mensagem e a comunicação falhará.',
      width: '817',
      height: '467',
      source:
        'https://medienportal.univie.ac.at/presse/aktuelle-pressemeldungen/detailansicht/artikel/a-new-alphabet-to-write-and-read-quantum-messages-with-very-fast-particles/',
    },
    content: [
      <>
        <h3>&gt; Comunicação quântica</h3>
        <p>
          A teoria da informação quântica se baseia na possibilidade de escrever mensagens em uma partícula quântica e
          lê-las de maneira confiável.
        </p>
        <p>
          Se, no entanto, a partícula é relativística, o que significa que ela se move com velocidades próximas à
          velocidade da luz, é impossível decodificar a mensagem sem ambiguidade usando as técnicas usadas hoje, e a
          comunicação falha.
        </p>
        <p>
          Pelo menos falhava até agora. Pesquisadores da Universidade de Viena e da Academia Austríaca de Ciências
          desenvolveram uma forma de decodificar de forma confiável mensagens quânticas transmitidas em velocidades
          extremamente altas.
        </p>
        <p>Isso abre novas possibilidades de aplicações tecnológicas em informação quântica e comunicação quântica.</p>
      </>,
      <>
        <h3>&gt; Comunicação a velocidade da luz</h3>
        <p>
          Imagine a seguinte situação: Maria e João querem trocar uma mensagem usando uma propriedade de uma partícula
          quântica, digamos o spin de um elétron, que é uma forma intrínseca da rotação dessas partículas. João precisa
          da mensagem de Maria o mais rápido possível, de forma que Maria tem que enviar o elétron na velocidade máxima,
          muito próximo da velocidade da luz. Dado que Maria tem o elétron em seu laboratório, em um local específico, o
          princípio da incerteza de Heisenberg proíbe que a velocidade do elétron seja definida com precisão.
        </p>
        <p>
          Quando o elétron viaja a uma velocidade extremamente alta, a interação entre a relatividade especial e a
          física quântica faz com que o spin e a velocidade do elétron se entrelacem. Devido a essa correlação, que é
          mais forte do que é classicamente possível, João não consegue ler o spin com o método padrão.
        </p>
        <p>Será que é possível que Maria e João possam melhorar sua estratégia de comunicação?</p>
        <p>
          Flaminia Giacomini e seus colegas obtiveram essa melhoria introduzindo uma alternativa ao alfabeto padrão
          usado por Maria e João. A técnica garante que a mensagem, escrita por Maria e lida por João, possa ser
          decodificada sem ambiguidade, mesmo quando a partícula se comporta tanto de acordo com a mecânica quântica,
          por causa do princípio da incerteza de Heisenberg, quanto da relatividade especial, devido à sua velocidade
          muito alta.
        </p>
      </>,
      <>
        <h3>&gt; Novo alfabeto quântico</h3>
        <p>
          O novo alfabeto consiste em uma nova definição do spin das partículas quânticas que se movem muito
          rapidamente. Assim, a técnica modifica tanto a maneira como Maria escreve a mensagem, quanto a maneira como
          João a lê. A chave para esta técnica é uma &ldquo;tradução&rdquo; do modo como a mensagem é escrita e lida,
          entre o alfabeto padrão, usado quando o elétron está em repouso, e o novo alfabeto, usado quando o elétron
          viaja muito rápido.
        </p>
        <p>
          &ldquo;Estes resultados são indicativos de que esse procedimento de tradução pode desvelar novas aplicações em
          informações quânticas relativísticas,&rdquo; disse Flaminia.
        </p>
        <p>
          Por exemplo, essa técnica pode ser útil na comunicação quântica via satélite, na qual uma partícula que
          carrega uma mensagem precisa viajar rapidamente entre dois pontos distantes.
        </p>
      </>,
    ],
  },
  {
    id: 10,
    path: 2,
    translate: {
      y: 'up',
    },
    title: 'Transposição de bits',
    content: '',
  },
  {
    id: 11,
    path: 2,
    translate: {
      x: 'left',
      y: 'down',
    },
    title: 'Entrelaçamento Quântico',
    content: [
      <>
        <p>Propriedade da mecânica quântica que precisamos alavancar para criar um computador quântico.</p>
        <p>
          Sabe-se que, uma vez que dois sistemas quânticos interagem um com o outro, eles se tornam parceiros
          irremediavelmente entrelaçados. A partir de então, o estado de um sistema lhe dará informações precisas sobre
          o estado do outro sistema, não importando o quanto os dois estejam interligados entre si. Os dois sistemas
          podem estar separados por anos-luz e ainda fornecer informações precisas e instantâneas um sobre o outro.
          Vamos ilustrar isso com um exemplo concreto, já que isso causou até mesmo um reboliço na cabeça de Einstein
          (Einstein notoriamente se referiu a esse fenômeno como &ldquo;Ação assustadora à distância&rdquo;).
        </p>
        <p>
          Suponha que você tenha dois elétrons, A e B. Depois de fazer com que eles interajam, seus spins opostos serão
          automaticamente entrelaçados. Daí em diante, se o giro de A for para cima, o giro de B será para baixo, como
          duas crianças em uma gangorra, exceto que isso vale até para você levar A e B para extremos opostos da Terra
          (ou da galáxia). Apesar dos milhares de quilômetros (ou anos-luz) entre eles, está provado que, se A girar
          para cima, saberá imediatamente que o giro de B é para baixo. Já aprendemos que esses sistemas não têm valores
          precisos/únicos, mas que existem em uma superposição obscura. Se assim for, temos ainda outro problema em
          nossas mãos, porque Einstein nos ensinou que nenhuma influência causal, como um sinal luminoso, entre dois
          sistemas pode viajar mais rápido que a velocidade da luz. Então, o que dá? Tudo dito, eu honestamente não sei.
          Tudo o que sabemos é que o entrelaçamento quântico é real e que você pode aproveitá-lo para fazer maravilhas.
        </p>
      </>,
      <>
        <p className="mb-3">Mais uma vez o Gato de Schrödinger pode nos ajudar a entender esse conceito:</p>
        <div className="media-container">
          <iframe
            width="1280"
            height="720"
            src="https://www.youtube.com/embed/z1GCnycbMeA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </>,
    ],
  },
  {
    id: 12,
    path: 2,
    title: 'Exemplo Clássico x Quântico',
    content: '',
  },

  {
    id: 13,
    path: 0,
    title: 'O que esperar futuramente',
    image: {
      src: '/assets/quantum/future.jpg',
      alt: 'Ilustração mulher com uma luneta',
      width: 999,
      height: 571,
      source: 'https://www.freepik.com/vectors/future-plan',
    },
    content: (
      <>
        <p>A computação quântica tem um enorme potencial de causar importantes impactos.</p>
        <p>
          A partir deste sistema, torna-se possível realizar simulações com sistemas quânticos, como a fotossíntese, a
          supercondutividade e as formações moleculares complexas. Tal aplicação representa um elemento chave para o
          desenvolvimento medicamentos complexos e tratamentos personalizados geneticamente, bem como o aumento da
          eficiência de meios de transportes, baterias, células solares e fertilizantes.
        </p>
        <p>
          Além disso, a capacidade da computação quântica em resolver problemas como a fatoração de inteiros e a
          computação de logaritmos discretos impulsiona a criptografia de dados a um alto nível de eficiência e
          resistência. Estas são apenas algumas das aplicações que a computação quântica aponta. Porém, o potencial que
          esta tecnologia tem em oferecer benefícios à sociedade ainda é ilimitado. De qubit a qubit, o futuro quântico,
          no entanto, vai se tornando cada vez mais presente.
        </p>
      </>
    ),
  },
  {
    id: 14,
    path: 0,
    title: 'Quer saber mais sobre?',
    content: '',
  },
]
