import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import styles from './landingComponent.module.css'
import Image from 'next/image'
import img1 from './img/resume.png'
import img2 from './img/antivirus.png'
import img3 from './img/warranty.png'
import img4 from './img/tracking-app.png'
import img5 from './img/resume-1.png'
import img6 from './img/approval.png'

const Cards = () => {

    return (
        <Box sx={{ py: 5 }}>
            <Container>
                <Box position={'relative'}>
                    <Box className={styles.yellow_patch} sx={{ right: { xs: "10rem", md: '-18rem' }, top: { xs: '70rem', md: '-4rem' } }} />

                    <Box className={styles.blue_patch} sx={{ left: { xs: "10rem", md: '-15rem' }, top: { xs: '20rem', md: '60rem' } }} />

                    <Typography component={'h3'} sx={{
                        textAlign: 'center',
                        fontSize: { md: '60px', sm: '45px', xs: '40px' },
                        fontWeight: '600',
                        lineHeight: { md: '80px', sm: '60px', xs: '50px' },
                        px: '10px',
                        mt: 5
                    }}>Features designed to help you win your dream job</Typography>
                </Box>
                <Box className={styles.grid} sx={{ mt: 7 }}>
                    <Box className={styles.box_purple}>
                        <Box sx={
                            {
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '112px',
                                width: '112px',
                                borderRadius: '100%',
                                bgcolor: '#4F46E5',
                                m: '50px 0px 20px'
                            }}>
                            <Image src={img1} alt='' width={50} height={50} ></Image>
                        </Box>
                        <Box>
                            <Typography sx={{ fontWeight: '400', fontSize: '30px', textAlign: 'center', color: '#4F46E5', mb: '10px' }}>
                                Easy online resume builder
                            </Typography>
                            <Typography sx={{ textAlign: 'center', mb: '40px', px: '50px', fontSize: '19px' }}>
                                Create an awesome resume, cover letter or online profile without leaving your web browser.
                            </Typography>
                        </Box>
                    </Box>
                    <Box className={styles.box_yellow}>
                        <Box sx={
                            {
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '112px',
                                width: '112px',
                                borderRadius: '100%',
                                bgcolor: '#f6c956',
                                m: '50px 0px 20px'
                            }}>
                            <Image src={img2} alt='' width={50} height={50} ></Image>
                        </Box>
                        <Box>
                            <Typography sx={{ fontWeight: '400', fontSize: '30px', textAlign: 'center', color: '#f6c956', m: '25px 0 32px' }}>
                                Your data is safe
                            </Typography>
                            <Typography sx={{ textAlign: 'center', mb: '40px', px: '50px', fontSize: '18px' }}>
                                Your data is kept private and protected by strong 256-bit encryption.
                            </Typography>
                        </Box>
                    </Box>
                    <Box className={styles.box_purple}>
                        <Box sx={
                            {
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '112px',
                                width: '112px',
                                borderRadius: '100%',
                                bgcolor: '#4F46E5',
                                m: '50px 0px 20px'
                            }}>
                            <Image src={img3} alt='' width={50} height={50} ></Image>
                        </Box>
                        <Box>
                            <Typography sx={{ fontWeight: '400', fontSize: '30px', textAlign: 'center', color: '#4F46E5', m: '25px 0 32px' }}>
                                Approved templates
                            </Typography>
                            <Typography sx={{ textAlign: 'center', mb: '40px', px: '50px', fontSize: '18px' }}>
                                Professionally-designed resume templates and examples (+guides). Just edit and download in 5 minutes.
                            </Typography>
                        </Box>
                    </Box>
                    <Box className={styles.box_yellow}>
                        <Box sx={
                            {
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '112px',
                                width: '112px',
                                borderRadius: '100%',
                                bgcolor: '#f6c956',
                                m: '50px 0px 20px'
                            }}>
                            <Image src={img4} alt='' width={50} height={50} ></Image>
                        </Box>
                        <Box>
                            <Typography sx={{ fontWeight: '400', fontSize: '30px', textAlign: 'center', color: '#f6c956', m: '25px 0 32px' }}>
                                Job tracking
                            </Typography>
                            <Typography sx={{ textAlign: 'center', mb: '40px', px: '50px', fontSize: '18px' }}>
                                We'll keep you ahead of the competition by tracking the employers and jobs you apply to.
                            </Typography>
                        </Box>
                    </Box>
                    <Box className={styles.box_purple}>
                        <Box sx={
                            {
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '112px',
                                width: '112px',
                                borderRadius: '100%',
                                bgcolor: '#4F46E5',
                                m: '50px 0px 20px'
                            }}>
                            <Image src={img5} alt='' width={50} height={50} ></Image>
                        </Box>
                        <Box>
                            <Typography sx={{ fontWeight: '400', fontSize: '30px', textAlign: 'center', color: '#4F46E5', mb: '10px' }}>
                                Multi-format resume options
                            </Typography>
                            <Typography sx={{ textAlign: 'center', mb: '40px', px: '50px', fontSize: '18px' }}>
                                Save your perfect resume in any common format, including Microsoft Word and PDF in a single click.
                            </Typography>
                        </Box>
                    </Box>
                    <Box className={styles.box_yellow}>
                        <Box sx={
                            {
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '112px',
                                width: '112px',
                                borderRadius: '100%',
                                bgcolor: '#f6c956',
                                m: '50px 0px 20px'
                            }}>
                            <Image src={img6} alt='' width={50} height={50} ></Image>
                        </Box>
                        <Box>
                            <Typography sx={{ fontWeight: '400', fontSize: '30px', textAlign: 'center', color: '#f6c956', m: '25px 0 32px' }}>
                                Approved templates
                            </Typography>
                            <Typography sx={{ textAlign: 'center', mb: '40px', px: '50px', fontSize: '18px' }}>
                                Professionally-designed resume templates and examples (+guides). Just edit and download in 5 minutes.
                            </Typography>
                        </Box>
                    </Box>
                </Box>

            </Container>
        </Box>
    )
}

export default Cards
