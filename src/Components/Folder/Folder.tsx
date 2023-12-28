import FolderIcon from '@mui/icons-material/Folder';
import {
  Grid,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ContentCopy, ContentCut, Delete } from '@mui/icons-material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { deleteFile } from '@/redux/actions';
import { activeEntry } from '@/redux/slices/entrySlice';

interface IFolderProps {
  name: string;
  id: string;
}

const ITEM_HEIGHT = 48;

export const Folder: React.FC<IFolderProps> = ({ name, id }) => {
  const dispatch = useAppDispatch();
  //const navigation = useNavigation();

  const navigate = useNavigate();
  const selectactiveEntry = useAppSelector((e) => e.entryRedure.activeEntry);

  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDelete = () => {
    dispatch(deleteFile(id));
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleSelect = () => {
    dispatch(activeEntry(id));
  };

  //const handleOpenFolder = () => {};
  /*   const handleDoubleClick = () => {};
   */

  return (
    <Grid item width={'250px'}>
      <ListItemButton
        sx={{
          padding: '8px',
          borderRadius: 3,
          justifyContent: 'space-between',
          backgroundColor: '#e8eaed',

          maxHeight: 48,
        }}
        onDoubleClick={() => navigate(`/${id}`)}
        style={
          selectactiveEntry?._id === id ? { backgroundColor: '#c2e7ff' } : {}
        }
        onClick={handleSelect}
      >
        <ListItemIcon sx={{ minWidth: 20, marginRight: 2 }}>
          <FolderIcon />
        </ListItemIcon>
        <ListItemText
          sx={{ flexFlow: 1 }}
          primary={
            <Typography
              overflow={'hidden'}
              textOverflow={'ellipsis'}
              whiteSpace={'nowrap'}
            >
              {name}
            </Typography>
          }
        />
        <IconButton
          sx={{ padding: 0 }}
          aria-label="more"
          id="long-button"
          aria-controls={openMenu ? 'long-menu' : undefined}
          aria-expanded={openMenu ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            'aria-labelledby': 'long-button',
          }}
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handleCloseMenu}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '20ch',
            },
          }}
        >
          <MenuItem>
            <ListItemIcon>
              <ContentCut fontSize="small" />
            </ListItemIcon>
            <ListItemText>Cut</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <ContentCopy fontSize="small" />
            </ListItemIcon>
            <ListItemText>Copy</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleDelete}>
            <ListItemIcon>
              <Delete fontSize="small" />
            </ListItemIcon>
            <ListItemText>Delete</ListItemText>
          </MenuItem>
        </Menu>
      </ListItemButton>
    </Grid>
  );
};
