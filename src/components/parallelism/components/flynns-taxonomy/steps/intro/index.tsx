// styles
import { ImageContainer, Text, Image } from '../../styles'

// assets
import { flynn } from 'src/components/parallelism/assets'

export function IntroStep() {
  return (
    <>
      <Text>
        <h1>Taxonomia de Flynn</h1>

        <p>
          A <b>taxonomia de Flynn</b> é uma classificação de arquiteturas de computador proposta por{' '}
          <ins>Michael J. Flynn</ins> em 1966 para diferenciar processadores modernos uns dos outros.
        </p>
        <p>
          Esse método classifica os processadores em 4 tipos, baseando-se no{' '}
          <b>n de fluxos simultâneos de instrução e dados disponíveis</b>.
        </p>

        <h2>Os 4 tipos</h2>
      </Text>

      <ImageContainer>
        <Image src={flynn.src} alt="Flynn" />
      </ImageContainer>
    </>
  )
}
