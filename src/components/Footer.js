import React from 'react';
import { Box, Typography, Container, Divider } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        background: 'rgba(10, 25, 41, 0.9)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <Typography variant="body2" color="text.secondary">
            &copy; {new Date().getFullYear()} Okada Takeo. All rights reserved.
          </Typography>
          <Typography variant="caption" color="text.disabled" sx={{ mt: 1 }}>
            {/* Built with React & MUI */}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
