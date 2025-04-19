/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import React, { useCallback, useEffect } from 'react'
import useMeasure from 'react-use-measure'
import { addEdge, ReactFlow, useEdgesState, useNodesState, Node } from '@xyflow/react'
import '@xyflow/react/dist/style.css'

const initialEdges = [{
    id: 'e1-2', source: '1', target: '2'
}]

export default function DramaticBasis() {

    const [ref, bounds] = useMeasure()

    const [nodes, setNodes, onNodesChange] = useNodesState<Node<{ label: string }>>([])
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

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

        const initialNodes = [
            { id: '1', position: { x, y: 0 }, data: { label: '1' } },
            { id: '2', position: { x, y: 100 }, data: { label: '2' } },
        ]

        setNodes(initialNodes)

    }, [bounds.width])


    return (
        <div ref={ref} className='w-full max-w-[980px] h-[700px] border rounded-[25px] flex justify-center items-center'>

            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                deleteKeyCode={[]}
                defaultEdgeOptions={defaultEdgeOptions}
                zoomOnScroll={false}
            />

        </div>
    )
}
