// src/components/Publications.js
import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  Divider,
  Link,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';

const publications = [
  {
    title: '特定ドメインにおける視覚言語モデルによる欠陥検出精度評価',
    authors: (
      <>
        <Typography component="span" sx={{ fontWeight: 'bold' }}>
          岡田壮央
        </Typography>
        ，大澤紘作，尾下拓未，上野詩翔，林良和，中塚俊介，加藤 邦人，相澤宏旭
      </>
    ),
    venue: '第31回画像センシングシンポジウム SSII2025, IS3-14',
    year: '2025.5.30',
    link: 'https://pub.confit.atlas.jp/ja/event/ssii2025',
  },
  // 必要に応じて同じカテゴリの論文を追加
];

const Publications = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // 「横長画面かどうか」を判定するための閾値（16:9）
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

  return (
    <Box id="publications" sx={{ width: '100%', backgroundColor: '#fff' }}>
      {/* ─────────────────────────────────────────────
          ① タイトル部分（白背景）
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h3" align="center" gutterBottom>
            Publications
          </Typography>
          <Divider sx={{ mb: 3, mx: 'auto', width: 100 }} />
        </motion.div>
      </Box>

      {/* ─────────────────────────────────────────────
          ② パララックス風背景とオーバーレイ＋リストコンテンツ
             ・minHeightは外して内容に合わせて自然に伸びるようにする
             ・オーバーレイは背景の上にだけ置き、リスト部分は下に自然に貼り付ける
      ───────────────────────────────────────────── */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          // minHeight を削除し、padding だけ残す
          // padding で上下に余白を確保（必要な分だけ）
          pt: 4,
          pb: 8,
          px: 2,
          overflow: 'hidden',
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/parallax-mountain.png)`,
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center top',
          backgroundSize: isMobile
            ? 'auto 100%'   // モバイルでは縦100%
            : isWide
            ? '100% auto'  // 横長時は横100%
            : 'auto 100%',  // それ以外は縦100%
        }}
      >
        {/* 白半透明オーバーレイ（背景をやわらかく） */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            // height を指定せず、親の padding+内容分で伸びるので white-overlay も自動伸長
            height: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            zIndex: 1,
          }}
        />

        {/* リストコンテンツを重ねる */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            maxWidth: 800,
            mx: 'auto',
          }}
        >
          {/* カテゴリ見出し：国内学会 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
              国内学会
            </Typography>
          </motion.div>

          {/* 論文リスト */}
          <List>
            {publications.map((pub, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                <ListItem
                  alignItems="flex-start"
                  sx={{
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    py: 1,
                  }}
                >
                  {/* 論文タイトル */}
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {pub.title}
                  </Typography>

                  {/* 著者一覧 */}
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                    {pub.authors}
                  </Typography>

                  {/* 会議＋日付 */}
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                    {pub.venue}，{pub.year}
                  </Typography>

                  {/* リンク（あれば表示） */}
                  {pub.link && (
                    <Link
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ mt: 1, display: 'block' }}
                    >
                      Link
                    </Link>
                  )}
                </ListItem>
                {idx < publications.length - 1 && <Divider sx={{ my: 2 }} />}
              </motion.div>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Publications;
