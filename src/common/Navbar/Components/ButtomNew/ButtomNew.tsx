import AddIcon from '@mui/icons-material/Add';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import {
  Box,
  Button,
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Paper,
  styled,
} from '@mui/material';
import React, { ChangeEvent, useState } from 'react';
import { CreateFolder } from '../CreateFolder';
import { uploadFile } from '@/redux/actions';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useParams } from 'react-router-dom';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});
interface IButtomNewProps {
  children?: React.ReactNode;
}

export const ButtomNew: React.FC<IButtomNewProps> = () => {
  const dispatch = useAppDispatch();
  const { parent } = useParams();
  const selectContentFolder = useAppSelector((e) => e.entryRedure.entrys);
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const [open, setOpen] = useState(false);
  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => setOpen(false);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleUploadFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      dispatch(uploadFile(file, selectContentFolder, parent));
    }
    handleClose();
  };

  return (
    <Box sx={{ width: '256px', height: '80px', padding: '8px 16px 16px' }}>
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        sx={{ width: '114px', height: '56px', borderRadius: '15px' }}
        id="basic-button"
        aria-controls={openMenu ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openMenu ? 'true' : undefined}
        onClick={handleOpenMenu}
      >
        Nuevo
      </Button>
      <Menu
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={() => handleClose()}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Paper sx={{ width: 250, maxWidth: '100%' }}>
          <MenuList>
            <MenuItem onClick={handleOpenModal}>
              <ListItemIcon>
                <CreateNewFolderIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Create new Folder" />
            </MenuItem>
            <Divider />
            <MenuItem>
              <Button
                fullWidth
                component="label"
                variant="outlined"
                startIcon={<CloudUploadIcon />}
              >
                Upload file
                <VisuallyHiddenInput type="file" onChange={handleUploadFile} />
              </Button>
            </MenuItem>
            <MenuItem /* onClick={handleUploadFolder} */>
              <Button
                fullWidth
                component="label"
                variant="outlined"
                startIcon={<CloudUploadIcon />}
              >
                Upload folder
                <VisuallyHiddenInput type="file" />
              </Button>
            </MenuItem>
          </MenuList>
        </Paper>
      </Menu>
      <CreateFolder open={open} handleCloseModal={handleCloseModal} />
    </Box>
  );
};
