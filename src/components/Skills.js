// src/components/Skills.js
import React from 'react';
import { Box, Typography, Grid, Divider } from '@mui/material';
import { motion } from 'framer-motion';

// skillsData の中で、icon プロパティに自作アイコンを指定
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
            sx={{ width: 28, height: 28 }}
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
            sx={{ width: 28, height: 28 }}
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
            sx={{ width: 28, height: 28 }}
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
            sx={{ width: 28, height: 28 }}
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
            sx={{ width: 28, height: 28 }}
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
            sx={{ width: 28, height: 28 }}
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
            sx={{ width: 28, height: 28 }}
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
            sx={{ width: 28, height: 28 }}
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
            sx={{ width: 28, height: 28 }}
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
            sx={{ width: 28, height: 28 }}
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
            sx={{ width: 28, height: 28 }}
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
            sx={{ width: 28, height: 28 }}
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
            sx={{ width: 28, height: 28 }}
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
            sx={{ width: 28, height: 28 }}
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
            sx={{ width: 28, height: 28 }}
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
            sx={{ width: 28, height: 28 }}
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
            sx={{ width: 28, height: 28 }}
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
              width: 28,
              height: 28,
              objectFit: 'contain',   // 縦横比を保って枠内に収める
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
            sx={{ width: 28, height: 28 }}
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
            sx={{ width: 28, height: 28 }}
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
            sx={{ width: 28, height: 28 }}
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
            sx={{ width: 28, height: 28 }}
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
        minHeight: '100vh',       // ← 画面１枚分の高さを確保
        py: 6,
        px: 2,
        backgroundColor: '#f9f9f9',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h3" align="center" gutterBottom>
          My Skills
        </Typography>
      </motion.div>

      <Grid container spacing={4} sx={{ mt: 3 }}>
        {skillsData.map((section, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                {section.category}
              </Typography>
              <Divider sx={{ mb: 1 }} />
              {section.items.map((skill, sidx) => (
                <Box
                  key={sidx}
                  sx={{
                    mb: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  {/* 自作アイコンの表示 */}
                  <Box>{skill.icon}</Box>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'medium' }}>
                      {skill.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {skill.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
