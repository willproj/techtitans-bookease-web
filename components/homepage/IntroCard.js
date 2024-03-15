'use client'
import { Card, CardContent, Typography } from "@mui/material"
import Grid from "@mui/material/Grid"

export default function IntroCard() {
    return (
        <Card sx={{ boxShadow: 5, borderRadius: 3, p: 3 }}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h3">
                            Introduction
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h5">
                            BookEase is poised to revolutionize the way information about diverse books is stored,
                            catering specifically to academically inclined individuals seeking a seamless book-buying experience.
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}