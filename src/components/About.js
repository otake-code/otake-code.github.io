import React from 'react';
import { Typography, Box } from '@mui/material';

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        minHeight: '50vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center', // Modified to align items to the center
        // backgroundImage: `url(${process.env.PUBLIC_URL}/images/simple.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'black',
        textAlign: 'left', // Modified to align text to the left
        padding: '2rem',
      }}
    >
      <Typography variant="h3" gutterBottom>
        About Me
      </Typography>
      <Typography variant="h6">
        情報系専攻の学生です。
        Vision＆Languageの研究に取り組んでいます。
      </Typography>
    </Box>
  );
};

export default About;
