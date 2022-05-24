// styles
import { ImageContainer, Text, Image } from '../../styles'

// assets
import { introConcorrencia } from 'src/components/parallelism/assets'

export function Ilustracao() {
  return (
    <>
      <Text>
        <h1>Concorrência</h1>
        <p>
        Leia a figura ao lado e fique atento ao significado de cada uma pois será necessário o entendimento para os próximos passos.
        </p>
        <ul>
            <li>
                <p>
                    <b>Tarefa</b> - será representado pelo quadrado com cores diferentes.
                </p>
            </li>
            <li>
                <p>
                    <b>Recurso</b> - será representado pela linha grossa.
                </p>
            </li>
            <li>
                <p>
                    As tarefas usam o recurso da cor em que estão pintados.
                </p>
            </li>
            <li>
                <p>
                    A cor <b>preta</b> significa que não está usando recurso.
                </p>
            </li>
        </ul>
      </Text>

      <ImageContainer>
        <Image src={introConcorrencia.src} alt="Introdução Concorrência" />
      </ImageContainer>
    </>
  )
}