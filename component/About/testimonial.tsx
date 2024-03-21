import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import StarRateIcon from '@mui/icons-material/StarRate';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import style from './about.module.css'
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
                    <Box maxWidth={{ xs: "90%", sm: "80%", md: "500px" }} mx="auto"> {/* Adjust max width for different screen sizes */}
                        <Typography
                            component={'p'}
                            sx={{ textAlign: 'center', fontSize: { xs: '16px', sm: '18px', md: '20px' } }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
                        </Typography>
                    </Box>
                </Box>

                <Box className={style.grid3} mt={10}>
                    <Box className={style.border_box_purple}>
                        <Box sx={{ display: 'flex' }}>
                            <Box className={style.img_box2}>
                                <Image src={img1} alt='' />
                            </Box>
                            <Box px={4}>
                                <Typography sx={{ fontSize: '24px', mb: 1 }}>Nancy Webb</Typography>
                                <Typography sx={{ color: "#A7A7A7" }}>Writer</Typography>
                            </Box>
                        </Box>
                        <Box mt={3}>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
                                Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
                                mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
                                Nullam quis imperdiet augue.
                            </Typography>
                            <ul style={{ listStyle: 'none', display: 'flex', gap: 2, marginTop: '12px', color: "#f6c956" }}>
                                <li><StarRateIcon /></li>
                                <li><StarRateIcon /></li>
                                <li><StarRateIcon /></li>
                                <li><StarRateIcon /></li>
                            </ul>
                        </Box>
                    </Box>

                    <Box className={style.border_box_yellow}>
                        <Box sx={{ display: 'flex' }}>
                            <Box className={style.img_box2}>
                                <Image src={img2} alt='' />
                            </Box>
                            <Box px={4}>
                                <Typography sx={{ fontSize: '24px', mb: 1 }}>Nancy Webb</Typography>
                                <Typography sx={{ color: "#A7A7A7" }}>Writer</Typography>
                            </Box>
                        </Box>
                        <Box mt={3}>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
                                Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
                                mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
                                Nullam quis imperdiet augue.
                            </Typography>
                            <ul style={{ listStyle: 'none', display: 'flex', gap: 2, marginTop: '12px', color: "#f6c956" }}>
                                <li><StarRateIcon /></li>
                                <li><StarRateIcon /></li>
                                <li><StarRateIcon /></li>
                                <li><StarRateIcon /></li>
                                <li><StarRateIcon /></li>
                            </ul>
                        </Box>
                    </Box>

                    <Box className={style.border_box_purple}>
                        <Box sx={{ display: 'flex' }}>
                            <Box className={style.img_box2}>
                                <Image src={img1} alt='' />
                            </Box>
                            <Box px={4}>
                                <Typography sx={{ fontSize: '24px', mb: 1 }}>Nancy Webb</Typography>
                                <Typography sx={{ color: "#A7A7A7" }}>Writer</Typography>
                            </Box>
                        </Box>
                        <Box mt={3}>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
                                Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
                                mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
                                Nullam quis imperdiet augue.
                            </Typography>
                            <ul style={{ listStyle: 'none', display: 'flex', gap: 2, marginTop: '12px', color: "#f6c956" }}>
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
                    <button className={style.button} style={{ color: '#fff' }}>Read More</button>
                </Box>
            </Container>
        </Box>
    )
}

export default Testimonial
