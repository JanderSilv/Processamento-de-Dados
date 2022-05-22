// styles
import { Container, Image, ImageContainer, Text } from './styles'

// types
import { FlynnsTaxonomyProps } from './types'

export function FlynnsTaxonomy(props: FlynnsTaxonomyProps) {
  const { onGoBackButtonClick } = props

  return (
    <Container color="orange" currentPage={0} numberOfPages={5} onGoBackButtonClick={onGoBackButtonClick}>
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
        <Image alt="Flynn" />
      </ImageContainer>
    </Container>
  )
}
