// styles
import { ImageContainer, Text, Image } from '../../styles'

// assets
import { gpus } from '../../assets'

export function SIMDStep() {
  return (
    <>
      <Text>
        <h2>
          SIMD • <i>Single Instruction, Multiple Data</i>
        </h2>

        <p>Fluxo de instrução único, fluxo de dados múltiplos.</p>
        <p>
          Em arquiteturas SIMD,{' '}
          <ins>
            uma mesma instrução é transmitida para diversos processadores, mas cada um processa com dados diferentes
          </ins>
          .
        </p>
        <p>
          Esse tipo de arquitetura é muito comum em <b>GPUs</b>, que lidam com <b>cálculos matriciais</b>.
        </p>
      </Text>

      <ImageContainer>
        <Image src={gpus.src} alt="GPUs" />
      </ImageContainer>
    </>
  )
}
