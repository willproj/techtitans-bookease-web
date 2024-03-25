'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import Pagination from '@mui/material/Pagination';

export default function Features() {
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} sx={{ px: 10 }}>
                <Grid item xs={12} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    mt: 6
                }}>
                    <AppShortcutIcon sx={{ color: 'white', mr: 2, height: 35, width: 35 }} />
                    <Typography variant='h4' sx={{ color: 'white' }}>
                        Features
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography color={'white'}>Page: {page}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography color={'white'}>Page: {page}</Typography>
                </Grid>
                <Grid item xs={12} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Pagination
                        count={10}
                        page={page}
                        onChange={handleChange}
                        color='primary'
                        size="large"
                        sx={{
                            '& .MuiPaginationItem-root': {
                                color: 'white',
                            },
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    )
}