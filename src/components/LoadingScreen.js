// LoadingScreen.js
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import CircularProgress from '@mui/material/CircularProgress';

const LoadingScreen = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#0f0f0f" // ダークな背景色
      color="white"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        p={4}
        borderRadius={8}
        bgcolor="#1a1a1a" // グレーの背景色
        boxShadow={3}
      >
        <Typography variant="h5" gutterBottom>
          Loading...
        </Typography>
        <Box width="100%" mb={2}>
          <LinearProgress color="secondary" />
        </Box>
        <CircularProgress color="secondary" />
      </Box>
    </Box>
  );
};

export default LoadingScreen;
