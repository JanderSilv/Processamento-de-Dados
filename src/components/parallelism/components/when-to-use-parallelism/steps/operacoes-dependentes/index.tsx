// styles
import { ImageContainer, Text, Image, Embedded } from '../../styles'

// assets
import { placeholder } from '../../assets'

export function DependentOperationsStep() {
  return (
    <>
      <Text>
        <h2>Operações dependentes</h2>

        <p>
          Operações dependentes, na maioria das vezes,{' '}
          <strong>dependem de um processo principal para serem agregadas</strong> ou de um gerenciador de acesso à
          memória para que o estado não seja <strong>inconsistente</strong>.
        </p>

        <p>
          Em casos em que as <strong>operações são simples</strong>, esses processos de gerenciamento podem levar{' '}
          <strong>mais tempo que as operações em si</strong>, causando um <strong>decréscimo na eficiência</strong>{' '}
          através do paralelismo.
        </p>

        <p>
          Portanto, quando quiser paralelizar uma atividade, ao menos tenha certeza de que a parte paralelizável contém
          operações mais <strong>complexas que as primitivas</strong>. Exemplo ao lado:
        </p>
      </Text>

      <ImageContainer>
        <Embedded
          width={650}
          height={366}
          src="https://www.youtube.com/embed/ZBPdJcH2qdE"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </ImageContainer>
    </>
  )
}
