'use client'

import React, { useCallback } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, MiniMap, Controls } from 'reactflow';
import 'reactflow/dist/base.css'

import CustomNode from './CustomNode';

const nodeTypes = {
    custom: CustomNode,
};

const initNodes = [
    {
        id: '1',
        type: 'custom',
        data: { name: 'Arrayman Pol', job: 'Project Leader', emoji: '😎' },
        position: { x: 0, y: 50 },
    },
    {
        id: '2',
        type: 'custom',
        data: { name: 'Chang Geng', job: 'Designer', emoji: '🤓' },

        position: { x: -350, y: 200 },
    },
    {
        id: '3',
        type: 'custom',
        data: { name: 'Heet Patel', job: 'Developer', emoji: '🤩' },
        position: { x: -100, y: 200 },
    },
    {
        id: '4',
        type: 'custom',
        data: { name: 'Heping Dong', job: 'Developer', emoji: '🤩' },
        position: { x: 150, y: 200 },
    },

    {
        id: '5',
        type: 'custom',
        data: { name: 'Asif', job: 'Developer', emoji: '🤩' },
        position: { x: 400, y: 200 },
    },
];

const initEdges = [
    {
        id: 'e1-2',
        source: '1',
        target: '2',
    },
    {
        id: 'e1-3',
        source: '1',
        target: '3',
    },
    {
        id: 'e1-4',
        source: '1',
        target: '4',
    },
    
    {
        id: 'e1-5',
        source: '1',
        target: '5',
    },
];

const Flow = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges);

    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            fitView
        >
            <MiniMap />
            <Controls />
        </ReactFlow>
    );
};

export default Flow;