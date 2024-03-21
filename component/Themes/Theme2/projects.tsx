import React, {  useState } from 'react'
import style from "./thmem2.module.css"
import { Box, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

interface Project {
    images: string,
    title: string,
    description: string,
    url: string,
}

const Projects = ({ data }: any) => {

    const [projectData, setProjectData] = useState<Project[]>(data)

    

    return (
        <Box id='portfolio' sx={{ bgcolor: "#06140F", pt: 4, pb: 10 }}>
            <Container>
                <Typography align='center' py={4} fontSize={34} fontWeight={700}>Featured <span style={{ color: '#FF8A00' }}>Projects</span></Typography>


                <Grid container spacing={2} >
                    {
                        projectData.map((el, index) => (
                            <Grid item xs={6} md={4} key={index} >
                                <Box className={style.card}>
                                    <Box className={style.card_inner}>
                                        <Box className={style.card_front}>
                                            <Image className='card__image' src={`${process.env.API_BASE_URL}/images/` + el.images} alt='project_img' width={1000} height={1000} />
                                        </Box>
                                        <Box className={style.card_back}>
                                            <Typography variant='h2' sx={{ fontSize: '30px', fontWeight: '700' }}>{el.title}</Typography>
                                            <Typography variant='body1' sx={{ mt: 2 }}>{el.description}</Typography>
                                            <button style={{ marginTop: 31 }} className={style.card__button}><Link href={el.url}>Live Demo</Link></button>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        ))
                    }
                </Grid>

            </Container>
        </Box>
    )
}

export default Projects
