'use client'

import Appbar from "../AppSideBar/AppSideBar"
import { Button, CardContent, Typography } from "@mui/material"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import IntroCard from "./IntroCard";
import Card from "@mui/material/Card";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export default function HomepageLayout() {

    return (
        <>
            <Box sx={{ flexGrow: 1, m: 4 }}>
                <Grid container spacing={6}>
                    <Grid item xs={5}>
                        <Grid container spacing={6}>
                            <Grid item xs={12}>
                                <IntroCard />
                            </Grid>
                            <Grid item xs={12}>
                                <Card sx={{ boxShadow: 5, borderRadius: 3 }}>
                                    <CardContent>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <img src="/gitlab-logo.jpg" style={{ marginRight: '8px', width: 150, height: 50 }} alt="GitLab Logo" />
                                            <Button variant="outlined" sx={{ml: 10}}>View Source</Button>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={7}>
                        <Item>xs=4</Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}