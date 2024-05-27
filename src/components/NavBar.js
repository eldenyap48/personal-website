import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Home from '@mui/icons-material/Home';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { useState } from "react";

// Fun, 'Experience & Awards', 'About Me'

const pages = ['Resume', 'Projects'];
const dictNav = {
  'Resume': 'https://drive.google.com/file/d/15nHv-wQHtQD78wsOJv8GNZr_dBksHles/view?usp=sharing',
  'Fun :)': '/fun',
  'Experience & Awards': '/experience',
  'Projects': '/projects',
  'About Me': '/about',
}

export default function NavigationBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [isLight, setIsLight] = useState(true);
  
  const toggleLight = () => setIsLight(!isLight);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      
      <Container maxWidth="xl" className="bg-light-gray">
        <Toolbar disableGutters>
          
        <Home sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
        
        <p className="ml-5">
          <Link to="/" className='text-2xl tracking-widest font-bold'>ELDEN</Link>
        </p>

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true"
              onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{vertical: 'bottom', horizontal: 'right',}}
              keepMounted transformOrigin={{vertical: 'top', horizontal: 'left',}}
              open={Boolean(anchorElNav)} onClose={handleCloseNavMenu}>
              {pages.map((page) => (
                <SmallCustomLink to={dictNav[page]} page={page} closeNav={handleCloseNavMenu}/>
              ))}
            </Menu>
          </Box>

          <Home sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

          <Box className="flex w-full flex-row-reverse">
            
            {/* Light Switch Toggle */}
            {/* <div className='flex items-center gap-5 justify-end ml-10'>
                <div className={"w-16 h-10 bg-black rounded-full p-1 mr-3 flex " + (isLight ? 'justify-start opacity-20' : 'justify-end opacity-40')} onClick={toggleLight}>
                    <motion.div className="w-8 h-8 bg-white rounded-full" layout transition={spring}/>
                </div>
            </div> */}

            {pages.map((page) => (
              <CustomLink to={dictNav[page]} page={page} closeNav={handleCloseNavMenu}/>
            ))}

          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

function CustomLink({ to, page, closeNav, ...props }) {

  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end:true} )

  return (
    <button key={page} onClick={closeNav} className={'ml-5 hover:bg-teal p-2 rounded-full ' + (isActive ? 'bg-red-500' : '')}>
      <Link to={to} className="text-white text-lg" >{page}</Link>
    </button>
  )
}

function SmallCustomLink({ to, page, closeNav, ...props }) {

  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end:true} )

  return (
    <MenuItem key={page} onClick={closeNav} sx={{backgroundColor: isActive ? 'red':''}}>
      <Typography textAlign="center">
        <Link to={to}>{page}</Link>
      </Typography>
    </MenuItem>
  )
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};