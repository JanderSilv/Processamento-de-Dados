// styles
import { ImageContainer, Text, Image } from '../../styles'
import { Core } from '../../assets'

export function CPUStep() {
  return (
    <>
      <Text>
        <h1>CPU, a Unidade de Processamento</h1>

        <p>
          CPU ou processador, é a parte de um sistema computacional, que realiza as instruções de um programa de computador,
          para executar a aritmética básica, lógica, e a entrada e saída de dados.
        </p>
        <p>
          Os processadores ficam a cada dia cada vez mais e mais avançados,a antiga     
          <a href='https://pt.wikipedia.org/wiki/Lei_de_Moore' target='_blank'>
              <strong>
                <> </>Lei de Moore 
              </strong>
            </a>
            ,que ditava que o número de transistores dobraria anualmente não acompanha mais, atualmente, as unidades de processamento de um computador 
            conseguem realizar as mais diversas funções, até mesmo conseguindo realizar processamento de gráficos e imagens, como uma GPU.
        </p>
      </Text>

      <ImageContainer>
        <Image src={Core.src} alt='GPUS' height={400} width={550} />
      </ImageContainer>
    </>
  )
}
