// styles
import { ImageContainer, Text, Image, Embedded } from '../../styles'

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
        <Embedded
          width={650}
          height={366}
          src="https://www.youtube.com/embed/mhFO0YuP1F8"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </ImageContainer>
    </>
  )
}
