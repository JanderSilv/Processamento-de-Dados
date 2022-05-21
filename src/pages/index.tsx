import type { GetStaticProps, NextPage } from 'next'
import { ParallelismSection, QuantumComputing } from 'src/components'
import {} from 'src/components/parallelism'
import { makeNodesAndEdges, NodesAndEdges } from 'src/components/quantum-computing/data'

type HomeProps = {
  nodesAndEdges: NodesAndEdges
}

const Home: NextPage<HomeProps> = props => {
  const { nodesAndEdges } = props
  return (
    <>
      <ParallelismSection />
      <QuantumComputing nodesAndEdges={nodesAndEdges} />
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      nodesAndEdges: makeNodesAndEdges(),
    },
  }
}
