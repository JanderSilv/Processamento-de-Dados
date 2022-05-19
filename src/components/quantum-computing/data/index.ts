import { Edge, Node } from 'react-flow-renderer'
import { NodeCardProps } from '../node-card'
import contentsData from './contents.json'
import contentTree from './contentTree.json'

export type NodesAndEdges = {
  contentNodes: Node<NodeCardProps>[]
  contentEdges: Edge<NodeCardProps>[]
}

type Translate = {
  x?: 'left' | 'right'
  y?: 'up' | 'down'
}

const positions = {
  paths: {} as Record<string, number>,
  defaultTranslate: { x: 650, y: 300 },
  makeX: (path: number, translate?: Translate) => {
    let xPosition = (positions.paths[path] || 0) + positions.defaultTranslate.x

    if (translate?.x === 'left') xPosition = xPosition - positions.defaultTranslate.x
    else if (translate?.x === 'right') xPosition = xPosition + positions.defaultTranslate.x

    positions.paths[0] = xPosition
    positions.paths[path] = xPosition
    return xPosition
  },
  makeY: (path: number, translate?: Translate) => {
    const yPositions: Record<string, number> = {
      0: 0,
      1: -400,
      2: 400,
    }

    const yPosition = yPositions[path]
    if (translate?.y === 'up') return yPosition - positions.defaultTranslate.y
    if (translate?.y === 'down') return yPosition + positions.defaultTranslate.y
    return yPosition
  },
}

const makePosition = (id: number, path: number, translate?: Translate) => {
  if (id === 1) return { x: -300, y: 0 }
  return { x: positions.makeX(path, translate), y: positions.makeY(path, translate) }
}

export const makeNodesAndEdges = () => {
  positions.paths = {}
  const contentNodes = []
  const contentEdges = []

  for (const [index, { id, nodes }] of contentTree.entries()) {
    const { path, translate, ...rest } = contentsData.find(content => content.id === id)!

    const node: Node<NodeCardProps> = {
      id: id.toString(),
      type: 'card',
      data: {
        ...rest,
        isActive: id === 1,
        isLastCard: contentTree.length - 1 === index,
        nodes,
      },
      position: makePosition(id, path, translate as Translate),
      draggable: false,
      connectable: false,
    }

    contentNodes.push(node)

    for (const nodeId of nodes) {
      const edge: Edge = {
        id: `e${id}-${nodeId}`,
        source: id.toString(),
        target: nodeId.toString(),
        style: { stroke: 'hsla(227, 76%, 62%, 0.8)' },
      }

      contentEdges.push(edge)
    }
  }

  return { contentNodes, contentEdges }
}
