'use client'
import React, { useCallback } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, MiniMap, Controls } from 'reactflow';
import 'reactflow/dist/base.css';
import CustomNode from './CustomNode';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Diversity3Icon from '@mui/icons-material/Diversity3';
const nodeTypes = {
    custom: CustomNode,
};

const initNodes = [
    {
        id: '1',
        type: 'custom',
        data: {
            name: 'Arrayman Pol',
            job: <ul>
                <p>Project Leader</p>
                <li>backend design</li>
                <li>backend design</li>
                <li>backend design</li>
                <li>backend design</li>
            </ul>,
            emoji: '😎'
        },
        position: { x: 0, y: 50 },
    },
    {
        id: '2',
        type: 'custom',
        data: {
            name: 'Chang Geng', job: <ul>
                <p>Developer</p>
                <li>backend design</li>
                <li>backend design</li>
                <li>backend design</li>
                <li>backend design</li>
            </ul>, emoji: '🤓'
        },

        position: { x: -350, y: 300 },
    },
    {
        id: '3',
        type: 'custom',
        data: {
            name: 'Heet Patel', job: <ul>
                <p>Developer</p>
                <li>backend design</li>
                <li>backend design</li>
                <li>backend design</li>
                <li>backend design</li>
            </ul>, emoji: '🤩'
        },
        position: { x: -100, y: 300 },
    },
    {
        id: '4',
        type: 'custom',
        data: {
            name: 'Heping Dong', job: <ul>
                <p>Developer</p>
                <li>backend design</li>
                <li>backend design</li>
                <li>backend design</li>
                <li>backend design</li>
            </ul>, emoji: '🤩'
        },
        position: { x: 150, y: 300 },
    },

    {
        id: '5',
        type: 'custom',
        data: {
            name: 'Asif', job: <ul>
                <p>Developer</p>
                <li>backend design</li>
                <li>backend design</li>
                <li>backend design</li>
                <li>backend design</li>
            </ul>, emoji: '🤩'
        },
        position: { x: 400, y: 300 },
    },
];

const initEdges = [
    {
        id: 'e1-2',
        source: '1',
        target: '2',
        animated: true,
        style: {
            strokeWidth: 2,
            stroke: '#00e676',
        },
    },
    {
        id: 'e1-3',
        source: '1',
        target: '3',
        animated: true,
        style: {
            strokeWidth: 2,
            stroke: '#00e676',
        },
    },
    {
        id: 'e1-4',
        source: '1',
        target: '4',
        animated: true,
        style: {
            strokeWidth: 2,
            stroke: '#00e676',
        },
    },

    {
        id: 'e1-5',
        source: '1',
        target: '5',
        animated: true,
        style: {
            strokeWidth: 2,
            stroke: '#00e676',
        },
    },
];

export default function Team() {

    const [nodes, setNodes, onNodesChange] = useNodesState(initNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges);

    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    mt: 6
                }}>
                    <Diversity3Icon sx={{ color: 'white', mr: 2, height: 35, width: 35 }} />
                    <Typography variant='h4' sx={{ color: 'white' }}>
                        Team
                    </Typography>
                </Grid>
                <Grid item xs={12} sx={{ mt: 1, mx: 10, height: '80vh' }}>
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        nodeTypes={nodeTypes}
                        fitView
                    >
                    </ReactFlow>
                </Grid>
            </Grid>
        </Box>

    );
}