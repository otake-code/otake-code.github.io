// src/components/Contact.js
import React from 'react';
import { Box, Typography, Container, Paper, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  return (
    <Box
      id="contact"
      sx={{
        py: 12,
        position: 'relative'
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{
              background: 'linear-gradient(45deg, #fff 30%, #b0b8c4 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 8
            }}
          >
            Contact
          </Typography>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 6 },
              background: 'rgba(19, 47, 76, 0.4)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: 4,
              textAlign: 'center'
            }}
          >
            <Typography variant="h5" color="text.secondary" paragraph sx={{ mb: 6 }}>
              お気軽にご連絡ください。<br />
            </Typography>

            <Grid container spacing={4} justifyContent="center">
              <Grid item>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<EmailIcon />}
                  href="mailto:okada@cv.info.gifu-u.ac.jp"
                  sx={{
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    borderRadius: '50px',
                    '&:hover': {
                      borderColor: '#00e5ff',
                      color: '#00e5ff',
                      background: 'rgba(0, 229, 255, 0.1)'
                    }
                  }}
                >
                  Email Me
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<GitHubIcon />}
                  href="https://github.com/otake-code"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    borderRadius: '50px',
                    '&:hover': {
                      borderColor: '#7c4dff',
                      color: '#7c4dff',
                      background: 'rgba(124, 77, 255, 0.1)'
                    }
                  }}
                >
                  GitHub
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;
