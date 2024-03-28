'use client'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import PsychologyIcon from '@mui/icons-material/Psychology';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });


function PieChart() {
    const series = [3, 4, 3, 1, 2, 2, 2.5];

    const chartOptions = {
        chart: {
            type: 'pie',
            toolbar: {
                show: true,
                tools: {
                    download: true
                }
            },
        },
        labels: ['Create Account', 'Book Search', 'View Books', 'Ratings and Comments', 'Favorite Book', 'Sell Books', 'Buy Books'],
        stroke: {
            width: 3
        },
        title: {
            text: 'Actual Time for Each Feature',
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
            }
        }],

        legend: {
            position: 'top'
        }
    };

    return (
        <Chart options={{ ...chartOptions, labels: chartOptions.labels }}
            series={series}
            type='pie'
            width='100%'
            height={350}
        />
    )
}

function BarChart() {

    const chartData = {

        series: [{
            name: 'Estimated Days',
            data: [2, 3, 2, 2, 4, 3, 3]
        }, {
            name: 'Actual Days',
            data: [3, 4, 3, 1, 2, 2, 2.5]
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded'
                },
            },
            dataLabels: {
                enabled: true
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Create Account', 'Book Search', 'View Books', 'Ratings and Comments', 'Favorite Book', 'Sell Books', 'Buy Books'],
            },
            yaxis: {
                title: {
                    text: 'days'
                }
            },
            fill: {
                opacity: 1
            },
            title: {
                text: 'Estimated Time VS Actual Time',
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val + "days"
                    }
                }
            },
            legend: {
                position: 'top',
            }
        },

    };

    return (
        <Chart options={chartData.options} series={chartData.series} type="bar" width="100%" height={400} />
    );

}

export default function Postmortem() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={6}>
                <Grid item xs={12} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    mt: 6
                }}>
                    <PsychologyIcon sx={{ color: '#757575', mr: 2, height: 35, width: 35 }} />
                    <Typography variant='h4' sx={{ color: '#757575' }}>
                        Development Process
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ ml: 10 }}>
                        <Typography variant='body1' sx={{ color: '#757575' }}>
                            Below is the chart depicting estimated vs actual time for the development of this application
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box sx={{ ml: 10, mt: 3 }}>
                        <BarChart />
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box sx={{ mr: 10, mt: 3 }}>
                        <PieChart />
                    </Box>
                </Grid>
                <Grid item xs={12} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                }}>
                    <PsychologyIcon sx={{ color: '#757575', mr: 2, height: 35, width: 35 }} />
                    <Typography variant='h4' sx={{ color: '#757575' }}>
                        Postmortem
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ mx: 10 }}>
                        <Typography variant='h6'>
                            title
                        </Typography>
                        <Typography variant='subtitle2'>
                            description
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ mx: 10 }}>
                        <Typography variant='h6'>
                            title
                        </Typography>
                        <Typography variant='subtitle2'>
                            description
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ mx: 10 }}>
                        <Typography variant='h6'>
                            title
                        </Typography>
                        <Typography variant='subtitle2'>
                            description
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}