import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Header() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(10px)' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        <Button color="inherit" onClick={() => scrollToSection('home')}>Home</Button>
        <Button color="inherit" onClick={() => scrollToSection('about')}>About</Button>
        <Button color="inherit" onClick={() => scrollToSection('skills')}>Skills</Button>
        <Button color="inherit" onClick={() => scrollToSection('contact')}>Contact</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
