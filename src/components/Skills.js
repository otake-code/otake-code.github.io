// src/components/Skills.js
import React from 'react';
import { Box, Typography, Grid, Container, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: 'Front-End',
    items: [
      {
        name: 'HTML',
        description: '各アプリ・サイトのUI部分の実装に使用',
        icon: (
          <Box
            component="img"
            src={`${process.env.PUBLIC_URL}/icons/html.svg`}
            alt="HTML Icon"
            sx={{ width: 40, height: 40 }}
          />
        ),
      },
      {
        name: 'CSS',
        description: '各アプリ・サイトのUI部分の実装に使用',
        icon: (
          <Box
            component="img"
            src={`${process.env.PUBLIC_URL}/icons/css.svg`}
            alt="CSS Icon"
            sx={{ width: 40, height: 40 }}
          />
        ),
      },
      {
        name: 'JavaScript',
        description: '各アプリ・サイトのUI部分の実装に使用',
        icon: (
          <Box
            component="img"
            src={`${process.env.PUBLIC_URL}/icons/javascript.svg`}
            alt="JavaScript Icon"
            sx={{ width: 40, height: 40 }}
          />
        ),
      },
      {
        name: 'React',
        description: 'WEBアプリや本ホームページのUI実装',
        icon: (
          <Box
            component="img"
            src={`${process.env.PUBLIC_URL}/icons/react.svg`}
            alt="React Icon"
            sx={{ width: 40, height: 40 }}
          />
        ),
      },
    ],
  },
  {
    category: 'Back-End',
    items: [
      {
        name: 'C',
        description:
          '大学の講義で学習。PIC16F88による電子ルーレットや音声制御車の制作に使用',
        icon: (
          <Box
            component="img"
            src={`${process.env.PUBLIC_URL}/icons/c.svg`}
            alt="C Icon"
            sx={{ width: 40, height: 40 }}
          />
        ),
      },
      {
        name: 'C++',
        description: '大学の講義で学習。ポインタと構造体を用いた連結リスト作成に使用',
        icon: (
          <Box
            component="img"
            src={`${process.env.PUBLIC_URL}/icons/cpp.svg`}
            alt="C++ Icon"
            sx={{ width: 40, height: 40 }}
          />
        ),
      },
      {
        name: 'Java',
        description: 'ゲーム開発、Androidアプリ開発に使用',
        icon: (
          <Box
            component="img"
            src={`${process.env.PUBLIC_URL}/icons/java.svg`}
            alt="Java Icon"
            sx={{ width: 40, height: 40 }}
          />
        ),
      },
      {
        name: 'Android',
        description: 'IDE に Android Studio、言語に Java を使用してAndroidアプリを開発',
        icon: (
          <Box
            component="img"
            src={`${process.env.PUBLIC_URL}/icons/android.svg`}
            alt="Android Icon"
            sx={{ width: 40, height: 40 }}
          />
        ),
      },
      {
        name: 'Python',
        description: '機械学習の研究や制作物のバックエンドとして最も多く使用',
        icon: (
          <Box
            component="img"
            src={`${process.env.PUBLIC_URL}/icons/python.svg`}
            alt="Python Icon"
            sx={{ width: 40, height: 40 }}
          />
        ),
      },
      {
        name: 'PHP',
        description: '大学の講義でデータベースの作成・操作を学習',
        icon: (
          <Box
            component="img"
            src={`${process.env.PUBLIC_URL}/icons/php.svg`}
            alt="PHP Icon"
            sx={{ width: 40, height: 40 }}
          />
        ),
      },
    ],
  },
  {
    category: 'Database',
    items: [
      {
        name: 'SQLite',
        description: '大学の講義で使用。軽量データベースの基礎を学習。',
        icon: (
          <Box
            component="img"
            src={`${process.env.PUBLIC_URL}/icons/sqlite.svg`}
            alt="SQLite Icon"
            sx={{ width: 40, height: 40 }}
          />
        ),
      },
    ],
  },
  {
    category: 'Cloud',
    items: [
      {
        name: 'GCP',
        description: 'カフェ提案アプリのサーバーとして利用',
        icon: (
          <Box
            component="img"
            src={`${process.env.PUBLIC_URL}/icons/gcp.svg`}
            alt="GCP Icon"
            sx={{ width: 40, height: 40 }}
          />
        ),
      },
    ],
  },
  {
    category: 'Research Tool',
    items: [
      {
        name: 'PyTorch',
        description: 'Deep Learning の実装で使用',
        icon: (
          <Box
            component="img"
            src={`${process.env.PUBLIC_URL}/icons/pytorch.svg`}
            alt="PyTorch Icon"
            sx={{ width: 40, height: 40 }}
          />
        ),
      },
      {
        name: 'Jupyter Notebook',
        description: '対話型環境で画像やグラフの可視化に使用',
        icon: (
          <Box
            component="img"
            src={`${process.env.PUBLIC_URL}/icons/jupyter.svg`}
            alt="Jupyter Notebook Icon"
            sx={{ width: 40, height: 40 }}
          />
        ),
      },
      {
        name: 'Matplotlib',
        description: '実験結果のグラフ作成時に使用',
        icon: (
          <Box
            component="img"
            src={`${process.env.PUBLIC_URL}/icons/matplotlib.svg`}
            alt="Matplotlib Icon"
            sx={{ width: 40, height: 40 }}
          />
        ),
      },
      {
        name: 'pandas',
        description: 'CSVデータを解析・整理するために使用',
        icon: (
          <Box
            component="img"
            src={`${process.env.PUBLIC_URL}/icons/pandas.svg`}
            alt="pandas Icon"
            sx={{ width: 40, height: 40 }}
          />
        ),
      },
      {
        name: 'Hugging Face Transformers',
        description: '自然言語処理モデルの利用・実装に使用',
        icon: (
          <Box
            component="img"
            src={`${process.env.PUBLIC_URL}/icons/huggingface.svg`}
            alt="Transformers Icon"
            sx={{ width: 40, height: 40 }}
          />
        ),
      },
    ],
  },
  {
    category: 'Infrastructure',
    items: [
      {
        name: 'Docker',
        description: '研究環境や GPU 実行用の仮想環境として常用',
        icon: (
          <Box
            component="img"
            src={`${process.env.PUBLIC_URL}/icons/docker.svg`}
            alt="Docker Icon"
            sx={{ width: 40, height: 40 }}
          />
        ),
      },
      {
        name: 'Slurm',
        description: '研究室で導入されたジョブ管理ツールとして常用',
        icon: (
          <Box
            component="img"
            src={`${process.env.PUBLIC_URL}/icons/slurm.png`}
            alt="Slurm Icon"
            sx={{
              width: 40,
              height: 40,
              objectFit: 'contain',
            }}
          />
        ),
      },
      {
        name: 'Linux',
        description: 'サーバー運用・開発環境構築として常用',
        icon: (
          <Box
            component="img"
            src={`${process.env.PUBLIC_URL}/icons/linux.svg`}
            alt="Linux Icon"
            sx={{ width: 40, height: 40 }}
          />
        ),
      },
      {
        name: 'Bash',
        description: 'タスク自動化や環境構築スクリプト作成に使用',
        icon: (
          <Box
            component="img"
            src={`${process.env.PUBLIC_URL}/icons/bash.png`}
            alt="bash Icon"
            sx={{ width: 40, height: 40 }}
          />
        ),
      },
    ],
  },
  {
    category: 'Tool',
    items: [
      {
        name: 'Git',
        description: 'チーム開発時のバージョン管理に使用',
        icon: (
          <Box
            component="img"
            src={`${process.env.PUBLIC_URL}/icons/git.svg`}
            alt="Git Icon"
            sx={{ width: 40, height: 40 }}
          />
        ),
      },
      {
        name: 'GitHub',
        description: 'バージョン管理・バックアップ・デプロイ先として使用',
        icon: (
          <Box
            component="img"
            src={`${process.env.PUBLIC_URL}/icons/github.svg`}
            alt="GitHub Icon"
            sx={{ width: 40, height: 40 }}
          />
        ),
      },
    ],
  },
];

const Skills = () => {
  return (
    <Box
      id="skills"
      sx={{
        py: 12,
        position: 'relative',
        background: 'linear-gradient(180deg, rgba(10,25,41,0) 0%, rgba(10,25,41,0.5) 100%)',
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
            My Skills
          </Typography>
        </motion.div>

        {skillsData.map((section, idx) => (
          <Box key={idx} sx={{ mb: 8 }}>
            <motion.div
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Typography
                variant="h4"
                sx={{
                  mb: 3,
                  borderLeft: '4px solid #00e5ff',
                  pl: 2,
                  color: 'text.secondary',
                  fontWeight: 600
                }}
              >
                {section.category}
              </Typography>
            </motion.div>

            <Grid container spacing={3}>
              {section.items.map((skill, sidx) => (
                <Grid item xs={12} sm={6} md={3} key={sidx}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 + sidx * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Paper
                      sx={{
                        p: 3,
                        height: '100%',
                        background: 'rgba(255, 255, 255, 0.03)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        borderRadius: 3,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: 'rgba(255, 255, 255, 0.08)',
                          border: '1px solid rgba(0, 229, 255, 0.3)',
                          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)',
                        }
                      }}
                    >
                      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                         {/* Render the icon Box directly */}
                         <Box sx={{ mb: 2 }}>
                           {skill.icon}
                         </Box>
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                          {skill.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {skill.description}
                        </Typography>
                      </Box>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default Skills;
