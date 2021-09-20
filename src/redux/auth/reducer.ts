import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginUserToWebSite, logoutUserFromWebSite } from './action';
import { PURGE } from 'redux-persist';

export interface AuthStateData {
  isAuth: boolean;
}

export interface AuthState {
  data: AuthStateData;
  pending: boolean;
  error: boolean;
}

const initialState: AuthState = {
  data: { isAuth: false },
  pending: false,
  error: false,
};

export const counterSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUserToWebSite.pending, (state) => {
        state.pending = true;
      })
      .addCase(loginUserToWebSite.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.data.isAuth = payload.logged;
      })
      .addCase(loginUserToWebSite.rejected, (state) => {
        state.pending = false;
        state.error = true;
        state.data.isAuth = false;
      });

    builder
      .addCase(logoutUserFromWebSite.pending, (state) => {
        state.pending = true;
      })
      .addCase(logoutUserFromWebSite.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.data.isAuth = payload.logged;
      })
      .addCase(logoutUserFromWebSite.rejected, (state) => {
        return initialState;
      });

    builder.addCase(PURGE, (state) => {
      return initialState;
    });
  },
});

export default counterSlice.reducer;
