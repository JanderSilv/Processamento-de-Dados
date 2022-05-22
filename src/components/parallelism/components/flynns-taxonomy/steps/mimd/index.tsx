// styles
import { ImageContainer, Text, Image } from '../../styles'

// assets
import { intelPhi, mimd } from '../../assets'
import { ParadinhaContainer } from './styles'

export function MIMDStep() {
  return (
    <>
      <Text>
        <h2>
          MIMD • <i>Multiple Instruction, Multiple Data</i>
        </h2>

        <p>Múltiplos fluxos de instrução, múltiplos fluxos de dados.</p>
        <p>
          Nessa arquitetura,{' '}
          <ins>vários processadores diferentes executam instruções diferentes com dados diferentes</ins>. Esses
          processos podem tanto ter uma <b>memória compartilhada</b> quanto uma <b>memória distribuída</b>.
        </p>

        <ParadinhaContainer>
          <img src={mimd.src} alt="MIMD" />
        </ParadinhaContainer>
      </Text>

      <ImageContainer>
        <Image src={intelPhi.src} alt="Intel Xeon Phi" />
      </ImageContainer>
    </>
  )
}
