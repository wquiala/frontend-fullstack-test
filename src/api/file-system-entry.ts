import { instance } from './base.api';

export const endpoint = 'file-system-entry';

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
};
