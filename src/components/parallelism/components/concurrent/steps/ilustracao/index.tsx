// styles
import { ImageContainer, Text, Image } from '../../styles'

// assets
import { introConcorrencia } from 'src/components/parallelism/assets'

export function Ilustracao() {
  return (
    <>
      <Text>
        <h1>Paralelismo e Concorrência</h1>
        <p>
        Para entender melhor esse assunto vamos fazer uso de algumas ilustrações.

        Desta forma, leia a figura ao lado e fique atento ao significado de cada uma.
        </p>
        <ul>
            <li>
                <p>
                    <b>Processo</b> - será representado pelo quadrado com cores diferentes.
                </p>
            </li>
            <li>
                <p>
                    <b>Recurso</b> - será representado pela linha grossa.
                </p>
            </li>
            <li>
                <p>
                    Os processos usam o recurso da cor em que estão pintados.
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