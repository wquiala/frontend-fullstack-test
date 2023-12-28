import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface State {
  open: boolean;
}
const initialState: State = {
  open: true,
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    open: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        open: action.payload,
      };
    },
  },
});
export const { open } = menuSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default menuSlice.reducer;
