import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  Modal,
  TextField,
} from '@mui/material';
import { useParams } from 'react-router-dom';

import { FormEvent, useEffect, useState } from 'react';
import { fileSystemEntry } from '../api/file-system-entry';
import { Folder } from '../Components/Folder';
import CircularProgress from '@mui/material/CircularProgress';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import { UserForm } from '../hooks/useForm';

export interface FolderI {
  name: string;
  path: string;
  parent: string;
  _id: string;
  __v: number;
}

interface FormData {
  name: string;
  type: string;
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

  '& .MuiTextField-root': { m: 1, width: '25ch' },
  mt: 10,
};

export const Index = () => {
  const handleClose = () => setOpen(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const [open, setOpen] = useState(false);
  const { handleOnchange, formData } = UserForm<FormData>({
    name: '',
    type: '',
  });

  const { parent } = useParams();

  const [allfolder, setAllFolder] = useState<FolderI[]>();
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    !parent
      ? fileSystemEntry
          .getAll()

          .then((r) => {
            setLoading(false);
            setAllFolder(r.data);
          })
          .catch((e) => console.log(e))
      : fileSystemEntry
          .getEntryFindChild({ parent })

          .then((r) => {
            setLoading(false);
            setAllFolder(r.data);
          })
          .catch((e) => {
            console.log(e);
          });
  }, [parent]);

  const types = ['folder', 'file'];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fileSystemEntry
      .create({
        name: formData.name,
        type: formData.type,
        parent: parent ? parent : '/',
      })
      .then((e) => {
        setAllFolder([e.data, ...allfolder!.map((e) => e)]);
      })
      .catch((er) => console.log(er)),
      handleClose();
  };

  return (
    <Container sx={{ mt: 9 }} maxWidth="xl">
      <Grid container direction={'row'}>
        {loading ? (
          <CircularProgress />
        ) : (
          allfolder?.map((e) => (
            <Grid item key={e._id}>
              <Folder name={e.name} key={e._id} id={e._id} />
            </Grid>
          ))
        )}
      </Grid>
      <Grid container>
        <Grid item>
          <Fab
            color="primary"
            aria-label="add"
            onClick={handleOpen}
            /*  id ? navigate(`/${id}/create`) : navigate(`/create`) */
          >
            <AddIcon />
          </Fab>
          <Fab color="secondary" aria-label="edit">
            <EditIcon />
          </Fab>
          <Fab variant="extended">
            <NavigationIcon sx={{ mr: 1 }} />
            Navigate
          </Fab>
          <Fab disabled aria-label="like">
            <FavoriteIcon />
          </Fab>
        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          onSubmit={handleSubmit}
          component="form"
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              required
              id="outlined-required"
              label="name"
              name="name"
              value={formData.name}
              onChange={handleOnchange}
            />
            <TextField
              id="outlined-select-currency"
              select
              label="Select"
              helperText="Please select your type"
              name="type"
              value={formData.type}
              onChange={handleOnchange}
            >
              {types.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <Button type="submit">Crear</Button>
          </div>
          {/*  <div>
        <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          disabled
          id="filled-disabled"
          label="Disabled"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
        <TextField
          id="filled-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
        />
        <TextField
          id="filled-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="filled"
        />
      </div>
      <div>
        <TextField
          required
          id="standard-required"
          label="Required"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          disabled
          id="standard-disabled"
          label="Disabled"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
        <TextField
          id="standard-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="standard"
        />
        <TextField
          id="standard-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          variant="standard"
        />
        <TextField
          id="standard-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="standard"
        />
      </div> */}
        </Box>
      </Modal>
    </Container>
  );
};
