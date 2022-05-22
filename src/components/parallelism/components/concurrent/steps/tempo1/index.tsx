// styles
import { ImageContainer, Text, Image } from '../../styles'
import { ButtonTempo, ContainerBtnTempo } from './styles'

// assets
import { tempo1, tempo2, tempo3 } from 'src/components/parallelism/assets'
import { StaticImageData } from 'next/image';

interface TempoDict {
    [id: string]: StaticImageData
}

export function Tempo1() {

  // const [tempo, setTempo] = useState(null);
  let tempo = 1;

  const imagesTempo: TempoDict = {
      1: tempo1,
      2: tempo2,
      3: tempo3
  }
  
  return (
    <>
      <Text>
        <h1>Concorrência</h1>

        {tempo == 1 && 
            <p>
                No tempo 1 temos um caso de que duas tarefas estão prcisando de um recurso roxo para poder continuar.

                Quem conseguir pegar primeiro vai poder usar o recurso primeiro, enquanto que o outro terá que esperar ser liberado para então poder usar novamente.
            </p>
        }

        {tempo == 2 &&
            <p>
                No tempo 2 o processo que estava verde pegou o recurso roxo e então o processo vermelho tem que aguardar a liberação do recurso.
            </p>
        }

        {tempo == 3 &&
            <p>
                No tempo 3 então o processo vermelho consegue finalmente pegar o recurso bloqueado pois foi liberado.
            </p>
        }
      </Text>

      <ImageContainer>
        <Image src={imagesTempo[tempo].src} alt="Tempo 0" />
      </ImageContainer>
    </>
  )
}