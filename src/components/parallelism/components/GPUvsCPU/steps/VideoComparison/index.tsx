// styles
import { Comparison } from '../../assets'
import { ImageContainer, Text, Image } from '../../styles'


export function ComparisonStep() {
  return (
    <>
      <Text>
        <h1>Comparações</h1>

        <p>
          A principal diferença entre CPU e GPU é a capacidade individual de cada, e a sua função.
          Enquanto a  CPU possui núcleos especializados nos mais diversos tipos de processamento de dados, os núcleos da GPU se preocupam apenas com processamento de imagens.
          Com isso, podemos concluir que a CPU possui um funcionamento prático mais genérico, enquanto a CPU, apesar de poderosa, possui uma função específica.
        </p>

      </Text>

      <ImageContainer>
        <Image src={Comparison.src} alt='GPUS' height={400} width={550} />
      </ImageContainer>
    </>
  )
}
