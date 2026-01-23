import { createTheme, alpha } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00e5ff', // Cyan accent
      light: '#5ffff',
      dark: '#00b2cc',
    },
    secondary: {
      main: '#7c4dff', // Deep Purple accent
      light: '#b47cff',
      dark: '#3f1dcb',
    },
    background: {
      default: '#0a1929', // Deep dark blue
      paper: alpha('#132f4c', 0.8), // Glassmorphism base
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b8c4',
    },
  },
  typography: {
    fontFamily: '"Inter", "Noto Sans JP", sans-serif',
    h1: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 800,
      fontSize: '2.5rem',
      '@media (min-width:600px)': {
        fontSize: '4rem',
      },
    },
    h2: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 700,
      fontSize: '2rem',
      '@media (min-width:600px)': {
        fontSize: '2.75rem',
      },
    },
    h3: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 700,
      fontSize: '1.75rem',
      '@media (min-width:600px)': {
        fontSize: '2.25rem',
      },
    },
    h4: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    h5: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 600,
      fontSize: '1.25rem',
    },
    h6: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 600,
      fontSize: '1.1rem',
    },
    button: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '8px 20px',
          boxShadow: 'none',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 12px rgba(0, 229, 255, 0.4)',
          },
        },
        contained: {
          background: 'linear-gradient(45deg, #00e5ff 30%, #7c4dff 90%)',
          color: '#ffffff',
        },
        outlined: {
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(10px)',
          borderRadius: 16,
          backgroundImage: 'none',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(10, 25, 41, 0.7)',
          backdropFilter: 'blur(12px)',
          boxShadow: 'none',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        },
      },
    },
  },
});

export default theme;
