import Image from 'next/image'
import { Link } from 'src/components/link'

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
        <p>
          Existem diversos problemas ainda sem solução usando a computação clássica, seja por limitações de performance
          ou pela limitação matemática conceitual, como por exemplo a fatoração de inteiros, o problema de isomorfismo
          de grafos ou a A distância de rotação entre duas árvores binárias (para mais cases acesse:{' '}
          <Link href="https://stringfixer.com/pt/List_of_unsolved_problems_in_computer_science" underline openInNewTab>
            Unsolved Problems
          </Link>
          ).
        </p>
        <p>
          Contudo, a computação quântica pode impulsionar tecnologias que vão além do ambiente acadêmico.As áreas em que
          a computação quântica pode oferecer novas aplicações e desenvolvimentos vão desde a indústria farmacêutica e
          pesquisa médica, a criação de novos materiais e até o que está sendo chamado de “finanças quânticas”.
        </p>
        <p>
          Neste setor, podemos usar computação clássica e algoritmos matemáticos para fazer previsões sobre o risco
          futuro de uma carteira ou podemos estudar o mercado de ações durante uma janela de tempo. Mas a computação
          quântica abre uma gama completamente nova de opções a serem exploradas. Um computador quântico pode criar
          sobreposições com múltiplas probabilidades que não podemos alcançar hoje, muito menos examinar as
          características dessas probabilidades.
        </p>
        <p>Com esse tipo de aplicação, o computador quântico será muito mais eficiente que um computador clássico.</p>
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
      <>
        <h3>D. Espaços de Hilbert</h3>
        <p>
          Espaço de Hilbert é uma generalização do espaço euclidiano que não se restringe a um número finito de
          dimensões. É um espaço vetorial que possui produto interno, permitindo a definição de distância e ângulos.
          Esse espaço obedece uma relação de completude, que garante que os limites existem quando esperados, o que
          permite a facilidade de diversas definições de análise.
        </p>
        <p>
          Os espaços de Hilbert permitem que, de certa maneira, noções intuitivas sejam aplicadas em espaços funcionais.
          Por exemplo, com eles podemos generalizar os conceitos de séries de Fourier em termos de polinômios
          ortogonais. Os espaços de Hilbert são de extrema importância para a mecânica quântica.
        </p>
        <p>
          Os elementos de espaço de Hilbert abstrato são chamados de vetores. Em aplicações, eles são tipicamente
          sequências de números complexos ou funções. Na mecânica quântica, por exemplo, um sistema físico é descrito
          por um espaço de Hilbert complexo que contém os vetores de estado, que contém todas as informações do sistema
          com suas complexidades.
        </p>
        <p>
          É um espaço que fornece o formalismo apropriado para o estudo de conceitos da mecânica quântica e, portanto,
          da computação quântica.
        </p>
      </>,
      <div key={0} className="media-container">
        <iframe
          width="1280"
          height="720"
          src="https://www.youtube.com/embed/TR0RJzKZUAA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>,
      <Link key={1} href="https://www.youtube.com/watch?v=AocpFJn36d8" openInNewTab>
        <Image
          src="/assets/quantum/simma-hilbert.jpg"
          alt="Vídeo no Youtube: Computadores quânticos em espaços de Hilbert"
          width="1187"
          height="667"
          draggable={false}
        />
      </Link>,
      <>
        <p className="mb-3">
          No vídeo abaixo, você poderá entender melhor os conceitos a cerca da mecânica quântica, como superposição e
          emaranhamento.
        </p>
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
    content: [
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
      </>,
      <>
        <p>Utilizando um exemplo, considere uma moeda.</p>
        <p>
          Na física convencional, essa moeda poderia ter dois estados, cara ou coroa, um ou outro. Falando de bits,
          seria 0 ou 1.
        </p>
        <p>
          Já na física quântica, imaginamos que essa moeda está girando, e enquanto está girando, há a possibilidade de
          ser 0 e 1 ao mesmo tempo. Falando de Qubits, ele representa 0 e 1.
        </p>
      </>,
    ],
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
    id: 11,
    path: 2,
    title: 'Entrelaçamento Quântico',
    image: {
      src: '/assets/quantum/entanglement.jpg',
      alt: 'Duas partículas se entrelaçando',
      width: '933',
      height: '525',
      source: 'https://scienceexchange.caltech.edu/topics/quantum-science-explained/entanglement',
    },
    content: [
      <>
        <p>
          Sabe-se que, uma vez que dois sistemas quânticos interagem um com o outro, eles se tornam parceiros
          irremediavelmente entrelaçados. A partir de então, o estado de um sistema lhe dará informações precisas sobre
          o estado do outro sistema, não importando o quanto os dois estejam interligados entre si. Os dois sistemas
          podem estar separados por anos-luz e ainda fornecer informações precisas e instantâneas um sobre o outro.
          Vamos ilustrar isso com um exemplo concreto, já que isso causou até mesmo um reboliço na cabeça de Einstein
          (Einstein notoriamente se referiu a esse fenômeno como &ldquo;Ação assustadora à distância&rdquo;).
        </p>
      </>,
      <>
        <p>
          Ainda utilizando o exemplo da moeda citado no tópico de Bit x QuBit, imagine que temos agora duas moedas
          girando, com essas duas moedas podemos representar 4 estados ao mesmo tempo.
        </p>
        <ol>
          <li>Ambos Cara</li>
          <li>Ambos Coroa</li>
          <li>Cara e Coroa</li>
          <li>Coroa e Cara</li>
        </ol>
        <p>Com 3 moedas girando, podemos representar 8 estados ao mesmo tempo.</p>
        <p>
          A cada moeda adicionada a esse exemplo, exponencialmente aumentamos a quantidade de estados que podem ser
          representados.
        </p>
        <p>Com 50 moedas girando, podemos representar mais estados que o maior supercomputador da atualidade.</p>
        <p className="mb-3">
          Com 300 moedas girando, podemos representar mais estados que o número de átomos existentes no universo.
        </p>
        <Image
          src="/assets/quantum/coins.jpg"
          alt="Com 3 moedas girando, podemos representar 8 estados ao mesmo tempo."
          width="1162"
          height="637"
          draggable={false}
        />
      </>,
    ],
  },
  {
    id: 12,
    path: 2,
    title: 'Um exemplo quântico',
    content: [
      <>
        <p>Sequências de qubits podem ser usadas para transmitir chaves privadas em meios não seguros.</p>
        <p>
          Considere a seguinte situação: Alice e Bob querem trocar uma chave secreta. Eles estão conectados por um canal
          aberto bidirecional e um canal quântico unidirecional. As informações de ambos os canais estão sendo
          observadas por Eve, que quer espionar a transmissão e conseguir a chave secreta que descriptografa os textos
          enviados por Alice e Bob. O canal quântico permite que Alice envie fótons para Bob que irá medir o estado
          quântico desses fótons. Eve, pode capturar esses fótons e medí-los e reenviá-los a Bob.
        </p>
        <p>
          O processo de estabelecer uma chave secreta começa com Alice enviando uma sequência de bits para Bob. Cada bit
          a ser enviado é codificado em um estado quˆantico do f´oton. Alice decide usar a base Vertical-Horizontal (VH)
          (que denotaremos por ⊞ ) para codificar um bit, entretanto Alice poderia ter usado a base Oblíqua.
        </p>
      </>,
      <>
        <h3>Estágio 1: Comunicação sobre o canal quântico</h3>
        <ol>
          <li>Alice gera uma sequência aleatória de 0’s e 1’s para construir a chave secreta compartilhada com Bob.</li>
          <li>
            Para cada bit da sequência, Alice escolhe aleatoriamente um dos dois alfabetos quânticos e transmite o fóton
            polarizado com o alfabeto.
          </li>
          <li>
            Como Bob não sabe que alfabeto Alice escolheu para cada bit, escolhe aleatoriamente um dos dois para
            realizar a medição, tendo assim 50% de chance de acertar o bit que Alice enviou.
          </li>
        </ol>
      </>,
      <>
        <h3>Estágio 2: Comunicação sobre o canal aberto</h3>
        <ol>
          <li>Utilizando o canal aberto Bob envia a Alice quais alfabetos utilizou para cada bit.</li>
          <li>Alice responde a Bob informando quais medições foram feitas com o alfabeto correto.</li>
          <li>
            Alice e Bob apagam todos os bits que utilizaram alfabetos diferentes, formando assim a chave inicial. Caso
            Eve não tenha espionado a chave resultante de Alice será igual a chave resultante de Bob.
          </li>
          <li>
            No canal aberto Alice e Bob comparam pequenos pedaços da chave para estimar a taxa de erro e posteriormente
            removem os bits transmitidos no canal aberto, caso a taxa de erro seja 0 não houve espionagem e a chave
            torna-se definitiva, caso haja pelo menos um erro durante a comparação então houve espionagem e a chave é
            descartada e o processo deve recomeçar.
          </li>
        </ol>
      </>,
      <>
        <h3 className="mb-3">Transmissão sem espionagem:</h3>
        <Image src="/assets/quantum/no-spy.jpg" alt="" width="507" height="263" draggable={false} className="mb-3" />
        <h3 className="mb-3">Transmissão com espionagem:</h3>
        <Image src="/assets/quantum/spy.jpg" alt="" width="482" height="282" draggable={false} />
      </>,
    ],
  },
  {
    id: 15,
    path: 2,
    title: 'Infraestrutura',
    image: {
      src: '/assets/quantum/d-wave.jpg',
      alt: 'Computador quântico da empresa d-wave',
      width: '370',
      height: '485',
      source: 'https://www.nature.com/articles/541447b',
    },
    content: [
      <>
        <p>
          A infraestrutura de um computador quântico consiste de sondas, sensores, trocadores de calor, cabos de dados,
          um ou vários processadores quânticos e uma placa mãe que une todo o sistema.
        </p>
        <p>
          Em um computador quântico no formato de lustre, temos várias camadas de sistemas de resfriamento para garantir
          o funcionamento da máquina em temperaturas muito abaixo de 0°C.
        </p>
        <p>
          Atualmente, para o funcionamento dessas máquinas, é utilizado uma grande infraestrutura externa que contém
          armazenamento e filtragem para líquidos de resfriamento, computadores convencionais que monitoram o estado do
          computador quântico e de todo o sistema, bombas a vácuo que são utilizadas para criar um ambiente termicamente
          isolado no compartimento do computador quântico, e afins.
        </p>
      </>,
      <>
        <p className="mb-3">
          A empresa D-Wave, em 2015, liberou 3 vídeos que explicam a composição do computador quântico deles:
        </p>
        <div key={4} className="media-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/zDotDiK2UuY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </>,
      <div key={5} className="media-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/VfxNdBTH8wY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>,
      <div key={6} className="media-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/AGByZoYUlU0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>,
    ],
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
    content: (
      <>
        <p className="mb-3">Saiba tudo que a IBM disponibilizou sobre computação quântica.</p>
        <Link href="https://www.ibm.com/quantum" underline openInNewTab />
        <p className="mb-3">Quer saber o que IBM espera do futuro da computação quântica.</p>
        <Link href="https://research.ibm.com/blog/ibm-quantum-roadmap-2025" underline openInNewTab />
      </>
    ),
  },
]
