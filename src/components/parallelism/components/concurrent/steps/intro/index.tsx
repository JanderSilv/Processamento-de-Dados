// styles
import { ImageContainer, Text, Image } from '../../styles'

// assets
import { concorrencia } from 'src/components/parallelism/assets'

export function IntroConcurrent() {
  return (
    <>
      <Text>
        <h1>Concorrência</h1>

        <p>
        Muitas pessoas não entendem a diferença de Concorrência para Paralelismo, por isso fizemos uma ilustração que talvez possa te ajudar no entendimento.
        </p>
        <p>
        Para começar, olhe a imagem na direita, duas pessoas estão brigando pelo mesmo recurso isto é eles estão concorrendo...
        </p>
      </Text>

      <ImageContainer>
        <Image src={concorrencia.src} alt="Concorrência" />
      </ImageContainer>
    </>
  )
}