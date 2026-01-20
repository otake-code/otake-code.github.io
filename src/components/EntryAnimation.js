import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

const text = "Welcome to my portfolio";

const EntryAnimation = ({ onComplete }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [startScatter, setStartScatter] = useState(false);
  const [containerOpacity, setContainerOpacity] = useState(1);

  // Typing effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayedText(text.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
        // Wait a bit before scattering
        setTimeout(() => {
          setStartScatter(true);
        }, 1000);
      }
    }, 100); // Typing speed

    return () => clearInterval(interval);
  }, []);

  // Completion handler
  useEffect(() => {
    if (startScatter) {
      // Allow time for scatter animation (e.g. 1s) then fade out container
      setTimeout(() => {
        setContainerOpacity(0);
        // Wait for fade out then complete
        setTimeout(() => {
            if (onComplete) onComplete();
        }, 500); // Shorter fade out wait
      }, 900); // Adjusted wait before fading out container
    }
  }, [startScatter, onComplete]);

  // Helper to generate random scatter values
  // Helper to generate random scatter values using window dimensions
  const randomScatter = () => ({
    x: (Math.random() - 0.5) * window.innerWidth * 1.5, // 1.5x width to ensure off-screen
    y: (Math.random() - 0.5) * window.innerHeight * 1.5,
    rotate: (Math.random() - 0.5) * 720,
    scale: Math.random() * 1.5 + 0.5,
    opacity: 0,
    opacity: 0,
    transition: { duration: 1.0, ease: "easeOut" } // Faster scatter
  });

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#0a1929', // Match main theme background
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: containerOpacity,
        transition: 'opacity 0.8s ease',
        pointerEvents: containerOpacity === 0 ? 'none' : 'auto',
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: '#00e5ff', // Cyan color
          textShadow: '0 0 20px rgba(0, 229, 255, 0.5)', // Glow effect
          fontWeight: 800,
          display: 'flex',
          overflow: 'visible', // Allow scatter outside
          whiteSpace: 'pre',
          fontFamily: "'Outfit', sans-serif", // Modern font
          letterSpacing: '0.05em',
        }}
      >
        {/* Render characters. If scattering, render all chars individually with scatter animation.
            If typing, render just the string with a cursor. */}

        {!startScatter ? (
          <>
            {displayedText}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              style={{ display: 'inline-block', width: '10px', backgroundColor: '#00e5ff', marginLeft: '5px' }}
            />
          </>
        ) : (
          text.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ x: 0, y: 0, opacity: 1 }}
              animate={randomScatter()}
              style={{ display: 'inline-block' }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))
        )}
      </Typography>
    </Box>
  );
};

export default EntryAnimation;
