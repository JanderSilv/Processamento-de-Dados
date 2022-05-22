// styles
import { ImageContainer, Text, Image } from '../../styles'

// assets
import { ibmComputer } from '../../assets'

export function SISDStep() {
  return (
    <>
      <Text>
        <h2>
          SISD • <i>Single Instruction, Single Data</i>
        </h2>

        <p>Fluxo de instrução único, fluxo de dados único.</p>
        <p>
          Trata-se um computador que não explora <b>nenhum paralelismo</b> em sua arquitetura.
        </p>
        <p>
          Em computadores desse tipo, cada instrução vai ser <b>executada uma após a outra</b>, sobre um único conjunto
          de dados cada.
        </p>
      </Text>

      <ImageContainer>
        <Image src={ibmComputer.src} alt="IBM" />
      </ImageContainer>
    </>
  )
}
