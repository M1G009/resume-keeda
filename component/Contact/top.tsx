import React from 'react'
import styles from "./contact.module.css"
import { Box, Typography } from '@mui/material'

const Top = () => {
    return (
        <>
            <Box className={styles.bg_img}>
                <Box sx={{ placeSelf: 'center' }}>
                    <Typography component={'h1'} sx={{ fontSize: { md: '50px', xs: '40px' }, textAlign: 'center' }}>
                        Contact
                    </Typography>
                    <Typography component={'h2'} sx={{ fontWeight: 600, fontSize: 17, textAlign: 'center', mt: 2 }}>
                        Home &nbsp; → &nbsp; <span className={styles.text_yellow}>Contact</span>
                    </Typography>
                </Box>
            </Box>

        </>
    )
}

export default Top
