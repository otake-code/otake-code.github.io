// src/components/Publications.js
import React from 'react';
import { Box, Typography, Container, Paper, Link, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const publications = [
  {
    title: '特定ドメインにおける視覚言語モデルによる欠陥検出精度評価',
    authors: (
      <>
        <Typography component="span" sx={{ fontWeight: 'bold', color: '#00e5ff' }}>
          岡田壮央
        </Typography>
        ，大澤紘作，尾下拓未，上野詩翔，林良和，中塚俊介，加藤 邦人，相澤宏旭
      </>
    ),
    venue: '第31回画像センシングシンポジウム SSII2025, IS3-14',
    year: '2025.5.30',
    link: 'https://pub.confit.atlas.jp/ja/event/ssii2025/presentation/IS3-14',
  },
];

const Publications = () => {
  return (
    <Box
      id="publications"
      sx={{
        py: 12,
        position: 'relative',
        zIndex: 1
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
              background: 'linear-gradient(45deg, #00e5ff 30%, #7c4dff 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 8,
              fontWeight: 800
            }}
          >
            Publications
          </Typography>
        </motion.div>

        <Box sx={{ position: 'relative' }}>
          {/* Vertical line for timeline effect */}
          <Box
            sx={{
              position: 'absolute',
              left: { xs: 20, md: '50%' },
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'linear-gradient(180deg, rgba(0,229,255,0) 0%, rgba(0,229,255,0.5) 15%, rgba(124,77,255,0.5) 85%, rgba(124,77,255,0) 100%)',
              transform: { md: 'translateX(-50%)' }
            }}
          />

          {publications.map((pub, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  mb: 6,
                  ml: { xs: 8, md: 0 }, // Mobile: shift right of timeline
                  position: 'relative',
                  background: 'rgba(10, 25, 41, 0.6)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 4,
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '4px',
                    height: '100%',
                    background: 'linear-gradient(180deg, #00e5ff, #7c4dff)'
                  },
                  // Timeline dot
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: '50%',
                    left: { xs: '-51px', md: idx % 2 === 0 ? 'auto' : '-65px' },
                    right: { xs: 'auto', md: idx % 2 === 0 ? '-65px' : 'auto' },
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    background: '#0a1929',
                    border: '3px solid #00e5ff',
                    transform: 'translateY(-50%)',
                    zIndex: 2,
                    boxShadow: '0 0 10px rgba(0, 229, 255, 0.5)'
                  }
                }}
              >
                <Typography variant="h6" gutterBottom sx={{ color: 'white', fontWeight: 700 }}>
                  {pub.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 1 }}>
                  {pub.authors}
                </Typography>
                <Typography variant="caption" display="block" sx={{ color: 'rgba(255,255,255,0.5)', mb: 2 }}>
                  {pub.venue}, {pub.year}
                </Typography>

                {pub.link && (
                  <Link
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      color: '#00e5ff',
                      textDecoration: 'none',
                      fontWeight: 600,
                      '&:hover': {
                        textDecoration: 'underline',
                        color: '#7c4dff'
                      }
                    }}
                  >
                    View Paper <OpenInNewIcon sx={{ fontSize: 16, ml: 0.5 }} />
                  </Link>
                )}
              </Paper>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Publications;
