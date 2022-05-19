import { Banner } from './banner'
import { Flow, QuantumComputingProps } from './flow'

export const QuantumComputing = ({ nodesAndEdges }: QuantumComputingProps) => {
  return (
    <section>
      <Banner />
      <Flow nodesAndEdges={nodesAndEdges} />
    </section>
  )
}
