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
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

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
          '& .MuiBackdrop-root': {
            backgroundColor: 'rgba(0, 0, 0, 0.8)', // Darker backdrop
          },
          '& .MuiPaper-root': {
            bgcolor: 'rgba(10, 25, 41, 0.9)',   // Premium Dark Blue
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#fff',
            borderRadius: 3,
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
          },
        }}
      >
        {/* ヘッダー部分 */}
        <DialogTitle
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            p: '16px 32px',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <CameraAltIcon sx={{ color: '#00e5ff' }} />
              <Typography variant="h5" sx={{ fontWeight: 800, letterSpacing: 1 }}>
                GALLERY
              </Typography>
            </Box>
            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)', mt: 0.5, letterSpacing: 0.5 }}>
              Photography by <Box component="span" sx={{ color: '#00e5ff' }}>Okada Takeo</Box> — All Rights Reserved.
            </Typography>
          </Box>

          <IconButton
            onClick={onClose}
            sx={{
              color: 'rgba(255,255,255,0.7)',
              '&:hover': { color: '#fff', bgcolor: 'rgba(255,255,255,0.1)' }
            }}
          >
            <CloseIcon fontSize="large" />
          </IconButton>
        </DialogTitle>

        {/* サムネイル一覧 */}
        <DialogContent
          sx={{
            pt: 4,
            pb: 4,
            px: { xs: 2, md: 4 },
            // Scrollbar styling for webkit
            '&::-webkit-scrollbar': {
              width: '8px',
            },
            '&::-webkit-scrollbar-track': {
              background: 'rgba(255,255,255,0.05)',
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'rgba(255,255,255,0.2)',
              borderRadius: '4px',
            },
            '&::-webkit-scrollbar-thumb:hover': {
              background: 'rgba(255,255,255,0.3)',
            },
          }}
        >
          <ImageList cols={cols} gap={16}>
            {images.map((src, idx) => (
              <ImageListItem key={idx}>
                <Box
                   sx={{
                     position: 'relative',
                     overflow: 'hidden',
                     borderRadius: 2,
                     cursor: 'pointer',
                     aspectRatio: '1/1', // Square tiles
                     '&:hover img': {
                       transform: 'scale(1.1)',
                     },
                     '&:hover .overlay': {
                        opacity: 1
                     }
                   }}
                   onClick={() => setSelectedImage(src)}
                >
                  <img
                    src={src}
                    alt={`Gallery ${idx}`}
                    loading="lazy"
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)', // Smooth zoom
                    }}
                  />
                  {/* Subtle overlay on hover */}
                  <Box
                    className="overlay"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      bgcolor: 'rgba(0, 229, 255, 0.1)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      pointerEvents: 'none'
                    }}
                  />
                </Box>
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
              bgcolor: 'transparent',
              boxShadow: 'none',
              overflow: 'hidden'
            },
            '& .MuiBackdrop-root': {
              backgroundColor: 'rgba(0, 0, 0, 0.95)',
              backdropFilter: 'blur(10px)'
            },
          }}
        >
          <DialogContent
            sx={{
              position: 'relative',
              p: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
              overflow: 'hidden',
            }}
            onClick={handleClosePreview} // Close on background click
          >
            <IconButton
              onClick={handleClosePreview}
              sx={{
                position: 'absolute',
                top: 24,
                right: 24,
                color: '#fff',
                bgcolor: 'rgba(255,255,255,0.1)',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' },
                zIndex: 10,
              }}
            >
              <CloseIcon fontSize="large" />
            </IconButton>

            <Box
              component="img"
              src={selectedImage}
              alt="Preview"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              onClick={(e) => e.stopPropagation()} // Prevent close when clicking image
              sx={{
                maxWidth: '90vw',
                maxHeight: '85vh',
                objectFit: 'contain',
                borderRadius: 2,
                boxShadow: '0 0 50px rgba(0,0,0,0.5)',
              }}
            />

            <Typography
              variant="caption"
              sx={{
                mt: 2,
                color: 'rgba(255,255,255,0.6)',
                letterSpacing: 1
              }}
            >
              © Okada Takeo
            </Typography>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}

export default MyGallery;
