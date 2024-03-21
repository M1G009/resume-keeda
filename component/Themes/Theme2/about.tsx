import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import WavingHandIcon from '@mui/icons-material/WavingHand';
import Image from 'next/image';

const About = ({ user, professionalDetail, personal }: any) => {

    const [profession, setProfession] = useState<String>(professionalDetail.Profession)
    const [userFirstName, setUserFirstName] = useState<String>(user.firstName)
    const [userLastName, setUserLastName] = useState<String>(user.lastName)
    const [userExp, setuserExp] = useState<number>(professionalDetail.yearsOfExperience)
    const [userImage, setUserImage] = useState<string>(personal.userProfileImage)
    const [object, setObbject] = useState<String>(professionalDetail.Object);





    return (
        <Box id="about">
            <Box sx={{ bgcolor: '#081C15', py: 10 }}>
                <Container >
                    <Box sx={{ width: '100%' }}>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={12} md={7} >
                                <Box>
                                    <Typography variant='h6' sx={{ fontWeight: '700', color: '#40916C' }}>HELLO  EVERYONE <WavingHandIcon /> </Typography>
                                    <Typography variant='h2' sx={{ textTransform: 'uppercase', fontWeight: '800', fontSize: '56px' }}>I'm {userFirstName} {userLastName} and <span style={{ color: '#FF8A00' }}> i'm a {profession}</span></Typography>
                                    <Typography variant='body1' sx={{ width: '80%', color: '#B7E4C7', mt: 4 }}>{object}</Typography>

                                    <Box sx={{ width: '50%' }}>
                                        {userExp == 0 ? (
                                            <Box className="about-item" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pb: 2, pt: 2, borderBottom: '2px solid', borderBottomColor: '#1B4332' }}>
                                                <Typography sx={{ color: '#D8F3DC', fontSize: '30px', textTransform: 'uppercase' }}>fresher</Typography>
                                            </Box>

                                        ) : (
                                            <Box className="about-item" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pb: 2, pt: 2, borderBottom: '2px solid', borderBottomColor: '#1B4332' }}>

                                                <Typography sx={{ fontWeight: '800', fontSize: '40px' }}>{userExp}</Typography>
                                                <Typography sx={{ color: '#D8F3DC' }}>YEARS EXPERIENCE</Typography>

                                            </Box>

                                        )}
                                        {/* <Box className="about-item" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pb: 2, pt: 2, borderBottom: '2px solid', borderBottomColor: '#1B4332' }}>
                                            <Typography sx={{ fontWeight: '800', fontSize: '40px' }}>1200+</Typography>
                                            <Typography sx={{ color: '#D8F3DC' }}>COMPLETED PROJECT</Typography>
                                        </Box> */}
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pb: 2, pt: 2 }}>
                                            <Typography sx={{ fontWeight: '800', fontSize: '40px' }}>100%</Typography>
                                            <Typography sx={{ color: '#D8F3DC' }}>CLIENT SATISFACTION</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                                {/* <Box sx={{ display: 'flex', alignItems: 'cenetr', gap: '30px' }}>
                                    <Button variant='contained' sx={{ borderRadius: '50px', py: 1.5, px: 4, bgcolor: '#D8F3DC', color: 'black', fontWeight: 600 }}> GET IN TOUCH <EastIcon /> </Button>
                                    <ul style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <li style={{ borderRadius: '50%', border: 'solid 2px #D8F3DC', padding: '10px', listStyle: 'none', marginRight: '15px' }}><FacebookIcon /></li>
                                        <li style={{ borderRadius: '50%', border: 'solid 2px #D8F3DC', padding: '10px', listStyle: 'none', marginRight: '15px' }}><TwitterIcon /></li>
                                        <li style={{ borderRadius: '50%', border: 'solid 2px #D8F3DC', padding: '10px', listStyle: 'none', marginRight: '15px' }}><LinkedInIcon /></li>
                                    </ul>

                                </Box> */}
                            </Grid>
                            <Grid item xs={12} md={5} justifyContent="center">
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <Box style={{ maxWidth: '100%', height: 'auto' }}>
                                        <Image
                                            src={`${process.env.API_BASE_URL}/images/` + userImage}
                                            alt='Information Image'
                                            width={450}
                                            height={500}
                                            className='image'
                                        ></Image>
                                    </Box>
                                    {/* <Button variant='outlined' sx={{ width: '50%', border: '2px', borderStyle: 'solid', borderColor: '#DCD7C9', color: '#fff', py: 1.5, px: 2, borderRadius: '50px', fontWeight: '700', mt: 5 }} className='outline-button'>{profession}</Button> */}
                                </Box>
                            </Grid>
                        </Grid>

                    </Box>
                </Container>
            </Box>
        </Box>
    )
}

export default About
