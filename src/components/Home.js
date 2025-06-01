// src/components/Home.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

import SlideShow from './SlideShow';

function Home() {
  // スライドショーで使う画像（縦長・横長混在可）
  const slideImages = [
    `${process.env.PUBLIC_URL}/images/slide1.jpg`,
    `${process.env.PUBLIC_URL}/images/slide2.jpg`,
    `${process.env.PUBLIC_URL}/images/slide3.jpg`,
    `${process.env.PUBLIC_URL}/images/slide4.jpg`,
  ];

  return (
    <Box
      id="home"
      sx={{
        position: 'relative',
        width: '100vw',
        height: {
          xs: '100vh',  // スマホでは全画面表示
          sm: '90vh',
          md: '80vh',   // PCやタブレットでは少し余白を残す
        },
        overflow: 'hidden',
      }}
    >
      {/* 背景スライドショー */}
      <SlideShow images={slideImages} intervalTime={4000} />

      {/* 画像上に黒半透明オーバーレイ */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
        }}
      />

      {/* オーバーレイの上にテキストをセンタリング */}
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
          zIndex: 5, // ドットより前面
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}               // 初期は透明
          animate={{ opacity: 1 }}               // 徐々に不透明へ
          transition={{ duration: 1.2, ease: 'easeInOut' }} // フェードインに1.2秒
          style={{ width: '90%' }}
        >
          <Typography
            variant="h3"
            sx={{
              color: 'white',
              fontWeight: 'bold',
              textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)',
              lineHeight: 1.2,
              fontSize: {
                xs: '2rem',
                sm: '2.5rem',
                md: '3.5rem',
              },
            }}
          >
            Welcome to
          </Typography>
          <Typography
            variant="h1"
            sx={{
              color: 'white',
              fontWeight: 900,
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
              lineHeight: 1.1,
              fontSize: {
                xs: '2.5rem',
                sm: '3.5rem',
                md: '5rem',
              },
              mt: 1,
            }}
          >
            My Homepage
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'white',
              mt: 2,
              fontSize: {
                xs: '0.9rem',
                sm: '1rem',
                md: '1.25rem',
              },
              opacity: 0.9,
            }}
          >
            I&apos;m otake-code, a student based in Gifu Univ.
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
}

export default Home;
