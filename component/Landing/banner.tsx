import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import style from './landingComponent.module.css'
import Link from 'next/link'

const Banner = () => {
    return (
        <Box>
            <Box sx={{ position: 'relative' }}>
                <Container sx={{ py: { xs: '50px', md: '100px' } }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography variant='h2' component={'h1'} sx={{
                            lineHeight: { xs: '60px', md: '100px' },
                            fontSize: { xs: '40px', sm: '50px', md: '60px' },
                            fontWeight: '900',
                            mx: 'auto',
                            textTransform: 'capitalize',
                            textAlign: "center",
                            mb: '50px',
                            pt: 3

                        }}>
                            Create A Resume <span className={style.text}>Fast</span> With Our <span className={style.text}>Easy</span> And <span className={style.text}>Free</span> Resume Builder</Typography>
                        <Typography component={'h2'} sx={{
                            fontSize: { xs: '16px', md: '18px' },
                            lineHeight: '30px',
                            textAlign: 'center',
                            letterSpacing: '1px',
                            fontWeight: '400',
                            margin: '20px 0px',
                            overflow: " hidden",
                            px: { xs: '2rem', md: '12rem' },

                        }}>
                            Use professional field-tested resume templates that follow
                            the exact 'resume rules' employers look for. Easy to use
                            and done within minutes - try now for free!
                        </Typography>

                        <Link href="/user">
                            <button style={{ marginTop: 5, color: '#fff' }}
                                className={style.button}>
                                Create your resume now
                            </button>
                        </Link>
                        
                    </Box>
                    <Box className={style.blue_patch} sx={{ right: { xs: "-1rem", md: "-3rem" }, top: { xs: "18rem", md: "12rem" } }} />
                </Container>
            </Box>
        </Box>

    )
}

export default Banner
