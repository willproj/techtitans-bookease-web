'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';

export default function VisionStatement() {
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
                    <DocumentScannerIcon sx={{ color: '#757575', mr: 2, height: 35, width: 35 }} />
                    <Typography variant='h4' sx={{ color: '#757575' }}>
                        Vision Statement
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    
                </Grid>
            </Grid>
        </Box>
    )
}