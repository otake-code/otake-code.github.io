// src/components/Home.js
import React, { useState } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SlideShow from './SlideShow';
import MyGallery from './MyGallery';

function Home() {
  const slideImages = [
    `${process.env.PUBLIC_URL}/images/slide1.jpg`,
    `${process.env.PUBLIC_URL}/images/slide2.jpg`,
    `${process.env.PUBLIC_URL}/images/slide3.jpg`,
    `${process.env.PUBLIC_URL}/images/slide4.jpg`,
  ];

  const [openGallery, setOpenGallery] = useState(false);
  const handleOpenGallery = () => setOpenGallery(true);
  const handleCloseGallery = () => setOpenGallery(false);

  return (
    <Box
      id="home"
      sx={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Background Slideshow with overlay */}
      <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <SlideShow images={slideImages} intervalTime={5000} />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to right, rgba(10, 25, 41, 0.9) 0%, rgba(10, 25, 41, 0.6) 50%, rgba(10, 25, 41, 0.3) 100%)',
          }}
        />
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <Typography
            variant="h6"
            sx={{
              color: 'primary.main',
              fontWeight: 700,
              letterSpacing: 2,
              mb: 2,
              textTransform: 'uppercase'
            }}
          >
            Portfolio
          </Typography>

            <Typography
              variant="h1"
              sx={{
                color: 'white',
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 900,
                lineHeight: 1.1,
                mb: 1,
              }}
            >
              Hi, I'm <br />
              <Box component="span" sx={{
                background: 'linear-gradient(45deg, #00e5ff 30%, #7c4dff 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Okada Takeo
              </Box>
            </Typography>

            <Typography
              variant="h5"
              sx={{
                color: 'text.secondary',
                maxWidth: '600px',
                mt: 2,
                mb: 3,
                lineHeight: 1.6,
                fontWeight: 400
              }}
            >
            A student based in Gifu Univ. <br />
            Exploring the world of code, one line at a time.
          </Typography>

          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => {
                const section = document.getElementById('projects');
                if (section) {
                  const headerOffset = 80;
                  const elementPosition = section.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
              endIcon={<ArrowForwardIcon />}
            >
              View Projects
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={handleOpenGallery}
              sx={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}
            >
              View Gallery
            </Button>
          </Box>
        </motion.div>
      </Container>


      {openGallery && (
        <MyGallery images={slideImages} onClose={handleCloseGallery} />
      )}
    </Box>
  );
}

export default Home;
