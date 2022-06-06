import Image from 'next/image'
import { LimitContainer } from 'src/components/limit-container'
import { banner } from './styles'

export const Banner = () => (
  <header className={banner()}>
    <LimitContainer className="banner__container">
      <div>
        <h1>Computação Quântica</h1>
        <p>
          Computadores quânticos são máquinas de extrema complexidade que se baseiam em conceitos da mecânica quântica
          para controle de estados. Diferentemente dos computadores convencionais que obtêm a informação a partir da
          passagem da corrente elétrica, os computadores quânticos, por sua vez, obtêm a partir de outras coisas como a
          direção de rotação de um átomo.
        </p>
      </div>
      <picture>
        <Image
          src="/assets/quantum/quantum-computer.png"
          alt="Ilustração de um computador quântico do tipo Lustre"
          width="400"
          height="400"
          draggable="false"
        />
      </picture>
    </LimitContainer>
  </header>
)
