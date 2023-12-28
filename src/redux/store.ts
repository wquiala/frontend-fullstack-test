import { configureStore } from '@reduxjs/toolkit';
import { entrySlice } from './slices/entrySlice';
import { modalSlice } from './slices/modalSlice';

export const store = configureStore({
  reducer: {
    entryRedure: entrySlice.reducer,
    modalReducer: modalSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
