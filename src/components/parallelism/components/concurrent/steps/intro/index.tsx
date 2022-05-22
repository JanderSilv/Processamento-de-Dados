// styles
import { ImageContainer, Text, Image } from '../../styles'

// assets
import { concorrencia } from 'src/components/parallelism/assets'

export function IntroConcurrent() {
  return (
    <>
      <Text>
        <h1>Paralelismo e Concorrência</h1>

        <p>
        No paralelismo temos um conceito que se chama Concorrência, visto que uma tarefa é processada por muitos núcleos ao mesmo tempo, é normal de que eles usem o mesmo recurso e então gera uma concorrência.
        </p>
        <p>
        Como a imagem a direita exemplifica, duas pessoas que representam os núcleos estão brigando pelo mesmo recurso podendo causar alguns problemas como dead-lock.
        </p>
      </Text>

      <ImageContainer>
        <Image src={concorrencia.src} alt="Concorrência" />
      </ImageContainer>
    </>
  )
}