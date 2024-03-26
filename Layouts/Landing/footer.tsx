import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';
import styles from "./landing.module.css"

const Footer = () => {
    return (
        <Box>
            <Box sx={{ width: '100%', height: '3px', bgcolor: '#f6c956', margin: '100px 0px' }}></Box>
            <Container>
                <Box className={styles.footer}>
                    <Box sx={{ display: 'flex', gap: { md: "20px", sm: 0 }, rowGap: { md: 0, sm: '40px' }, justifyContent: 'center', mb: '40px', flexWrap: { md: 'nowrap', sm: 'wrap', xs: 'wrap' } }}>
                        <Box sx={{ width: { md: '25%', sm: '50%', xs: '100%' } }}>
                            <Typography sx={{ fontWeight: '600', fontSize: '21px', mb: 3, textTransform: 'capitalize' }}>
                                Contact with us
                            </Typography>
                            <Box sx={{ listStyle: 'none', display: 'flex' }}>
                                <li className={styles.listicon} style={{ padding: '0px 5px 0px 0px' }}><Link href='/'><FacebookIcon /></Link></li>
                                <li className={styles.listicon} style={{ padding: '0px 5px' }}><Link href='/'><InstagramIcon /></Link></li>
                                <li className={styles.listicon} style={{ padding: '0px 5px' }}><Link href='/'><TwitterIcon /></Link></li>
                                <li className={styles.listicon} style={{ padding: '0px 5px' }}><Link href='/'><LinkedInIcon /></Link></li>
                            </Box>
                        </Box>
                        <Box sx={{ width: { md: '25%', sm: '50%', xs: '100%' }, mt: { xs: "20px", md: '0' } }}>
                            <Typography sx={{ fontWeight: '600', fontSize: '21px', mb: 3, textTransform: 'capitalize' }}>
                                Quick Links
                            </Typography>
                            <Box sx={{ listStyle: 'none' }}>
                                <li className={styles.listitem} style={{ fontFamily: "sans-serif", padding: "10px 0px" }}><Link href='/'>Create Resume</Link></li>
                                <li className={styles.listitem} style={{ fontFamily: "sans-serif", padding: "10px 0px" }}><Link href='/'>Templates</Link></li>
                                <li className={styles.listitem} style={{ fontFamily: "sans-serif", padding: "10px 0px" }}><Link href='/'>Resume Examples</Link></li>
                                <li className={styles.listitem} style={{ fontFamily: "sans-serif", padding: "10px 0px" }}><Link href='/'>Cover Letter Examples</Link></li>
                            </Box>
                        </Box>
                        <Box sx={{ width: { md: '25%', sm: '50%', xs: '100%' }, mt: { xs: "20px", md: '0' } }}>
                            <Typography sx={{ fontWeight: '600', fontSize: '21px', mb: 3, textTransform: 'capitalize' }}>
                                Learn
                            </Typography>
                            <Box sx={{ listStyle: 'none' }}>
                                <li className={styles.listitem} style={{ fontFamily: "sans-serif", padding: "10px 0px" }}><Link href='/'>Resume Writing Guide</Link></li>
                                <li className={styles.listitem} style={{ fontFamily: "sans-serif", padding: "10px 0px" }}><Link href='/'>Career</Link></li>
                                <li className={styles.listitem} style={{ fontFamily: "sans-serif", padding: "10px 0px" }}><Link href='/'>Blog</Link></li>
                                <li className={styles.listitem} style={{ fontFamily: "sans-serif", padding: "10px 0px" }}><Link href='/'>How to Write a Cover Letter</Link></li>
                                <li className={styles.listitem} style={{ fontFamily: "sans-serif", padding: "10px 0px" }}><Link href='/'>How to Write a CV</Link></li>
                                <li className={styles.listitem} style={{ fontFamily: "sans-serif", padding: "10px 0px" }}><Link href='/'>Job Interview</Link></li>
                            </Box>
                        </Box>
                        <Box sx={{ width: { md: '25%', sm: '50%', xs: '100%' }, mt: { xs: "20px", md: '0' } }}>
                            <Typography sx={{ fontWeight: '600', fontSize: '21px', mb: 3, textTransform: 'capitalize' }}>
                                other
                            </Typography>
                            <Box sx={{ listStyle: 'none' }}>
                                <li className={styles.listitem} style={{ fontFamily: "sans-serif", padding: "10px 0px" }}><Link href='/about'>About Us</Link></li>
                                <li className={styles.listitem} style={{ fontFamily: "sans-serif", padding: "10px 0px" }}><Link href='/'>Privacy Policy</Link></li>
                                <li className={styles.listitem} style={{ fontFamily: "sans-serif", padding: "10px 0px" }}><Link href='/'>Terms and Conditions</Link></li>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Footer
