import { Box, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import style from './theme3.module.css';
import Image from 'next/image';
import { getPersonaldetails } from '../../../services/Personal';

const Hero = ({ user, professional, personal }: any) => {
    const [profession, setProfession] = useState<String>(professional.Profession);
    const [userFirstName, setUserFirstName] = useState<String>(user.firstName);
    const [userLastName, setUserLastName] = useState<String>(user.lastName);
    const [userExp, setUserExp] = useState<number>(professional.yearsOfExperience);
    const [userImage, setUserImage] = useState<string>(personal.userProfileImage);
    const fetchData = async () => {
        try {
            const userData: any = await getPersonaldetails();
            setUserFirstName(userData.userId.firstName)
            setUserLastName(userData.userId.lastName)

        } catch (error) {
            console.log("Error fetching data:");
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <Box className={style.bg} id="home" >
            <Container maxWidth="lg" sx={{ pt: '150px', pb: 5 }}>
                <Grid container spacing={2}>
                    <Grid item md={7} xs={12}>
                        <Box>
                            <Typography variant="body1"
                                sx={{ fontSize: '22px', fontWeight: '600' }}
                                color="#DDDDDD">
                                {profession}
                            </Typography>
                            <Typography variant="h1"
                                sx={{ fontSize: { md: '100px', sm: '80px', xs: '70px' }, fontWeight: '700' }}
                                color="#fff">
                                Hello, I’m
                                <span style={{ color: '#28E98C' }}> {userFirstName} {userLastName}</span>
                            </Typography>

                            <Box className={style.curve_box}>
                                {userExp === 0 ?
                                    <Typography variant="body1" color="#fff"
                                        sx={{ fontSize: '35px', fontWeight: '600' }}>
                                        Fresher
                                    </Typography>
                                    :
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <Box>
                                            <Typography variant="body1" color="#fff"
                                                sx={{ fontSize: '64px', fontWeight: '700' }}>
                                                {userExp}
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography variant="body1" color="#fff"
                                                sx={{ fontSize: '18px', maxWidth: '100px', pl: 2., fontWeight: '500' }}>
                                                Years of
                                                Experiences
                                            </Typography>
                                        </Box>
                                    </Box>}
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={5} xs={12}>
                        <Box style={{ maxWidth: '100%', height: 'auto' }}>
                            <Image
                                src={`${process.env.API_BASE_URL}/images/` + userImage}
                                alt='user Image'
                                width={450}
                                height={500}
                                className='image'
                            ></Image>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Hero;
