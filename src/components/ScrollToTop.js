import React from 'react';
import { useScrollTrigger, Zoom, Fab, Box } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function ScrollToTop(props) {
  const { window: windowProp } = props;
  const trigger = useScrollTrigger({
    target: windowProp ? windowProp() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 32, right: 32, zIndex: 99 }}
      >
        <Fab
            size="medium"
            aria-label="scroll back to top"
            sx={{
                background: 'linear-gradient(45deg, #00e5ff 30%, #7c4dff 90%)',
                color: 'white',
                '&:hover': {
                     background: 'linear-gradient(45deg, #00b8cc 30%, #6a42db 90%)',
                }
            }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Box>
    </Zoom>
  );
}

export default ScrollToTop;
