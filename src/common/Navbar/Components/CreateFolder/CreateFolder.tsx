import { UserForm } from '@/hooks/useForm';
import { createFolder } from '@/redux/actions';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { Box, Button, Modal, TextField } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';

interface ICreateFolderProps {
  open: boolean;
  handleCloseModal: () => void;
}

interface FormData {
  name: string;
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

const CreateFolder: React.FC<ICreateFolderProps> = ({
  handleCloseModal,
  open,
}) => {
  const dispatch = useAppDispatch();
  const { parent } = useParams();

  const selectContentFolder = useAppSelector((e) => e.entryRedure.entrys);

  const { handleOnchange, formData } = UserForm<FormData>({
    name: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(
      createFolder(
        {
          name: formData.name,
          parent: parent ? parent : '/',
          type: 'folder',
        },
        selectContentFolder,
      ),
    );
    handleCloseModal();
  };

  return (
    <Modal
      open={open}
      onClose={handleCloseModal}
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

          <Button type="submit">Crear</Button>
        </div>
      </Box>
    </Modal>
  );
};

export default CreateFolder;
