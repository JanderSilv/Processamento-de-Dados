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
            Nesse exemplo, cada tarefa está sendo executado de forma paralela mas cada um está precisando de um recurso diferente, eles são executados de forma simultanea, isto é, 
            com pequenos intervalos de tempo entre eles.
        </p>
        <p>
            Mas o que será que acontece quando duas tarefas estão precisando usar o mesmo recurso?
        </p>
      </Text>

      <ImageContainer>
        <Image src={tempo0.src} alt="Tempo 0" />
      </ImageContainer>
    </>
  )
}