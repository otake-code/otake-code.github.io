// components/Contact.js
import React from 'react';
import { Container, Typography, Box, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
  return (
    <Container id="contact">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.5 }}
      >
        <Box my={4} minHeight="10vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" textAlign="center">
          <Typography variant="h3" gutterBottom>
            Contact Me
          </Typography>
          <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
            <IconButton component="a" href="mailto:okada@cv.info.gifu-u.ac.jp" color="inherit" sx={{ fontSize: 60 }}>
              <EmailIcon sx={{ fontSize: 60 }} />
            </IconButton>
            <IconButton component="a" href="https://github.com/otake-code" target="_blank" rel="noopener" color="inherit" sx={{ fontSize: 60 }}>
              <GitHubIcon sx={{ fontSize: 60 }} />
            </IconButton>
          </Box>
        </Box>
      </motion.div>
    </Container>
  );
}

export default Contact;
