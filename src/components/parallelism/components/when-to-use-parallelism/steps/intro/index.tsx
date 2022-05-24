// styles
import { ImageContainer, Text, Image } from '../../styles'

// assets
import { placeholder } from '../../assets'

export function IntroStep() {
  return (
    <>
      <Text>
        <h1>I/O intensivo</h1>

        <p>
          Tarefas de <strong>I/O intensivo</strong> se beneficiam bastante do paralelismo, por que sua natureza é de
          esperar uma fonte de dados mais lenta que o processamento dos núcleos (rede, unidade de armazenamento, etc.).
        </p>

        <p>
          Sempre que a atividade puder ser separada em <strong>partes independentes</strong> , veremos grandes
          resultados em <strong>eficiência e performance</strong> através da paralelização. Veja um exemplo de código ao
          lado:
        </p>
      </Text>

      <ImageContainer>
        <Image src={placeholder.src} alt="Placeholder" />
      </ImageContainer>
    </>
  )
}
