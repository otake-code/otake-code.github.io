// src/components/SlideShow.js
import React, { useState, useEffect, useRef } from 'react';
import { Box, IconButton } from '@mui/material';

/**
 * SlideShow コンポーネント
 * Props:
 *  - images: 画像のURL配列
 *  - intervalTime: 切り替え間隔 (ミリ秒, デフォルト 4000)
 */
const SlideShow = ({ images = [], intervalTime = 4000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  // 自動切り替えタイマーセット
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, intervalTime);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex, images.length, intervalTime]);

  // ドットクリックで任意スライドへ
  const handleDotClick = (index) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setCurrentIndex(index);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}
    >
      {images.map((src, index) => (
        <Box
          key={index}
          component="img"
          src={src}
          alt={`slide-${index + 1}`}
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',          // 横幅に合わせる
            height: '100%',         // 高さも合わせる
            objectFit: 'cover',     // cover にすることで、横画面に収まるよう上下を切り抜く
            transition: 'opacity 1s ease-in-out',
            opacity: index === currentIndex ? 1 : 0,
          }}
        />
      ))}

      {/* ドット（ページネーション） */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '1.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '0.5rem',
          zIndex: 10,
        }}
      >
        {images.map((_, index) => (
          <IconButton
            key={index}
            size="small"
            onClick={() => handleDotClick(index)}
            sx={{
              width: '12px',
              height: '12px',
              padding: 0,
              borderRadius: '50%',
              backgroundColor:
                index === currentIndex ? 'white' : 'rgba(255, 255, 255, 0.5)',
              '&:hover': {
                backgroundColor:
                  index === currentIndex ? 'white' : 'rgba(255, 255, 255, 0.7)',
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default SlideShow;
