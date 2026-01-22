// src/components/About.js
import React from 'react';
import { Box, Typography, Container, Grid, Paper, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion } from 'framer-motion';

const About = () => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [rotateY, setRotateY] = React.useState(0);

  const handleCardClick = (e) => {
    e.stopPropagation(); // Prevent immediate bubbling if any
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element.
    const width = rect.width;

    // "Super Spin" logic: Rotate 5 full times (1800deg) + 180deg flip.
    // Total change = 1980 degrees.
    // This provides the "mecha kaiten" (lot/super rotation) effect.
    // We accumulate rotation to allow "spin even more" on multiple clicks.

    const spinAmount = 1800 + 180;
    let newRotateY = rotateY;

    // If clicked on the right side, we want to push the right side away (negative rotation)
    // If clicked on the left side, we want to push the left side away (positive rotation)
    // But we need to consider the current accumulated rotation to keep the direction intuitive relative to the screen.
    // Actually, simply adding/subtracting the huge delta works for the visual effect.

    if (x > width / 2) {
      newRotateY -= spinAmount;
    } else {
      newRotateY += spinAmount;
    }

    setRotateY(newRotateY);

    // Toggle flipped state logically to track what's "supposed" to be showing
    // Note: With cumulative rotation, we can determine "showing back" by (newRotateY / 180) % 2 !== 0
    // But simply toggling the boolean is easier for the "Return" button logic if needed.
    setIsFlipped(!isFlipped);
  };

  const handleReturn = (e) => {
    e.stopPropagation();
    // To return, we just need to flip "back" to a state congruent to 0.
    // Or simply add another half-spin.
    // Let's just create another "super spin" back to neutral-ish,
    // or just continue the rotation in the same direction to land on front.
    // Let's simple reverse the last action? No, user wants "more spin".
    // Let's just treat it like a click.

    const spinAmount = 1800 + 180;
    // Default return spin direction (e.g., forward)
    setRotateY(prev => prev + spinAmount);
    setIsFlipped(false);
  };

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
              {/* 3D Card Container */}
              <Box
                onClick={handleCardClick}
                sx={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: 400,
                  margin: '0 auto',
                  perspective: '1500px', // Increased perspective for better 3D look with high rotation
                  cursor: 'pointer',
                  aspectRatio: '1/1',
                }}
              >
                {/* Inner Card that rotates */}
                <motion.div
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    transformStyle: 'preserve-3d',
                  }}
                  animate={{ rotateY: rotateY }}
                  transition={{
                    duration: 1.5, // Longer duration for the "super spin"
                    ease: "circOut" // Starts fast, slows down at the end (like a spinning coin stopping)
                  }}
                >
                  {/* Front Face: Avatar Image */}
                  <Box
                    sx={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      backfaceVisibility: 'hidden',
                      // Ensure front face is visible when rotation is 0, 360, 720...
                      // The backfaceVisibility logic works automatically with DOM structure
                      // if we explicitly set the back face to be rotated 180.

                      // Decorative rings
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: -20,
                        left: -20,
                        width: 'calc(100% + 40px)',
                        height: 'calc(100% + 40px)',
                        border: '2px solid rgba(0, 229, 255, 0.3)',
                        borderRadius: '50%',
                        zIndex: 0,
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: -20,
                        right: -20,
                        width: 'calc(100% + 40px)',
                        height: 'calc(100% + 40px)',
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
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '50%',
                        border: '4px solid rgba(255, 255, 255, 0.1)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                        filter: 'grayscale(20%)',
                        transition: 'filter 0.3s ease',
                      }}
                    />
                    {/* Hint Text */}
                    <Typography
                      variant="caption"
                      sx={{
                        position: 'absolute',
                        bottom: 10,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        color: 'rgba(255,255,255,0.7)',
                        textShadow: '0 2px 4px rgba(0,0,0,0.8)',
                        pointerEvents: 'none',
                        zIndex: 2,
                        width: '100%',
                        textAlign: 'center'
                      }}
                    >
                      Click to Spin
                    </Typography>
                  </Box>

                  {/* Back Face: GitHub Link */}
                  <Box
                    sx={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)', // Initially facing back
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #1a237e 0%, #311b92 100%)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '4px solid rgba(0, 229, 255, 0.5)',
                      boxShadow: '0 0 30px rgba(0, 229, 255, 0.3)',
                    }}
                  >
                    <Button
                      variant="text"
                      href="https://github.com/otake-code"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: 'white',
                        textTransform: 'none',
                        flexDirection: 'column',
                        gap: 1,
                        '&:hover': {
                          background: 'transparent',
                          '& .MuiSvgIcon-root': {
                            transform: 'scale(1.2)',
                            color: '#00e5ff'
                          }
                        }
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <GitHubIcon sx={{ fontSize: 80, transition: 'all 0.3s ease' }} />
                      <Typography variant="h5" fontWeight="bold" sx={{ mt: 2 }}>
                        @otake-code
                      </Typography>
                    </Button>

                    <Button
                      size="small"
                      onClick={handleReturn}
                      sx={{ mt: 3, color: 'rgba(255,255,255,0.5)' }}
                    >
                      Spin More
                    </Button>
                  </Box>
                </motion.div>
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
