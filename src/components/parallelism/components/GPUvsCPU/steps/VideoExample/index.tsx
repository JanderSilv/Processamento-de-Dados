// styles
import { Example } from '../../assets'
import { ImageContainer, Text, Image } from '../../styles'


export function ExampleStep() {
  return (
    <>
      <Text>
        <h1>Demonstração</h1>

        <p>
        A imagem ao lado, retirada <a href='https://www.youtube.com/watch?v=-P28LKWTzrI' target='_blank'>
          <strong>
          deste video
          </strong> </a> demonstra o poder do processamento paralelo , podemos ver o processamento concorrente da GPU, 
        que pinta precisamente pixel por pixel de um desenho simples, 
        e utilizando a quantidade de núcleos de uma GPU para criar uma imagem de alta resolução.
        </p>

        <p>
          Se utilizarmos uma metáfora militar 
          para comparar uma CPU com uma GPU, a CPU seria uma divisão de blindados, poderosos, capazes de
          realizar varias funções, enquanto uma GPU age como um exército numeroso de soldados, cada um 
          responsável por uma função, que em conjunto realizam com maestria.
        </p>
      </Text>

      <ImageContainer>
        <Image src={Example.src} alt='GPUS' height={400} width={550} />
      </ImageContainer>
    </>
  )
}
