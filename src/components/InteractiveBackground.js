import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const InteractiveBackground = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation for the background light
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      // Center the blob on the cursor
      mouseX.set(e.clientX - 50);
      mouseY.set(e.clientY - 50);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile, mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        x,
        y,
        width: 100,
        height: 100,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0, 229, 255, 0.8) 0%, rgba(124, 77, 255, 0.6) 45%, rgba(0, 0, 0, 0) 70%)',
        filter: 'blur(50px)',
        pointerEvents: 'none',
        zIndex: 0,
        mixBlendMode: 'screen', // Blends nicely with the dark background
      }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0.7, 1.0, 0.7],
        scale: [1, 1.2, 0.95, 1],
        borderRadius: ["50%", "42%", "50%", "45%", "50%"]
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};

export default InteractiveBackground;
