// TypingEffect.js
import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    if (text && typeof text === 'string' && text.length > 0) {
      let currentIndex = 0;
      const interval = setInterval(() => {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        currentIndex++;
        if (currentIndex === text.length) {
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval);
    }
  }, [text, speed]);

  return (
    <div style={{ color: 'black', fontSize: '32px', textAlign: 'center', marginTop: '50vh', transform: 'translateY(-50%)' }}>
      {displayText}
    </div>
  );
};

export default TypingEffect;
