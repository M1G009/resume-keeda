import { Box, Button, Container, Grid, TextField } from '@mui/material'
import React from 'react'
import object from './img/Objects.svg'
import Image from 'next/image'
import styles from "./contact.module.css"


const FormSection = () => {
    return (
        <Box mt={20}>
            <Container>
                <Grid container spacing={2} alignItems={'center'}>

                    <Grid item md={5} xs={12}>
                        <Box sx={{ background: "#D9D9D91A", borderRadius: '30px', padding: '50px' }}>
                            <input placeholder="First Name" className={styles.input} type="text" />
                            <input placeholder="E-mail" className={styles.input} type="text" />
                            <textarea placeholder="Massage" className={styles.input} rows={8} />
                            
                            <Box mt={4} sx={{ display: 'flex', justifyContent: 'center', fontSize: { md: '17px', sm: '16px', xs: '15px' } }}>
                                <button className={styles.button}>Send Massage</button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={7} xs={12}>
                        <Box sx={{ maxWidth: '100%', height: 'auto' }}>
                            <Image src={object} alt='object image' width={575} height={350} className='image' ></Image>
                        </Box>
                    </Grid>


                </Grid>


            </Container>

        </Box>
    )
}

export default FormSection
