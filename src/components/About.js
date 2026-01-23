// src/components/About.js
import React, { useRef } from 'react';
import { Box, Typography, Container, Grid, Paper, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [rotateY, setRotateY] = React.useState(0);
  const containerRef = useRef(null);

  const handleCardClick = (e) => {
    e.stopPropagation(); // Prevent immediate bubbling if any
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element.
    const width = rect.width;

    // "Super Spin" logic
    const spinAmount = 1800 + 180;
    let newRotateY = rotateY;

    if (x > width / 2) {
      newRotateY -= spinAmount;
    } else {
      newRotateY += spinAmount;
    }

    setRotateY(newRotateY);
    setIsFlipped(!isFlipped);
  };

  const handleReturn = (e) => {
    e.stopPropagation();
    const spinAmount = 1800 + 180;
    setRotateY(prev => prev + spinAmount);
    setIsFlipped(false);
  };

  return (
    <Box
      id="about"
      ref={containerRef}
      sx={{
        position: 'relative',
        py: 8,
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

        {/* Reverted to Grid Layout with Center Alignment */}
        <Grid container spacing={6} alignItems="center">

          {/* Linked Icon Button (Avatar) - LEFT side */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Floating Animation Wrapper */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* 3D Card Container */}
                  <Box
                    onClick={handleCardClick}
                    sx={{
                      position: 'relative',
                      width: '100%',
                      maxWidth: 350,
                      margin: '0 auto',
                      perspective: '1500px',
                      cursor: 'pointer',
                      aspectRatio: '1/1',
                    }}
                  >
                  <motion.div
                    style={{
                      width: '100%',
                      height: '100%',
                      position: 'relative',
                      transformStyle: 'preserve-3d',
                    }}
                    animate={{ rotateY: rotateY }}
                    transition={{
                      duration: 1.5,
                      ease: "circOut"
                    }}
                  >
                    {/* Front Face */}
                    <Box
                      sx={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        backfaceVisibility: 'hidden',
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

                    {/* Back Face */}
                    <Box
                      sx={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
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
            </motion.div>
          </Grid>

          {/* Text Content - RIGHT side */}
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
                  p: 3,
                  background: 'rgba(19, 47, 76, 0.4)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 4,
                }}
              >
                <Typography variant="h5" color="primary" gutterBottom fontWeight="bold" sx={{ mb: 1 }}>
                  Okada Takeo
                </Typography>
                <Typography variant="h6" color="text.secondary" gutterBottom sx={{ mb: 2, fontSize: '1.1rem' }}>
                  Gifu University Student | Researcher
                </Typography>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, fontSize: '1rem', mb: 2 }}>
                  情報系専攻の岡田です．Vision＆Languageの研究に取り組んでいます．<br />
                  最新のAI技術を活用した、実世界の問題解決に興味があります．
                </Typography>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, fontSize: '1rem', mb: 3 }}>
                  趣味は写真撮影と旅行です．<br />
                </Typography>

                <Box sx={{ mt: 2, display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
                  {['Vision & Language', 'Deep Learning', 'Web Development'].map((tag) => (
                    <Box
                      key={tag}
                      sx={{
                        px: 2,
                        py: 0.8,
                        borderRadius: 10,
                        background: 'rgba(0, 229, 255, 0.1)',
                        border: '1px solid rgba(0, 229, 255, 0.3)',
                        color: 'primary.light',
                        fontSize: '0.85rem',
                        fontWeight: 600
                      }}
                    >
                      {tag}
                    </Box>
                  ))}
                </Box>

                {/* Timeline Section */}
                <Box sx={{ mt: 4 }}>
                  <Typography variant="h6" color="primary" gutterBottom sx={{ mb: 2, fontWeight: 'bold', fontSize: '1.1rem' }}>
                    Education & Experience
                  </Typography>
                  <Box sx={{ position: 'relative', ml: 1, borderLeft: '2px solid rgba(0, 229, 255, 0.3)', pl: 4, py: 0.5 }}>
                    {[
                      {
                        period: '2025.04 – 現在',
                        title: '修士課程（工学）',
                        org: '岐阜大学大学院 – 自然科学技術研究科 知能理工学専攻 知能情報学領域'
                      },
                      {
                        period: '2023.10 – 現在',
                        title: '研究室配属',
                        org: '岐阜大学 – 工学部 加藤研究室'
                      },
                      {
                        period: '2021.04 – 2025.03',
                        title: '学士課程（工学）',
                        org: '岐阜大学 – 工学部 電気電子・情報工学科 情報コース'
                      }
                    ].map((item, index) => (
                      <Box key={index} sx={{ mb: 3, position: 'relative' }}>
                        {/* Dot */}
                        <Box
                          sx={{
                            position: 'absolute',
                            left: -41,
                            top: 6,
                            width: 14,
                            height: 14,
                            borderRadius: '50%',
                            background: '#0a1929',
                            border: '3px solid #00e5ff',
                            boxShadow: '0 0 10px rgba(0, 229, 255, 0.5)',
                            zIndex: 1
                          }}
                        />
                        <Typography variant="subtitle2" sx={{ color: '#00e5ff', fontWeight: 600, fontSize: '0.85rem' }}>
                          {item.period}
                        </Typography>
                        <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 700, mt: 0.2 }}>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.2, fontSize: '0.9rem' }}>
                          {item.org}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
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
