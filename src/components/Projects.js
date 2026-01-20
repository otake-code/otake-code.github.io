// src/components/Projects.js
import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia, CardActions, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const projects = [
  {
    title: 'カフェ提案アプリ',
    description: '生成AIを用いて個人の好みに合わせたカフェを提案。\nHackAichi 2024で審査員賞を受賞🏆',

    image: `${process.env.PUBLIC_URL}/images/project-cafe.png`,
    link: 'https://github.com/otake-code/HackAichi',
    tags: ['Python','React', 'OpenAI API', 'Google Maps API']
  },
  {
    title: '高齢者検知システム',
    description: '徘徊高齢者が外出しようとしたら顔を検知して、ドアを施錠＆家族に通知を実行',
    image: `${process.env.PUBLIC_URL}/images/project-elder.png`,
    link: 'https://github.com/otake-code/facial-recognition-system',
    tags: ['Python', 'OpenCV', 'Raspberry Pi']
  },
];

const Projects = () => {
  return (
    <Box
      id="projects"
      sx={{
        py: 12,
        position: 'relative'
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{
              background: 'linear-gradient(45deg, #fff 30%, #b0b8c4 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 8
            }}
          >
            Projects
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {projects.map((proj, idx) => (
            <Grid item xs={12} md={6} key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    borderRadius: 4,
                    overflow: 'hidden',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                      border: '1px solid rgba(0, 229, 255, 0.3)',
                    }
                  }}
                >
                  <Box sx={{ overflow: 'hidden', position: 'relative' }}>
                    <CardMedia
                      component="img"
                      height="240"
                      image={proj.image}
                      alt={proj.title}
                      sx={{
                        transition: 'transform 0.5s ease',
                        '&:hover': {
                          transform: 'scale(1.05)'
                        }
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(to top, rgba(10,25,41,0.9) 0%, rgba(0,0,0,0) 100%)',
                        pointerEvents: 'none'
                      }}
                    />
                  </Box>

                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography variant="h5" gutterBottom fontWeight="bold" color="white">
                      {proj.title}
                    </Typography>
                    <Box sx={{ mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      {proj.tags && proj.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(0, 229, 255, 0.1)',
                            color: '#00e5ff',
                            border: '1px solid rgba(0, 229, 255, 0.2)'
                          }}
                        />
                      ))}
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, whiteSpace: 'pre-line' }}>
                      {proj.description}
                    </Typography>
                  </CardContent>

                  <CardActions sx={{ p: 3, pt: 0 }}>
                    <Button
                      variant="contained"
                      startIcon={<GitHubIcon />}
                      href={proj.link}
                      target="_blank"
                      fullWidth
                    >
                      View Code
                    </Button>
                    {/* <Button
                      variant="outlined"
                      startIcon={<LaunchIcon />}
                      fullWidth
                    >
                      Demo
                    </Button> */}
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
