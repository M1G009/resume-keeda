import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import frame3 from "./img/Frame3.svg"
import style from './landingComponent.module.css'
import Link from 'next/link';

const Frame3 = () => {

    return (
        <Box sx={{ mt: 4 }}>
            <Container>
                <Grid container justifyContent="center"> {/* Centering the Grid items */}
                    <Grid item md={8} sm={12}>
                        <Typography sx={{
                            fontSize: { md: '55px', xs: '40px' },
                            fontWeight: '600',
                            lineHeight: { md: '80px' },
                            textTransform: 'capitalize'
                        }}>
                            Create perfect <span style={{ color: "#6047F9" }}>resumes </span>for the modern <span style={{ color: "#6047F9" }}>job market</span>
                        </Typography>
                        <Typography variant='body1'
                            sx={{
                                marginTop: "2rem",
                                fontSize: { xs: '1rem', md: '1.125rem' },
                                lineHeight: "1.75rem",
                                fontWeight: 400,
                                textAlign: "justify",
                                p: { md: '0px 100px 0px 0px' },
                                letterSpacing: '1px'
                            }}>
                            Creating a resume or cover letter has never been this easy!
                            In three simple steps, create the perfect document to impress hiring
                            managers and employers. Minimum time, maximum professional quality.
                        </Typography>

                        <Box sx={{ mt: 5 }}>
                            <button className={style.button} style={{ color: '#fff' }}>
                                <Link href={'/user'}>Create your resume now</Link>
                            </button>
                        </Box>
                    </Grid>
                    <Grid item md={4} sm={12}>
                        <Box position='relative' sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Box className={style.blue_patch} sx={{ right: { xs: "10rem", md: "0px" }, top: { xs: "50px", md: "70px" } }} />

                            <Box sx={{ display: { md: "block", xs: 'none' } }}>
                                <Image src={frame3} alt='' width={450} height={500} ></Image>
                            </Box>
                            <Box sx={{ display: { md: "none", xs: 'block' } }}>
                                <Image src={frame3} alt='' width={300} height={300} ></Image>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

            </Container>
        </Box>
    );
};

export default Frame3;
