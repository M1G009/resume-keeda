import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import { Box, Container } from '@mui/material'
import styles from './theme3.module.css'
import SideButton from './sidebutton'
import Image from 'next/image'
import dribbble_icon from './img/dribble-icon.png'
import stackoverflow_icon from './img/stack-overflow_icon.png'
import behance_icon from './img/behance_icon.png'
import github_icon from './img/github_icon.png'
import linkedin_icon from './img/linkedin_icon.png'
import logo from '../../../public/img/resume_logo.svg'

const Header = ({ professional }: any) => {
    const pages = [
        { name: "home", id: 'home' },
        { name: "about", id: 'about' },
        { name: "skills", id: 'skills' },
        { name: "resume", id: 'resume' },
        { name: "portfolio", id: 'portfolio' },
        { name: "contact", id: 'contact' },
    ]

    const [linkedinurl, setLinkedinurl] = useState<string>(professional.linkedinurl)
    const [stackoverflowurl, setStackoverflowurl] = useState<string>(professional.stackoverflowurl)
    const [github, setGithub] = useState<string>(professional.github)
    const [dribble, setDribble] = useState<string>(professional.behance)
    const [behance, setBehance] = useState<string>(professional.behance)

    const icons = [
        { url: linkedinurl, img: linkedin_icon },
        { url: stackoverflowurl, img: stackoverflow_icon },
        { url: github, img: behance_icon },
        { url: dribble, img: github_icon },
        { url: behance, img: dribbble_icon },
    ]



    return (
        <div>

            <AppBar position="fixed" sx={{ bgcolor: '#000', py: 2 }}>
                <Container maxWidth="lg" >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0px' }} >
                        <Box sx={{ width: { md: '15%', xs: '50%' } }}>
                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                <Image src={logo} alt='logo' width={210} height={100} className="image" />
                            </Box>
                            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                                <Image src={logo} alt='logo' width={150} height={80} />
                            </Box>
                        </Box>
                        <Box sx={{ width: '60%', display: { md: 'block', xs: 'none' } }}>
                            <Box sx={{ display: 'flex', gap: '30px', listStyle: "none", justifyContent: 'center' }}>
                                {pages.map((page) => (
                                    <a href={`#${page.id}`} key={page.id}>
                                        <li className={styles.menu}>{page.name}</li>
                                    </a>
                                ))}


                            </Box>
                        </Box>
                        <Box sx={{ width: '25%', display: { md: 'block', xs: 'none' } }}>
                            <Box sx={{ display: 'flex', gap: '20px', listStyle: "none", justifyContent: 'end' }}>
                                {icons.map((el, i) => (
                                    el.url && (
                                        <li className={styles.icons} key={i} onClick={() => window.open(el.url)}>
                                            <Image src={el.img} width={25} height={25} alt='icons'></Image>
                                        </li>
                                    )
                                ))}

                            </Box>
                        </Box>
                        <Box sx={{ width: '50%', display: { md: 'none', xs: 'block' } }}>
                            <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                                <SideButton data={professional} />
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </AppBar>
        </div >
    )
}

export default Header
