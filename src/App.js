import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
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
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <div style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/background.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          flex: '1',
          paddingTop: '64px', // Adjust padding to account for the fixed header
        }}>
          <Home />
        </div>
        <div style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/about-background.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          flex: '1',
        }}>
          <About />
          <Skills />
          <Contact />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
