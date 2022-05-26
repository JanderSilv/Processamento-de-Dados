import { useState } from 'react'
import { Root } from '@radix-ui/react-dialog'
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
  OnConnect,
  OnInit,
  Background,
} from 'react-flow-renderer'

import { Dialog } from '../../dialog'
import { NodeCard, NodeCardProps } from '../node-card'
import { makeNodesAndEdges, NodesAndEdges } from '../data'
import { quantumComputingClass } from './styles'
import { NodeDialogContent } from '../node-dialog-content'

export type QuantumComputingProps = {
  nodesAndEdges: NodesAndEdges
}

const nodeTypes = { card: NodeCard }

export const Flow = () => {
  const { contentEdges, contentNodes } = makeNodesAndEdges()

  const [nodes, setNodes, onNodesChange] = useNodesState(contentNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(contentEdges)
  const [selectedNode, setSelectedNode] = useState<NodeCardProps | null>(null)

  const onConnect: OnConnect = params => setEdges(eds => addEdge(params, eds))
  const onInit: OnInit = reactFlowInstance => console.log('flow loaded:', reactFlowInstance)
  const handleClick = (node: NodeCardProps) => {
    setSelectedNode(node)
    let nodes: number[] = []
    setNodes(ns => {
      const newNodes = [...ns]
      const foundNode = newNodes.find(n => n.id === node.id.toString())!
      nodes = foundNode.data.nodes

      for (const nodeId of nodes) {
        const childNodeIndex = newNodes.findIndex(childNode => childNode.id === nodeId.toString())
        newNodes[childNodeIndex] = {
          ...newNodes[childNodeIndex],
          data: { ...newNodes[childNodeIndex].data, isActive: true },
        }
      }
      return newNodes
    })
    setEdges(es => {
      const newEdges = [...es]
      for (const nodeId of nodes) {
        const index = es.findIndex(e => e.target === nodeId.toString())
        newEdges[index] = { ...es[index], animated: true }
      }
      return newEdges
    })
  }
  return (
    <section className={quantumComputingClass()}>
      <Root>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onInit={onInit}
          onNodeClick={(_, node) => handleClick(node.data)}
          defaultZoom={0}
          defaultPosition={[600, 400]}
          // fitView
        >
          <MiniMap
            nodeStrokeColor={n => {
              if (n.style?.background) return n.style.background.toString()
              if (n.type === 'card') return '#0041d0'
              if (n.type === 'output') return '#ff0072'
              if (n.type === 'default') return '#1a192b'
              return '#eee'
            }}
            nodeColor={n => {
              if (n.style?.background) return n.style.background.toString()
              if (n.type === 'card') return '#0041d0'
              return '#fff'
            }}
            nodeBorderRadius={2}
          />
          <Controls />
          <Background color="#aaa" gap={16} />
        </ReactFlow>
        <Dialog>{!!selectedNode && <NodeDialogContent {...selectedNode} />}</Dialog>
      </Root>
    </section>
  )
}
