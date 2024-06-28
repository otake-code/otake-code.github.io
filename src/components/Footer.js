import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: 'white',
        width: '100%',
      }}
    >
      <Typography variant="body1">
        Copyright©otake-code. All Rights Reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
