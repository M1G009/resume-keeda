import { ThemeProvider } from '@emotion/react';
import { Box, Container, Grid, Typography, createTheme, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';


interface EducationDetail {
    degree: string;
    school: string;
    grade: string;
    passingYear: string;
}

interface WorkExperience {
    companyName: string,
    title: string;
    startDate: Date;
    endDate: Date;
    description: string;
}

const Resume = ({ educationdetail, workexp }: any) => {

    const theme = createTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const [educationDetail, setEducationDetail] = useState<EducationDetail[]>(educationdetail)
    const [workExperience, setWorkExperience] = useState<WorkExperience[]>(workexp)


    function formatDate(date: Date) {
        const d = new Date(date);
        const year = d.getFullYear();
        let month = (1 + d.getMonth()).toString().padStart(2, '0');
        let day = d.getDate().toString().padStart(2, '0');

        return `${day}-${month}-${year}`;
    }


    return (
        <Box id='resume' sx={{ pt: 10 }}>
            <ThemeProvider theme={theme}>
                <Container maxWidth="lg">
                    <Box >
                        <Box sx={{ textAlign: 'center', mb: isSmallScreen ? "40px" : "80px" }}>
                            <Typography variant='subtitle1' sx={{ color: '#9f9f9f' }}>Check out my Resume</Typography>
                            <Typography variant='h3' sx={{ fontWeight: 'bold' }}>Resume</Typography>
                            <div className='animated-bar'></div>
                        </Box>
                        <Grid container spacing={2} direction={isSmallScreen ? "column" : "row"}>
                            <Grid item xs={12} md={6} sx={{ pr: isSmallScreen ? 0 : 4, mb: isSmallScreen ? 4 : 0 }}>
                                <Box>
                                    <Typography variant='h5' sx={{ mb: 4 }}>Education</Typography>
                                    {
                                        educationDetail.map((el, index) => {
                                            return <div className='resume-item' key={index}>
                                                <span className='item-arrow'></span>
                                                <Typography variant='h5' sx={{ textTransform: 'capitalize' }}>{el.degree}</Typography>
                                                <Typography variant='subtitle1' sx={{ color: '#9f9f9f', mt: 1 }}>{el.school} / {el.passingYear}</Typography>
                                                <Typography variant='subtitle1' sx={{ color: '#9f9f9f', mt: 1 }} component="p">{el.grade}</Typography>
                                            </div>
                                        })
                                    }

                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6} sx={{ pr: isSmallScreen ? 0 : 4, mb: isSmallScreen ? 4 : 0 }}>
                                <Box>
                                    <Typography variant='h5' sx={{ mb: 4 }}>Work Experience</Typography>

                                    {
                                        workExperience.map((el, index) => {
                                            return <div className='resume-item ' key={index}>
                                                <span className='item-arrow'></span>
                                                <Typography variant='h5' sx={{ textTransform: "capitalize" }}>{el.title}</Typography>
                                                <Typography variant='subtitle1' sx={{ color: '#9f9f9f', mt: 1 }}>{el.companyName} {formatDate(el.startDate)}  {formatDate(el.endDate)}  </Typography>
                                                <Typography variant='subtitle1' sx={{ color: '#9f9f9f', mt: 1 }} component="p">{el.description}</Typography>
                                            </div>
                                        })
                                    }
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </ThemeProvider>
        </Box>
    )
}

export default Resume;
