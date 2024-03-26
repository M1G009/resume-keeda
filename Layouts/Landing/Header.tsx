import * as React from 'react';
import { useRouter } from 'next/router'; // Import the useRouter hook
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import styles from "./landing.module.css"
import Link from 'next/link';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import logo from '../../public/img/resume_logo.svg'

const pages = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  const router = useRouter(); // Initialize useRouter

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar sx={{ bgcolor: '#000' }}>
      <Container sx={{ margin: 'auto' }}>
        <Toolbar disableGutters>
          <Box sx={{ display: { md: 'block', xs: 'none' } }}>
            <Link href={'/'}>
              <Image src={logo} alt='logo' width={210} height={80} ></Image>
            </Link>
          </Box>
          <Box sx={{ display: { md: 'none', xs: 'block' } }}>
            <Link href={'/'}>
              <Image src={logo} alt='logo' width={180} height={70} ></Image>
            </Link>
          </Box>

          {isMd && (<Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'end' }}>
            {isMd && (
              <IconButton
                size="large"
                aria-label="open navigation menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            )}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <Link href={page.path}>
                  <MenuItem key={page.name} onClick={handleCloseNavMenu} sx={{ py: 1.5, px: 4 }}>
                    <Typography textAlign="right" className={styles.page_hover} sx={{ color: router.pathname === page.path ? '#F6CA56' : 'inherit' }}>
                      {page.name}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
              {isMd && (
                <>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link href="/user/login">
                      <button className={styles.button_small}>
                        Login
                      </button>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link href="/user/signup">
                      <button className={styles.button_small}>
                        Signup
                      </button>
                    </Link>
                  </MenuItem>
                </>
              )}
            </Menu>
          </Box>)
          }

          {!isMd && (
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
              {pages.map((page) => (
                <Link key={page.name} href={page.path}>
                  <MenuItem onClick={handleCloseNavMenu} sx={{ py: 1.5, px: 4 }}>
                    <Typography textAlign="right" className={styles.page_hover} sx={{ color: router.pathname === page.path ? '#F6CA56' : 'inherit' }}>
                      {page.name}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}

            </Box>
          )}

          {!isMd && (
            <Box sx={{ flexGrow: 0 }}>
              <Link href="/user/login">
                <button className={styles.button2} >
                  Login
                </button>
              </Link>
              <Link href="/user/signup">
                <button className={styles.button1} >
                  Signup
                </button>
              </Link>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar >
  );
}

export default Header;
