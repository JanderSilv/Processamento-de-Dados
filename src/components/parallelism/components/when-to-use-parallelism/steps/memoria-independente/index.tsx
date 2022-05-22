// styles
import { ImageContainer, Text, Image } from '../../styles'

// assets
import { placeholder } from '../../assets'

export function IndependentMemoryStep() {
  return (
    <>
      <Text>
        <h2>Memória independente</h2>

        <p>
          Tarefas em que o processamento pode ser realizado utilizando <strong>memória independente</strong>, ou seja,
          não há depêndencia das partes paralelizáveis, tem seu{' '}
          <strong>desepenho e eficiência impactos positivamente</strong> pala paralelização.
        </p>

        <p>
          Isso acontece por que <strong>menos recursos serão gastos no gerenciamento de estado da memória</strong>. Veja
          exemplo ao lado:
        </p>
      </Text>

      <ImageContainer>
        <Image src={placeholder.src} alt="Placeholder" />
      </ImageContainer>
    </>
  )
}
