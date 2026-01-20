// src/components/About.js
import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        position: 'relative',
        py: 12,
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg">
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
            About Me
          </Typography>
        </motion.div>

        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -20,
                    left: -20,
                    width: '100%',
                    height: '100%',
                    border: '2px solid rgba(0, 229, 255, 0.3)',
                    borderRadius: '50%',
                    zIndex: 0,
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -20,
                    right: -20,
                    width: '100%',
                    height: '100%',
                    border: '2px solid rgba(124, 77, 255, 0.3)',
                    borderRadius: '50%',
                    zIndex: 0,
                  }
                }}
              >
                <Box
                  component="img"
                  src={`${process.env.PUBLIC_URL}/images/me.png`}
                  alt="My Avatar"
                  sx={{
                    width: '100%',
                    maxWidth: 400,
                    height: 'auto',
                    borderRadius: '50%',
                    border: '4px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                    position: 'relative',
                    zIndex: 1,
                    display: 'block',
                    margin: '0 auto',
                    filter: 'grayscale(20%)',
                    transition: 'filter 0.3s ease',
                    '&:hover': {
                      filter: 'grayscale(0%)'
                    }
                  }}
                />
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  background: 'rgba(19, 47, 76, 0.4)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 4,
                }}
              >
                <Typography variant="h5" color="primary" gutterBottom fontWeight="bold">
                  Okada Takeo
                </Typography>
                <Typography variant="h6" color="text.secondary" gutterBottom sx={{ mb: 3 }}>
                  Gifu University Student | Researcher
                </Typography>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
                  情報系専攻の岡田です．Vision＆Languageの研究に取り組んでいます．<br />
                  最新のAI技術を活用した、実世界の問題解決に興味があります．
                </Typography>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
                  趣味は写真撮影と旅行です．<br />
                </Typography>

                <Box sx={{ mt: 4, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  {['Vision & Language', 'Deep Learning', 'Web Development'].map((tag) => (
                    <Box
                      key={tag}
                      sx={{
                        px: 2,
                        py: 1,
                        borderRadius: 10,
                        background: 'rgba(0, 229, 255, 0.1)',
                        border: '1px solid rgba(0, 229, 255, 0.3)',
                        color: 'primary.light',
                        fontSize: '0.9rem',
                        fontWeight: 600
                      }}
                    >
                      {tag}
                    </Box>
                  ))}
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
