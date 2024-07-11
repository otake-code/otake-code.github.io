// components/Home.js
import React from 'react';
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

function Home() {
  return (
    <Box
      id="home"
      sx={{
        height: '100vh', // 必要に応じて高さを調整
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.5 }}
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: '2rem',
          borderRadius: '8px',
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          component="div"
          sx={{ fontWeight: 'bold' }} // ここで太字に設定
        >
          Welcome to My Homepage
        </Typography>
        <Typography variant="h5">
          I'm otake-code, a student based in Gifu Univ.
        </Typography>
      </motion.div>
    </Box>
  );
}

export default Home;
