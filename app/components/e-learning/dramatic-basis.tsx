
'use client'

import React, { useCallback, useEffect } from 'react'
import useMeasure from 'react-use-measure'
import { addEdge, ReactFlow, useEdgesState, useNodesState, Node, Edge } from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import CustomNode from './custom-node'

const nodeTypes = {
    CustomNode
}

interface DramaticElementProps {
    id: string
    label: string
    children: Array<DramaticElementProps>
}

// const itemsSimplified = [
//     'theme',
//     'truth',
//     'contra-positive',
//     'lie',
//     'flaw',
//     'wound',
//     'ghost',
//     'want',
//     'need',
// ]

const dramaticElements = [
    {
        id: 'a1',
        label: 'theme',
        children: [
            {
                id: 'b2',
                label: 'lie',
                children: [
                    {
                        id: 'e5',
                        label: 'flaw',
                        children: [
                            {
                                id: 'f6',
                                label: 'wound',
                                children: [

                                ]
                            },
                            {
                                id: 'g7',
                                label: 'ghost',
                                children: [
                                    {
                                        id: 'j10',
                                        label: 'want',
                                        children: []
                                    }
                                ]
                            },
                        ]
                    }
                ]
            },
            {
                id: 'c3',
                label: 'contra-positive',
                children: []
            },
            {
                id: 'd4',
                label: 'truth',
                children: [
                    {
                        id: 'h8',
                        label: 'weapon',
                        children: [
                            {
                                id: 'i9',
                                label: 'need',
                                children: []
                            }
                        ]
                    }
                ]
            },
        ]
    }
]

// const items = [
//     'theme',
//     'truth',
//     'contra-positive',
//     'lie',
//     'flaw',
//     'wound',
//     'ghost',
//     'want',
//     'antagonism',
//     'opposition',
//     'uncertainty',
//     'true behavior',
//     'half-truth',
//     'new-objective',
//     'battle',
//     'dark night',
//     'need',
//     'self-revelation',
//     'true character',
//     'fall into lie',
// ]

export default function DramaticBasis() {

    const [ref, bounds] = useMeasure()

    const [nodes, setNodes, onNodesChange] = useNodesState<Node>([])
    const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([])

    const defaultEdgeOptions = { animated: true }

    interface ConnectionParams {
        source: string
        target: string

    }

    interface EdgeItem {
        id: string
        source: string
        target: string
    }

    const onConnect = useCallback(
        (params: ConnectionParams): void =>
            setEdges((eds: EdgeItem[]) =>
                addEdge({ ...params, id: `e${params.source}-${params.target}` }, eds)
            ),
        [setEdges]
    )

    useEffect(() => {

        const nodeWidth = 150
        const x = (bounds.width / 2) - (nodeWidth / 2)
        const y = 100
        const padding = 60
        const halfNode = 30

        //* Point to the middle of the space


        const initialNodes: Node[] = []
        const initialEdges: Edge[] = []

        // function recursiveNodesListCreator(nodes: DramaticElementProps[], level = 0, parent = 'root', tree: Record<string, { parent: string, level: number, nodes: DramaticElementProps[] }> = {}) {

        //     if (!tree[parent]) {
        //         tree[parent] = {
        //             parent,
        //             level,
        //             nodes
        //         }
        //     }

        //     nodes.forEach((node) => {
        //         recursiveNodesListCreator(node.children, level + 1, node.label, tree)
        //     })

        //     return tree

        // }

        // if (bounds.width > 0) {
        //     const tree = recursiveNodesListCreator(dramaticElements)
        //     const orderedTree = Object.values(tree).sort((a, b) => a.level - b.level)

        //     const padding = 60
        //     const halfNode = 30

        //     function renderNodes(nodesList: DramaticElementProps[], x: number, level = 0) {
        //         for (let i = 0; i < nodesList.length; i++) {

        //             const currY = 100 * (level + 1)
        //             const currX = x + ((nodeWidth + padding) * i)
        //             console.log(currX, 'the X')

        //             const newNode = { id: `id-${nodesList[i].label}`, type: 'CustomNode', position: { x: currX, y: currY }, data: { label: nodesList[i].label } }

        //             initialNodes.push(newNode)

        //             renderNodes(nodesList[i].children, currX, level + 1)

        //         }

        //     }

        //     const initialX = (((bounds.width / 2) - (nodeWidth / 2)) - halfNode) - (nodeWidth * (nodes.length - 1) / 2) - (padding * (nodes.length - 2) / 2)

        //     renderNodes(orderedTree[0].nodes, initialX)
        //     setNodes(initialNodes)

        //     console.log(orderedTree)
        // }

        function handleNodesRecursively(nodes: DramaticElementProps[], level = 0, currNode = 'root') {
            const numOfNodesInLevel = nodes.length

            if (currNode === 'root') {
                nodes.forEach((node) => {
                    initialNodes.push({ id: `id-${node.label}`, type: 'CustomNode', position: { x, y }, data: { label: node.label, pos: 0 } })
                })
            }

            if (currNode === 'theme') {
                let i = 0
                nodes.forEach((node) => {

                    const currX = (x - halfNode) - (nodeWidth * (numOfNodesInLevel - 1) / 2) - (padding * (numOfNodesInLevel - 2) / 2) + ((nodeWidth + padding) * i)

                    initialEdges.push({
                        id: `e${currNode}-${node.label}`, source: `id-${currNode}`, targetHandle: 'b', target: `id-${node.label}`
                    })

                    const hasChildren = node.children.length > 0

                    if (hasChildren) {
                        initialNodes.push({ id: `id-${node.label}`, type: 'CustomNode', position: { x: currX, y: y + 200 }, data: { label: node.label, pos: i + 1, orientation: 'horizontal', hasChildren: true } })

                        let parentLabel = node.label

                        node.children.forEach((node) => {
                            const currY = y + 400
                            const hasChildren = node.children.length > 0

                            let r = 0

                            initialEdges.push({
                                id: `e${parentLabel}-${node.label}`, source: `id-${parentLabel}`, sourceHandle: 'd', targetHandle: 'b', target: `id-${node.label}`
                            })



                            if (hasChildren) {

                                initialNodes.push({ id: `id-${node.label}`, type: 'CustomNode', position: { x: currX, y: currY }, data: { label: node.label, pos: i + 1, orientation: 'horizontal', hasChildren: true } })

                                parentLabel = node.label

                                node.children.forEach((node) => {

                                    const hasChildren = node.children.length > 0

                                    if (hasChildren) {
                                        const childrenCurrX = node.label === 'need' ? currX : (currX - ((nodeWidth / 2) + (padding / 2))) + ((nodeWidth + padding) * r)

                                        initialNodes.push({ id: `id-${node.label}`, type: 'CustomNode', position: { x: childrenCurrX, y: currY + 200 }, data: { label: node.label, pos: i + 1, orientation: 'horizontal', hasChildren: true } })

                                        initialEdges.push({
                                            id: `e${parentLabel}-${node.label}`, source: `id-${parentLabel}`, sourceHandle: 'd', targetHandle: 'b', target: `id-${node.label}`
                                        })

                                        parentLabel = node.label

                                        node.children.forEach((node) => {

                                            initialNodes.push({ id: `id-${node.label}`, type: 'CustomNode', position: { x: currX, y: currY + 400 }, data: { label: node.label, pos: i + 1, orientation: 'horizontal', hasChildren: true } })

                                            initialEdges.push({
                                                id: `e${parentLabel}-${node.label}`, source: `id-${parentLabel}`, sourceHandle: 'd', targetHandle: 'b', target: `id-${node.label}`
                                            })
                                            initialEdges.push({
                                                id: `e${'wound'}-${node.label}`, source: `id-${'wound'}`, sourceHandle: 'd', targetHandle: 'b', target: `id-${node.label}`
                                            })
                                        })

                                    } else {
                                        const childrenCurrX = node.label === 'need' ? currX : (currX - ((nodeWidth / 2) + (padding / 2))) + ((nodeWidth + padding) * r)

                                        initialNodes.push({ id: `id-${node.label}`, type: 'CustomNode', position: { x: childrenCurrX, y: currY + 200 }, data: { label: node.label, pos: i + 1, orientation: 'horizontal', hasChildren: true } })

                                        initialEdges.push({
                                            id: `e${parentLabel}-${node.label}`, source: `id-${parentLabel}`, sourceHandle: 'd', targetHandle: 'b', target: `id-${node.label}`
                                        })
                                    }

                                    r++

                                })

                            } else {
                                initialNodes.push({ id: `id-${node.label}`, type: 'CustomNode', position: { x: currX, y: currY }, data: { label: node.label, pos: i + 1, orientation: 'horizontal', hasChildren: false } })
                            }

                        })


                    } else {
                        initialNodes.push({ id: `id-${node.label}`, type: 'CustomNode', position: { x: currX, y: y + 200 }, data: { label: node.label, pos: i + 1, orientation: 'horizontal', hasChildren: false } })
                    }

                    i++

                })
            }

            nodes.forEach((node) => {
                handleNodesRecursively(node.children, level + 1, node.label)
            })
        }

        if (bounds.width > 0) {
            handleNodesRecursively(dramaticElements)
        }

        setNodes(initialNodes)
        setEdges(initialEdges)

    }, [bounds.width, setEdges, setNodes])


    return (
        <div ref={ref} className='w-full max-w-[980px] h-screen mb-20 rounded-[25px] flex justify-center items-center'>

            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                deleteKeyCode={[]}
                defaultEdgeOptions={defaultEdgeOptions}
                zoomOnScroll={false}
                nodeTypes={nodeTypes}
            />

        </div>
    )
}
