
import React from 'react';
import { Box } from '@mui/material';          // ← ここが必要
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';
const theme = createTheme({
  typography: {
    fontFamily: 'Noto Sans JP, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Box
          sx={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/background.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            flex: 1,
            paddingTop: '64px',
          }}
        >
          <Home />
        </Box>
        <Box
          sx={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/about-background.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh',
          }}
        >
          <About />
          <Skills />
          <Projects />
          <Publications /> {/* ここに追加 */}
          <Contact />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
