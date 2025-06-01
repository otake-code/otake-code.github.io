// src/components/Contact.js
import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // 横長画面判定用のアスペクト比閾値
  const ASPECT_THRESHOLD = 16 / 9;
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

  // セクションの最低高さ（コンテンツ量に応じて自然に伸びます）
  const sectionMinHeight = isMobile ? '50vh' : '70vh';

  return (
    <Box id="contact" sx={{ width: '100%', backgroundColor: '#fff' }}>
      {/* ─────────────────────────────────────────────
          ① セクションタイトル（白背景）
      ───────────────────────────────────────────── */}
      <Box
        sx={{
          backgroundColor: '#ffffff',
          py: 6,
          px: 2,
          textAlign: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h3" gutterBottom>
            Contact Me
          </Typography>
        </motion.div>
      </Box>

      {/* ─────────────────────────────────────────────
          ② パララックス風背景＋オーバーレイ＋アイコン
      ───────────────────────────────────────────── */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          pt: 4,
          pb: 8,
          overflow: 'hidden',
          // パララックス風の背景
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/parallax-mountain.png)`,
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center top',
          backgroundSize: isMobile
            ? 'auto 100%'      // モバイルなら縦100%固定
            : isWide
            ? '100% auto'     // 横長画面なら横100%固定
            : 'auto 100%',     // それ以外は縦100%固定
          py: 6,
          px: 2,
          textAlign: 'center',
        }}
      >
        {/* 白半透明オーバーレイ */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            zIndex: 1,
          }}
        />

        {/* アイコンを表示するコンテンツ領域 */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            textAlign: 'center',
            px: 2,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '2rem' }}
          >
            <Box display="flex" alignItems="center" justifyContent="center" gap={4}>
              <IconButton
                component="a"
                href="mailto:okada@cv.info.gifu-u.ac.jp"
                color="inherit"
                sx={{ fontSize: 60 }}
              >
                <EmailIcon sx={{ fontSize: 60 }} />
              </IconButton>
              <IconButton
                component="a"
                href="https://github.com/otake-code"
                target="_blank"
                rel="noopener"
                color="inherit"
                sx={{ fontSize: 60 }}
              >
                <GitHubIcon sx={{ fontSize: 60 }} />
              </IconButton>
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Typography variant="subtitle1" color="text.secondary">
              メールまたはGitHubからお気軽にご連絡ください。
            </Typography>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
