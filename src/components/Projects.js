// src/components/Projects.js
import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Card,
  CardActions,
  Button,
  Grid,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'カフェ提案アプリ',
    description: '生成AIを用いて個人に合わせたカフェを提案\nHackAichi 2024で審査員賞を受賞🏆',
    image: `${process.env.PUBLIC_URL}/images/project-cafe.png`,
    link: 'https://github.com/gusuku-oknw/HackAichi',
  },
  {
    title: '高齢者検知システム',
    description: '高齢者が外出しようとしたら顔を検知して施錠＆通知を実行',
    image: `${process.env.PUBLIC_URL}/images/project-elder.png`,
    link: 'https://github.com/otake-code/facial-recognition-system',
  },
];

const Projects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // 横長画面かどうか判定するための閾値
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

  // セクションの最低高さ
  const minSectionHeight = isMobile ? '60vh' : '80vh';

  return (
    <Box id="projects" sx={{ width: '100%', mb: 0, backgroundColor: '#fff' }}>
      {/* タイトル部分（白背景） */}
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
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h3" align="center" gutterBottom>
            Projects
          </Typography>
        </motion.div>
      </Box>

      {/* パララックス背景＋オーバーレイ＋カード群 */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          pt: 4,
          pb: 8,
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/parallax-mountain.png)`,
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center top',
          backgroundSize: isMobile
            ? 'auto 100%'
            : isWide
            ? '100% auto'
            : 'auto 100%',
          overflow: 'hidden',
          py: 6,
          px: 2,
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

        {/* カード群 */}
        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{ position: 'relative', zIndex: 2, mt: 2 }}
        >
          {projects.map((proj, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                <Card
                  sx={{
                    position: 'relative',
                    height: 300,
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                  }}
                >
                  {/* カード背景画像 */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundImage: `url(${proj.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      filter: 'brightness(0.8)',
                    }}
                  />

                  {/* テキスト用オーバーレイ */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      color: 'white',
                      p: 2,
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {proj.title}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1, whiteSpace: 'pre-line' }}>
                      {proj.description}
                    </Typography>
                  </Box>

                  {/* 詳細ボタン */}
                  <CardActions
                    sx={{
                      position: 'absolute',
                      bottom: 8,
                      right: 8,
                      p: 0,
                    }}
                  >
                    <Button
                      size="small"
                      variant="contained"
                      color="primary"
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        color: 'black',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 1)',
                        },
                      }}
                    >
                      詳細を見る
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Projects;
