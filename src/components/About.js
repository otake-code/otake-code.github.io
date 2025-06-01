// src/components/About.js
import React, { useState, useEffect } from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';

const ASPECT_THRESHOLD = 16 / 9;
const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isWide, setIsWide] = useState(false);

  useEffect(() => {
    const checkAspect = () => {
      const ratio = window.innerWidth / window.innerHeight;
      setIsWide(ratio >= ASPECT_THRESHOLD);
    };
    checkAspect();
    window.addEventListener('resize', checkAspect);
    return () => window.removeEventListener('resize', checkAspect);
  }, []);

  const sectionHeight = isMobile ? '50vh' : '70vh';

  return (
    <Box id="about" sx={{ width: '100%', mb: 0, backgroundColor: '#fff' }}>
      {/* ① タイトル部分（白背景） */}
      <Box
        sx={{
          backgroundColor: '#ffffff',
          py: 6,
          px: 2,
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            color: '#333',
            mb: 2,
            fontSize: {
              xs: '2rem',
              sm: '2.5rem',
              md: '3rem',
            },
          }}
        >
          About Me
        </Typography>
      </Box>

      {/* ② パララックス背景＋オーバーレイ＋コンテンツ */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: sectionHeight,
          overflow: 'hidden',
          backgroundColor: '#fffff', // ← 背景がグレーに見えてしまう場合、ここで白を指定
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/parallax-mountain.png)`,
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center top',
          backgroundSize: isMobile
            ? 'auto 100%'
            : isWide
            ? '100% auto'
            : 'auto 100%',
        }}
      >


        {/* 顔画像＋本文テキスト */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            px: 2,
            zIndex: 2,
          }}
        >
          {/* 顔画像 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: '1.5rem' }}
          >
            <Box
              component="img"
              src={`${process.env.PUBLIC_URL}/images/image1.png`}
              alt="My Avatar"
              sx={{
                width: { xs: 80, sm: 120, md: 160 },
                height: 'auto',
                borderRadius: '50%',
                border: '3px solid white',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
              }}
            />
          </motion.div>

          {/* 本文テキスト */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Typography
              variant="body1"
              sx={{
                maxWidth: 600,
                color: '#eee',
                fontSize: {
                  xs: '0.9rem',
                  sm: '1rem',
                  md: '1.125rem',
                },
                lineHeight: 1.6,
                whiteSpace: 'pre-line',
              }}
            >
              情報系専攻の岡田です．Vision＆Languageの研究に取り組んでいます．{'\n'}
              趣味は写真撮影と旅行です．
            </Typography>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
