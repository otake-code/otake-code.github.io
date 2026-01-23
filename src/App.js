import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import InteractiveBackground from './components/InteractiveBackground';
import ScrollToTop from './components/ScrollToTop';
import EntryAnimation from './components/EntryAnimation';
import theme from './theme';

function App() {
  const [showEntry, setShowEntry] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {showEntry && <EntryAnimation onComplete={() => setShowEntry(false)} />}
      <ScrollToTop />
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0 }}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          background: 'radial-gradient(circle at 10% 20%, rgb(10, 25, 41) 0%, rgb(13, 33, 53) 90.2%)',
          position: 'relative',
        }}
      >
        {/* Global animated background blobs */}
        <Box
          sx={{
            position: 'absolute',
            top: '-20%',
            left: '-10%',
            width: '50vw',
            height: '50vw',
            background: 'radial-gradient(circle, rgba(0,229,255,0.1) 0%, rgba(0,0,0,0) 70%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '-10%',
            right: '-10%',
            width: '60vw',
            height: '60vw',
            background: 'radial-gradient(circle, rgba(124, 77, 255, 0.08) 0%, rgba(0,0,0,0) 70%)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />


        <InteractiveBackground />
        <Header />

        <Box sx={{ zIndex: 1, paddingTop: '80px' }}>
          <Home />
          <About />
          <Skills />
          <Projects />
          <Publications />
          <Contact />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
