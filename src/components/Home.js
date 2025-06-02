// src/components/Home.js
import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
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
        height: {
          xs: '100vh',
          sm: '90vh',
          md: '80vh',
        },
        overflow: 'hidden',
      }}
    >
      <SlideShow images={slideImages} intervalTime={4000} />

      {/* 半透明＋小さめテキストで左下に配置 */}
      <Typography
        onClick={handleOpenGallery}
        sx={{
          position: 'absolute',
          bottom: 12,
          left: 12,
          color: 'rgba(255, 255, 255, 0.6)',
          fontSize: '0.8rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          '&:hover': { color: 'rgba(255, 255, 255, 0.9)' },
          userSelect: 'none',
          zIndex: 10,
        }}
      >
        My Gallery
      </Typography>

      {openGallery && (
        <MyGallery images={slideImages} onClose={handleCloseGallery} />
      )}

      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          zIndex: 5,
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          style={{ width: '90%' }}
        >
          <Typography
            variant="h3"
            sx={{
              color: 'white',
              fontWeight: 'bold',
              textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)',
              lineHeight: 1.2,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
            }}
          >
            Welcome to
          </Typography>
          <Typography
            variant="h1"
            sx={{
              color: 'white',
              fontWeight: 900,
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
              lineHeight: 1.1,
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5rem' },
              mt: 1,
            }}
          >
            Okada's Page
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'white',
              mt: 2,
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.25rem' },
              opacity: 0.9,
            }}
          >
            I&apos;m Okada Takeo, a student based in Gifu Univ.
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
}

export default Home;
