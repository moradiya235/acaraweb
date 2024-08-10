import React, { useState } from 'react';
import { AppBar, Box, Button, Container, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../../Assets/home/logo.png'; // Update the path to your logo
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorElHome, setAnchorElHome] = useState(null); // State to manage the "Home" sub-menu

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleHomeClick = (event) => {
    setAnchorElHome(event.currentTarget);
  };

  const handleHomeMenuClose = () => {
    setAnchorElHome(null);
  };

  const menuItems = ['Works', 'Services', 'About', 'Contact'];

  const drawerList = (
    <Box
      sx={{ width: '100%', height: '100%', bgcolor: '#EDEDED'}} // Full-screen drawer with background
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: 2 ,bgcolor:"transparent"}}>
        <img src={logo} alt="Logo" style={{ height: '50px', objectFit: 'contain' }} />
        <IconButton onClick={toggleDrawer} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handleHomeClick}>
            <ListItemText primary="Home" sx={{ textAlign: 'start' }} />
          </ListItemButton>
        </ListItem>
        {menuItems.map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} sx={{ textAlign: 'start' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <AppBar position="static" sx={{ background:'Transparent', boxShadow: 'none' }}>
      <Container>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box>
            <img src={logo} alt="Logo" style={{ maxHeight: '50px' }} />
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: '20px' }}>
            <Typography sx={{ color: 'white', cursor: 'pointer' }} onClick={handleHomeClick}>
              Home  <ExpandMoreIcon />
            </Typography>
            <Menu
              anchorEl={anchorElHome}
              open={Boolean(anchorElHome)}
              onClose={handleHomeMenuClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              sx={{border:"none"}}
            >
              <MenuItem onClick={handleHomeMenuClose}>Home-Light</MenuItem>
              <MenuItem onClick={handleHomeMenuClose}>Home-Dark</MenuItem>
            </Menu>
            <Typography sx={{ color: 'white', cursor: 'pointer' }}>Works</Typography>
            <Typography sx={{ color: 'white', cursor: 'pointer' }}>Services</Typography>
            <Typography sx={{ color: 'white', cursor: 'pointer' }}>About Us</Typography>
            <Typography sx={{ color: 'white', cursor: 'pointer' }}>Contact Us</Typography>
            <Button sx={{ bgcolor: 'white', color: 'black', borderRadius: '5px' }}>Get A Quote</Button>
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
            >
              <MenuIcon sx={{ color: 'white' }} />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: { width: '100%', height: '100%' },
        }}
      >
        {drawerList}
      </Drawer>
    </AppBar>
  );
}

export default Header;






