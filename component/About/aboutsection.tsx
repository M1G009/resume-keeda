import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import style from './about.module.css'
import Image from 'next/image'
import Frame from './img/object.svg'

const AboutSection = () => {
    return (
        <>
            <Container >
                <Box mt={6} position={"relative"}>
                    <Box className={style.blue_patch} sx={{ top: 0, right: { xs: 0, md: '-20rem' } }} />
                    <Typography component={'h2'} sx={{ textAlign: 'center', fontSize: { xs: '35px', md: '55px' } }}>
                        <span className={style.text}>RESUME</span> is your ultimate career toolbox.
                    </Typography>


                    <Grid container mt={8} spacing={3}>
                        <Grid item xs={12} md={6}>
                            <div style={{ maxWidth: '100%', height: 'auto' }}>
                                <Image src={Frame} alt='frame image' width={475} height={350} className='image'></Image>
                            </div>

                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ ml: { md: '20px', xs: 0 } }}>
                                <ul>
                                    <li className={style.list}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                                    <li className={style.list}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                                    <li className={style.list}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                                    <li className={style.list}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                                    <li className={style.list}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                                </ul>
                                <button className={style.button} style={{ color: '#fff' }}>Read More</button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default AboutSection
