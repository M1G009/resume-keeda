import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import logo from '../../../public/img/resume_logo.svg'
import Image from 'next/image';

const pages = [
  { id: 'home', name: 'Home' },
  { id: 'about', name: 'About' },
  { id: 'education', name: 'Education' },
  { id: 'experience', name: 'experience' },
  { id: 'skills', name: 'Skills' },
  { id: 'portfolio', name: 'Portfolio' },
];


function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <>
      <Box>
        <AppBar position="fixed" sx={{ backgroundColor: '#111010' }} >
          <Container maxWidth='xl' >
            <Toolbar disableGutters>


              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Image src={logo} alt='logo' width={210} height={80} />
              </Box>


              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                      <a href={`#${page.id}`}>
                        <Typography textAlign="center" textTransform={'uppercase'}>{page.name}</Typography>
                      </a>
                    </MenuItem>
                  ))}
                </Menu>

              </Box>


              <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <Image src={logo} alt='logo' width={150} height={80} />
              </Box>

              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end', }}>
                {pages.map((page) => (
                  <Button
                    key={page.id}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, px: '15px', color: 'white', display: 'block', textTransform: 'uppercase' }}
                    href={`#${page.id}`}
                  >
                    {page.name}
                  </Button>
                ))}

              </Box>

            </Toolbar>
          </Container>
        </AppBar>

      </Box>
    </>
  );
}
export default Header;
