// styles
import { ImageContainer, Text, Image } from '../../styles'

import { GPUs } from '../../assets'


export function GPUStep() {
  return (
    <>
      <Text>
        <h1>GPU, a Placa Gráfica</h1>

        <p>
        GPU, conhecido também como VPU ou unidade de processamento visual, 
        é um tipo de microprocessador especializado em processar gráficos em computadores pessoais, estações de trabalho ou videogames.
        </p>

        <p>
          Atualmente existem apenas duas empresas consolidadas no mercado de GPUs, a Nvidia, com suas placas de vídeo bem conhecidas no
          mundo dos games, RTX, GTX, são nomes conhecidos na comunidade gamer. Sua rival no ramo , esta empresa entrou neste nicho
           de mercador um pouco depois, a AMD, a antiga gigante do mercado de microprocessadores, com suas placas Radeon e RX, 
           chegando cada vez mais próximo de sua rival.
        </p>
      </Text>

      <ImageContainer>
        <Image src={GPUs.src} alt='GPUS' height={400} width={550} />
      </ImageContainer>
    </>
  )
}
