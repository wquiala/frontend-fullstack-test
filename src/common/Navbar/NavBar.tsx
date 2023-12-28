import Box from '@mui/material/Box';

import { deepPurple } from '@mui/material/colors';
import logo from '../../assets/logo.webp';

import AppsIcon from '@mui/icons-material/Apps';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import TuneIcon from '@mui/icons-material/Tune';
import {
  Avatar,
  IconButton,
  InputBase,
  Stack,
  Typography,
} from '@mui/material';

/* function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
} */

export const NavBar = () => {
  /*   const [openMenu, setOpenMenu] = React.useState(false);
   */

  /*   const handleUploadFolder = () => {
    console.log('Funcion para subir carpetas');
    handleClose();
  }; */

  const logoSpace = '260px';

  return (
    <Box
      sx={{
        padding: '8px',

        flexGrow: 1,
      }}
      display="flex"
      height="64px"
    >
      <Box sx={{ width: '238px' }} minWidth={logoSpace}>
        <Stack direction={'row'} padding={'0px 0px 0px 12px'}>
          <img
            src={logo}
            style={{
              width: '44px',
              height: '40',
              margin: '0px 0px 4px',
              padding: '0px 4px 0px 0px',
            }}
          />
          <Typography
            component={'span'}
            sx={{
              padding: '4px 4px 10px 4px',
              textAlign: 'center',
              fontSize: 20,
            }}
          >
            Drive
          </Typography>
        </Stack>
      </Box>
      <Box flexGrow={1}>
        <Box
          component="form"
          sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',

            borderRadius: 6,
            maxWidth: '722px',
            minWidth: '500px',
            backgroundColor: 'white',
          }}
        >
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Buscar en Drive"
            inputProps={{ 'aria-label': 'search google maps' }}
          />
          <IconButton sx={{ p: '10px' }} aria-label="menu">
            <TuneIcon />
          </IconButton>
        </Box>
      </Box>
      <IconButton>
        <DownloadDoneIcon />
      </IconButton>
      <IconButton>
        <HelpOutlineIcon />
      </IconButton>
      <IconButton>
        <SettingsIcon />
      </IconButton>
      <IconButton>
        <AppsIcon />
      </IconButton>
      <IconButton>
        <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
      </IconButton>
    </Box>
  );
};
