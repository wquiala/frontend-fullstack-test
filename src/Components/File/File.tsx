import { deleteFile } from '@/redux/actions';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { activeEntry } from '@/redux/slices/entrySlice';
import { ContentCut, ContentCopy, Delete } from '@mui/icons-material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  CardContent,
  Grid,
  CardMedia,
  Typography,
  ListItemButton,
} from '@mui/material';
import React, { useState } from 'react';

interface IFileProps {
  name: string;
  secureUrl: string;
  id: string;
}
const ITEM_HEIGHT = 48;

export const File: React.FC<IFileProps> = ({ name, secureUrl, id }) => {
  const selectactiveEntry = useAppSelector((e) => e.entryRedure.activeEntry);

  const dispatch = useAppDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDelete = () => {
    dispatch(deleteFile(id));
    setAnchorEl(null);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleSelect = () => {
    dispatch(activeEntry(id));
    console.log(name);
  };

  return (
    <Grid item width={'255px'}>
      <ListItemButton
        sx={{
          borderRadius: 3,
          width: '250px',
          height: '250px',
          padding: '2px',
          backgroundColor: '#f7f9fc',
        }}
        onClick={handleSelect}
      >
        <Card
          style={
            selectactiveEntry?._id === id ? { backgroundColor: '#C2E7FF' } : {}
          }
          sx={{
            backgroundColor: '#f7f9fc',

            boxShadow: 'none',
            padding: '4px',
            maxWidth: 248,
            maxHeight: 248,
            borderRadius: 3,
          }}
        >
          <CardHeader
            sx={{ padding: '4px' }}
            avatar={
              <Avatar
                sx={{ width: 24, height: 24 }}
                variant="square"
                src={secureUrl}
              />
            }
            action={
              <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={openMenu ? 'long-menu' : undefined}
                aria-expanded={openMenu ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MoreVertIcon sx={{ width: 20, height: 20 }} />
              </IconButton>
            }
            title={
              <Typography
                whiteSpace={'nowrap'}
                textOverflow={'ellipsis'}
                maxHeight={'40px'}
                maxWidth={'160px'}
                overflow={'hidden'}
              >
                {name}
              </Typography>
            }
          />

          <CardContent sx={{ padding: 0, height: 193, marginTop: 1 }}>
            {
              <CardMedia
                component="img"
                image={secureUrl}
                sx={{ width: '100%', height: 193 }}
              />
            }
          </CardContent>
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
        </Card>
      </ListItemButton>
    </Grid>
  );
};
