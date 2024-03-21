import { ThemeProvider } from '@emotion/react';
import { Box, Container, Grid, Input, List, ListItem, ListItemIcon, ListItemText, TextField, Typography, createTheme, useMediaQuery } from '@mui/material';
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MapIcon from '@mui/icons-material/Map';
import CallIcon from '@mui/icons-material/Call';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {

    const theme = createTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="lg">
                <Box sx={{ mt: 20 }}>
                    <Box sx={{ textAlign: 'center', mb: isSmallScreen ? "40px" : "80px" }}>
                        <Typography variant='subtitle1' sx={{ color: '#9f9f9f' }}>Feel free to contact me anytimes</Typography>
                        <Typography variant='h3' sx={{ fontWeight: 'bold' }}>Get in Touch</Typography>
                        <div className='animated-bar'></div>
                    </Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={7}>
                            <Typography variant='h5' sx={{ mb: 3 }}>Message Me</Typography>
                            <div className="textInputWrapper">
                                <Input placeholder="Type Here" type="text" className="textInput"/>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={5} sx={{ p: isSmallScreen ? 2 : 0 }}>
                            <Typography variant='h5' sx={{ mb: 3 }}>Contact Info</Typography>
                            <Typography variant='subtitle1' sx={{ color: '#9f9f9f' }}>Always available for freelance work if the right project comes along, Feel free to contact me!</Typography>
                            <Box>
                                <List>
                                    <ListItem >
                                        <ListItemIcon>
                                            <AccountCircleIcon sx={{ color: '#009e66', fontSize: '40px' }} />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Box sx={{ borderLeftColor: '#9f9f9f', borderLeftWidth: '1.5px', borderLeftStyle: 'solid', pl: 4 }}>
                                                <Typography variant='h6' sx={{ fontWeight: 700, fontSize: '15px' }}>Name</Typography>
                                                <Typography variant='h6' sx={{ color: '#9f9f9f', fontSize: '17px' }}>Emma Smith</Typography>
                                            </Box>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <MapIcon sx={{ color: '#009e66', fontSize: '40px' }} />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Box sx={{ borderLeftColor: '#9f9f9f', borderLeftWidth: '1.5px', borderLeftStyle: 'solid', pl: 4 }}>
                                                <Typography variant='h6' sx={{ fontWeight: 700, fontSize: '15px' }}>Location</Typography>
                                                <Typography variant='h6' sx={{ color: '#9f9f9f', fontSize: '17px' }}>4155 Mann Island, Liverpool, United Kingdom.</Typography>
                                            </Box>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CallIcon sx={{ color: '#009e66', fontSize: '40px' }} />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Box sx={{ borderLeftColor: '#9f9f9f', borderLeftWidth: '1.5px', borderLeftStyle: 'solid', pl: 4 }}>
                                                <Typography variant='h6' sx={{ fontWeight: 700, fontSize: '15px' }}>Call Me</Typography>
                                                <Typography variant='h6' sx={{ color: '#9f9f9f', fontSize: '17px' }}>+44 1632 967704</Typography>
                                            </Box>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <SendIcon sx={{ color: '#009e66', fontSize: '40px' }} />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Box sx={{ borderLeftColor: '#9f9f9f', borderLeftWidth: '1.5px', borderLeftStyle: 'solid', pl: 4 }}>
                                                <Typography variant='h6' sx={{ fontWeight: 700, fontSize: '15px' }}>Email me</Typography>
                                                <Typography variant='h6' sx={{ color: '#9f9f9f', fontSize: '17px' }}><a href="#" className='hover-light'>emma@example.com</a></Typography>
                                            </Box>
                                        </ListItemText>
                                    </ListItem>

                                </List>
                            </Box>
                        </Grid>
                    </Grid>
                </Box >
            </Container >
        </ThemeProvider >
    );

}

export default Contact
