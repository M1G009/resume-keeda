import { Box, Grid, Container, Typography } from '@mui/material'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import style from './theme3.module.css'
import BoltIcon from '@mui/icons-material/Bolt';
import Skills from './skills';
import Resume from './resume';

const About = ({ skilldetail, workexp, educationdetail, personal, professional, user }: any) => {
    const [profession, setProfession] = useState<String>(professional.Profession);
    const [object, setObbject] = useState<String>(professional.Object);
    const [userImage, setUserImage] = useState<string>(personal.userProfileImage);
    const [userDOB, setUserDOB] = useState<string>(personal.DOB);
    const [firstname, setFirstname] = useState<string>(user.firstName);
    const [lastname, setLastname] = useState<string>(user.lastName)

    const calculateAge = (birthdate: string): number | undefined => {
        if (!birthdate) return undefined;

        const dob = new Date(birthdate);
        const today = new Date();

        let age = today.getFullYear() - dob.getFullYear();
        const monthDiff = today.getMonth() - dob.getMonth();

        // If the birthday hasn't occurred yet this year, subtract one year
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
            age--;
        }

        return age;
    };

    // Usage
    const age = calculateAge(userDOB);


    return (
        <Box sx={{ backgroundColor: '#131313' }}>
            <Container maxWidth="lg" sx={{ py: '30px' }}>


                <Grid container spacing={2}>
                    <Grid item md={6} sx={{ display: { md: 'block', xs: 'none' } }}>
                        <Box className={style.aboutimg} >
                            <Box style={{ maxWidth: '100%', height: 'auto' }}>
                                <Image
                                    src={`${process.env.API_BASE_URL}/images/` + userImage}
                                    alt='user Image'
                                    width={500}
                                    height={600}
                                    className='image'
                                ></Image>
                            </Box>

                        </Box>
                    </Grid>
                    <Grid item md={6} xs={12} >

                        <Box id='about' sx={{ pt: 10, pb: 4 }}>
                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'start' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px', border: "3px solid #FFFFFF1A", borderRadius: '30px', padding: '5px 20px' }}>
                                    <BoltIcon />
                                    <Typography variant="body1" color="#fff" textTransform={'uppercase'}>
                                        About me
                                    </Typography>
                                </Box>
                            </Box>
                            <Box>
                                <Typography variant="body1" color="#fff"
                                    sx={{
                                        fontSize: '40px',
                                        my: '20px'
                                    }}>
                                    l’m <br />
                                    <span style={{ color: '#28E98C' }}>{profession}</span>
                                </Typography>

                                <Typography variant="body1" color="#DDD" sx={{ fontSize: '19px' }}>
                                    {object}
                                </Typography>

                                <Box sx={{ mt: 4 }}>

                                    <li style={{ color: '#28E98C', fontSize: '20px', padding: '5px 0px' }}>
                                        <span style={{ color: '#fff', fontWeight: '600' }}>Name : </span>
                                        <span style={{ color: '#DDD' }}>{firstname} {lastname}</span>
                                    </li>
                                    <li style={{ color: '#28E98C', fontSize: '20px', padding: '5px 0px' }}>
                                        <span style={{ color: '#fff', fontWeight: '600' }}>Age  : </span>
                                        <span style={{ color: '#DDD' }}>{age}</span>
                                    </li>
                                </Box>
                            </Box>
                        </Box>

                        <Box id='skills'>
                            <Skills skill={skilldetail} />
                        </Box>
                        <Box id='resume'>
                            <Resume education={educationdetail} work={workexp} />
                        </Box>



                    </Grid>

                </Grid>
            </Container>
        </Box>
    )
}

export default About
