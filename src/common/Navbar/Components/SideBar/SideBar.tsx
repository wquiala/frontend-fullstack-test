import {
  HomeOutlined,
  DesktopWindowsOutlined,
  LanOutlined,
} from '@mui/icons-material';

import LanIcon from '@mui/icons-material/Lan';
import HomeIcon from '@mui/icons-material/Home';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import { Grid, List, ListItemButton, ListItemText } from '@mui/material';
import React, { useState } from 'react';

interface ISideBarProps {
  children?: React.ReactNode;
}

const SideBar: React.FC<ISideBarProps> = () => {
  const [select, setSelect] = useState('');
  const handleListItemClick = (index: string) => {
    setSelect(index);
  };
  return (
    <List>
      <Grid container direction="column" width={'240px'} gap={0.1}>
        <Grid item>
          <ListItemButton
            sx={{ height: '36px', borderRadius: 5 }}
            style={
              select === 'Página principal'
                ? { backgroundColor: '#C2E7FF' }
                : {}
            }
            onClick={() => handleListItemClick('Página principal')}
          >
            {select != 'Página principal' ? <HomeOutlined /> : <HomeIcon />}
            <ListItemText sx={{ ml: 2 }}>Página principal</ListItemText>
          </ListItemButton>
        </Grid>
        <Grid item>
          <ListItemButton
            sx={{ height: '36px', borderRadius: 5 }}
            style={select === 'Mi unidad' ? { backgroundColor: '#C2E7FF' } : {}}
            onClick={() => handleListItemClick('Mi unidad')}
          >
            {select != 'Mi unidad' ? (
              <DesktopWindowsOutlined />
            ) : (
              <DesktopWindowsIcon />
            )}
            <ListItemText sx={{ ml: 2 }}>Mi unidad</ListItemText>
          </ListItemButton>
        </Grid>
        <Grid item>
          <ListItemButton
            sx={{ height: '36px', borderRadius: 5 }}
            style={
              select === 'Ordenadores' ? { backgroundColor: '#C2E7FF' } : {}
            }
            onClick={() => handleListItemClick('Ordenadores')}
          >
            {select != 'Ordenadores' ? <LanOutlined /> : <LanIcon />}

            <ListItemText sx={{ ml: 2 }}>Ordenadores</ListItemText>
          </ListItemButton>
        </Grid>
      </Grid>
    </List>
  );
};

export default SideBar;
