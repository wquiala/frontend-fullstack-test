import Box from '@mui/material/Box';
import { Button, MenuItem, TextField } from '@mui/material';
import { UserForm } from '../hooks/useForm';
import { FormEvent } from 'react';
import { fileSystemEntry } from '../api/file-system-entry';
import { useParams } from 'react-router-dom';

interface FormData {
  name: string;
  type: string;
}

export const CreateEntry = () => {
  const { id } = useParams();
  const { handleOnchange, formData } = UserForm<FormData>({
    name: '',
    type: '',
  });
  console.log(id);
  const types = ['folder', 'file'];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fileSystemEntry
      .create({
        name: formData.name,
        type: formData.type,
        parent: id ? id : '/',
      })
      .then((e) => console.log(e))
      .catch((er) => {
        console.log(er),
          console.log({
            name: formData.name,
            type: formData.type,
            parent: '6509d551977edaed6770f23c',
          });
      });
  };
  return (
    <Box
      onSubmit={handleSubmit}
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        mt: 10,
      }}
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
  );
};
