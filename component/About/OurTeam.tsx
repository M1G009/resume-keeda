import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import styles from './about.module.css'
import img1 from './img/userImage.jpg'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from 'next/image'
import Link from 'next/link'

const OurTeam = () => {
    return (
        <Box mt={18} position={'relative'}>
            <Container>
                <Box className={styles.blue_patch} sx={{ top: { md: '2rem', xs: "29rem" }, right: { md: '1rem', xs: '13rem' } }} />

                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography mb={2}
                        component={'h3'}
                        sx={{
                            textAlign: "center",
                            fontSize: { xs: '30px', sm: '35px', md: '40px', lg: '45px' }, // Adjust font size for different screen sizes
                            fontWeight: '700'
                        }}>
                        OUR TEAM
                    </Typography>
                    <Box maxWidth={{ xs: "90%", sm: "80%", md: "850px" }} mx="auto"> {/* Adjust max width for different screen sizes */}
                        <Typography
                            component={'p'}
                            sx={{ textAlign: 'center', fontSize: { xs: '16px', sm: '18px', md: '19px' } }}>

                            Our dedicated team at Resume Keeda comprises skilled professionals passionate
                            about your success. With expertise in resume building and career development,
                            we're committed to providing personalized support and guidance every step of the
                            way on your professional journey.
                        </Typography>
                    </Box>
                </Box>

                <Box className={styles.grid} mt={10}>
                    <Box className={styles.box_purple}>
                        <Box mb={2} >
                            <Box className={styles.img_box}>
                                <Image src={img1} alt='' width={170} height={170} className={styles.border_purple}></Image>
                            </Box>
                        </Box>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography sx={{ fontSize: '24px', fontWeight: '600' }}>Sarthik Navadiya</Typography>
                            <Typography sx={{ color: "#A7A7A7", mt: 2 }}>Frontend Developer</Typography>
                        </Box>
                        <Box mt={3}>
                            <ul className={styles.icon_list}>
                                <li><Link href={'#'}><FacebookIcon /></Link></li>
                                <li><Link href={'#'}><InstagramIcon /></Link></li>
                                <li><Link href={'#'}><TwitterIcon /></Link></li>
                                <li><Link href={'#'}><LinkedInIcon /></Link></li>
                            </ul>
                        </Box>
                    </Box>

                    <Box className={styles.box_yellow}>
                        <Box mb={2} >
                            <Box className={styles.img_box}>
                                <Image src={img1} alt='' width={170} height={170} className={styles.border_yellowF} ></Image>
                            </Box>
                        </Box>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography sx={{ fontSize: '24px', fontWeight: '600' }}>Maulik Kaklotar</Typography>
                            <Typography sx={{ color: "#A7A7A7", mt: 2 }}>web designer</Typography>
                        </Box>
                        <Box mt={3}>
                            <ul className={styles.icon_list}>
                                <li><Link href={'#'}><FacebookIcon /></Link></li>
                                <li><Link href={'#'}><InstagramIcon /></Link></li>
                                <li><Link href={'#'}><TwitterIcon /></Link></li>
                                <li><Link href={'#'}><LinkedInIcon /></Link></li>
                            </ul>
                        </Box>
                    </Box>

                    <Box className={styles.box_purple}>
                        <Box mb={2} >
                            <Box className={styles.img_box}>
                                <Image src={img1} alt='' width={170} height={170} className={styles.boder}></Image>
                            </Box>
                        </Box>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography sx={{ fontSize: '24px', fontWeight: '600' }}>Mohit sir</Typography>
                            <Typography sx={{ color: "#A7A7A7", mt: 2 }}>Mentor</Typography>
                        </Box>
                        <Box mt={3}>
                            <ul className={styles.icon_list}>
                                <li><Link href={'#'}><FacebookIcon /></Link></li>
                                <li><Link href={'#'}><InstagramIcon /></Link></li>
                                <li><Link href={'#'}><TwitterIcon /></Link></li>
                                <li><Link href={'#'}><LinkedInIcon /></Link></li>
                            </ul>
                        </Box>
                    </Box>

                    <Box className={styles.box_yellow}>
                        <Box mb={2} >
                            <Box className={styles.img_box}>
                                <Image src={img1} alt='' width={170} height={170} className={styles.border_yellowF} ></Image>
                            </Box>
                        </Box>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography sx={{ fontSize: '24px', fontWeight: '600' }}>Prince sir</Typography>
                            <Typography sx={{ color: "#A7A7A7", mt: 2 }}>Mentor</Typography>
                        </Box>
                        <Box mt={3}>
                            <ul className={styles.icon_list}>
                                <li><Link href={'#'}><FacebookIcon /></Link></li>
                                <li><Link href={'#'}><InstagramIcon /></Link></li>
                                <li><Link href={'#'}><TwitterIcon /></Link></li>
                                <li><Link href={'#'}><LinkedInIcon /></Link></li>
                            </ul>
                        </Box>
                    </Box>

                </Box>
            </Container>
        </Box>
    )
}

export default OurTeam
