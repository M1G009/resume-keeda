import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import style from "./contact.module.css"
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import PublicIcon from '@mui/icons-material/Public';
const Textsection = () => {
    return (
        <Box position={'relative'}>
            <Container>
                <Box className={style.blue_patch} sx={{ top: { md: '-10rem', xs: "5rem" }, right: { md: '-2rem', xs: '13rem' } }} />
                <Box className={style.yellow_patch} sx={{ bottom: { md: '-10rem', xs: "5rem" }, left: { md: '-2rem', xs: '13rem' } }} />

                <Box mt={15}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography mb={2}
                            component={'h2'}
                            sx={{
                                textAlign: "center",
                                fontSize: { xs: '30px', sm: '35px', md: '40px', lg: '45px' },
                                fontWeight: '700'
                            }}>
                            Have Some Question
                        </Typography>
                        <Box maxWidth={{ xs: "90%", sm: "80%", md: "750px" }} mx="auto">
                            <Typography
                                component={'h4'} sx={{ textAlign: 'center', fontSize: { xs: '16px', sm: '18px', md: '19px' } }}>
                                Thank you for your interest in our services. Please fill out the form below or
                                email us at <a href="mailto:sprins1353@gmail.com">sprins1353@gmail.com</a> and we will get back to you promptly regarding
                                your request.
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                <Box maxWidth={'750px'} mx={'auto'} mt={15}>
                    <Box sx={{ display: 'flex', flexDirection: { md: 'row', xs: 'column' }, justifyContent: 'center', alignItems: 'center', gap: { md: 0, xs: '40px' } }}>
                        <Box sx={{ width: "33.33%", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Box className={style.box_rotate_purple}>
                                <EmailIcon />
                            </Box>
                            <Typography mt={4}>
                                sprins1353@gmail.com
                            </Typography>
                        </Box>

                        <Box sx={{ width: "33.33%", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Box className={style.box_rotate_yellow}>
                                <CallIcon />
                            </Box>
                            <Typography mt={4}>
                                8980743009
                            </Typography>
                        </Box>

                        <Box sx={{ width: "33.33%", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Box className={style.box_rotate_purple}>
                                <PublicIcon />
                            </Box>
                            <Typography mt={4}>
                                www.livecvpro.in
                            </Typography>
                        </Box>

                    </Box>
                </Box>

            </Container>
        </Box>
    )
}

export default Textsection
