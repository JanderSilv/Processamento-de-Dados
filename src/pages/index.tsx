import type { GetStaticProps, NextPage } from 'next'
import { QuantumComputing } from 'src/components'
import { makeNodesAndEdges, NodesAndEdges } from 'src/components/quantum-computing/data'

type HomeProps = {
  nodesAndEdges: NodesAndEdges
}

const Home: NextPage<HomeProps> = props => {
  const { nodesAndEdges } = props
  return <QuantumComputing nodesAndEdges={nodesAndEdges} />
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      nodesAndEdges: makeNodesAndEdges(),
    },
  }
}
