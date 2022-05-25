// styles
import { ImageContainer, Text, Image } from '../../styles'
import { glowingCPU } from '../../assets'

export function IntroStep() {
  return (
    <>
      <Text>
        <h1>GPU vs CPU</h1>

        <p>
          Atualmente a capacidade de processamento é muito maior do que a do passado, a capacidade de processar big data,
          vídeos e imagems em altíssima definição ja são uma realidade, a tecnologia chegou a tal escala que hoje em dia não
          se pensa mais em uma <strong>unidade</strong> de processamento, e sim em aglomerados contendo dezenas, centenas de cores,
          funcionando a todo vapor.
        </p>

        <p>
          O avanço técnológico não se limitou apenas a processadores de computadores, hoje em dias temos unidades de processamento 
          especializadas em processar imagens, vídeos e jogos, com alta definição. Estamos falando das GPUs, unidades de processamento 
          gráfico contendo quantidades incriveis de núcleos de processamento internos, possuindo um poder de processamento jamais visto...
        </p>

        <p>
          A seguir, você irá aprender as principais diferenças entre a capacidade de processamento de um processador de computador comum
          com uma placa gráfica especializada, destacando ambas as vantagens e desvantagens de cada um.
          Para mais informações, o link a seguir irá redirecionar a um vídeo explicativo utilizando elementos lúdicos para explicar sobre 
          cada uma.
        </p>
        <a href='https://www.youtube.com/watch?v=nlxb1FlEMPA' target='_blank'>
            <strong>
              Clique aqui para ir ao vídeo!
            </strong>
        </a>
      </Text>

      <ImageContainer>
      <Image src={glowingCPU.src} alt="Glowing CPU"  height={500} width={650} />
      </ImageContainer>
    </>
  )
}
