// styles
import { ImageContainer, Text, Image } from '../../styles'

// assets
import { tempo0 } from 'src/components/parallelism/assets'

export function Tempo0() {
  return (
    <>
      <Text>
        <h1>Paralelismo e Concorrência</h1>

        <p>
            Nesse exemplo, cada processo está sendo executado de forma paralela mas cada um está precisando de um recurso diferente então são independentes, não existindo concorrência.
        </p>
        <p>
            Mas o que será que acontece quando dois processos estão precisando usar o mesmo recurso?
        </p>
      </Text>

      <ImageContainer>
        <Image src={tempo0.src} alt="Tempo 0" />
      </ImageContainer>
    </>
  )
}