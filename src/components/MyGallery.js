// src/components/MyGallery.js
import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  useMediaQuery,
  useTheme,
  ImageList,
  ImageListItem,
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

/**
 * props:
 *   images: string[]     // サムネイルに使う画像のURLリスト
 *   onClose: () => void  // ギャラリーモーダルを閉じるコールバック
 */
function MyGallery({ images, onClose }) {
  const theme = useTheme();
  // 幅が sm 以下なら cols=2, md 以下なら cols=3, それ以上なら cols=4
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));    // sm 以下
  const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md')); // sm〜md
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));     // md 以上

  let cols = 4;
  if (isXs) cols = 2;
  else if (isSm) cols = 3;
  else if (isMdUp) cols = 4;

  // 拡大表示用の state
  const [selectedImage, setSelectedImage] = React.useState(null);
  const handleClosePreview = () => setSelectedImage(null);

  return (
    <>
      {/* メインのギャラリーダイアログ */}
      <Dialog
        open={true}
        onClose={onClose}
        fullWidth
        maxWidth="lg"
        sx={{
          '& .MuiPaper-root': {
            bgcolor: '#fafafa',   // 明るい背景
            color: '#333',
          },
        }}
      >
        {/* ヘッダー部分 */}
        <DialogTitle
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff',
            color: '#333',
            p: '12px 24px',
          }}
        >
          <Box component="span" sx={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
            My Gallery
          </Box>
          <IconButton onClick={onClose} sx={{ color: '#333' }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        {/* サムネイル一覧 */}
        <DialogContent
          sx={{
            pt: 2,
            pb: 2,
            backgroundColor: '#fafafa',
          }}
        >
          <ImageList cols={cols} gap={8}>
            {images.map((src, idx) => (
              <ImageListItem key={idx}>
                <img
                  src={src}
                  alt={`Gallery ${idx}`}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: 4,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    cursor: 'pointer',
                  }}
                  onClick={() => setSelectedImage(src)}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </DialogContent>
      </Dialog>

      {/* 拡大プレビュー */}
      {selectedImage && (
        <Dialog
          open={true}
          onClose={handleClosePreview}
          maxWidth="xl"
          fullWidth
          sx={{
            '& .MuiPaper-root': {
              bgcolor: 'rgba(0, 0, 0, 0.95)',
            },
          }}
        >
          <DialogContent
            sx={{
              position: 'relative',
              p: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              overflow: 'hidden',
            }}
          >
            <IconButton
              onClick={handleClosePreview}
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                color: '#333',
                backgroundColor: 'rgba(255,255,255,0.8)',
                '&:hover': { backgroundColor: 'rgba(255,255,255,0.95)' },
                zIndex: 10,
              }}
            >
              <CloseIcon />
            </IconButton>
            <Box
              component="img"
              src={selectedImage}
              alt="Preview"
              sx={{
                maxWidth: '100%',
                maxHeight: '80vh',
                objectFit: 'contain',
                borderRadius: 1,
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
              }}
            />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}

export default MyGallery;
