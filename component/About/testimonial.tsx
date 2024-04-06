import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import StarRateIcon from '@mui/icons-material/StarRate';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import styles from './about.module.css'
import img1 from './img/person1.png'
import img2 from './img/person2.png'


const Testimonial = () => {


    return (
        <Box mt={14}>
            <Container>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography mb={2}
                        component={'h3'}
                        sx={{
                            textAlign: "center",
                            fontSize: { xs: '30px', sm: '35px', md: '40px', lg: '45px' }, // Adjust font size for different screen sizes
                            fontWeight: '700'
                        }}>
                        WHAT OUR USERS SAY?
                    </Typography>
                   
                </Box>

                <Box className={styles.grid3} mt={10}>
                    <Box className={styles.border_box_purple}>
                        <Box sx={{ display: 'flex' }}>
                            <Box className={styles.img_box2}>
                                <Image src={img1} alt='img' height={50} width={50} ></Image>
                            </Box>
                            <Box px={4}>
                                <Typography sx={{ fontSize: '24px', mb: 1 }}>Nancy Webb</Typography>
                                <Typography sx={{ color: "#A7A7A7" }}>Writer</Typography>
                            </Box>
                        </Box>
                        <Box mt={3}>
                            <Typography>
                            As a mid-career professional, I needed a resume that reflected my extensive experience and skills. Resume Keeda provided the perfect platform to showcase my achievements. The result? Multiple job offers and a significant career advancement. Thank you for helping me take the next step!
                            </Typography>
                            <ul className={styles.ratings}>
                                <li><StarRateIcon /></li>
                                <li><StarRateIcon /></li>
                                <li><StarRateIcon /></li>
                                <li><StarRateIcon /></li>
                            </ul>
                        </Box>
                    </Box>

                    <Box className={styles.border_box_yellow}>
                        <Box sx={{ display: 'flex' }}>
                            <Box className={styles.img_box2}>
                                <Image src={img2} alt='img' height={50} width={50} ></Image>
                            </Box>
                            <Box px={4}>
                                <Typography sx={{ fontSize: '24px', mb: 1 }}>Marcus T</Typography>
                                <Typography sx={{ color: "#A7A7A7" }}>Writer</Typography>
                            </Box>
                        </Box>
                        <Box mt={3}>
                            <Typography>
                            Using Resume Keeda, I crafted a standout resume that landed me multiple interviews. The user-friendly interface and expert guidance helped me highlight my skills effectively. I highly recommend it to anyone looking to boost their career prospects.
                            </Typography>
                            <ul className={styles.ratings}>
                                <li><StarRateIcon /></li>
                                <li><StarRateIcon /></li>
                                <li><StarRateIcon /></li>
                                <li><StarRateIcon /></li>
                                <li><StarRateIcon /></li>
                            </ul>
                        </Box>
                    </Box>

                    <Box className={styles.border_box_purple}>
                        <Box sx={{ display: 'flex' }}>
                            <Box className={styles.img_box2}>
                                <Image src={img1} alt='img' height={50} width={50} ></Image>
                            </Box>
                            <Box px={4}>
                                <Typography sx={{ fontSize: '24px', mb: 1 }}>Sarah L.</Typography>
                                <Typography sx={{ color: "#A7A7A7" }}>Writer</Typography>
                            </Box>
                        </Box>
                        <Box mt={3}>
                            <Typography>
                            I was amazed by how easy it was to create a professional-looking resume with Resume Keeda. The templates were modern and stylish, and the tips provided invaluable insight into crafting a standout application. Thanks to this platform, I secured my dream job!
                            </Typography>
                            <ul className={styles.ratings}>
                                <li><StarRateIcon /></li>
                                <li><StarRateIcon /></li>
                                <li><StarRateIcon /></li>
                                <li><StarRateIcon /></li>
                                <li><StarHalfIcon /></li>
                            </ul>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                    <button className={styles.button}>Read More</button>
                </Box>
            </Container>
        </Box>
    )
}

export default Testimonial
