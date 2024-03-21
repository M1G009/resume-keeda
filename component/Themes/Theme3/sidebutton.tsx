import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import style from './theme3.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import dribbble_icon from './img/dribble-icon.png'
import stackoverflow_icon from './img/stack-overflow_icon.png'
import behance_icon from './img/behance_icon.png'
import github_icon from './img/github_icon.png'
import linkedin_icon from './img/linkedin_icon.png'
import Image from 'next/image';


type Anchor = 'top' | 'left' | 'bottom' | 'right';



const SideButton = ({ data }: any) => {

    const pages = [
        { name: "home", id: 'home' },
        { name: "about", id: 'about' },
        { name: "skills", id: 'skills' },
        { name: "resume", id: 'resume' },
        { name: "portfolio", id: 'portfolio' },
        { name: "contact", id: 'contact' },
    ];

    const [linkedinurl, setLinkedinurl] = useState<string>(data.linkedinurl)
    const [stackoverflowurl, setStackoverflowurl] = useState<string>(data.stackoverflowurl)
    const [github, setGithub] = useState<string>(data.github)
    const [dribble, setDribble] = useState<string>(data.behance)
    const [behance, setBehance] = useState<string>(data.behance)

    const icons = [
        { url: linkedinurl, img: dribbble_icon },
        { url: stackoverflowurl, img: stackoverflow_icon },
        { url: github, img: behance_icon },
        { url: dribble, img: github_icon },
        { url: behance, img: linkedin_icon },
    ]
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
            return;
        }
        setState({ ...state, right: open });
    };

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, backgroundColor: '#666' }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List sx={{ color: 'white' }}>
                {pages.map((text) => (
                    <a href={`#${text.id}`} key={text.id}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary={text.name} sx={{ textTransform: 'capitalize' }} />
                            </ListItemButton>
                        </ListItem>
                    </a>
                ))}

            </List>
            <Divider />
            <List>
                <ul style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '20px', listStyle: 'none', justifyContent: 'center' }}>
                    {icons.map((el, i) => (
                        <li className={style.icons} key={el.url}>
                            <Image src={el.img} alt='icons' width={25} height={25} ></Image>
                        </li>
                    ))}

                </ul>

            </List>
        </Box>
    );

    return (
        <div>
            <Button onClick={toggleDrawer('right', true)} sx={{ color: '#fff' }}><MenuIcon /></Button>
            <Drawer
                anchor={'right'}
                open={state['right']}
                onClose={toggleDrawer('right', false)}
            >
                {list('right')}
            </Drawer>
        </div>
    );
}

export default SideButton