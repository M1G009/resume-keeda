import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import frame1 from "./img/Frame.png";
import style from './landingComponent.module.css'
import Link from 'next/link';

const Frame1 = () => {
    return (
        <Box>
            <Container>
                <Grid container alignItems="center">
                    <Grid item md={7} xs={12} position='relative'>
                        <Box className={style.yellow_patch} sx={{ left: { xs: "-5rem", md: '-12rem' }, top: { xs: '-5rem', md: '-7rem' } }} />

                        <Box sx={{ marginBottom: { xs: '2rem', md: 0 } }}>
                            <Typography variant="h2" component={'h3'}
                                sx={{
                                    color: "#fff",
                                    fontSize: { xs: '2.5rem', md: '3rem' },
                                    fontWeight: "600",
                                    textTransform: 'capitalize',
                                    letterSpacing: '0.05em',
                                    lineHeight: { xs: '50px', md: '70px' }

                                }}>
                                Try our <span style={{ color: '#6047F9' }}>Professional Resume</span> Builder Now!
                            </Typography>
                            <Typography variant="body1" component={'h4'} sx=
                                {{
                                    marginTop: "2rem",
                                    fontSize: { xs: '1rem', md: '1.125rem' },
                                    lineHeight: "1.75rem",
                                    fontWeight: 400,
                                    textAlign: "justify",
                                    pr: { xs: '0', md: '20px' },
                                    letterSpacing: '1px'

                                }
                                }>
                                Save time with our easy 3-step resume builder. No more writer's block or formatting difficulties in Word. Rapidly make a perfect resume employers love.
                            </Typography>
                            <Box sx={{ marginY: '30px' }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={6}>
                                        <button className={style.button} style={{ color: '#fff' }}>
                                            <Link href={'/user'}> Create your resume now</Link>
                                        </button>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <button className={style.button_line}>
                                            Resume Examples
                                        </button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={5} sm={12} sx={{
                        p: { xs: '0', md: '20px 40px', position: 'relative' },
                        display: 'flex', justifyContent: 'center'
                    }}>
                        <Box sx={{ display: { md: "block", xs: 'none' } }}>
                            <Image src={frame1} alt="" width={500} height={500}></Image>
                        </Box>
                        <Box sx={{ display: { md: "none", xs: 'block' } }}>

                            <Image src={frame1} alt="" width={300} height={300}></Image>
                        </Box>


                        <Box className={style.blue_patch} sx={{ right: { xs: "20px", md: "170px" }, top: { xs: "50px", md: "100px" } }} />

                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Frame1;