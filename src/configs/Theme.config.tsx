import { ThemeProvider, createTheme } from '@mui/material';

interface ThemeProps {
  children: React.JSX.Element;
}

enum themePalet {
  BG = '#12181b',
  BLUE = '#5f83fa',
  FONT_GLOBAL = "'JetBrains Mono', monospace",
}
const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#d3e3fd',
    },
    primary: { main: '#rgb(251, 250, 250)' },
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
        },
        disableTouchRipple: true,
      },
    },
    MuiListItemButton: {
      defaultProps: {
        disableTouchRipple: true,
      },
    },
    MuiMenuItem: {
      defaultProps: {
        disableTouchRipple: true,
      },
    },
    MuiIconButton: {
      defaultProps: {
        disableTouchRipple: true,
      },
    },
    MuiTextField: {
      defaultProps: {
        style: {
          padding: 0,
        },
      },
    },
  },
});

export const ThemeConfig: React.FC<ThemeProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
