import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface EntryState {
  name: string;
  parent: string;
  path: string;
  type: string;
}

interface State {
  entrys: EntryState[];
  active: EntryState | null;
}

const initialState: State = {
  entrys: [],
  active: null,
};

// Define the initial state using that type

export const entrySlice = createSlice({
  name: 'entry',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    create: (state, action: PayloadAction<EntryState>) => {
      if (
        state.entrys.filter((e) => e.name === action.payload.name).length === 0
      ) {
        return {
          ...state,
          entrys: [...state.entrys, action.payload],
        };
        /* state.entrys.push(action.payload); */
      }
    },

    // Use the PayloadAction type to declare the contents of `action.payload`
  },
});

export const { create } = entrySlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default entrySlice.reducer;
