import React from 'react';
import { Container, Typography, Box, Avatar, Grid } from '@mui/material';

const skills = [
  { name: 'React', image: `${process.env.PUBLIC_URL}/images/react.png` },
  { name: 'JavaScript', image: `${process.env.PUBLIC_URL}/images/javascript.png` },
  { name: 'HTML', image: `${process.env.PUBLIC_URL}/images/html.png` },
  { name: 'CSS', image: `${process.env.PUBLIC_URL}/images/css.png` },
  { name: 'Python', image: `${process.env.PUBLIC_URL}/images/python.png` },
  { name: 'C', image: `${process.env.PUBLIC_URL}/images/c.png` },
  { name: 'Java', image: `${process.env.PUBLIC_URL}/images/java.png` },
  { name: 'AndroidStudio', image: `${process.env.PUBLIC_URL}/images/androidstudio.png` },
];

function Skills() {
  return (
    <Container id="skills" sx={{ textAlign: 'center' }}>
      <Box my={4} minHeight="50vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Typography variant="h3" gutterBottom>
          My Skills
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {skills.map((skill) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={skill.name}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Avatar
                  src={skill.image}
                  alt={skill.name}
                  sx={{ width: 100, height: 100, marginBottom: '8px' }}
                />
                <Typography variant="body1">{skill.name}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Skills;
