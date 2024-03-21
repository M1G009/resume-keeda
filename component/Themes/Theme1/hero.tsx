import { Box, List, ListItem, ListItemButton, ListItemIcon, Typography } from '@mui/material'
import React, { useState } from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import style from './theme1.module.css'
import Image from 'next/image';
import dribbble_icon from './img/dribble-icon.png'
import stackoverflow_icon from './img/stack-overflow_icon.png'
import behance_icon from './img/behance_icon.png'



const Hero = ({ professionalDetail, user }: any) => {

    const [profession, setProfession] = useState<string>(professionalDetail.Profession)
    const [userFirstName, setUserFirstName] = useState<string>(user.firstName);
    const [userLastName, setUserLastName] = useState<string>(user.lastName);
    const [linkedinurl, setLinkedinurl] = useState<string>(professionalDetail.linkedinurl)
    const [stackoverflowurl, setStackoverflowurl] = useState<string>(professionalDetail.stackoverflowurl)
    const [github, setGithub] = useState<string>(professionalDetail.github)
    const [dribble, setDribble] = useState<string>(professionalDetail.dribble)
    const [behance, setBehance] = useState<string>(professionalDetail.behance)


    return (
        <div id='home'>
            <Box overflow={'hidden'}>
                <div id={style.stars}></div>
                <div id={style.stars2}></div>
                <div id={style.stars3}></div>

                <Box sx={{ position: 'relative' }}>

                    <Box
                        sx={{
                            width: '100%',
                            minHeight: '100dvh',
                            display: "flex",
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '0 20px', // Added padding for better mobile view
                            textAlign: 'center', // Center align text
                        }}

                    >

                        <Typography variant='h2'>{userFirstName} {userLastName}</Typography>
                        <br />
                        <Box sx={{ display: 'flex', gap: 2, fontSize: 30 }}>I'm
                            <div className="typewriter">{profession}</div>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: 10,
                            right: 10,
                            '@media (max-width: 768px)': {
                                bottom: 0,
                                right: 0,
                                // left: 0,
                                // display: 'none', // Added margin for better mobile view
                            },

                        }}
                    >
                        <List sx={{
                            display: 'flex', flexDirection: 'column', gap: 2,
                            '@media (max-width: 600px)': {
                                bottom: 0,
                                right: 0,
                                display: 'flex',
                                flexDirection: 'row',
                                gap: 1
                                // left: 0,
                                // display: 'none', // Added margin for better mobile view
                            }
                        }}>

                            {linkedinurl && (
                                <ListItem disablePadding>
                                    <ListItemButton onClick={() => window.open(linkedinurl)}>
                                        <ListItemIcon sx={{ color: 'white' }}>
                                            <LinkedInIcon />
                                        </ListItemIcon>
                                    </ListItemButton>
                                </ListItem>
                            )}

                            {github && (
                                <ListItem disablePadding>
                                    <ListItemButton onClick={() => window.open(github)}>
                                        <ListItemIcon sx={{ color: 'white' }}>
                                            <GitHubIcon />
                                        </ListItemIcon>
                                    </ListItemButton>
                                </ListItem>
                            )}

                            {dribble && (
                                <ListItem disablePadding>
                                    <ListItemButton onClick={() => window.open(dribble)}>
                                        <ListItemIcon sx={{ color: 'white' }}>
                                            <Image src={dribbble_icon} alt='' height={25} width={25} />
                                        </ListItemIcon>
                                    </ListItemButton>
                                </ListItem>
                            )}

                            {stackoverflowurl && (
                                <ListItem disablePadding>
                                    <ListItemButton onClick={() => window.open(stackoverflowurl)}>
                                        <ListItemIcon sx={{ color: 'white' }}>
                                            <Image src={stackoverflow_icon} alt='stackoverflow_icon' height={25} width={25} />
                                        </ListItemIcon>
                                    </ListItemButton>
                                </ListItem>
                            )}

                            {behance && (
                                <ListItem disablePadding>
                                    <ListItemButton onClick={() => window.open(behance)}>
                                        <ListItemIcon sx={{ color: 'white' }}>
                                            <Image src={behance_icon} alt='behance_icon' height={25} width={25} />
                                        </ListItemIcon>
                                    </ListItemButton>
                                </ListItem>
                            )}

                        </List>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default Hero
