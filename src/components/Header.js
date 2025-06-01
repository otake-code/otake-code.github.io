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
  useScrollTrigger
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';

/**
 * HideOnScroll コンポーネント
 * 下スクロールでヘッダーを隠し、上スクロールで表示する
 */
function HideOnScroll(props) {
  const { children } = props;
  // Trigger は「下にスクロール開始したら true」
  const trigger = useScrollTrigger({ threshold: 0 });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  // 現在アクティブなセクションIDを保持
  const [activeSection, setActiveSection] = React.useState('home');

  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Publications', id: 'publications' },
    { label: 'Contact', id: 'contact' },
  ];

  // セクションがビューポートに入ったら activeSection を更新する
  React.useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // セクションが 50% ほど見えたらコールバック
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    // 各セクション要素を監視
    menuItems.forEach((item) => {
      const elem = document.getElementById(item.id);
      if (elem) observer.observe(elem);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // スムーススクロール
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setDrawerOpen(false);
  };

  const renderMenuButtons = () => (
    <Box sx={{ display: 'flex', gap: 2 }}>
      {menuItems.map((item) => (
        <Button
          key={item.id}
          color="inherit"
          onClick={() => scrollToSection(item.id)}
          sx={{
            borderBottom: activeSection === item.id ? '2px solid white' : 'none',
            fontWeight: activeSection === item.id ? 'bold' : 'normal',
          }}
        >
          {item.label}
        </Button>
      ))}
    </Box>
  );

  const renderDrawerList = () => (
    <Box sx={{ width: 200 }} role="presentation">
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            selected={activeSection === item.id}
            sx={{
              '&.Mui-selected': {
                backgroundColor: 'rgba(255,255,255,0.1)',
              },
            }}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <HideOnScroll>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(10px)',
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My Portfolio
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
              >
                {renderDrawerList()}
              </Drawer>
            </>
          ) : (
            renderMenuButtons()
          )}
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}

export default Header;
