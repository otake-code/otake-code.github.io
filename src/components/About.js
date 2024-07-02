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
        alignItems: 'center',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'black',
        textAlign: 'left',
        padding: '2rem',
      }}
    >
      <Typography variant="h3" gutterBottom>
        About Me
      </Typography>
      <Box
        component="img"
        sx={{
          marginTop: '2rem',
          width: '150px',
          height: '150px',
          borderRadius: '50%', // Makes the image circular
          objectFit: 'cover',
        }}
        alt="Self-portrait"
        src={`${process.env.PUBLIC_URL}/images/image1.png`}
      />
      <Typography variant="h6">
        <br />
        情報系専攻の岡田です。<br />
        Vision＆Languageの研究に取り組んでいます。<br />
        趣味は写真撮影と旅行です。<br />
      </Typography>
    </Box>
  );
};

export default About;
