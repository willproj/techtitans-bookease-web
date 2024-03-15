'use client'
import { Box, Card, CardContent, Grid, Typography } from "@mui/material"
import SummarizeIcon from '@mui/icons-material/Summarize';
export default function VisionLayout() {

    return (
        <Box sx={{ flexGrow: 1, m: 4 }}>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Card sx={{ boxShadow: 5, borderRadius: 3 }}>
                        <CardContent>
                            <Typography variant="h6">
                                <SummarizeIcon sx={{mr: 1}}/> Vision Statement
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Card sx={{ boxShadow: 5, borderRadius: 3 }}>
                        <CardContent>
                            <Typography variant="subtitle2">
                                BookEase is poised to revolutionize the way information about diverse books is stored, catering specifically to academically inclined individuals seeking a seamless book-buying experience. Functioning much like traditional bookstore systems, BookEase offers a user-friendly platform where individuals can effortlessly explore a vast collection of academic papers, literary resources, and books, both academic and non-academic.
                                Tailored primarily for students and professors, the application goes beyond a conventional bookstore setup. It allows users to not only search for materials but also to manage their information dynamically. Professors, for instance, have the ability to modify the required books for their courses within a specific term, fostering adaptability to the evolving needs of the academic environment. Simultaneously, students gain access to a convenient overview of the books required for their enrolled courses in a given term.
                                Beyond the academic realm, BookEase extends its utility to facilitate sustainable practices. Students and general customers can engage in the buying and selling of used books, promoting recycling and offering competitive pricing based on the book's condition. This unique feature aligns BookEase with the vision of contributing to environmentally conscious practices within the academic community.
                                A comprehensive transaction history feature empowers students and customers to track their past expenditures. Additionally, customer representatives possess the capability to review transaction histories, allowing for efficient handling of customer inquiries, including refund requests that meet the predefined conditions.
                                Acknowledging the diverse roles within the system, BookEase implements a credential-based access system. Specialized credentials validate students, professors, and customer representatives, ensuring secure access to the system. General customers, on the other hand, have the flexibility to make purchases without the need for registration or creating an account.
                                The integration of university databases ensures seamless synchronization of relevant academic information with the BookEase system. This not only streamlines the onboarding process for academics but also enhances data accuracy by eliminating manual data entry errors.
                                Envisioned as a mobile-friendly application, BookEase remains adaptable with plans for future releases featuring a web-based interface. This extensibility ensures that the application can evolve with technological advancements and user preferences.
                                The essence of BookEase lies in delivering a personalized user experience, setting it apart from existing systems. By offering distinct access levels corresponding to different user roles, the application simplifies navigation and streamlines the user journey. The consolidation of course information and associated required books enables students to directly purchase course materials, eliminating the need for extensive research on each individual course.
                                Success metrics for the project are twofold. Firstly, user feedback, particularly in the form of reviews, will serve as a barometer for user awareness and satisfaction with the application's features. Secondly, the number of transactions conducted over time will indicate the system's efficacy in achieving its intended purpose. BookEase aspires not only to enhance customer experience through comprehensive information and reviews but also to contribute to a sustainable academic ecosystem.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}