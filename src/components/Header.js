// src/components/Header.js
import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useMediaQuery,
  Slide,
  useScrollTrigger,
  Container
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme, alpha } from '@mui/material/styles';

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({ threshold: 0 });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('home');

  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Publications', id: 'publications' },
    { label: 'Contact', id: 'contact' },
  ];

  React.useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-70px 0px -70% 0px', // Adjust to better trigger active state
      threshold: 0,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    menuItems.forEach((item) => {
      const elem = document.getElementById(item.id);
      if (elem) observer.observe(elem);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetKey = sectionId === 'home' ? 0 : 80; // Offset for fixed header
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offsetKey;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setDrawerOpen(false);
  };

  const renderMenuButtons = () => (
    <Box sx={{ display: 'flex', gap: 1 }}>
      {menuItems.map((item) => (
        <Button
          key={item.id}
          color="inherit"
          onClick={() => scrollToSection(item.id)}
          sx={{
            position: 'relative',
            px: 2,
            color: activeSection === item.id ? theme.palette.primary.main : theme.palette.text.secondary,
            fontWeight: activeSection === item.id ? 700 : 500,
            '&:hover': {
              color: 'white',
              backgroundColor: 'rgba(255,255,255,0.05)',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: 6,
              left: '50%',
              transform: activeSection === item.id ? 'translateX(-50%)' : 'translateX(-50%) scaleX(0)',
              width: '20px',
              height: '2px',
              backgroundColor: theme.palette.primary.main,
              borderRadius: '2px',
              transition: 'transform 0.3s ease',
            },
          }}
        >
          {item.label}
        </Button>
      ))}
    </Box>
  );

  const renderDrawerList = () => (
    <Box
      sx={{
        width: 280,
        height: '100%',
        backgroundColor: theme.palette.background.default, /* Ensure no transparency issues */
        color: 'white'
      }}
      role="presentation"
    >
      <Box sx={{ p: 4, mb: 2 }}>
        <Typography variant="h5" fontWeight="bold">
          Menu
        </Typography>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            sx={{
              my: 1,
              mx: 2,
              borderRadius: 2,
              width: 'auto',
              backgroundColor: activeSection === item.id ? alpha(theme.palette.primary.main, 0.1) : 'transparent',
              color: activeSection === item.id ? theme.palette.primary.main : theme.palette.text.secondary,
              '&:hover': {
                 backgroundColor: alpha(theme.palette.primary.main, 0.05),
              }
            }}
          >
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                fontWeight: activeSection === item.id ? 700 : 500
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
      <AppBar
        position="fixed"
        sx={{
          background: 'rgba(10, 25, 41, 0.7)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography
              variant="h5"
              sx={{
                flexGrow: 1,
                fontWeight: 800,
                background: 'linear-gradient(45deg, #00e5ff 30%, #7c4dff 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                cursor: 'pointer',
                letterSpacing: '-0.5px'
              }}
              onClick={() => scrollToSection('home')}
            >
              Okada.Portfolio
            </Typography>

            {isMobile ? (
              <>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={() => setDrawerOpen(true)}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor="right"
                  open={drawerOpen}
                  onClose={() => setDrawerOpen(false)}
                  PaperProps={{
                    sx: {
                       backdropFilter: 'blur(10px)',
                       background: 'rgba(10, 25, 41, 0.95)',
                    }
                  }}
                >
                  {renderDrawerList()}
                </Drawer>
              </>
            ) : (
              renderMenuButtons()
            )}
          </Toolbar>
        </Container>
      </AppBar>
  );
}



export default Header;

