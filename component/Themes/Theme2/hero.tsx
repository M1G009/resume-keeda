import React, { useState } from 'react'
import style from "./thmem2.module.css"
import { Box, Container, Typography } from '@mui/material';

const Hero = ({ professional }: any) => {

    const [profession, setProfession] = useState<string>(professional.Profession);

    return (
        <Box className={style.bg} id='home'>
            <Container>
                <Box className={style.main_box}>
                    <Typography className={style.center_text} sx={{
                        fontSize: {md: "110px", sm: '90px'},
                        '@media (max-width: 768px)': {
                            fontSize: "8vh"
                        }
                    }}>I'M a {profession}</Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Hero;
