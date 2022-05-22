// styles
import { ImageContainer, Text, Image } from '../../styles'

// assets
import { spaceShuttle } from '../../assets'

export function MISDStep() {
  return (
    <>
      <Text>
        <h2>
          MISD • <i>Multiple Instruction, Single Data</i>
        </h2>

        <p>Múltiplos fluxos de instrução, fluxo de dados único.</p>
        <p>
          Este é o tipo mais <b>incomum</b> de arquitetura, onde{' '}
          <ins>várias instruções operam em um fluxo de dados</ins>. Pode ser utilizada para <b>tolerância a falhas</b>,
          em que sistemas heterogêneos operam em um mesmo fluxo de dados e os resultados devem coincidir.
        </p>
      </Text>

      <ImageContainer>
        <Image src={spaceShuttle.src} alt="Ônibus espacial" />
      </ImageContainer>
    </>
  )
}
