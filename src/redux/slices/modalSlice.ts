import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface State {
  openMenu: boolean;
  openDrawer: boolean;
}
const initialState: State = {
  openMenu: false,
  openDrawer: true,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    menu: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        openMenu: action.payload,
      };
    },
    drawer: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        openDrawer: action.payload,
      };
    },
  },
});
export const { drawer, menu } = modalSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default modalSlice.reducer;
