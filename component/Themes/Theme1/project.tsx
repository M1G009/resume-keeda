import { ThemeProvider } from '@emotion/react';
import { Box,  Container, Grid, Typography, createTheme, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, {  useState } from 'react'

interface Project {
    images: string,
    title: string,
    description: string,
    url: string,
}

const Project = ({ data }: any) => {
    const theme = createTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const [projectData, setProjectData] = useState<Project[]>(data)

   

    return (
        <Box id='portfolio' sx={{ pt: 10 }}>
            <ThemeProvider theme={theme}>
                <Container maxWidth="lg">
                    <Box sx={{ mb: 6 }}>
                        <Box sx={{ textAlign: 'center', mb: isSmallScreen ? "40px" : "80px" }}>
                            <Typography variant='subtitle1' sx={{ color: '#9f9f9f' }}>Showcasing some of my best work</Typography>
                            <Typography variant='h3' sx={{ fontWeight: 'bold' }}>Portfolio</Typography>
                            <div className='animated-bar'></div>
                        </Box>
                        <Box sx={{ width: '100%', typography: 'body1' }}>
                            <Grid container spacing={2} direction={isSmallScreen ? "column" : "row"}>
                                {projectData.map((el, index) => (
                                    <Grid item xs={6} md={4} key={index} >
                                        <Box >
                                            <Box className="card">
                                                <Image className='card__image' src={`${process.env.API_BASE_URL}/images/` + el.images} alt='project_img' width={1000} height={1000} />
                                                <Box className="card__content">
                                                    <Typography className="card__title">{el.title}</Typography>
                                                    <Typography className="card__description">{el.description}</Typography>
                                                    <Link href={el.url}> <button className="card__button"> Live Demo</button></Link>

                                                </Box>
                                            </Box>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>

                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </Box>
    )
}

export default Project
