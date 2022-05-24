// styles
import { ImageContainer, Text, Image } from '../../styles'

// assets
import { placeholder } from '../../assets'

export function PreludeStep() {
  return (
    <>
      <Text>
        <h1>Devo paralelizar?</h1>

        <p>
          <strong>Nem todas as tarefas, em alto nível, se beneficiam do paralelismo</strong>. Sempre que paralelizamos
          atividades que precisam de agregação temos um{' '}
          <strong>custo extra de criação e administração de processos</strong> na máquina.
        </p>

        <p>
          Veremos nas seções a seguir quais tarefas se <strong>beneficiam</strong> do paralelismo, assim como situações
          em que o paralelismo é <strong>prejudicial</strong>.
        </p>
      </Text>

      <ImageContainer>
        <Image src={placeholder.src} alt="Placeholder" />
      </ImageContainer>
    </>
  )
}
