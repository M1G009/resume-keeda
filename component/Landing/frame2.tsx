import { Box, Button, Container, Grid, Typography } from '@mui/material'
import style from './landingComponent.module.css'
import frame2 from './img/Frame-2.png'
import React from 'react'
import Image from 'next/image'

const Frame2 = () => {
  return (
    <>
      <Box>
        <Container>
          <Grid container alignItems="center" sx={{ flexDirection: { xs: 'column-reverse', md: 'row' } }} >

            <Grid item md={6} sm={12} sx={{
              p: { xs: '0', md: '20px 40px', position: 'relative' },

            }}>
              <Box sx={{ display: { md: "block", xs: 'none' } }}>
                <Image src={frame2} alt="" width={450} height={500}></Image>
              </Box>
              <Box sx={{ display: { md: "none", xs: 'block' } }}>
                <Image src={frame2} alt="" width={300} height={300}></Image>
              </Box>
              <Box className={style.yellow_patch} sx={{ left: { xs: "2rem", md: '-10rem' }, top: { xs: '20rem', md: '-4rem' } }} />

            </Grid>
            <Grid item md={6} xs={12} >

              <Box sx={{ marginBottom: { xs: '2rem', md: 0 } }}>
                <Typography sx={{
                  textAlign: 'center',
                  color: '#F6CA56',
                  m: { xs: 2 }
                }}>
                  SECURE YOUR DREAM JOB
                </Typography>
                <Typography variant="h2" component={'h3'}
                  sx={{
                    color: "#fff",
                    fontSize: { xs: '43px', sm: '48px', md: '51px' },
                    fontWeight: "600",
                    textAlign: { md: "justify" },
                    textTransform: 'capitalize',
                    lineHeight: { xs: '50px', md: '55px' },
                    mt: 2
                  }}>
                  Create a<span style={{ color: "#F6CA56" }}> professional </span>
                  story in minutes. Use
                  our <span style={{ color: "#F6CA56" }}>cover letter maker.</span>
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
                  Our cover letter maker allows you to write amazing professional
                  pitches in minutes rather than hours. No more writer’s block,
                  no more searching for the convincing phrases or agonizing over
                  formatting. Be persuasive without effort!
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: "center", my: 5 }}>
                  <button className={style.button_yellow} style={{ color: '#fff' }}>
                    Create Cover Letter
                  </button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

    </>
  )
}

export default Frame2
