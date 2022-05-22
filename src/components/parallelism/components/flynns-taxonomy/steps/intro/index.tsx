// styles
import { ImageContainer, Text, Image } from '../../styles'

// assets
import { flynn } from 'src/components/parallelism/assets'
import { Table } from './styles'

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

        <Table>
          <tr>
            <th className="dark"></th>
            <th className="normal">Single Instruction</th>
            <th className="light">Multiple Instruction</th>
          </tr>
          <tr>
            <th className="normal">Single Data</th>
            <td className="light">SISD</td>
            <td className="normal">MISD</td>
          </tr>
          <tr>
            <th className="light">Multiple Data</th>
            <td className="normal">SIMD</td>
            <td className="light">MIMD</td>
          </tr>
        </Table>
      </Text>

      <ImageContainer>
        <Image src={flynn.src} alt="Flynn" />
      </ImageContainer>
    </>
  )
}
