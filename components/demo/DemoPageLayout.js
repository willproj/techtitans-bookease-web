'use client'

import Appbar from "../AppSideBar/AppSideBar"
import { Box, Card, Grid } from "@mui/material"
import React from 'react'
import ReactPlayer from 'react-player'

// Render a YouTube video player
export default function DemoPageLayout() {

    return (
        <Box sx={{ flexGrow: 1, m: 2 }}>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Card sx={{ boxShadow: 5, borderRadius: 3 }}>
                        <ReactPlayer
                            url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
                            width={'100%'}
                            height={'80vh'}
                        />
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}