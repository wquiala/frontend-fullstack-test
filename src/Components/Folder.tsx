import FolderIcon from '@mui/icons-material/Folder';
import { Box, Button, Grid, Modal, Stack, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { fileSystemEntry } from '../api/file-system-entry';
import { useNavigate } from 'react-router-dom';

interface FolderProps {
  name: string;
  id: string;
}

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const Folder = ({ name, id }: FolderProps) => {
  //const navigation = useNavigation();
  const [folder, setFolder] = useState({
    name: '',
    path: '',
    parent: '',
    type: '',
  });

  const navigate = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fileSystemEntry
      .getById({ id })
      .then((r) => {
        setFolder(r.data);
      })
      .catch((e) => console.log(e));
  }, [id]);

  //const handleOpenFolder = () => {};
  /*   const handleDoubleClick = () => {};
   */ return (
    <Grid container>
      <Grid item>
        <Stack>
          <Button
            onClick={() => navigate(`/${id}`)}
            /*             onDoubleClick={handleDoubleClick}
             */
          >
            <FolderIcon style={{ fontSize: '100px' }} />
            <Typography>{name}</Typography>
          </Button>
        </Stack>
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {folder.name}
          </Typography>
          <Typography id="folder path" sx={{ mt: 2 }}>
            {folder.path}
          </Typography>
        </Box>
      </Modal>
    </Grid>
  );
};
