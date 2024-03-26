import { Box, Typography, Container, Grid } from '@mui/material'
import React, { useState } from 'react'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import Image from 'next/image';
import styles from './theme3.module.css'

interface Project {
    images: string,
    title: string,
    description: string,
    url: string,
}

const Project = ({ data }: any) => {
    const [projectData, setProjectData] = useState<Project[]>(data)

    return (
        <Box sx={{ py: { md: 2, xs: 8 } }} id="portfolio">
            <Container maxWidth="lg">
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: { md: 10, sm: 4, xs: 2 }, mb: { md: 5, sm: 3, xs: 2 } }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px', border: "3px solid #FFFFFF1A", borderRadius: '30px', padding: '5px 20px' }}>
                        <BusinessCenterIcon />
                        <Typography variant="body1" color="#fff">
                            My Portfolio
                        </Typography>
                    </Box>
                </Box>

                <Box>
                    <Grid container spacing={2}>
                        {projectData.map((el, index) => (
                            <Grid key={index} item md={4} sm={6} xs={12}>
                                <Box className={styles.card} sx={{ backgroundColor: index % 2 === 0 ? '#FFFFFF26' : '#131C1F' }}>
                                    <Box className={styles.img} >
                                        <Image src={`${process.env.API_BASE_URL}/images/` + el.images} alt='project image' width={337} height={350} style={{ borderRadius: '10px', overflow: 'hidden' }} ></Image>
                                    </Box>
                                    <Box className={styles.footer}>
                                        <Typography variant="body1" color="white" sx={{ fontSize: '18px', textTransform: 'capitalize' }}>
                                            {el.title}
                                        </Typography>
                                        <button className={styles.demoButton} onClick={() => window.open(`${el.url}`)}>demo</button>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default Project
