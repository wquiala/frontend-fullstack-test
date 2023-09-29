import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import React from 'react';

interface ThemeProps {
  children: React.JSX.Element;
}

enum themePalet {
  BG = '#12181b',
  LIME = '#C8FA5F',
  FONT_GLOBAL = "'JetBrains Mono', monospace",
}
const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: themePalet.BG,
    },
    primary: { main: themePalet.LIME },
  },
  typography: {
    fontFamily: themePalet.FONT_GLOBAL,
  },
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          textTransform: 'none',
          textShadow: 'none',
          borderRadius: '0.5em',
        },
      },
    },
  },
});

export const ThemeConfig: React.FC<ThemeProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
