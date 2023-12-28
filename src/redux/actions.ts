import { EntryI } from '@/models';
import { fileSystemEntry } from '../api/file-system-entry';
import { useAppDispatch } from './hooks';
import {
  activeParent,
  create,
  deleteEntry,
  getAllEntrys,
} from './slices/entrySlice';

export const createFolder = (folder: EntryI, content: EntryI[]) => {
  return (dispatch = useAppDispatch()) => {
    fileSystemEntry
      .create({
        name: folder.name,
        type: folder.type,
        parent: folder.parent ? folder.parent : '/',
      })
      .then((e) => {
        dispatch(create([...content, e.data]));
      })
      .catch((er) => console.log(er));
  };
};

export const uploadFile = (file: File, content: EntryI[], parent?: string) => {
  return (dispatch = useAppDispatch()) => {
    fileSystemEntry
      .uploadFile({ parent: parent ? parent : '/', file })
      .then((e) => {
        dispatch(create([...content, e.data]));
      })
      .catch((e) => console.log(e));
  };
};
export const activeParentA = (parent: EntryI) => {
  return (dispatch = useAppDispatch()) => {
    dispatch(activeParent(parent));
  };
};

export const getAllEntrysA = (data: EntryI[]) => {
  return (dispatch = useAppDispatch()) => {
    dispatch(getAllEntrys(data));
  };
};

export const deleteFile = (id: string) => {
  return (dispatch = useAppDispatch()) => {
    fileSystemEntry
      .delete({ id })
      .then((e) => {
        console.log(e.data);
        dispatch(deleteEntry(id));
      })
      .catch((e) => console.log(e));
  };
};
