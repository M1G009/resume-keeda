import React from 'react'
import style from './about.module.css'
import { Box, Typography } from '@mui/material'

const Top = () => {
    return (
        <>
            <Box className={style.bg_img}>
                <Box sx={{ placeSelf: 'center' }}>
                    <Typography component={'h1'} sx={{ fontSize: { md: '50px', xs: '40px' }, textAlign: 'center' }}>
                        About us
                    </Typography>
                    <Typography component={'h2'} sx={{ fontWeight: 600, fontSize: 17, textAlign: 'center', mt: 2 }}>
                        Home &nbsp; → &nbsp; <span style={{ color: '#F6CA56' }}>About Us</span>
                    </Typography>
                </Box>
            </Box>

        </>
    )
}

export default Top
