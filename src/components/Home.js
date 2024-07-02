import React from 'react';
import { Typography, Box } from '@mui/material';

function Home() {
  return (
    <Box
      id="home"
      sx={{
        height: '50vh', // 必要に応じて高さを調整
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
      }}
    >
      <Box
        sx={{
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
      </Box>
    </Box>
  );
}

export default Home;
