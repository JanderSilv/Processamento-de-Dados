// styles
import { ImageContainer, Text, Image } from '../../styles'

// assets
import { tempo1, tempo2, tempo3 } from 'src/components/parallelism/assets'
import { StaticImageData } from 'next/image';

interface TempoDict {
    [id: string]: StaticImageData
}

export function Tempo3() {

  // const [tempo, setTempo] = useState(null);
  let tempo = 3;

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
                No tempo 1 temos um caso de que dois processos estão prcisando de um recurso roxo para poder continuar.

                Quem conseguir pegar primeiro vai poder usar o recurso primeiro, enquanto que o outro terá que esperar ser liberado para então poder usar novamente.
            </p>
        }

        {tempo == 2 &&
            <p>
                No tempo 2 o processo que estava verde pegou o recurso roxo e então o processo vermelho tem que aguardar a liberação do recurso.
            </p>
        }

        {tempo == 3 &&
            <>
                <p>
                    No tempo 3 então a tarefa vermelha consegue finalmente pegar o recurso bloqueado pois foi liberado.
                </p>
                <br></br>
                <p>
                    Pode-se concluir que concorrência é quando várias tarefas são executadas simultaneamente em curtos períodos de tempo podendo fazer uso do mesmo recurso. 
                    <br></br>
                    As tarefas são executadas de forma concorrente, no sentido de que uma tarefa não espera outra para dar continuidade a menos que não precise de um recurso em uso, 
                    enquanto que no paralelismo são de fato separadas de forma física nos núcleos.
                </p>
            </>
        }
      </Text>

      <ImageContainer>
        <Image src={imagesTempo[tempo].src} alt="Tempo 0" />
      </ImageContainer>
    </>
  )
}