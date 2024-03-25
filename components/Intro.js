'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';

export default function Intro() {

    return (
        <Box sx={{
            flexGrow: 1,
            backgroundImage: 'url(library.jpg)',
            backgroundSize: 'cover',
            height: '100vh',
            width: '100%'
        }}>
            <Grid container spacing={2} sx={{ px: 20 }}>
                <Grid item xs={6} sx={{ mt: 70 }}>
                    <Button variant='outlined' sx={{
                        color: 'white',
                        borderColor: 'white', border: 1,
                        height: 70,
                    }}>
                        <Typography variant='h5' sx={{
                            textTransform: 'capitalize',
                        }}>
                            View Source Code
                        </Typography>
                    </Button>
                </Grid>
                <Grid item xs={6} sx={{ mt: 20 }}>

                </Grid>
            </Grid>
        </Box >
    )
}