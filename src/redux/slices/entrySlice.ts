import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EntryI } from '../../pages/index';

// Define a type for the slice state

interface State {
  entrys: EntryI[];
  active: EntryI | null;
  activeEntry: EntryI | null;
}

const initialState: State = {
  entrys: [],
  active: null,
  activeEntry: null,
};

// Define the initial state using that type

export const entrySlice = createSlice({
  name: 'entry',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    create: (state, action: PayloadAction<EntryI[]>) => {
      return {
        ...state,
        entrys: [...action.payload],
      };
      /* state.entrys.push(action.payload); */
    },
    activeParent: (state, action: PayloadAction<EntryI>) => {
      return {
        ...state,
        active: action.payload,
      };
    },
    getAllEntrys: (state, action: PayloadAction<EntryI[]>) => {
      return {
        ...state,
        entrys: [...action.payload],
      };
    },
    deleteEntry: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        entrys: [...state.entrys.filter((e) => e._id != action.payload)],
      };
    },
    activeEntry: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        activeEntry: state.entrys.find((e) => e._id === action.payload)!,
      };
    },

    // Use the PayloadAction type to declare the contents of `action.payload`
  },
});

export const { deleteEntry, create, activeParent, getAllEntrys, activeEntry } =
  entrySlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default entrySlice.reducer;
2;
