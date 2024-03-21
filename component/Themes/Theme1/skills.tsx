import { ThemeProvider } from '@emotion/react';
import { Box, Container, Grid, LinearProgress, Typography, createTheme, styled, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';

interface Skill {
    name: string;
    rate: number;
}


const Skills = ({ skilldetail }: any) => {
    const theme = createTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const [skillData, setSkillData] = useState<Skill[]>(skilldetail)


    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 1,
        [`& .MuiLinearProgress-bar`]: {
            borderRadius: 5,
        },
        backgroundColor: '#ababab'
    }));

    return (
        <Box id="skills" sx={{ pt: 10 }}>
            <ThemeProvider theme={theme}>
                <Container maxWidth="lg" >
                    <Box>
                        <Box sx={{ textAlign: 'center', mb: isSmallScreen ? "40px" : "80px" }}>
                            <Typography variant='subtitle1' sx={{ color: '#9f9f9f' }}>My rate of knowledge in some tools</Typography>
                            <Typography variant='h2' sx={{ fontWeight: '700', fontSize: '38px' }}>My Skills</Typography>
                            <div className='animated-bar'></div>
                        </Box>
                        <Grid container spacing={2} direction={isSmallScreen ? "column" : "row"}>
                            {skillData.map((el, index) => (
                                <Grid item xs={6} key={index} sx={{ pr: isSmallScreen ? 0 : 4, mb: isSmallScreen ? 4 : 2 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                        <Typography>{el.name}</Typography>

                                        <Typography>{el.rate * 10}%</Typography>
                                    </Box>
                                    <Box sx={{ flexGrow: 1 }}>
                                        <BorderLinearProgress sx={{ borderRadius: "20px" }} variant="determinate" value={el.rate * 10} />
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Container>
            </ThemeProvider>
        </Box>
    );
};

export default Skills;
