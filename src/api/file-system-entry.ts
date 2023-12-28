import { instance } from './base.api';

export const endpoint = 'file-system-entry';
export const endpointUploadFile = 'file-system-entry/file/upload';

export const fileSystemEntry = {
  getAll: function () {
    return instance.get(endpoint, {
      params: {},
    });
  },
  getById: function ({ id }: { id: string | undefined }) {
    return instance.get(`${endpoint}/${id}`);
  },

  getEntryFindChild: function ({ parent }: { parent: string | undefined }) {
    return instance.get(`${endpoint}/entrychild/${parent}`);
  },

  create: function ({
    name,
    parent,
    type,
  }: {
    name: string;
    parent: string;
    type: string;
  }) {
    return instance.post(endpoint, {
      name,
      parent,
      type,
    });
  },

  uploadFile: function ({
    parent,
    file,
  }: {
    parent: string;
    file: File | Blob;
  }) {
    const formData = new FormData();

    formData.append('file', file);
    formData.append('parent', parent);
    return instance.post(endpointUploadFile, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },

  delete: function ({ id }: { id: string }) {
    return instance.delete(`${endpoint}/${id}`);
  },
};
