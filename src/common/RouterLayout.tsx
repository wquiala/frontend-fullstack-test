import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { NavBar } from './Navbar/NavBar';
import SideBar from './Navbar/Components/SideBar';
import { ButtomNew } from './Navbar';

export const RouterLayout = () => {
  return (
    <Box sx={{ backgroundColor: '#f7f9fc' }}>
      <NavBar />

      <Box display="flex">
        <Box width={'256'} height={'90vh'} ml={'10px'}>
          <ButtomNew />
          <SideBar />
        </Box>
        <Box width={'100%'} sx={{ backgroundColor: 'white', borderRadius: 5 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};
