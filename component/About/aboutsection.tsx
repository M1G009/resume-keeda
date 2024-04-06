import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import styles from './about.module.css'
import Image from 'next/image'
import Frame from './img/object.svg'

const AboutSection = () => {
    return (
        <>
            <Container >
                <Box mt={6} position={"relative"}>
                    <Box className={styles.blue_patch} sx={{ top: 0, right: { xs: 0, md: '-20rem' } }} />
                    <Typography component={'h2'} sx={{ textAlign: 'center', fontSize: { xs: '35px', md: '55px' } }}>
                        <span className={styles.text}>RESUME</span> is your ultimate career toolbox.
                    </Typography>


                    <Grid container mt={8} spacing={3}>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ maxWidth: '100%', height: 'auto' }}>
                                <Image src={Frame} alt='frame image' width={475} height={350} className='image'></Image>
                            </Box>

                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ ml: { md: '20px', xs: 0 } }}>
                                <ul>
                                    <li className={styles.list}>
                                        <span style={{ fontWeight: 500, color: '#f6c956', fontSize: '20px' }}>Welcome to Resume Keeda </span>
                                        : We believe in empowering individuals to craft compelling resumes that showcase their unique skills and experiences.

                                    </li>
                                    <li className={styles.list}>
                                        <span style={{ fontWeight: 500, color: '#f6c956', fontSize: '20px' }}>Our Mission </span>
                                        : We're here to provide you with the tools and resources you need to succeed in today's competitive job market.
                                    </li>
                                    <li className={styles.list}>
                                        <span style={{ fontWeight: 500, color: '#f6c956', fontSize: '20px' }}>Your Career Toolbox </span>
                                        : Our intuitive and user-friendly platform allows you to create professional-looking resumes in minutes, so you can focus on showcasing your skills and experiences to potential employers.
                                    </li>
                                    <li className={styles.list}>
                                        <span style={{ fontWeight: 500, color: '#f6c956', fontSize: '20px' }}> Your Success Is Our Success </span>: We can't wait to see where your career takes you. Your success is our success, and we're committed to helping you achieve your goals.
                                    </li>
                                </ul>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default AboutSection
