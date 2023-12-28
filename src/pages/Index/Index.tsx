import { Folder, File } from '@/Components';
import { fileSystemEntry } from '@/api/file-system-entry';
import { activeParentA, getAllEntrysA } from '@/redux/actions';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { Box, CircularProgress, Grid, Divider } from '@mui/material';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Index = () => {
  const { parent } = useParams();

  const dispatch = useAppDispatch();

  const data = useAppSelector((e) => e.entryRedure.entrys);
  const folders = data.filter((e) => e.type === 'folder');
  const files = data.filter((e) => e.type !== 'folder');

  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    !parent
      ? fileSystemEntry
          .getAll()

          .then((r) => {
            setLoading(false);
            dispatch(
              activeParentA({
                name: 'filesystem',
                type: 'folder',
                parent: '/',
              }),
            );

            dispatch(getAllEntrysA(r.data));
          })
          .catch((e) => console.log(e))
      : fileSystemEntry
          .getEntryFindChild({ parent })

          .then((r) => {
            setLoading(false);
            dispatch(getAllEntrysA(r.data));
            dispatch(activeParentA({ ...r.data, parent }));
          })
          .catch((e) => {
            console.log(e);
          });
  }, [parent, dispatch]);
  return (
    <Box sx={{ mt: 3, ml: 3, mr: 3 }}>
      {loading ? (
        <CircularProgress />
      ) : (
        <Box>
          Carpetas
          <Grid
            marginTop={5}
            container
            spacing={1}
            gap={1}
            padding={'0px'}
            alignItems={'center'}
          >
            {folders.length === 0 ? (
              <Grid item xs={12}>
                No hay carpetas que mostrar
              </Grid>
            ) : (
              folders.map((e) => (
                <Folder key={e._id} name={e.name} id={e._id!} />
              ))
            )}
          </Grid>
          <Divider sx={{ mt: 4, mb: 4 }} />
          Archivos
          <Grid
            marginTop={5}
            container
            spacing={1}
            gap={1}
            padding={'0px'}
            alignItems={'center'}
          >
            {files.length === 0 ? (
              <Grid item>No hay ficheros que mostrar</Grid>
            ) : (
              files.map((e) => (
                <File name={e.name} secureUrl={e.secureUrl!} id={e._id!} />
              ))
            )}
          </Grid>
        </Box>
      )}
    </Box>
  );
};
